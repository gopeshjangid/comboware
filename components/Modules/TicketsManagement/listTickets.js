import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, IconButton, Box } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextField from "../../CustomInput/TextField";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import Modal from "components/Modal";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import { getProfile } from "../Profile/redux/action";
import { createDomain } from "../Workspace/redux/action";
import Table from "../../Table/Table-Grid";
import { COLUMNS } from "./redux/constants";
import { getWorkSpaceDetails } from "./redux/action";
import Drawer from "../../Drawers";
import { useRouter } from "next/dist/client/router";
function TicketsList({ updateRequest, getProfile }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState({ text: "", type: "success" });
  const [isSubmitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [requestList, setRequestList] = useState([]);
  const [ticketDetails, setTicketDetails] = useState(null);
  const router = useRouter();
  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  useEffect(() => {
    // setLoader(reduxState?.workspace?.loading);
    return () => {};
  }, [reduxState?.workspace?.loading]);

  useEffect(() => {
    setRequestList(reduxState?.workspace?.serverList);
    return () => {};
  }, [reduxState?.workspace?.serverList]);

  console.log("reduxState", reduxState);
  useEffect(() => {
    setMessage({
      text: reduxState?.workspace?.message || reduxState?.workspace?.error,
      type: reduxState?.workspace?.error ? "error" : "success",
    });

    setLoader(false);
    manageMessage();
    // getAllWorkspace();
    return () => {};
  }, [reduxState?.workspace?.message]);

  useEffect(() => {
    //  getProfile(reduxState?.user?.profile?.id || localStorage.getItem("userId"));
    // getAllWorkspace();
    return () => {};
  }, []);

  useEffect(() => {
    manageMessage();
    setMessage({
      text: reduxState?.user?.message || reduxState?.user?.error,
      type: reduxState?.user?.error ? "error" : "success",
    });
    return () => {};
  }, [reduxState?.user?.message]);

  useEffect(() => {
    //setLoader(reduxState?.user?.loading);
    return () => {};
  }, [reduxState?.user?.loading]);

  useEffect(() => {
    //setLoader(true);
    return () => {};
  }, []);

  const actionHandler = (e, data, status) => {
    e.preventDefault();
    setSubmitted(true);
    setLoader(true);
    console.log("data", data);
    updateRequest({
      workspaceId: data?.row?.id,
      requestStatus: "APPROVED",
      userId: data?.row?.user_id,
    });
  };

  const viewTicket = (details) => {
    setTicketDetails(details);
  };

  const closeTicketDrawer = (open) => {
    if (!open) {
      setTicketDetails(null);
    }
  };

  const getColumns = () => {
    return COLUMNS?.map((col) => {
      if (col?.field === "action") {
        col.renderCell = (params) => {
          return (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => viewTicket(params?.row)}
            >
              View
            </Button>
          );
        };
      }

      if (col?.field === "ticket_number") {
        col.renderCell = (params) => {
          console.log("params", params);
          return (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => router.push("/ticket/1")}
            >
              {params?.row?.ticket_number}
            </Button>
          );
        };
      }
      return col;
    });
  };

  return (
    <div>
      <Loader open={loader} />
      <Snackbar
        open={isSubmitted}
        type={message?.type || "success"}
        message={message?.text}
      />
      <Modal
        title="Create Domain and Project"
        // isOpen={domainModal}
        // onSubmit={submitDomainHandler}
        // onChange={(flag) => setDomainModal(flag)}
        submitText="Save Domain and Project"
      >
        <GridContainer spacing={2}>
          <GridItem xs={6}>
            <TextField name="name" fullWidth label="Domain Name" />
          </GridItem>
          <GridItem xs={6}>
            <TextField
              name="description"
              fullWidth
              label="Domain Description"
            />
          </GridItem>
          <GridItem xs={6}>
            <TextField name="name" fullWidth label="Project Name" />
          </GridItem>
          <GridItem xs={6}>
            <TextField
              name="description"
              fullWidth
              label="Project Description"
            />
          </GridItem>
        </GridContainer>
      </Modal>
      <Drawer open={!!ticketDetails} onClose={closeTicketDrawer}>
        <Box className={classes.drawerBox}>
          <GridContainer spacing={3}>
            <GridItem xs={4}>
              <Typography color="secondaryText">Title</Typography>
            </GridItem>
            <GridItem xs={8}>
              <Typography color="secondaryText">
                {ticketDetails?.title}
              </Typography>
            </GridItem>
            <GridItem xs={4}>
              <Typography color="secondaryText">Category</Typography>
            </GridItem>
            <GridItem xs={8}>
              <Typography color="secondaryText">
                {ticketDetails?.category}
              </Typography>
            </GridItem>

            <GridItem xs={4}>
              <Typography color="secondaryText">Customer Name</Typography>
            </GridItem>
            <GridItem xs={8}>
              <Typography color="secondaryText">
                {ticketDetails?.customer_name}
              </Typography>
            </GridItem>

            <GridItem xs={4}>
              <Typography color="secondaryText">Status</Typography>
            </GridItem>
            <GridItem xs={8}>
              <Typography color="secondaryText">
                {ticketDetails?.status}
              </Typography>
            </GridItem>
          </GridContainer>
        </Box>
      </Drawer>
      <GridContainer spacing={1}>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader>
              <GridContainer spacing={1} justify="space-between">
                <GridItem xs={6} >
                  <Typography variant="h5">Tickets List</Typography>
                </GridItem>
                <GridItem xs={6} align='right' > <Button onClick={() => router.push("/ticket/new")} variant="outlined">Create New</Button></GridItem>
              </GridContainer>
            </CardHeader>
            <CardBody>
              <GridContainer spacing={2}>
                <Table
                  columns={getColumns()}
                  rows={[
                    {
                      id: 12,
                      ticket_number: "CW-12-100",
                      customer_name: "Gopesh Kumar",
                      title: "About verutozzo",
                      status: "OPEN",
                      repair_status: "IN PROCESS",
                      created_at: "13/09/2021 18:12:12",
                    },
                  ]}
                />
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>

        {/* <GridItem xs={12} sm={12} md={12} align="right" alignContent="flex-end">
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
          >
            Save Changes
          </Button>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}

export default connect((state) => {
  return { ...state };
}, {})(TicketsList);
