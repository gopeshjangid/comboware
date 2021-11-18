import React, { useState, useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AddCircleOutline,
  AttachFileOutlined,
  ContactMail,
  NetworkCell,
  Storage,
  Work,
} from "@material-ui/icons";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, IconButton,Box ,Hidden } from "@material-ui/core";
import TextField from "../../CustomInput/TextField";
import styles from "./styles";
import Select from "../../Select";
import Button from "components/CustomButtons";
import Modal from "components/Modal";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import { updateProfile, getProfile, updateSystemInfo } from "./redux/action";
import { createDomain } from "../Workspace/redux/action";
import { SKILLS } from "./redux/constants";
import FieldSet from "components/Form/fieldset";
import PhoneField from "components/PhoneFormat";
import Wrapper from "components/Wrapper";
import Tabs from "components/CustomTabs";
function Profile({
  updateProfile,
  createDomain,
  updateSystemInfo,
  getProfile,
}) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const defaultSkill = { skill_name: "", skill_level: "" };
  const [skills, setSkills] = useState([defaultSkill]);
  const [message, setMessage] = useState("");
  const imageRef = useRef();
  const [profile, setProfile] = useState({
    form: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      user_name: "",
      password: "",
      company_name: "",
      company_id: "",
      company_address: "",
      company_phone: "",
      company_position : ''
    },
    error: {
      first_name: false,
      user_name: false,
      password: false,
      company_name: false,
      company_address: false,
      company_phone: false,
    },
  });

  const [domainModal, setDomainModal] = useState(false);
  const [environmentType, setEnvironmentType] = useState("FIXED");
  const [domain, setDomain] = useState({ name: "", description: "" });
  const [isSubmitted, setSubmitted] = useState(false);
  const [project, setProject] = useState({
    name: "Service",
    description: "xx",
  });
  const [loader, setLoader] = useState(false);
  const [system_image, setImage] = useState("");
  const [userType, setUserType] = useState("");

  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  useEffect(() => {
    setLoader(reduxState?.workspace?.loading);
    if (reduxState?.workspace?.domain) {
      setDomain({ ...reduxState?.workspace?.domain });
    }
    setDomainModal(false);
    return () => {};
  }, [reduxState?.workspace]);

  useEffect(() => {
    if (reduxState?.workspace?.project) {
      setProject(reduxState?.workspace?.project);
    }
    return () => {};
  }, [reduxState?.workspace?.project]);

  useEffect(() => {
    setMessage(reduxState?.workspace?.message || reduxState?.workspace?.error);
    manageMessage();
    return () => {};
  }, [reduxState?.workspace?.message]);

  useEffect(() => {
    setProfile({
      ...profile,
      form: { ...profile?.form, ...reduxState?.user?.profile },
    });
    setImage(reduxState?.user?.profile?.system_image);
    setUserType(localStorage.getItem("userType"));
    return () => {};
  }, [reduxState?.user?.profile]);

  useEffect(() => {
    setImage(reduxState?.user?.system_image);
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
    return () => {};
  }, [reduxState?.user?.skills]);

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
      updateProfile({
        ...profile?.form,
        password: window?.btoa(profile?.form?.password),
        domain_id: domain?.id,
        skills,
        project_id: project?.id,
        userId: reduxState?.user?.profile?.id || 1,
      });
    }
  };

  const submitDomainHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    createDomain({
      domain,
      project: { ...project, name: "Service" },
      userId: reduxState?.user?.profile?.id || 1,
    });
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

  const userpPoneHandler = (value) =>{
    setProfile({ ...profile, form: { ...profile?.form, phone: value } });
  }

  const companyPhoneHandler = (value) =>{
    setProfile({ ...profile, form: { ...profile?.form, company_phone: value } });
  }
  

  const skillHandler = (e, itemIndex) => {
    let name = e.target.name;
    let value = e.target.value;

    let _skills = [...skills];
    _skills = _skills?.map((skill, index) => {
      if (itemIndex === index) {
        skill[name] = value;
      }
      return skill;
    });
    setSkills(_skills);
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
    formData.append("server_image", file, file?.name);
    updateSystemInfo(
      {
        query: "?userId=" + Number(localStorage.getItem("userId")),
        body: formData,
      },
      hideNotification
    );
  };

  const imageClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };
  const { is_profile_setup } = reduxState?.user?.profile;
  return (
    <Wrapper>
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
          {/* <GridItem
            container
            xs={12}
            spacing={2}
            alignContent="center"
            justify="space-around"
          >
            <Typography variant="subtitle1">Choose Environment Type</Typography>
            <Button
              onClick={() => setEnvironmentType("FIXED")}
              color="primary"
              variant={environmentType === "FIXED" ? "contained" : "outlined"}
            >
              Fixed
            </Button>
            <Button
              onClick={() => setEnvironmentType("UNLIMITED")}
              color="primary"
              variant={
                environmentType === "UNLIMITED" ? "contained" : "outlined"
              }
            >
              Unlimited
            </Button>
          </GridItem> */}
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
      <Box sx={{background : '#fff'}}>
      <GridContainer item spacing={2}>
        <Tabs
          tabs={[
            {
              hide: false,
              icon: <ContactMail />,
              label: "Personal",
              panel: (
                <GridContainer spacing={1}>
                  <GridItem xs={12}>
                    <FieldSet title="Personal Details">
                      <GridContainer spacing={3}>
                        <GridItem xs={12} sm={4}>
                          <TextField
                            onChange={profileChangeHandler}
                            name="first_name"
                            fullWidth
                            label="First Name"
                            value={profile?.form?.first_name}
                            error={profile?.error?.first_name}
                            helperText={
                              profile?.error?.first_name &&
                              "Please enter first name"
                            }
                          />
                        </GridItem>
                        <GridItem xs={12} sm={4}>
                          <TextField
                            fullWidth
                            onChange={profileChangeHandler}
                            name="last_name"
                            label="Last Name"
                            value={profile?.form?.last_name}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={4}>
                          <TextField
                            fullWidth
                            onChange={profileChangeHandler}
                            name="email"
                            type="email"
                            label="Email"
                            isDisabled
                            value={profile?.form?.email}
                            disabled={true}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={4}>
                          <PhoneField
                            fullWidth
                            variant="outlined"
                            onChange={(e) => userpPoneHandler(e)}
                            name="phone"
                            label="Phone"
                            defaultCountry={"tw"}
                            inputProps={{ maxLength: 14 }}
                            value={profile?.form?.phone}
                          />
                        </GridItem>
                        <GridItem sm={4} xs={12}>
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
                            value={profile?.form?.user_name}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={4}>
                          <TextField
                            fullWidth
                            type="password"
                            autoComplete="new-password"
                            label="Password"
                            helperText={
                              profile?.form?.password?.error &&
                              "Please enter password"
                            }
                            onChange={profileChangeHandler}
                            name="password"
                            id="password"
                          />
                        </GridItem>
                      </GridContainer>
                    </FieldSet>
                  </GridItem>
                </GridContainer>
              ),
            },
            {
              hide: userType === "ADMIN",
              icon: <NetworkCell />,
              label: "Domain and Project",
              panel: (
                <GridContainer spacing={2}>
                  <GridItem xs={12}>
                    <FieldSet title="Project and domain details">
                      <GridContainer spacing={3} justify="space-between">
                        {domain?.id && (
                          <>
                            <GridItem
                              className={classes.gridRow}
                              xs={4}
                              sm={4}
                            >
                              <Typography align="left" variant="body1">
                                Domain Name:
                              </Typography>
                            </GridItem>
                            <GridItem className={classes.gridRow} xs={8} sm={8}>
                              <Typography
                                align="left"
                                color="primary"
                                variant="body1"
                              >
                                {domain?.name}
                              </Typography>
                            </GridItem>
                            <GridItem className={classes.gridRow} sm={4} xs={4}>
                              <Typography align="left" variant="body1">
                                Domain Description:
                              </Typography>
                            </GridItem>
                            <GridItem className={classes.gridRow} xs={8} sm={8}>
                              <Typography align="left" color="primary" variant="body1">
                                {domain?.description}
                              </Typography>
                            </GridItem>
                          </>
                        )}
                        {project?.id && (
                          <>
                            <GridItem className={classes.gridRow} xs={4} sm={4}>
                              <Typography align="left" variant="body1">
                                Project Name
                              </Typography>
                            </GridItem>
                            <GridItem className={classes.gridRow} sm={8} xs={8}>
                              <Typography
                                align="left"
                                color="primary"
                                variant="body1"
                              >
                                {project?.name}
                              </Typography>
                            </GridItem>
                            <GridItem className={classes.gridRow} xs={4} sm={4}>
                              <Typography align="left" variant="body1">
                                Project Description:
                              </Typography>
                            </GridItem>
                            <GridItem className={classes.gridRow} sm={8} xs={8}>
                              <Typography  align="left" color="primary" variant="body1">
                                {project?.description}
                              </Typography>
                            </GridItem>
                          </>
                        )}
                        {!domain?.id && (
                          <>
                            {" "}
                            <GridItem xs={12} sm={10}>
                              <Typography variant="subtitle1" component="h5">
                                Please create a new domain and project.
                              </Typography>
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <Button onClick={() => setDomainModal(true)}>
                                Create
                              </Button>
                            </GridItem>
                          </>
                        )}
                      </GridContainer>
                    </FieldSet>
                  </GridItem>
                </GridContainer>
              ),
            },
            {
              hide: userType === "ADMIN" || userType === "USER",
              label: "Company",
              icon: <Work />,
              panel: (
                <GridContainer spacing={1}>
                  <GridItem xs={12}>
                    <FieldSet title="Company Details">
                      <GridContainer spacing={3}>
                        <GridItem xs={12} sm={4}>
                          <TextField
                            onChange={profileChangeHandler}
                            name="company_name"
                            fullWidth
                            label="Company Name"
                            value={profile?.form?.company_name}
                            error={profile?.error?.company_name}
                            helperText={
                              profile?.error?.company_name &&
                              "Please enter name name"
                            }
                          />
                        </GridItem>
                        <GridItem xs={12} sm={4}>
                          <TextField
                            fullWidth
                            onChange={profileChangeHandler}
                            name="company_id"
                            label="Company Id"
                            value={profile?.form?.company_id}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={4}>
                          <TextField
                            fullWidth
                            onChange={profileChangeHandler}
                            name="company_position"
                            label="Company Position"
                            value={profile?.form?.company_position}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={4}>
                          <TextField
                            fullWidth
                            onChange={profileChangeHandler}
                            name="company_address"
                            type="text"
                            label="Company Address"
                            isDisabled
                            value={profile?.form?.company_address}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={4}>
                         <PhoneField
                            fullWidth
                            variant="outlined"
                            onChange={(e) => companyPhoneHandler(e)}
                            name="company_phone"
                            defaultCountry={"tw"}
                            inputProps={{ maxLength: 14 }}
                            label="Company Phone"
                            value={profile?.form?.company_phone}
                          />
                        </GridItem>
                        <GridItem
                          sm={8}
                          xs={12}
                        >
                          <Typography>System image</Typography>
                          <img
                            src={system_image}
                            width={300}
                            height={250}
                            alt="system image"
                          />
                      
                          <IconButton onClick={imageClick}>
                            <AttachFileOutlined />
                          </IconButton>
                          <input
                            accept="image/png, image/gif, image/jpeg, image/jpg"
                            onChange={onFileUpload}
                            name="system_image"
                            type="file"
                            ref={imageRef}
                            style={{ display: "none" }}
                          />
                        </GridItem>
                      </GridContainer>
                    </FieldSet>
                  </GridItem>
                </GridContainer>
              ),
            },
            {
              hide: userType === "ADMIN" || userType === "USER",
              icon: <Storage />,
              label: "Work",
              panel: (
                <GridContainer spacing={1}>
                  <GridItem xs={12}>
                    <FieldSet title="Work Details">
                      <GridContainer spacing={2}>
                        <Hidden smUp>
                           <GridItem sm={10} xs={12} style={{textAlign : 'right'}}>
                              <IconButton onClick={addSkill}>
                                <AddCircleOutline />
                              </IconButton>
                           </GridItem>
                        </Hidden>
                     
                        <GridItem sm={10} xs={12}>
                          <GridContainer
                            spacing={2}
                            style={{ marginRight: 10 }}
                          >
                            {skills?.map((skill, index) => {
                              return (
                                <React.Fragment key={"skillkey" + index}>
                                  <GridItem item sm={6} xs={8}>
                                    <TextField
                                      variant="outlined"
                                      required
                                      fullWidth
                                      name="skill_name"
                                      label="Skills"
                                      type="text"
                                      id="skills"
                                      value={skill?.skill_name}
                                      onChange={(e) => skillHandler(e, index)}
                                    />
                                  </GridItem>
                                  <GridItem item sm={6} xs={4}>
                                    <Select
                                      style={{ width: "210px" }}
                                      label={"Skills Level"}
                                      name="skill_level"
                                      value={skill?.skill_level}
                                      onChange={(e) => skillHandler(e, index)}
                                      options={SKILLS?.map((skill) => ({
                                        label: skill,
                                        value: skill,
                                      }))}
                                    />
                                  </GridItem>
                                </React.Fragment>
                              );
                            })}
                          </GridContainer>
                        </GridItem>
                        <Hidden smDown>
                          <GridItem item sm={2} xs={2}>
                            <IconButton onClick={addSkill}>
                              <AddCircleOutline />
                            </IconButton>
                          </GridItem>
                        </Hidden>
                      </GridContainer>
                    </FieldSet>
                  </GridItem>
                </GridContainer>
              ),
            },
          ]}
        />
      </GridContainer>
      <GridContainer
        align="right"
        justify="right"
        alignContent="flex-end"
      >
        <GridItem 
        xs={12}
        sm={12}
        md={12}>
           
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitHandler}
            >
              { "Save" }
            </Button>
        </GridItem>
      </GridContainer>
      </Box>
    </Wrapper>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  { createDomain, updateProfile, getProfile, updateSystemInfo }
)(Profile);
