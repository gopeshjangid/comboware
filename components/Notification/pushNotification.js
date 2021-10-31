import React, { useState, useEffect, useRef } from "react";
import Styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import {
  AddCircleOutline,
  AttachFileOutlined,
  ContactMail,
  NetworkCell,
  Storage,
  Work,
} from "@material-ui/icons";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, IconButton, Box, Hidden } from "@material-ui/core";
import { Alert, AlertTitle } from "@mui/material";

const StyleAlert = Styled(Alert)`
  ${(props) =>
    props?.severity === "warning" &&`
      background : #f57c00;
      color : white;
      max-width : 60%;
   `}
`;

function PushNotification() {
  const reduxState = useSelector((state) => state);
  const [userType, setUserType] = useState("");
  const [show, setShow] = useState(true);
  const manageMessage = () => {
    setTimeout(() => {
      setShow(false);
    }, 20000);
  };

  useEffect(() => {
    manageMessage;
  }, []);

  const { is_profile_setup, user_type } = reduxState?.user?.profile;
  if (show && !is_profile_setup && user_type !== "ADMIN") {
    return (
          <StyleAlert
            onClose={() => setShow(false)}
            variant="filled"
            severity="warning"
          >
            Please complete your profile!
          </StyleAlert>
    );
  }

  return null;
}

export default connect((state) => {
  return { ...state };
}, null)(PushNotification);
