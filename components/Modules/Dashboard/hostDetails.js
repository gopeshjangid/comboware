import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {  IconButton, Box } from "@material-ui/core";
import CustomTable from "components/Table/CustomTable";
import { Chip ,Typography } from "components/Custom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Loader from "components/Loader/circular";
import { getAllHosts } from "./redux/action";
import Button from  "components/CustomButtons";
import Modal from "components/Modal";
import Domains from  "./domainsList";
function HostDetails({ getAllHosts,domainsList, hostsList, profile }) {
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
      { field: "select", select: true },
      {
        field: "host_name",
        header: "HOST",
        width : 200,
        renderCell: (row) => {
          return (
            <>
              <Typography variant="body1" color="primary">
                {row?.hypervisor_hostname}
              </Typography>
              <Typography variant="p" fontSize="11" color='secondaryText'>
                {row?.host_ip}
              </Typography>{" "}
            </>
          );
        },
      },
      { field: "domain",header : "Domain",width : 100,
      renderCell: (row) => {
        return (
          <Button onClick={() => setDomainModal(true)} type="action">
             View Domains
          </Button>
        );
      }, },
      {
        field: "cpu",
        header: "CPU",
        width  : 50,
        renderCell: (row) => {
          return (
            <>
              <Typography variant="body2" color="primary">
                {row?.vcpus> row?.vcpus_used ? row?.vcpus-row?.vcpus_used : 0}
              </Typography>
              <Typography variant="p" fontSize="11" color="secondary">
                {row?.vcpus}
              </Typography>{" "}
            </>
          );
        },
      },
      {
        field: "ram",
        header: "RAM",
        width  : 100,
        renderCell: (row) => {
          return (
            <>
              <Typography variant="body2" color="primary">
                {row?.memory_mb-row?.memory_mb_used}
              </Typography>
              <Typography variant="p" fontSize="11" color="secondary">
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
              <Typography variant="body2" color="primary">
                {row?.free_disk_gb}
              </Typography>
              <Typography variant="p" fontSize="11" color="secondary">
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
        width : 70,
        renderCell: (row) => {
          return (
            <Button onClick={() => setDomainModal(true)} type="action">
             View details
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
)(HostDetails);
