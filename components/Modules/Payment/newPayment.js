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
  Chip
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
import { useRouter } from "next/dist/client/router";
import {
  createPayment,
  getBillingAmount
} from "./redux/action";

import PaypalPayment from  "./Paypal";



function newPayment({
  createPayment,
  getBillingAmount
}) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [paymentError, setPaymentError] = useState(null);
  const [billing, setBilling] = useState(null);
  const router = useRouter();

  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
      setMessage("")
    }, 4000);
  };

  let amount = '10';

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
    setLoader(false);
    setBilling(reduxState?.payment?.billing);
    return () => {};
  }, [reduxState?.payment?.billing]);

  useEffect(() => {
    setLoader(false);
    return () => {};
  }, [reduxState?.payment?.paymentDetails]);

  useEffect(() => {
    setLoaded(true);
    let query = {userId: Number(localStorage.getItem("userId")) ,bill_duration : 'current'};
    getBillingAmount(query)
  }, []);

console.log("billing" ,billing)

  const onSuccess = (data) => {
     createPayment({...data,payment_id : billing?.payment_id, payment_status : 'COMPLETED'  ,payment_description : "Payment success"} );
     setPaymentDetails(data);
  };

  const onError = (data) => {
    manageMessage();
    setSubmitted(true);
    createPayment({...data,payment_id : billing?.payment_id, payment_status : 'FAILED' ,payment_description : "Payment error due to technical glitch."} );
    setMessage({text : "Something went wrong. please try again.", type : "error" } )
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
      <GridContainer justify='space-around' align='center' spacing={1}>
        <GridItem   xs={6}>
        <CardHeader>
          <Typography align='left' variant="h5">New Payment</Typography>
        </CardHeader>
         </GridItem>
            <GridItem xs={6} style={{textAlign : 'right' ,paddingTop :10 , paddingRight : 33}}>
              &nbsp;
             <Button variant='outlined' onClick={() => router.push("/payment")}>Cancel</Button>
          </GridItem>
          </GridContainer>
        <CardBody>
          <GridContainer spacing={1}>
            <GridItem xs={12}>
            { paymentDetails?.payment_status !=='COMPLETED'  ?
              <fieldset
                className={classes.boxModal}
                borderColor="#e7e9f0"
                border={0.5}
              >
                <legend>Payment Information</legend>
                <GridContainer spacing={2}>
                  <GridItem xs={12}>
                    <GridContainer spacing={4}>
                    <GridItem xs={3}>
                        <Typography>Billing Cycle</Typography>
                      </GridItem>
                      <GridItem xs={4}>
                         <Typography>{billing?.start_date}</Typography>
                      </GridItem>
                      <GridItem xs={1}>
                      
                         <Typography>TO</Typography>
                      </GridItem>
                      <GridItem xs={4}>
                         <Typography>{billing?.end_date}</Typography>
                      </GridItem>
                    <GridItem xs={3}>
                        <Typography>Payment Amount</Typography>
                      </GridItem>
                      <GridItem xs={8}>
                        <Chip color='primary' variant="outlined" label={"$"+billing?.amount || amount} />
                      </GridItem>

                      

                      <GridItem xs={12}>
                        {isLoaded && billing?.amount && !billing?.is_paid ? <PaypalPayment onError={onError} onSuccess={onSuccess} amount={billing?.amount || amount} /> : ''}
                      </GridItem>
                      <GridItem xs={12} style={{textAlign  : 'center'}}>
                        {billing?.is_paid ? <Chip  color='success' style={{color: '#5cc45c', border: '2px solid #5cd961' , fontWeight : 'bold'}} variant="outlined" label={"PAID"} /> : ''}
                      </GridItem>
                      </GridContainer>
                  </GridItem>
                </GridContainer>
              </fieldset>

              :
              <fieldset
                className={classes.boxModal}
                borderColor="#e7e9f0"
                border={0.5}
              >
                <legend>Payment Summary</legend>
                <GridContainer spacing={2}>
                  <GridItem xs={12}>
                    <GridContainer spacing={3}>
                      <GridItem xs={4}>
                        <Typography>Payment Status</Typography>
                      </GridItem>
                      <GridItem xs={8}>
                        <Chip variant='filled' color={paymentDetails?.payment_status === 'COMPLETED' ?   'success' : 'success'} variant="outlined" label={paymentDetails?.payment_status} />
                      </GridItem>
                      <GridItem xs={4}>
                        <Typography>Payment Created</Typography>
                      </GridItem>
                      <GridItem xs={8}>
                        <Typography>{paymentDetails?.payment_date}</Typography>
                      </GridItem>

                      <GridItem xs={4}>
                        <Typography>Payment Amount</Typography>
                      </GridItem>
                      <GridItem xs={8}>
                        <Typography color='primary'>${paymentDetails?.amount}</Typography>
                      </GridItem>

                      <GridItem xs={4}>
                        <Typography>Reference Id</Typography>
                      </GridItem>
                      <GridItem xs={8}>
                        <Typography>{paymentDetails?.reference_id}</Typography>
                      </GridItem>
                      </GridContainer>
                  </GridItem>
                </GridContainer>
              </fieldset>

             }
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
  { createPayment,getBillingAmount }
)(newPayment);
