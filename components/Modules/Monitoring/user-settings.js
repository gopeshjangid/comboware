import React, { useState, useEffect ,useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AddCircleOutline } from "@material-ui/icons";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, IconButton, Box } from "@material-ui/core";
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
//import {  } from "./redux/action";
import { createDomain } from "../Workspace/redux/action";
import {SKILLS} from  "./redux/constants";

function Settings({  }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const imageRef =useRef();
 
  const [isSubmitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);

  const manageMessage = () =>{
    setTimeout(()=>{
      setSubmitted(false);
    },4000)
  }


  useEffect(() => {
    setMessage(reduxState?.workspace?.message || reduxState?.workspace?.error);
    manageMessage();
    return () => {};
  }, [reduxState?.workspace?.message]);

  // useEffect(() => {
  //   getProfile(reduxState?.user?.profile?.id || localStorage.getItem("userId"));
  //   return () => {
  //   }
  // }, [])

  

  useEffect(() => {
    manageMessage();
    setMessage(reduxState?.user?.message || reduxState?.user?.error);
    return () => {};
  }, [reduxState?.user?.message]);

  useEffect(() => {
    setLoader(reduxState?.user?.loading);
    return () => {};
  }, [reduxState?.user?.loading]);


  const submitHandler = (e) => {
    e.preventDefault();
    if (profileValidation()) {
      setSubmitted(true);
      updateProfile({ ...profile?.form ,password:window?.btoa(profile?.form?.password), domain_id: domain?.id, skills ,project_id : project?.id ,userId: reduxState?.user?.profile?.id || 1 });
    }
  };


  const hideNotification = () =>{
    setSubmitted(false);
    setLoader(false);
  }

  const onFileUpload = (event) => {
    // Create an object of formData
    const formData = new FormData();
    let file = event.target.files[0];

    setSubmitted(true);
    setLoader(true);
    // Update the formData object
    formData.append("server_image", file, file?.name);
    updateSystemInfo(
      {
        query:"?userId=" +
          Number(localStorage.getItem("userId")),
        body: formData,
      },
      hideNotification
    );
  };


  const imageClick = () =>{
   if(imageRef.current){
    imageRef.current.click();
   }
    
  }

  return (
    <React.Fragment>
      <Loader open={loader} />
      <Snackbar
        open={isSubmitted}
        type={reduxState?.workspace?.error ? "error" : "success"}
        message={message}
      />
    <GridContainer spacing={1}>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
           </Card>
        </GridItem>

        <GridItem xs={12}>
          <Card>
            <CardHeader>
              <Typography variant="h5">Personal Details</Typography>
            </CardHeader>
            <CardBody>
              <GridContainer spacing={3}>
                <GridItem xs={4}>
                  <TextField
                    name="first_name"
                    fullWidth
                    label="First Name"
                   
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    name="last_name"
                    label="Last Name"
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    label="Email"
                    disabled={true}
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    name="phone"
                    type="number"
                    label="Phone"
                    inputProps={{maxLength :10}}
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    disabled={true}
                   
                    name="user_name"
                    type="text"
                    label="UserName"
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    type="password"
                    autoComplete="new-password"
                    label="Password"
                    
                    name="password"
                    id="password"
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
       
        <GridItem xs={12}>
          <Card>
            <CardHeader>
              <Typography variant="h5">Company Details</Typography>
            </CardHeader>
            <CardBody>
              <GridContainer spacing={3}>
                <GridItem xs={4}>
                  <TextField
                    name="company_name"
                    fullWidth
                    label="Company Name"
                    
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    name="company_id"
                    label="Company Id"
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    name="company_address"
                    type="text"
                    label="Company Address"
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    name="company_phone"
                    type="number"
                    inputProps={{maxLength : 10}}
                    label="Company Phone"
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      
     
        <GridItem xs={12} sm={12} md={12} align="right">
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
          >
            Save Changes
          </Button>
        </GridItem>
      </GridContainer>
    </React.Fragment>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  {  }
)(Settings);
