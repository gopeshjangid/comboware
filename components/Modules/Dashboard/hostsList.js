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
import { getAllHosts } from "./redux/action";
import Button from  "components/CustomButtons";
import Modal from "components/Modal";
import Domains from  "./domainsList";
function hostsListBox({ getAllHosts,domainsList, hostsList, profile }) {
  const reduxState = useSelector((state) => state);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [domainModal, setDomainModal] = useState(false);
  const hideNotification = (status, message) => {
    setLoading(false);
    if (!status) {
      setError(message);
    } else {
      setError("");
    }
  };

  

  useEffect(() => {
    if (hostsList?.length === 0) {
      setLoading(true);
      getAllHosts(hideNotification);
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
        field: "cluster_Info",
        header: "Cluster Name",
        align : 'center',
        width : 200,
        renderCell: (row) => {
          return (
            <>
              <Typography variant="body1" color="primary">
                {row?.clusterInfo?.cluster_name}
              </Typography>
            </>
          );
        },
      },
      {
        field: "cpu",
        header: "Cluster IP",
        width  : 100,
        renderCell: (row) => {
          return (
            <>
              <Typography variant="body2" color="primary">
                 {row?.clusterInfo?.cluster_ip}
                </Typography>
            </>
          );
        },
      },
      {
        field: "ram",
        header: "Cluster Username",
        width  : 100,
        renderCell: (row) => {
          return (
            <Typography variant="body2" color="primary">
            {row?.clusterInfo?.cluster_username}
           </Typography>
          );
        },
      },
      {
        field: "status",
        header: "STATUS",
        renderCell: (row) => {
          return (
            <Chip
              label={row?.status === "enabled" ? "ACTIVE" : "INACTIVE"}
              type={row?.status === "enabled" ? "filled" : "outlined"}
            />
          );
        },
      },
      {
        field: "action",
        header: "STATUS",
        width : 70,
        renderCell: (row) => {
          return (
            <Button onClick={() => setDomainModal(true)} type="action">
             View Hosts
          </Button>
          );
        },
      },
    ];
  };

  const handleClick = () => {};

 

  return (
    <div>

      <Modal  title="Domains List"
        isOpen={domainModal}
         onSubmit={() => setDomainModal(false)}
        onChange={(flag) => setDomainModal(flag)}
        submitText="Ok" SaveText="OK">
          <Domains />
      </Modal>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : (
        <CustomTable
          footer_label={"Available hypervisors"}
          columns={getColumns()}
          data={hostsList}
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
  { getAllHosts }
)(hostsListBox);
