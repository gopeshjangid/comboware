import React from "react";
import Admin from "layouts/Admin.js";
import TicketsManagement from "components/Modules/TicketsManagement/ticketDetails";
import Head from "next/head";
import Layout from  "components/Layout";
function TicketDetails() {
  return (
    <div>
      <Head><title>Comboware- Update Details</title></Head>
      <Layout>
        <TicketsManagement />
      </Layout>
     
   </div>
  );
}

TicketDetails.layout = Admin;

export default TicketDetails;
