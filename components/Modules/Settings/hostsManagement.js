import React, { useState, useEffect, useRef } from "react";

import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, IconButton, Box } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import TextField from "../../CustomInput/TextField";
import useStyles from "./styles";
import Button from "components/CustomButtons";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import { saveHost } from "./redux/action";
import FieldSet from "components/Form/fieldset";
import HostList from "components/Modules/Dashboard/hostsList";


function Settings({ saveHost, settings }) {
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isNew, setNew] = useState(false);
  const [loader, setLoader] = useState(false);
  const [host, setHost] = useState({name : "" ,host_ip : "" ,host_port : ""});
  const [isSubmitted, setSubmitted] = useState(false);
  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const getValue = (str) => {
    let filtered =
      settings?.hosts?.filter(
        (setting) => setting?.host_type === str
      ) || [];
    return filtered?.length ? filtered[0]?.price : 0;
  };

  const hideNotification = () => {
    setSubmitted(false);
    setLoader(false);
  };
  useEffect(() => {
    setMessage(reduxState?.workspace?.message || reduxState?.workspace?.error);
    manageMessage();
    return () => {};
  }, [reduxState?.workspace?.message]);

  useEffect(() => {
    // gethosts(
    //   reduxState?.user?.profile?.id || localStorage.getItem("userId"),
    //   hideNotification
    // );
    return () => {};
  }, []);

  // useEffect(() => {
  //   setProfile({...profile, form : {...profile?.form, ...reduxState?.user?.profile}})
  //   return () => {};
  // }, [reduxState?.user?.profile]);

  useEffect(() => {
    manageMessage();
    setMessage(reduxState?.user?.message || reduxState?.user?.error);
    return () => {};
  }, [reduxState?.user?.message]);

  useEffect(() => {
    setLoader(reduxState?.user?.loading);
    return () => {};
  }, [reduxState?.user?.loading]);

  console.log("reduxState=====", reduxState);

  const hostSubmitHandler = (e, type) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    saveHost(
      host,
      hideNotification
    );
  };

  const hostChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setHost({ ...host, [name]: value });
  };

  return (
    <div>
      <Loader open={loader} />
      <Snackbar
        open={isSubmitted}
        type={reduxState?.workspace?.error ? "error" : "success"}
        message={message}
      />
      <GridContainer spacing={3}>
        {!isNew ? (
          <GridItem xs={12} sm={12} md={12}>
            {" "}
            <FieldSet padding={10} title="Host List">
              <Box  style={{marginBottom  :20}}  display="flex"  justifyContent="flex-end">
                  <Button onClick={() => setNew(true)}>Add New</Button>
              </Box>
               <HostList />
            </FieldSet>
          </GridItem>
        ) : (
          <GridItem xs={12} sm={12} md={12}>
            <FieldSet padding={30} title="Add New Host">
              <GridContainer spacing={2}>
                <GridItem className={classes.gridRow} xs={12} style={{textAlign : 'right'}}>
                  <IconButton  onClick={() => setNew(false)}  ><CloseOutlined/></IconButton>{" "}
                </GridItem>
                <GridItem className={classes.gridRow} xs={3}>
                  <TextField
                    name="RAM"
                    fullWidth
                    label="Host Name"
                    value={host}
                    onChange={hostChangeHandler}
                    type="number"
                    inputProps={{ min: 0 }}
                  />
                </GridItem>
                <GridItem className={classes.gridRow} xs={3}>
                  <TextField
                    name="CPU"
                    fullWidth
                    label="Host IP"
                    value={host}
                    onChange={hostChangeHandler}
                    type="number"
                    inputProps={{ min: 0 }}
                  />
                </GridItem>
                <GridItem className={classes.gridRow} xs={6}>
                  <TextField
                    name="CPU"
                    fullWidth
                    label="Host Port"
                    value={host}
                    onChange={hostChangeHandler}
                    type="number"
                    inputProps={{ min: 0 }}
                  />
                </GridItem>

                <GridItem style={{textAlign  :'right'}} xs={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(e) => hostSubmitHandler(e, "VOLUME")}
                    disabled={!host?.VOLUME}
                  >
                    Save
                  </Button>
                </GridItem>
              </GridContainer>
            </FieldSet>
          </GridItem>
        )}
      </GridContainer>
    </div>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  { saveHost }
)(Settings);
