import React from "react";
import Admin from "layouts/Admin.js";

import PaymentLists from "components/Modules/Payment/listPayments";
import Head from "next/head";

function TicketList() {

  return (
    <div>
      <Head>
        <title>Comboware- Payments</title>
      </Head>
      <PaymentLists />
   </div>
  );
}

TicketList.layout = Admin;

export default TicketList;
