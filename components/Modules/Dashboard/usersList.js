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
import { usersList } from "../Profile/redux/action";

function usersListDataBox({ usersList, profile }) {
  const reduxState = useSelector((state) => state);
  const [error, setError] = useState(false);
  const usersListData = reduxState?.user?.usersList;
  const [isLoading, setLoading] = useState(false);


  const hideNotification = (status, message) => {
    setLoading(false);
    if (!status) {
      setError("Something went wrong. please try again");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    hideNotification(reduxState?.user?.usersList.length)
    return () => {};
  }, [reduxState?.user?.usersList]);

  useEffect(() => {
    if (usersListData?.length === 0) {
      setLoading(true);
      usersList("?userType=ER");
    } else {
      setLoading(false);
    }

    return () => {};
  }, []);

  console.log("redux" ,reduxState)

  if (profile?.user_type !== "ADMIN") {
    return null;
  }

  const getColumns = () => {
    return [
      {
        field: "first_name",
        header: "Name",
        renderCell: (row) => {
          return (
            <>
              <Typography variant="body1" color="primary">
                {row?.first_name+" "+row?.last_name}
              </Typography>
            </>
          );
        },
      },

      { field: "email", header: "Email" },
      { field: "company_name", header: "Company Name" },
      {
        field: "status",
        header: "STATUS",
        renderCell: (row) => {
          return (
            <Chip
              label={row?.status  ? "ACTIVE" : "INACTIVE"}
              type={row?.status ? "filled" : "outlined"}
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
      <Typography>Customers</Typography>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : (
        <CustomTable
          footer_label={"Total customers"}
          columns={getColumns()}
          data={usersListData}
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
  { usersList }
)(usersListDataBox);
