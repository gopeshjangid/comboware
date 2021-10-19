import React, { useState, useEffect, useRef } from "react";

import { connect, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import { Typography, IconButton, Box } from "@material-ui/core";
import EditIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import CustomTable from "components/Table/CustomTable";
import { Chip } from "components/Custom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Loader from "components/Loader/circular";
import { getAllHosts } from "./redux/action";

function hostsListBox({ getAllHosts, hostsList, profile }) {
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
      { field: "select", select: true },
      {
        field: "host_name",
        header: "HOST",
        renderCell: (row) => {
          return (
            <>
              <Typography variant="body1" color="primary">
                {row?.hypervisor_hostname}
              </Typography>
              <Typography variant="p" color='secondaryText'>
                {row?.host_ip}
              </Typography>{" "}
            </>
          );
        },
      },

      { field: "domain", header: "DOMAIN" },
      {
        field: "cpu",
        header: "CPU",
        renderCell: (row) => {
          return (
            <>
              <Typography variant="body2" color="primary">
                {row?.vcpus-row?.vcpus_used}
              </Typography>
              <Typography variant="p" color="secondary">
                {row?.vcpus}
              </Typography>{" "}
            </>
          );
        },
      },
      {
        field: "ram",
        header: "RAM",
        renderCell: (row) => {
          return (
            <>
              <Typography variant="body2" color="secondaryText">
                {row?.memory_mb-row?.memory_mb_used}
              </Typography>
              <Typography variant="p" color="secondary">
                {row?.memory_mb}
              </Typography>{" "}
            </>
          );
        },
      },
      {
        field: "disk",
        header: "HDD",
        renderCell: (row) => {
          return (
            <>
              <Typography variant="body2" color="secondaryText">
                {row?.free_disk_gb}
              </Typography>
              <Typography variant="p" color="secondary">
                {row?.free_disk_gb}
              </Typography>{" "}
            </>
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
        renderCell: (row) => {
          return (
            <Box display='flex' justifyContent='space-between'><EditIcon /> <DeleteIcon /></Box>
          );
        },
      },
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
