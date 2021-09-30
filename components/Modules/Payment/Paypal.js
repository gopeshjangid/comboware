import React, { useState, useEffect } from "react";
import {
  Typography,
  IconButton,
  Box,
  TextareaAutosize,
  CircularProgress,
} from "@material-ui/core";

import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export const PAYPAL_CLIENT_ID = publicRuntimeConfig?.PAYPAL_CLIENT_ID;


function Paypal(props) {
  const PAYMENT_CURRENCY = "USD";
  const amount = {
    currency_code: PAYMENT_CURRENCY,
    value: props?.amount,
  };


  function createOrder(data, actions) {
    // throw new Error("force the createOrder callback to fail");
    return actions.order.create({
      purchase_units: [
        {
          amount,
          shipping: {
            // name: "Hello Brother",
            // method: "United States Postal Service",
            name: {
              full_name: props?.user?.name,
            },
          },
        },
      ],
      // application_context: {
      //   shipping_preference: "NO_SHIPPING"
      // }
    });
  }

  function oninit(data, actions) {
    console.log("paypal init");
  }
 
  function onApprove(data, actions) {
   
    return actions.order.capture().then(res =>{
      console.log("final success" ,res ,"props" ,props);
        let payload = {
          payment_date : res?.create_time,
          amount : res?.purchase_units[0]?.amount?.value,
          payment_status : 'COMPLETED',
          reference_id : res?.id,
          userId : Number(localStorage.getItem("userId")),
          payer_id : res?.payer?.payer_id,
          payment_description : '',
          payment_code : '',
          payment_token : ''
        }
       if(props?.onSuccess){
        props?.onSuccess(payload)
       }
    }).catch(error =>{
      if(props?.onError){
        props.onError(error);
      }
    });
    
    
  }
  function onError(err) {
    console.log("payment error" ,err);
    if(props?.onError){
      props.onError(data);
    }
   
  }

  const onCancel = () => {};
  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id": PAYPAL_CLIENT_ID,
          components: "buttons",
          intent: "capture",
        }}
      >
        <PayPalButtons
          onError={onError}
          style={{ color: "blue", label: "checkout" }}
          onInit={oninit}
          onCancel={onCancel}
          onError={onError}
          onApprove={onApprove}
          createOrder={createOrder}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Paypal;
