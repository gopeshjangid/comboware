import React, { useState, useEffect } from "react";

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
import { updateProfile ,getProfile } from "./redux/action";
import { createDomain } from "../Workspace/redux/action";

function Profile({ updateProfile, createDomain, getProfile }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const defaultSkill = { skill_name: "", skill_level: "" };
  const [skills, setSkills] = useState([defaultSkill]);
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState({
    form: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      user_name: "",
      password: "",
    },
    error: {
      first_name: false,
      user_name: false,
      password: false,
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
    _profile.error = {
      ..._profile.error,
      password: _profile?.form?.password === "",
    };
    setProfile(_profile);

    return !Object.values(_profile?.error).some((field) => field);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (profileValidation()) {
      setSubmitted(true);
      updateProfile({ ...profile?.form, domain_id: domain?.id, skills ,project_id : project?.id ,userId: reduxState?.user?.profile?.id || 1 });
    }
  };

  const submitDomainHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    createDomain({ domain, project, userId: reduxState?.user?.profile?.id || 1 });
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
      <GridContainer spacing={1}>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader>
              <Typography variant="h5">Project and domain details</Typography>
            </CardHeader>
            <CardBody>
              <GridContainer spacing={2}>
                {domain?.id && (
                  <>
                    <GridItem className={classes.gridRow} xs={4}>
                      <Box display="flex" justifyContent="space-around">
                        <Typography align="center" variant="subtitle2">Domain Name:</Typography>
                        <Typography align="left" color="primary" variant="subtitle2" >
                          {domain?.name}
                        </Typography>
                      </Box>
                    </GridItem>
                    <GridItem className={classes.gridRow} xs={8}>
                      <Box display="flex" justifyContent="space-around">
                        <Typography variant="subtitle2">Domain Description:</Typography>
                        <Typography color="primary" variant="subtitle2" >
                          {domain?.description}
                        </Typography>
                      </Box>
                    </GridItem>
                  </>
                )}
                {project?.id && (
                  <>
                    <GridItem className={classes.gridRow} xs={4}>
                      <Box display="flex" justifyContent="space-around">
                        <Typography align="center" variant="subtitle2">Project Name</Typography>
                        <Typography align="left" color="primary" variant="subtitle2">{project?.name}</Typography>
                      </Box>
                    </GridItem>
                    <GridItem className={classes.gridRow} xs={8}>
                      <Box display="flex" justifyContent="space-around">
                        <Typography variant="subtitle2">
                          Project Description:
                        </Typography>
                        <Typography color="primary" variant="subtitle2">{project?.description}</Typography>
                      </Box>
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
                        variant="outlined"
                        color="primary"
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
                    isDisabled
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    onChange={profileChangeHandler}
                    name="phone"
                    type="number"
                    label="Phone"
                    value={profile?.form?.phone }
                  />
                </GridItem>
                <GridItem xs={4}>
                  <TextField
                    fullWidth
                    onChange={profileChangeHandler}
                    
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
                    autoComplete="off"
                    label="Password"
                    error
                    helperText={
                      profile?.form?.password?.error && "Please enter password"
                    }
                    onChange={profileChangeHandler}
                    name="password"
                    
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
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
                                options={[{label : "Beginner" , value : "Beginner"}]}
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
      </GridContainer>
    </div>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  { createDomain, updateProfile , getProfile }
)(Profile);
