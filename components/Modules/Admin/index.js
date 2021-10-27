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
import Table from "../../Table/CustomTable";
import { COLUMNS } from "./redux/constants";
import { getAllWorkspace, updateRequest } from "./redux/action";
import Wrapper from "components/Wrapper";
import FieldSet from "components/Form/fieldset";
function Admin({ getAllWorkspace, updateRequest, getProfile }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState({ text: "", type: "success" });
  const [isSubmitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [requestList, setRequestList] = useState([]);

  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  useEffect(() => {
    setLoader(reduxState?.workspace?.loading);
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
    getProfile(reduxState?.user?.profile?.id || localStorage.getItem("userId"));
    getAllWorkspace();
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
    setLoader(reduxState?.user?.loading);
    return () => {};
  }, [reduxState?.user?.loading]);

  useEffect(() => {
    setLoader(true);
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

  const getColumns = () => {
    return COLUMNS?.map((col) => {
      if (col?.field === "action") {
        col.renderCell = (params) => {
          return (
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={(e) => actionHandler(e, params, "APPROVE")}
            >
              APPROVE
            </Button>
          );
        };
      }
      return col;
    });
  };

  return (
    <Wrapper>
      <Loader open={loader} />
      <Snackbar
        open={isSubmitted}
        type={message?.type || "success"}
        message={message?.text}
      />
      <FieldSet title="Server Requests List">
        <GridContainer spacing={1}>
          <GridItem xs={12} sm={12} md={12}>
            <Table columns={getColumns()} data={requestList} />
          </GridItem>
        </GridContainer>
      </FieldSet>
    </Wrapper>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  { updateRequest, getAllWorkspace, getProfile }
)(Admin);
