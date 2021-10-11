import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, IconButton, Box, TextareaAutosize , } from "@material-ui/core";
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
import { serverRequest, getWorkSpaceDetails } from "../Workspace/redux/action";
import { useRouter } from "next/dist/client/router";
import {createTicket ,addNewActivity, getCategories , getSubCategories} from "./redux/action";


function newTicket({ createTicket,addNewActivity, getCategories,getSubCategories }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [ticketDetails, setTicketDetails] = useState({
    form: {
      userId: reduxState?.user?.profile?.id,
      category_id : '',
      subcategory_id : '',
      ticket_subject : ''
    },
    error: {
      network_name: false,
      user_name: false,
      password: false,
    },
  });
  const router = useRouter();
  const [note, setNote] = useState(null);

  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const callBack = (status , message) => {
    manageMessage();

    if(status){
      setMessage({
        text: message,
        type: "success",
      });
    } else {
      setMessage({
        text: message,
        type: "error",
      });
    }
  };

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
    setCategories(reduxState?.ticket?.categories?.map(cat => {
      return  {
        ...cat,
        label : cat?.category_name,
        value : cat?.id
      }
    }));
    return () => {};
  }, [reduxState?.ticket?.categories]);

  useEffect(() => {
    setSubCategories([...reduxState?.ticket?.subCategories?.map(cat => {
      return  {
        ...cat,
        label : cat?.subcategory_name,
        value : cat?.id
      }
    })]);
    return () => {};
  }, [reduxState?.ticket?.subCategories]);

  useEffect(() => {
    if (!reduxState?.ticket?.server && isSubmitted) {
      getWorkSpaceDetails(Number(localStorage.getItem("userId")));
    } else {
      setTicketDetails({
       
      });
    }
    setSubmitted(false);
    return () => {};
  }, [reduxState?.ticket?.server]);

  useEffect(() => {
    getCategories();
  }, []);


  const validateServerDetails = () => {
    if (!ticketDetails?.form?.category_id) {
      setMessage({ text: "Please select a category", type: "error" });
      return false;
    } else if (!ticketDetails?.form?.subcategory_id) {
      setMessage({ text: "Please select sub category", type: "error" });
      return false;
    } else if (!ticketDetails?.form?.ticket_subject) {
      setMessage({ text: "Please fill enter field", type: "error" });
      return false;
    } else {
      setMessage({ text: "", type: "success" });
      return true;
    }

  };

  const hideNotification  = () =>{
    setSubmitted(false);
    setLoader(false);
    setMess
  }

  const activitySubmit = (ticketNumber) =>{
    let userId = Number(localStorage.getItem("userId"));
    let ticketId = 'CW-'+userId+'-'+ticketNumber
    if(image){
      addNewActivity({type : 'image' ,query : '?ticketNumber='+ticketId+"&userId="+userId ,body  : image},hideNotification);
    }

    if(note){
      addNewActivity({query : '?ticketNumber='+ticketId+"&userId="+userId ,body  : { activities:  [note] }},hideNotification);
      setNote(null);
    }

    router.push("/ticket");
   
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validateServerDetails()) {
      setLoader(true);
      createTicket({
        ...ticketDetails?.form,
        userId: Number(localStorage.getItem("userId")),
      },  activitySubmit ,callBack );
    }
  };

  const subCategoriesHandler = (id) => {
    if(id)
     getSubCategories(id)
  };

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if(name === 'category_id'){
      subCategoriesHandler(value);
    }
    setTicketDetails({
      ...ticketDetails,
      form: {
        ...ticketDetails?.form,
        [name]: value 
      },
    });
  };

  const onFileUpload = (event) => {
    
    // Create an object of formData
    const formData = new FormData();
    let file = event.target.files[0];

    console.log("file" ,file)
  
    // Update the formData object
    formData.append(
      "image",
      file,
      file.name
    );

    setImage(formData)
  
  };

  

  return (
    <div>
      <Loader open={loader} />
      <Snackbar
        open={isSubmitted}
        type={message?.type || "success"}
        message={message?.text}
      />
      <Card className={classes.cardBox}>
        <CardHeader>
          <Typography variant="h5">Create New Ticket</Typography>
        </CardHeader>
        <CardBody>
          <GridContainer spacing={1}>
            <GridItem xs={12}>
              <fieldset
                className={classes.boxModal}
                borderColor="#e7e9f0"
                border={0.5}
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
                        />
                      </GridItem>
                      <GridItem xs={6}>
                        <Select
                          name="category_id"
                          options={categories}
                          label="Category"
                          onChange={changeHandler}
                          value={ticketDetails?.form?.category_id}
                        />
                      </GridItem>
                      <GridItem xs={6}>
                        <Select
                          name="subcategory_id"
                          options={subCategories}
                          label="Sub Category"
                          onChange={changeHandler}
                          value={ticketDetails?.form?.subcategory_id}
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
                borderColor="#e7e9f0"
                border={0.5}
              >
                <legend>File Upload Area</legend>
                <GridContainer spacing={2}>
                  <GridItem xs={12}>
                    <GridContainer spacing={12}>
                      <GridItem xs={12}>
                        <label>Attachment</label> &nbsp;&nbsp;
                        <input onChange={onFileUpload}  type="file" />
                      </GridItem>
                    
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
                <legend>Note (optional)</legend>
                <GridContainer spacing={2}>
                  <GridItem xs={12}>
                    <GridContainer spacing={3}>
                      <GridItem xs={12}>
                        <TextareaAutosize
                          minRows={5}
                          className={classes.textArea}
                          label="Note"
                          placeHolder="Enter note..."
                          onChange={(e) => setNote({...note, type : 'TEXT' ,content : e.target.value})}
                          name='note'
                        />
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </fieldset>
            </GridItem>
          
          
            <GridItem
                xs={10}
                align="right"
              >
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  className={classes.submit}
                  onClick={() =>router.push("/ticket")}
                >
                  Cancel
                </Button>
              </GridItem>
              <GridItem
                xs={2}
                align="center"
              >
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={submitHandler}
                >
                  Create
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
  { getCategories, getSubCategories ,createTicket ,addNewActivity}
)(newTicket);
