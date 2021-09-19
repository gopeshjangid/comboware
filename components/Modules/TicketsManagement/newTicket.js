import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AddCircleOutline } from "@material-ui/icons";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, IconButton, Box, TextareaAutosize } from "@material-ui/core";
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
function Server({ serverRequest, getWorkSpaceDetails }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [server, setServer] = useState({
    form: {
      userId: reduxState?.user?.profile?.id,
    },
    error: {
      network_name: false,
      user_name: false,
      password: false,
    },
  });
  const router = useRouter();

  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  useEffect(() => {
    if (reduxState?.workspace?.message || reduxState?.workspace?.error) {
      setMessage({
        text: reduxState?.workspace?.message || reduxState?.workspace?.error,
        type: reduxState?.workspace?.error ? "error" : "success",
      });
      setSubmitted(true);
      manageMessage();
    }
    return () => {};
  }, [reduxState?.workspace?.message]);

  useEffect(() => {
    setLoader(reduxState?.workspace?.loading);
    return () => {};
  }, [reduxState?.workspace?.loading]);

  useEffect(() => {
    if (!reduxState?.workspace?.server && isSubmitted) {
      getWorkSpaceDetails(Number(localStorage.getItem("userId")));
    } else {
      setServer({
        ...server,
        form: {
          ...server?.form,
          server: reduxState?.workspace?.server?.id
            ? { ...reduxState?.workspace?.server }
            : {
                ...server?.form?.server,
                server_name: reduxState?.user?.profile?.first_name + "Cloud",
              },
        },
      });
    }
    setSubmitted(false);
    return () => {};
  }, [reduxState?.workspace?.server]);

  useEffect(() => {
    getWorkSpaceDetails(Number(localStorage.getItem("userId")));
  }, []);

  const validateServerDetails = () => {
    if (!reduxState?.workspace?.domain?.id) {
      setMessage({ text: "Please create domain first", type: "error" });
      return false;
    } else if (!reduxState?.workspace?.project?.id) {
      setMessage({ text: "Please create project first", type: "error" });
      return false;
    } else {
      setMessage({ text: "", type: "success" });
      return true;
    }

    let _server = { ...server };
    _server.error = {
      ..._server.error,
      first_name: _server?.form?.first_name === "",
    };

    setServer(_server);

    return !Object.values(_server?.error).some((field) => field);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validateServerDetails()) {
      setLoader(true);
      serverRequest({
        ...server?.form,
        userId: localStorage.getItem("userId"),
      });
    }
  };

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setServer({
      ...server,
      form: {
        ...server?.form,
        server: { ...server?.form?.server, [name]: value },
      },
    });
  };

  console.log("reduxState=====", reduxState);

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
                        />
                      </GridItem>
                      <GridItem xs={6}>
                        <Select
                          name="category"
                          options={[]}
                          label="Category"
                        />
                      </GridItem>
                      <GridItem xs={6}>
                        <Select
                          name="sub_category"
                          options={[]}
                          label="Sub Category"
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
                <legend>Secondary Information</legend>
                <GridContainer spacing={2}>
                  <GridItem xs={12}>
                    <GridContainer spacing={3}>
                      <GridItem xs={12}>
                        <TextareaAutosize
                          minRows={5}
                          className={classes.textArea}
                          label="Note"
                          placeHolder="Enter note..."
                        />
                      </GridItem>
                      <GridItem xs={12}>
                        <label>Attachment</label>
                        <input type="file" />
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
  { serverRequest, getWorkSpaceDetails }
)(Server);
