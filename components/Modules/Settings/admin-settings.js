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
import { updateProfile ,getProfile,updateSystemInfo } from "./redux/action";
import { createDomain } from "../Workspace/redux/action";
import {SKILLS} from  "./redux/constants";

function Settings({ updateProfile, createDomain,updateSystemInfo, getProfile }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const defaultSkill = { skill_name: "", skill_level: "" };
  const [skills, setSkills] = useState([defaultSkill]);
  const [message, setMessage] = useState("");
  const imageRef =useRef();
  const [profile, setProfile] = useState({
    form: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      user_name: "",
      password: "",
      company_name : '',
      company_id : '',
      company_address : '',
      company_phone : ''
    },
    error: {
      first_name: false,
      user_name: false,
      password: false,
      company_name : false,
      company_address : false,
      company_phone : false
    },
  });

  const [domainModal, setDomainModal] = useState(false);
  const [domain, setDomain] = useState({ name: "", description: "" });
  const [isSubmitted, setSubmitted] = useState(false);
  const [project, setProject] = useState({ name: "Service", description: "xx" });
  const [loader, setLoader] = useState(false);

  const manageMessage = () =>{
    setTimeout(()=>{
      setSubmitted(false);
    },4000)
  }

  useEffect(() => {
    setLoader(reduxState?.workspace?.loading);
    if(reduxState?.workspace?.domain){
     setDomain({ ...reduxState?.workspace?.domain });
    }
    setDomainModal(false);
    return () => {};
  }, [reduxState?.workspace]);

  useEffect(() => {
    if(reduxState?.workspace?.project){
      setProject(reduxState?.workspace?.project)
    }
    return () => {};
  }, [reduxState?.workspace?.project]);

  useEffect(() => {
    setMessage(reduxState?.workspace?.message || reduxState?.workspace?.error);
    manageMessage();
    return () => {};
  }, [reduxState?.workspace?.message]);

  useEffect(() => {
    getProfile(reduxState?.user?.profile?.id || localStorage.getItem("userId"));
    return () => {
    }
  }, [])

  useEffect(() => {
    setProfile({...profile, form : {...profile?.form, ...reduxState?.user?.profile}})
    return () => {};
  }, [reduxState?.user?.profile]);

  useEffect(() => {
    manageMessage();
    setMessage(reduxState?.user?.message || reduxState?.user?.error);
    return () => {};
  }, [reduxState?.user?.message]);

  useEffect(() => {
    setLoader(reduxState?.user?.loading);
    return () => {};
  }, [reduxState?.user?.loading]);

  useEffect(() => {
    setSkills(reduxState?.user?.skills);
    console.log("skills====",reduxState?.user?.skills)
    return () => {};
  }, [reduxState?.user?.skills]);

  console.log("reduxState=====", reduxState);
  
  const addSkill = () => {
    let _skills = [...skills];
    _skills.push(defaultSkill);
    setSkills(_skills);
  };

  const profileValidation = () => {
    let _profile = { ...profile };
    _profile.error = {
      ..._profile.error,
      first_name: _profile?.form?.first_name === "",
    };
    _profile.error = {
      ..._profile.error,
      user_name: _profile?.form?.user_name === "",
    };
    setProfile(_profile);

    return !Object.values(_profile?.error).some((field) => field);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (profileValidation()) {
      setSubmitted(true);
      updateProfile({ ...profile?.form ,password:window?.btoa(profile?.form?.password), domain_id: domain?.id, skills ,project_id : project?.id ,userId: reduxState?.user?.profile?.id || 1 });
    }
  };

  const submitDomainHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    createDomain({ domain, project : {...project ,name : "Service"}, userId: reduxState?.user?.profile?.id || 1 });
  };

  const domainChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setDomain({ ...domain, [name]: value });
  };

  const projectChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProject({ ...project, [name]: value });
  };

  const profileChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProfile({ ...profile, form: { ...profile?.form, [name]: value } });
  };

  const skillHandler = (e ,itemIndex) => {

    
    let name = e.target.name;
    let value = e.target.value;

    console.log("name----",name ,value);
    console.log("eeeee" ,e)
    let _skills = [...skills];
    _skills = _skills?.map ((skill , index) => {
      if(itemIndex === index){
        skill[name]  = value;
      }
      return skill;
    })
    setSkills(_skills);
  };

  const hideNotification = () =>{
    setSubmitted(false);
    setLoader(false);
  }

  const onFileUpload = (event) => {
    // Create an object of formData
    const formData = new FormData();
    let file = event.target.files[0];

    console.log("file", file);
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
   console.log("imageRef" ,imageRef)
   if(imageRef.current){
    imageRef.current.click();
   }
    
  }

  return (
    <div>
      <Loader open={loader} />
      <Snackbar
        open={isSubmitted}
        type={reduxState?.workspace?.error ? "error" : "success"}
        message={message}
      />
      <Modal
        title="Create Domain and Project"
        isOpen={domainModal}
        onSubmit={submitDomainHandler}
        onChange={(flag) => setDomainModal(flag)}
        submitText="Save Domain and Project"
      >
        <GridContainer spacing={2}>
          <GridItem xs={6}>
            <TextField
              onChange={domainChangeHandler}
              name="name"
              fullWidth
              label="Domain Name"
            />
          </GridItem>
          <GridItem xs={6}>
            <TextField
              onChange={domainChangeHandler}
              name="description"
              fullWidth
              label="Domain Description"
            />
          </GridItem>
          <GridItem xs={6}>
            <TextField
              name="name"
              fullWidth
              label="Project Name"
              value="Service"
              isDisabled
            />
          </GridItem>
          <GridItem xs={6}>
            <TextField
              onChange={projectChangeHandler}
              name="description"
              fullWidth
              label="Project Description"
            />
          </GridItem>
        </GridContainer>
      </Modal>
      <Card>
            <CardHeader>
              <Typography variant="h5">Project and domain details</Typography>
            </CardHeader>
            <CardBody>
      <GridContainer spacing={1}>
        <GridItem xs={12} sm={12} md={12}>
        <fieldset
                className={classes.boxModal}
                borderColor="#e7e9f0"
                border={0.5}
              >
                <legend>Resource Billing Quotes</legend>
                 <GridContainer spacing={2}>
                    <GridItem container className={classes.gridRow} xs={6}>
                        <Select
                                style={{ width: "210px" }}
                                label={"Resource Type"}
                                name="resource_type"
                                onChange={(e) => skillHandler(e ,index)}
                                options={["CPU" ,"RAM" ,"VOLUME"]?.map(skill =>({label : skill ,value : skill}))}
                              />
                        
                    </GridItem>
                    <GridItem className={classes.gridRow} xs={6}>
                          <TextField
                          name="first_name"
                          fullWidth
                          label="Cost ($)"
                          value={profile?.form?.first_name}
                          error={profile?.error?.first_name}
                          type="number"
                          inputProps={{min : 0}}
                        />
                    </GridItem>
                    <GridItem container className={classes.gridRow} xs={6}>
                        <Select
                                style={{ width: "210px" }}
                                label={"Resource Type"}
                                name="resource_type"
                                onChange={(e) => skillHandler(e ,index)}
                                options={["CPU" ,"RAM" ,"VOLUME"]?.map(skill =>({label : skill ,value : skill}))}
                              />
                        
                    </GridItem>
                    <GridItem className={classes.gridRow} xs={6}>
                          <TextField
                          name="first_name"
                          fullWidth
                          label="Cost ($)"
                          value={profile?.form?.first_name}
                          error={profile?.error?.first_name}
                          type="number"
                          inputProps={{min : 0}}
                        />
                    </GridItem>
                    <GridItem container className={classes.gridRow} xs={6}>
                        <Select
                                style={{ width: "210px" }}
                                label={"Resource Type"}
                                name="resource_type"
                                onChange={(e) => skillHandler(e ,index)}
                                options={["CPU" ,"RAM" ,"VOLUME"]?.map(skill =>({label : skill ,value : skill}))}
                              />
                        
                    </GridItem>
                    <GridItem className={classes.gridRow} xs={6}>
                          <TextField
                          name="first_name"
                          fullWidth
                          label="Cost ($)"
                          value={profile?.form?.first_name}
                          error={profile?.error?.first_name}
                          type="number"
                          inputProps={{min : 0}}
                        />
                    </GridItem>
                
                
               
                    <GridItem xs={4}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setDomainModal(true)}
                      >
                        Create
                      </Button>
                    </GridItem>
                
              </GridContainer>
              </fieldset>
           
        </GridItem>

        <GridItem xs={12}>
         
              <GridContainer spacing={3}>
                <GridItem xs={4}>
                  <TextField
                    onChange={profileChangeHandler}
                    name="first_name"
                    fullWidth
                    label="First Name"
                    value={profile?.form?.first_name}
                    error={profile?.error?.first_name}
                    helperText={
                      profile?.error?.first_name && "Please enter first name"
                    }
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    onChange={profileChangeHandler}
                    name="last_name"
                    label="Last Name"
                    value={profile?.form?.last_name}
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    onChange={profileChangeHandler}
                    name="email"
                    type="email"
                    label="Email"
                    isDisabled
                    value={profile?.form?.email }
                    disabled={true}
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    onChange={profileChangeHandler}
                    name="phone"
                    type="number"
                    label="Phone"
                    inputProps={{maxLength :10}}
                    value={profile?.form?.phone }
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    onChange={profileChangeHandler}
                    disabled={true}
                    helperText={
                      profile?.form?.user_name?.error &&
                      "Please enter user name"
                    }
                    name="user_name"
                    type="text"
                    label="UserName"
                    value={profile?.form?.user_name }
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    type="password"
                    autoComplete="new-password"
                    label="Password"
                    helperText={
                      profile?.form?.password?.error && "Please enter password"
                    }
                    onChange={profileChangeHandler}
                    name="password"
                    id="password"
                  />
                </GridItem>
              </GridContainer>
           
        </GridItem>
       
        <GridItem xs={12}>
       
              <GridContainer spacing={3}>
                <GridItem xs={4}>
                  <TextField
                    onChange={profileChangeHandler}
                    name="company_name"
                    fullWidth
                    label="Company Name"
                    value={profile?.form?.company_name}
                    error={profile?.error?.company_name}
                    helperText={
                      profile?.error?.company_name && "Please enter name name"
                    }
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    onChange={profileChangeHandler}
                    name="company_id"
                    label="Company Id"
                    value={profile?.form?.company_id}
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    onChange={profileChangeHandler}
                    name="company_address"
                    type="text"
                    label="Company Address"
                    isDisabled
                    value={profile?.form?.company_address }
                    
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    onChange={profileChangeHandler}
                    name="company_phone"
                    type="number"
                    inputProps={{maxLength : 10}}
                    label="Company Phone"
                    value={profile?.form?.company_phone }
                  />
                </GridItem>
                <GridItem container justify='space-around' xs={6}>
                   <label>System image</label>
                  <img src={profile?.form?.system_image} width={300} height={250}  alt='system image' />
                </GridItem>
                <GridItem container justify='space-between' xs={2}>
                  <Button variant="contained" onClick={imageClick}>Upload New</Button>
                  <input
                    
                    onChange={onFileUpload}
                    name="system_image"
                    type="file"
                    ref={imageRef}
                    style={{display : 'none'}}
                  />
                </GridItem>
                
              </GridContainer>
            
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
  { createDomain, updateProfile , getProfile,updateSystemInfo }
)(Settings);
