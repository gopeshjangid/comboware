import React, { useState, useEffect, useRef } from "react";

import { connect, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import {  IconButton, Box } from "@material-ui/core";
import EditIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import CustomTable from "components/Table/CustomTable";
import { Chip ,Typography } from "components/Custom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Loader from "components/Loader/circular";
import { getAllDomains } from "./redux/action";
import Button from  "components/CustomButtons";
function hostsListBox({ getAllDomains, domainsList, profile }) {
  const reduxState = useSelector((state) => state);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const hideNotification = (status, message) => {
    setLoading(false);
    if (!status) {
      setError(message);
    } else {
      setError("");
    }
  };

  useEffect(() => {
    if (domainsList?.length === 0) {
      setLoading(true);
      getAllDomains(hideNotification);
    } else {
      setLoading(false);
    }

    return () => {};
  }, []);

  if (profile?.user_type !== "ADMIN") {
    return null;
  }

  const getColumns = () => {
    return [
      {
        field: "name",
        header: "Domain Name",
        width : 200,
        renderCell: (row) => {
          return (
            <>
              <Typography variant="body1" color="primary">
                {row?.name}
              </Typography>
            </>
          );
        },
      },
      { 
        field: "description",header : "Description"
      },
      {
        field: "enabled",
        header: "STATUS",
        renderCell: (row) => {
          return (
            <Chip
              label={row?.enabled  ? "ACTIVE" : "INACTIVE"}
              type={row?.enabled  ? "filled" : "outlined"}
            />
          );
        },
      }
    ];
  };

  const handleClick = () => {};

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : (
        <CustomTable
          footer_label={"Available Domains"}
          columns={getColumns()}
          data={domainsList}
          actions={[
            { label: "Edit", handleClick: handleClick },
            { label: "DELETE", handleClick: handleClick },
          ]}
        />
      )}
    </div>
  );
}

export default connect(
  (state) => {
    return { ...state?.dashboard, profile: state?.user?.profile };
  },
  { getAllDomains }
)(hostsListBox);
