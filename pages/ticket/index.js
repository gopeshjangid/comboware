import React from "react";
import Admin from "layouts/Admin.js";

import TicketsManagement from "components/Modules/TicketsManagement/listTickets";
import Head from "next/head";
import Layout from  "components/Layout";
function TicketList() {

  return (
    <div>
      <Head>
        <title>Comboware- Tickets</title>
      </Head>
      <Layout>
         <TicketsManagement />
      </Layout>
     
   </div>
  );
}

TicketList.layout = Admin;

export default TicketList;
