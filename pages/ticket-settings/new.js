import React from 'react';
import Admin from 'layouts/Admin.js';

import TicketsManagement from 'components/Modules/TicketsManagement/newTicket';
import Head from 'next/head';
import Layout from 'components/Layout';

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
