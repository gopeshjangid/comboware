import React from "react";
import Admin from "layouts/Admin.js";

import NewPayment from "components/Modules/Payment/newPayment";
import Head from "next/head";


function Ticket() {
  return (
    <div>
      <Head><title>Comboware- New Payment</title></Head>
      <NewPayment />
   </div>
  );
}

Ticket.layout = Admin;

export default Ticket;
