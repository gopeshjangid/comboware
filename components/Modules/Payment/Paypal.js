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
    value: props?.amount || "10",
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
    console.log("success data", data);
    if(props?.onSuccess){
      props.onSuccess(data);
    }
    
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
          "client-id": 'AZ9j0TX_IMLD3N55EUbEQWDMKZuheJYl_Cv6-YQdoo6n_A_HpYA1O4MBWvQql5fYu-2F1vSuSMcnekoH',
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
