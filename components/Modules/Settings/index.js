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
import UserSettings from  "./user-settings";
import AdminSettings from  "./admin-settings";

function Settings({ updateProfile, createDomain,updateSystemInfo, getProfile }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const defaultSkill = { skill_name: "", skill_level: "" };
  const [skills, setSkills] = useState([defaultSkill]);
  const [message, setMessage] = useState("");
  const [userType, setUserType] = useState('');
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
    setUserType(localStorage.getItem('userType'));
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




  return (
    <div>
      <Loader open={loader} />
      <Snackbar
        open={isSubmitted}
        type={reduxState?.workspace?.error ? "error" : "success"}
        message={message}
      />
    <GridContainer spacing={1}>
        <GridItem xs={12} sm={12} md={12}>
           {
             userType === 'ADMIN' ? <AdminSettings /> : <UserSettings />
           }
       </GridItem>

        </GridContainer>
    </div>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  { createDomain, updateProfile , getProfile,updateSystemInfo }
)(Settings);
