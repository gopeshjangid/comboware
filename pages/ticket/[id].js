import React from "react";
import Admin from "layouts/Admin.js";
import TicketsManagement from "components/Modules/TicketsManagement/TicketDetails";
import Head from "next/head";

function TicketDetails() {
  return (
    <div>
      <Head><title>Comboware- Update Details</title></Head>
      <TicketsManagement />
   </div>
  );
}

TicketDetails.layout = Admin;

export default TicketDetails;