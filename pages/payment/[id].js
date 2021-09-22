import React from "react";
import Admin from "layouts/Admin.js";
import PaymentManagement from "components/Modules/Payment/paymentDetails";
import Head from "next/head";

function TicketDetails() {
  return (
    <div>
      <Head><title>Comboware- Update Payment Details</title></Head>
      <PaymentManagement />
   </div>
  );
}

TicketDetails.layout = Admin;

export default TicketDetails;
