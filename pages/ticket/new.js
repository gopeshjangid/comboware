import React from "react";
import Admin from "layouts/Admin.js";

import TicketsManagement from "components/Modules/TicketsManagement/newTicket";
import Head from "next/head";
import Layout from  "components/Layout";

function Ticket() {
  return (
    <div>
      <Head><title>Comboware- New Ticket</title></Head>
      <Layout>
         <TicketsManagement />
      </Layout>
     
   </div>
  );
}

Ticket.layout = Admin;

export default Ticket;
