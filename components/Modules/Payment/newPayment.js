import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import {
  Typography,
  IconButton,
  Box,
  TextareaAutosize,
} from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextField from "../../CustomInput/TextField";
import styles from "./styles";
import Select from "../../Select";
import Button from "@material-ui/core/Button";
import Modal from "components/Modal";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import { serverRequest, getWorkSpaceDetails } from "../Workspace/redux/action";
import { useRouter } from "next/dist/client/router";
import {
  createTicket,
  addNewActivity,
  getCategories,
  getSubCategories,
} from "./redux/action";
import PaypalPayment from  "./Paypal";



function newTicket({
  createTicket,
  addNewActivity,
  getCategories,
  getSubCategories,
}) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    form: {
      userId: reduxState?.user?.profile?.id,
      category_id: "",
      subcategory_id: "",
      ticket_subject: "",
    },
    error: {
      network_name: false,
      user_name: false,
      password: false,
    },
  });
  const router = useRouter();

  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  let amount = '10.00';

  useEffect(() => {
    if (reduxState?.payment?.message || reduxState?.payment?.error) {
      setMessage({
        text: reduxState?.payment?.message || reduxState?.payment?.error,
        type: reduxState?.payment?.error ? "error" : "success",
      });
      setSubmitted(true);
      manageMessage();
    }
    return () => {};
  }, [reduxState?.payment?.message]);

  useEffect(() => {
    setLoader(reduxState?.payment?.loading);
    return () => {};
  }, [reduxState?.payment?.loading]);


  useEffect(() => {
    if (!reduxState?.payment?.server && isSubmitted) {
      getWorkSpaceDetails(Number(localStorage.getItem("userId")));
    } else {
      setPaymentDetails({});
    }
    setSubmitted(false);
    return () => {};
  }, [reduxState?.payment?.server]);

  useEffect(() => {
    setLoaded(true)
  }, []);

  const validateServerDetails = () => {
    if (!ticketDetails?.form?.category_id) {
      setMessage({ text: "Please select a category", type: "error" });
      return false;
    } else if (!ticketDetails?.form?.subcategory_id) {
      setMessage({ text: "Please select sub category", type: "error" });
      return false;
    } else if (!ticketDetails?.form?.ticket_subject) {
      setMessage({ text: "Please fill enter field", type: "error" });
      return false;
    } else {
      setMessage({ text: "", type: "success" });
      return true;
    }
  };

  const hideNotification = () => {
    setSubmitted(false);
    setLoader(false);
  };


  const onSuccess = (data) => {
   
  };

  const onError = (data) => {
    
  };

 

  return (
    <div>
      <Loader open={loader } />
      <Snackbar
        open={isSubmitted}
        type={message?.type || "success"}
        message={message?.text}
      />
      <Card className={classes.cardBox}>
        <CardHeader>
          <Typography variant="h5">Create New Payment</Typography>
        </CardHeader>

        <CardBody>
          <GridContainer spacing={1}>
            <GridItem xs={12}>
              <fieldset
                className={classes.boxModal}
                borderColor="#e7e9f0"
                border={0.5}
              >
                <legend>Payment Information</legend>
                <GridContainer spacing={2}>
                  <GridItem xs={12}>
                    <GridContainer spacing={3}>
                      <GridItem xs={12}>
                      {isLoaded && <PaypalPayment onError={onError} onSuccess={onSuccess} amount={amount} />}
                      </GridItem>
                      </GridContainer>
                  </GridItem>
                </GridContainer>
              </fieldset>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    </div>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  { getCategories, getSubCategories, createTicket, addNewActivity }
)(newTicket);
