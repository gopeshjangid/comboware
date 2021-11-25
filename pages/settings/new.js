import TicketsManagement from 'components/Modules/TicketsManagement/newTicket';
// @material-ui/icons
// layout for this page
import Admin from 'layouts/Admin.js';
import Head from 'next/head';
import React from 'react';


function Ticket() {
  return (
    <React.Fragment>
      <Head>
        <title>Comboware- New Ticket</title>
      </Head>
      <TicketsManagement />
    </React.Fragment>
  );
}

Ticket.layout = Admin;

export default Ticket;
