import React, { useState, useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AddCircleOutline,
  Delete as DeleteIcon,
  FolderOpenOutlined,
  CameraAltOutlined,
  MessageOutlined,
} from "@material-ui/icons";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import {
  Typography,
  IconButton,
  Box,
  TextareaAutosize,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Link,
} from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextField from "../../CustomInput/TextField";
import styles from "./styles";
import Select from "../../Select";
import Button from "@material-ui/core/Button";
import Modal from "components/Modal";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import {
  getTicketDetails,
  addNewActivity,
  updateTicketDetails,
  getCategories,
  getSubCategories,
} from "./redux/action";
import {
 updateSystemInfo
} from "../Profile/redux/action";
import { useRouter } from "next/dist/client/router";
import { TICKET_STATUS_LIST, REPAIR_STATUS_LIST } from "./redux/constants";

function TicketDetails({
  getTicketDetails,
  updateTicketDetails,
  addNewActivity,
  getCategories,
  getSubCategories,
  updateSystemInfo
}) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCat, setSelectedSubCat] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [openModal, setModal] = useState(false);
  const [note, setNote] = useState(null);
  const [systemImage, setSystemImage] = useState(null);
  const [ticketDetails, setTicketDetails] = useState({
    form: {
      userId: reduxState?.user?.profile?.id,
      ticket_category: "",
      ticket_subcategory: "",
      ticket_subject: "",
      ticket_status: "",
      repair_status: "",
    },
    error: {
      network_name: false,
      user_name: false,
      password: false,
    },
  });
  const router = useRouter();

  const fileRef = useRef();
  console.log("reduxState", reduxState);
  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  useEffect(() => {
    setCategories(
      reduxState?.ticket?.categories?.map((cat) => {
        return {
          ...cat,
          label: cat?.category_name,
          value: cat?.id,
        };
      })
    );

    setSelectedCat(reduxState?.ticket?.ticketDetails?.ticket?.ticket_category);
    return () => {};
  }, [reduxState?.ticket?.categories]);

  useEffect(() => {
    setSubCategories([
      ...reduxState?.ticket?.subCategories?.map((cat) => {
        return {
          ...cat,
          label: cat?.subcategory_name,
          value: cat?.id,
        };
      }),
    ]);
    setSelectedSubCat(
      reduxState?.ticket?.ticketDetails?.ticket?.ticket_subcategory
    );
    return () => {};
  }, [reduxState?.ticket?.subCategories]);

  useEffect(() => {
    if (reduxState?.ticket?.message || reduxState?.ticket?.error) {
      setMessage({
        text: reduxState?.ticket?.message || reduxState?.ticket?.error,
        type: reduxState?.ticket?.error ? "error" : "success",
      });
      setSubmitted(true);
      manageMessage();
    }
    return () => {};
  }, [reduxState?.ticket?.message]);

  useEffect(() => {
    setLoader(reduxState?.ticket?.loading);
    return () => {};
  }, [reduxState?.ticket?.loading]);

  useEffect(() => {
    setTicketDetails({
      ...ticketDetails,
      form: { ...reduxState?.ticket?.ticketDetails },
    });
    if (
      reduxState?.ticket?.ticketDetails?.ticket?.ticket_subcategory &&
      subCategories.length === 0
    ) {
      getSubCategories(
        reduxState?.ticket?.ticketDetails?.ticket?.ticket_subcategory
      );
    }

    setNote(null);

    setSubmitted(false);
    return () => {};
  }, [reduxState?.ticket?.ticketDetails]);

  useEffect(() => {
    let ticketId = router?.query?.id;
    if (ticketId) {
      setSubmitted(true);
      getTicketDetails(ticketId, Number(localStorage.getItem("userId")));
      getCategories();
    }
  }, []);

  console.log("router", router);

  const validateServerDetails = () => {
    if (!ticketDetails?.form?.ticket?.ticket_subject) {
      setMessage({ text: "Please fill the title", type: "error" });
      return false;
    } else if (!ticketDetails?.form?.ticket?.ticket_category) {
      setMessage({ text: "Please select a category", type: "error" });
      return false;
    } else if (!ticketDetails?.form?.ticket?.ticket_subcategory) {
      setMessage({ text: "Please select a sub category", type: "error" });
      return false;
    } else {
      setMessage({ text: "", type: "success" });
      return true;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    let ticketNumber =
      ticketDetails?.form?.ticket?.ticket_number || router?.query?.id || 0;
    if (validateServerDetails()) {
      let qstr = `?userId=${Number(
        localStorage.getItem("userId")
      )}&ticketNumber=${ticketNumber}`;
      setLoader(true);
      updateTicketDetails(
        {
          ...ticketDetails?.form?.ticket,
          category_id : ticketDetails?.form?.ticket?.ticket_category,
          subcategory_id : ticketDetails?.form?.ticket?.ticket_subcategory
        },
        qstr
      );
    }
  };

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category_id") {
      getSubCategories(value);
    }
    setTicketDetails({
      ...ticketDetails,
      form: {
        ...ticketDetails?.form,
        ticket: {
          ...ticketDetails?.form?.ticket,
          [name]: value,
        },
      },
    });
  };

  const hideNotification = () => {
    setSubmitted(false);
    setLoader(false);
  };

  const onFileUpload = (event) => {
    // Create an object of formData
    const formData = new FormData();
    let file = event.target.files[0];

    console.log("file", file);
    setSubmitted(true);
    setLoader(true);
    // Update the formData object
    formData.append("image", file, file?.name);
    addNewActivity(
      {
        type: "image",
        query:
          "?ticketNumber=" +
          ticketDetails?.form?.ticket?.ticket_number +
          "&userId=" +
          Number(localStorage.getItem("userId")),
        body: formData,
      },
      hideNotification
    );
    fileRef?.current?.value === "";
  };

  const addActivityHandler = () => {
    if (note) {
      addNewActivity(
        {
          query:
            "?ticketNumber=" +
            ticketDetails?.form?.ticket?.ticket_number +
            "&userId=" +
            Number(localStorage.getItem("userId")),
          body: { activities: [note] },
        },
        hideNotification
      );
      setNote(null);
    }
  };

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }

  const submitSystemImageUplaod = (e) =>{
    const formData = new FormData();
    let file = event.target.files[0];
    formData.append(
      "server_image",
      file,
      file.name
    );

    setSystemImage(formData)
  }

  const submitSystemInfo = () => {
    
    setSubmitted(true);
    setLoader(true);
    updateSystemInfo({
      query:"?userId=" +
        Number(localStorage.getItem("userId")),
      body: systemImage,
    },()=>{
      setSubmitted(false);
      setLoader(false);
      setModal(false);
    });
  };

  console.log("ticketDetails=====", ticketDetails);
  console.log("note=====", note);
  const {
    form: { activities },
  } = ticketDetails;

  return (
    <div>
      <Loader open={loader} />
      <Snackbar
        open={isSubmitted}
        type={message?.type || "success"}
        message={message?.text}
      />
      <Modal
        title="Company System Info"
        isOpen={openModal}
        onSubmit={submitSystemInfo}
        onChange={(flag) => setModal(flag)}
        submitText="Save Domain and Project"
      >
        <GridContainer spacing={2}>
          <GridItem xs={6}>
            <Typography>System Image</Typography>
          </GridItem>
          <GridItem xs={6}>
            <TextField onChange={submitSystemImageUplaod} name="description" fullWidth type="file" />
          </GridItem>
        </GridContainer>
      </Modal>

      <Card className={classes.cardBox}>
        <CardHeader>
          <Typography variant="h5">Edit Ticket</Typography>
        </CardHeader>
        <CardBody>
          <GridContainer spacing={3}>
            <GridContainer item xs={9}>
              <GridItem container xs={12}>
                <Divider dark />
              </GridItem>

              <GridItem xs={6}>
                <fieldset
                  className={classes.boxModal}
                  borderColor="#e7e9f0"
                  border={0.5}
                  style={{height : '218px'}}
                >
                  <legend>Primary Information</legend>
                  <GridContainer spacing={2}>
                    <GridItem xs={12}>
                      <GridContainer spacing={3}>
                        <GridItem xs={12}>
                          <TextField
                            fullWidth
                            label="Title"
                            placeHolder="Enter the title"
                            onChange={changeHandler}
                            name="ticket_subject"
                            value={ticketDetails?.form?.ticket?.ticket_subject}
                          />
                        </GridItem>
                        <GridItem xs={6}>
                          <Select
                            name="ticket_category"
                            options={categories}
                            label="Category"
                            onChange={changeHandler}
                            value={ticketDetails?.form?.ticket?.ticket_category}
                          />
                        </GridItem>
                        <GridItem xs={6}>
                          <Select
                            name="ticket_subcategory"
                            options={subCategories}
                            label="Sub Category"
                            onChange={changeHandler}
                            value={
                              ticketDetails?.form?.ticket?.ticket_subcategory
                            }
                          />
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                </fieldset>
              </GridItem>
              <GridItem xs={6}>
                <fieldset
                  className={classes.boxModal}
                  borderColor="#e7e9f0"
                  border={0.5}
                >
                  <legend>Add New Activity</legend>
                  <GridContainer spacing={2}>
                    <GridItem xs={12}>
                      <GridContainer spacing={3}>
                        <GridItem xs={8}>
                          <TextareaAutosize
                            minRows={5}
                            className={classes.textArea}
                            label="Note"
                            placeHolder="Enter note..."
                            value={note?.content}
                            onChange={(e) =>
                              setNote({
                                ...note,
                                type: "TEXT",
                                content: e.target.value,
                              })
                            }
                          />
                        </GridItem>
                        <GridItem xs={4}>
                          <Button
                            onClick={addActivityHandler}
                            color="primary"
                            variant="outlined"
                          >
                            Add
                          </Button>
                        </GridItem>
                        <GridItem xs={12}>
                          <label>Attachment</label>&nbsp;&nbsp;
                          <TextField
                            ref={fileRef}
                            inputProps={{ accept: "image/*" }}
                            type="file"
                            onChange={onFileUpload}
                            type="file"
                          />
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                </fieldset>
              </GridItem>

              <GridItem xs={12}>
                <fieldset
                  className={classes.boxModal}
                  style={{ minHeight: "218px" }}
                >
                  <legend>Customer Information</legend>
                  <GridContainer spacing={2}>
                    <GridItem xs={12}>
                      <GridContainer spacing={3}>
                        <GridItem xs={5}>
                          <Typography variant="subtitle2">
                            Company Name
                          </Typography>
                        </GridItem>
                        <GridItem xs={7}>
                          <Typography
                            align="center"
                            color="textSecondary"
                            variant="subtitle2"
                          >
                            {ticketDetails?.form?.user?.company_name}
                          </Typography>
                        </GridItem>
                        <GridItem xs={5}>
                          <Typography variant="subtitle2">
                            Company Id
                          </Typography>
                        </GridItem>
                        <GridItem xs={7}>
                          <Typography
                            align="center"
                            color="textSecondary"
                            variant="subtitle2"
                          >
                            {ticketDetails?.form?.user?.company_id}
                          </Typography>
                        </GridItem>
                        <GridItem xs={5}>
                          <Typography variant="subtitle2">
                            Company Phone
                          </Typography>
                        </GridItem>
                        <GridItem xs={7}>
                          <Typography
                            align="center"
                            color="textSecondary"
                            variant="subtitle2"
                          >
                            {ticketDetails?.form?.user?.company_phone}
                          </Typography>
                        </GridItem>
                        <GridItem xs={5}>
                          <Typography variant="subtitle2">
                            System Image
                          </Typography>
                        </GridItem>
                        <GridItem xs={5}>
                          <img src={ticketDetails?.form?.user?.system_image} alt='system image'  />
                        </GridItem>
                        {
                          ticketDetails?.form?.ticket?.can_edit &&  <GridItem xs={2}>
                          <Button
                            onClick={() => setModal(true)}
                            variant="outlined"
                          >
                            Edit
                          </Button>
                        </GridItem>
                        }
                       
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                </fieldset>
              </GridItem>
              <GridItem xs={12}>
                <fieldset
                  className={classes.boxModal}
                  borderColor="#e7e9f0"
                  border={0.5}
                >
                  <legend>Activity History</legend>
                  <Box className={classes.activityBox}>
                    <List>
                      {activities?.map((activity, key) => (
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <DeleteIcon />
                            </IconButton>
                          }
                          key={"activity" + key}
                        >
                          <ListItemIcon>
                            {validURL(activity?.content) ? (
                              <FolderOpenOutlined />
                            ) : activity?.type === "IMAGE" ? (
                              <CameraAltOutlined />
                            ) : (
                              <MessageOutlined />
                            )}
                          </ListItemIcon>
                          <ListItemText
                            secondary={
                              activity?.type === "IMAGE" ||
                              validURL(activity?.content) ? (
                                <a
                                  target="__blank"
                                  component="button"
                                  variant="body2"
                                  href={activity?.content}
                                >
                                  {activity?.content}
                                </a>
                              ) : (
                                activity?.content
                              )
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </fieldset>
              </GridItem>
           
            </GridContainer>
            <GridContainer item xs={3}>
                <GridItem >
                  <Select
                    name="ticket_status"
                    options={TICKET_STATUS_LIST.map((status) => ({
                      label: status,
                      value: status,
                    }))}
                    label="Ticket Status"
                    fullWidth
                    onChange={changeHandler}
                    value={ticketDetails?.form?.ticket?.ticket_status}
                    style={{width :'200px',marginBottom : '20px',marginTop :'12px'}}
                  ></Select>
                    &nbsp;
                  <Select
                    name="repair_status"
                    options={REPAIR_STATUS_LIST.map((status) => ({
                      label: status,
                      value: status,
                    }))}
                    label="Repair Status"
                    fullWidth
                    onChange={changeHandler}
                    value={ticketDetails?.form?.ticket?.repair_status}
                    style={{width :'200px'}}
                  ></Select>
                   &nbsp;
                   <Typography variant="subtitle2" color="textSecondary"></Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Created
                  </Typography>
                  <Typography variant="subtitle2">
                    {ticketDetails?.form?.ticket?.ticket_date}
                  </Typography>
                   &nbsp;&nbsp;
                  <Typography variant="subtitle2" color="textSecondary">
                    Last Updated
                  </Typography>
                  <Typography variant="subtitle2">
                    {ticketDetails?.form?.ticket?.ticket_date}
                  </Typography>
                </GridItem>
              </GridContainer>
              
              <GridItem xs={10} align="right">
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  className={classes.submit}
                  onClick={() => router.push("/ticket")}
                >
                  Cancel
                </Button>
              </GridItem>
              <GridItem xs={2} align="center">
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={submitHandler}
                >
                  Update
                </Button>
              </GridItem>
          </GridContainer>
          
        </CardBody>
      </Card>
    </div>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  {
    getTicketDetails,
    getCategories,
    getSubCategories,
    addNewActivity,
    updateTicketDetails,
    updateSystemInfo
  }
)(TicketDetails);
