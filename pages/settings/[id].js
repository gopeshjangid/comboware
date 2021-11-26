import React from 'react';
import Admin from 'layouts/Admin.js';
import TicketsManagement from 'components/Modules/TicketsManagement/ticketDetails';
import Head from 'next/head';

function TicketDetails() {
  return (
    <React.Fragment>
      <Head>
        <title>Comboware- Update Details</title>
      </Head>
      <TicketsManagement />
    </React.Fragment>
  );
}

TicketDetails.layout = Admin;

export default TicketDetails;
