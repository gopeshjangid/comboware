import React from "react";
import Admin from "layouts/Admin.js";

import TicketsManagement from "components/Modules/TicketsManagement/listTickets";
import Head from "next/head";

function TicketList() {

  console.log("list ticket")
  return (
    <div>
      <Head>
        <title>Comboware- Tickets</title>
      </Head>
      <TicketsManagement />
   </div>
  );
}

TicketList.layout = Admin;

export default TicketList;
