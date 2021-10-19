import React, { useState, useEffect ,useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AddCircleOutline } from "@material-ui/icons";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, IconButton, Box  ,Paper} from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextField from "../../CustomInput/TextField";
import styles from "./styles";
import Select from "../../Select";
import Button from "components/CustomButtons";
import Modal from "components/Modal";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import { updateProfile ,getProfile,updateSystemInfo } from "./redux/action";
import { createDomain } from "../Workspace/redux/action";
import {SKILLS} from  "./redux/constants";

function Profile({ updateProfile, createDomain,updateSystemInfo, getProfile }) {
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
  const [environmentType, setEnvironmentType] = useState('FIXED');
  const [domain, setDomain] = useState({ name: "", description: "" });
  const [isSubmitted, setSubmitted] = useState(false);
  const [project, setProject] = useState({ name: "Service", description: "xx" });
  const [loader, setLoader] = useState(false);
  const [system_image , setImage] = useState("");
  const [userType , setUserType] = useState("");

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
    //getProfile(reduxState?.user?.profile?.id || localStorage.getItem("userId"));
    return () => {
    }
  }, [])

  useEffect(() => {
    setProfile({...profile, form : {...profile?.form, ...reduxState?.user?.profile}})
    setImage(reduxState?.user?.profile?.system_image)
    setUserType(localStorage.getItem("userType"));
    return () => {};
  }, [reduxState?.user?.profile]);

  useEffect(() => {
    setImage(reduxState?.user?.system_image)
    return () => {};
  }, [reduxState?.user?.system_image]);

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
  const {is_profile_setup} = reduxState?.user?.profile;
  return (
    <div >
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
           <GridItem container xs={12} spacing={2} alignContent="center" justify="space-around">
            <Typography variant='subtitle1'>Choose Environment Type</Typography>
            <Button onClick={() => setEnvironmentType("FIXED")} color='primary' variant={environmentType === 'FIXED' ? "contained" : "outlined"}>Fixed</Button>
            <Button onClick={() => setEnvironmentType("UNLIMITED")} color='primary' variant={environmentType === 'UNLIMITED' ? "contained" : "outlined"}>Unlimited</Button>
          </GridItem>
          <GridItem xs={12}>&nbsp;</GridItem>
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
      <GridContainer style={{background : 'white', marginTop :20}} spacing={1}>
        {userType !== 'ADMIN' && <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader>
              <Typography variant="h5">Project and domain details</Typography>
            </CardHeader>
            <CardBody>
              <GridContainer spacing={3}>
                {domain?.id && (
                  <>
                    <GridItem className={classes.gridRow} xs={4} container  spacing={2} alignContent="center" justify="space-around">
                     
                        <Typography align="center" variant="body1">Domain Name:</Typography>
                        <Typography align="left" color="primary" variant="body1" >
                          {domain?.name}
                        </Typography>
                      
                    </GridItem>
                    <GridItem className={classes.gridRow} xs={8} container  spacing={2} alignContent="center" justify="space-around">
                     
                        <Typography variant="body1">Domain Description:</Typography>
                        <Typography color="primary" variant="body1" >
                          {domain?.description}
                        </Typography>
                    
                    </GridItem>
                  </>
                )}
                {project?.id && (
                  <>
                    <GridItem className={classes.gridRow} xs={4} container  spacing={2} alignContent="center" justify="space-around">
                        <Typography align="center" variant="body1">Project Name</Typography>
                        <Typography align="left" color="primary" variant="body1">{project?.name}</Typography>
                    </GridItem>
                    <GridItem className={classes.gridRow} xs={8} container  spacing={2} alignContent="center" justify="space-around">
                    
                        <Typography variant="body1">
                          Project Description:
                        </Typography>
                        <Typography color="primary" variant="body1">{project?.description}</Typography>
                      
                    </GridItem>
                  </>
                )}
                {!domain?.id && (
                  <>
                    {" "}
                    <GridItem xs={8}>
                      <Typography variant="h6" component="h5">
                        First create a new domain and project.
                      </Typography>
                    </GridItem>
                    <GridItem xs={4}>
                      <Button
                        onClick={() => setDomainModal(true)}
                      >
                        Create
                      </Button>
                    </GridItem>
                  </>
                )}
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
       }
       {(is_profile_setup || (is_profile_setup ===0 && domain?.id)) && (<>
        <GridItem xs={12}>
          <Card>
            <CardHeader>
              <Typography variant="h5">Personal Details</Typography>
            </CardHeader>
            <CardBody>
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
                    disabled={profile?.form?.is_profile_setup}
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
            </CardBody>
          </Card>
        </GridItem>
       
        {userType !== 'ADMIN' && <GridItem xs={12}>
          <Card>
            <CardHeader>
              <Typography variant="h5">Company Details</Typography>
            </CardHeader>
            <CardBody>
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
                  <img src={system_image} width={300} height={250}  alt='system image' />
                </GridItem>
                <GridItem container justify='space-between' xs={2}>
                  <Button variant="contained" onClick={imageClick}>Upload New</Button>
                  <input
                    accept="image/png, image/gif, image/jpeg, image/jpg"
                    onChange={onFileUpload}
                    name="system_image"
                    type="file"
                    ref={imageRef}
                    style={{display : 'none'}}
                  />
                </GridItem>
                
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        }
      
        {reduxState?.user?.profile?.user_type === "ER" && (
          <GridItem xs={12} >
            <Card>
              <CardHeader>
                <Typography variant="h5">Work Details</Typography>
              </CardHeader>
              <CardBody>
                <GridContainer spacing={3}>
                  <GridItem xs={10} sm={10} md={10}>
                    <GridContainer spacing={2} style={{ marginRight: 10 }}>
                      {skills?.map((skill, index) => {
                        return (
                          <React.Fragment key={"skillkey" + index}>
                            <GridItem item xs={6}>
                              <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="skill_name"
                                label="Skills"
                                type="text"
                                id="skills"
                                value={skill?.skill_name}
                                onChange={(e) => skillHandler(e ,index)}
                              />
                            </GridItem>
                            <GridItem item xs={6}>
                              <Select
                                style={{ width: "210px" }}
                                label={"Skills Level"}
                                name="skill_level"
                                value={skill?.skill_level}
                                onChange={(e) => skillHandler(e ,index)}
                                options={SKILLS?.map(skill =>({label : skill ,value : skill}))}
                              />
                            </GridItem>
                          </React.Fragment>
                        );
                      })}
                    </GridContainer>
                  </GridItem>
                  <GridItem item xs={2}>
                    <IconButton onClick={addSkill}>
                      <AddCircleOutline />
                    </IconButton>
                  </GridItem>
                  {/* <GridItem xs={10} sm={10} md={10}>
                    <TextField fullWidth label="Work Experience" />
                  </GridItem> */}
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        )}
        <GridItem xs={12} sm={12} md={12} align="right" alignContent="flex-end">
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
       </>)}
      </GridContainer>
    </div>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  { createDomain, updateProfile , getProfile,updateSystemInfo }
)(Profile);
