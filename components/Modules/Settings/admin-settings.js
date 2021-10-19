import React, { useState, useEffect, useRef } from "react";

import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, IconButton, Box } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextField from "../../CustomInput/TextField";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import Modal from "components/Modal";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import { saveResource, getResources } from "./redux/action";
import FieldSet from "components/Form/fieldset";
import HostList from "components/Modules/Dashboard/hostsList";
import Environment from "components/Modules/Settings/environmentPlan";
import CustomTable from "components/Table/CustomTable";
import Wrapper from "components/Wrapper";
function Settings({ saveResource, getResources, settings }) {
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const [resource, setResource] = useState({
    RAM: 0,
    CPU: 0,
    VOLUME: 0,
  });

  const [domainModal, setDomainModal] = useState(false);
  const [domain, setDomain] = useState({ name: "", description: "" });
  const [isSubmitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);

  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const getValue = (str) => {
    let filtered =
      settings?.resources?.filter(
        (setting) => setting?.resource_type === str
      ) || [];
    console.log("filtered", filtered, "ress", settings?.resources);
    return filtered?.length ? filtered[0]?.price : 0;
  };

  useEffect(() => {
    let RAM = getValue("RAM");
    let CPU = getValue("CPU");
    let VOLUME = getValue("VOLUME");
    setResource({ ...resource, RAM, CPU, VOLUME });
  }, [settings?.resources]);

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
    getResources(
      reduxState?.user?.profile?.id || localStorage.getItem("userId"),
      hideNotification
    );
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

  const resourceSubmitHandler = (e, type) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    saveResource(
      {
        resource_type: type,
        size: 1,
        price: resource[type],
        userId: Number(localStorage.getItem("userId")),
      },
      hideNotification
    );
  };

  const domainChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setDomain({ ...domain, [name]: value });
  };

  const resourceChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setResource({ ...resource, [name]: value });
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
  };

  const getColumns = () => {
    return [
      { field: "select", select: true },
      { field: "name", header: "Name" },
      { field: "type", header: "User" },
      { field: "status", header: "Status" },
      { field: "date", header: "Date" },
      {
        field: "action",
        header: "Date",
        renderCell: () => {
          return <button >Edit</button>;
        },
      },
    ];
  };

  const handleClick = () =>{

  }

  return (
    <div>
      <Loader open={loader} />
      <Snackbar
        open={isSubmitted}
        type={reduxState?.workspace?.error ? "error" : "success"}
        message={message}
      />
      <Wrapper>
        <Typography variant="h5">Admin Settings</Typography>

        <GridContainer spacing={1}>
          {/* <GridItem xs={12} sm={12} md={12}>
              <fieldset
                className={classes.fieldset}
                borderColor="#e7e9f0"
                border={0.5}
              >
                <legend>Resource Billing Quotes</legend>
                <GridContainer spacing={2}>
                  <GridItem container className={classes.gridRow} xs={4}>
                    <Typography>RAM</Typography>
                  </GridItem>
                  <GridItem className={classes.gridRow} xs={6}>
                    <TextField
                      name="RAM"
                      fullWidth
                      label="RAM Charge ($/MB)"
                      value={resource?.RAM}
                      onChange={resourceChangeHandler}
                      type="number"
                      inputProps={{ min: 0 }}
                    />
                  </GridItem>
                  <GridItem container justify="flex-end" xs={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={(e) => resourceSubmitHandler(e,"RAM")}
                      disabled={
                        !(resource?.RAM )
                      }
                    >
                      Save
                    </Button>
                  </GridItem>

                  <GridItem container className={classes.gridRow} xs={4}>
                    <Typography>CPUs</Typography>
                  </GridItem>
                  <GridItem className={classes.gridRow} xs={6}>
                    <TextField
                      name="CPU"
                      fullWidth
                      label="CPU Charge ($/Core)"
                      value={resource?.CPU}
                      onChange={resourceChangeHandler}
                      type="number"
                      inputProps={{ min: 0 }}
                    />
                  </GridItem>
                  <GridItem container justify="flex-end" xs={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={(e) => resourceSubmitHandler(e,"CPU")}
                      disabled={
                        !(resource?.CPU)
                      }
                    >
                      Save
                    </Button>
                  </GridItem>

                  <GridItem container className={classes.gridRow} xs={4}>
                    <Typography>Volume</Typography>
                  </GridItem>
                  <GridItem className={classes.gridRow} xs={6}>
                    <TextField
                      name="VOLUME"
                      fullWidth
                      label="Volume Charge ($/GB)"
                      value={resource?.VOLUME}
                      onChange={resourceChangeHandler}
                      type="number"
                      inputProps={{ min: 0 }}
                    />
                  </GridItem>
                  <GridItem container justify="flex-end" xs={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={(e) => resourceSubmitHandler(e,"VOLUME")}
                      disabled={
                        !(resource?.VOLUME)
                      }
                    >
                      Save
                    </Button>
                  </GridItem>
                  
                </GridContainer>
              </fieldset>
            </GridItem>
          
            <GridItem>
               <FieldSet title="Hypervisors List">
                  <HostList />
               </FieldSet>
            </GridItem>

            <GridItem>
               <FieldSet title="Environment Plan">
                  <Environment />
               </FieldSet>
            </GridItem> */}
          <GridItem xs={12}>
            <CustomTable
              footer_label={"Active customers"}
              columns={getColumns()}
              data={[
                {
                  id: 1,
                  name: "Gopesh",
                  type: "Admin",
                  status: "Inprogress",
                  date: "210-2102",
                },
                {
                  id: 2,
                  name: "Gopesh",
                  type: "Admin",
                  status: "Inprogress",
                  date: "210-2102",
                },
                {
                  id: 3,
                  name: "Gopesh",
                  type: "Admin",
                  status: "Inprogress",
                  date: "210-2102",
                },
              ]}

              actions={[{label : "Edit" ,handleClick : handleClick},{label : "DELETE" ,handleClick : handleClick}]}
            />
          </GridItem>
        </GridContainer>
      </Wrapper>
    </div>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  { saveResource, getResources }
)(Settings);
