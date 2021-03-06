import TicketsManagement from 'components/Modules/TicketsManagement/listTickets';
import Admin from 'layouts/Admin.js';
import Head from 'next/head';
import React from 'react';

function TicketList() {
  return (
    <React.Fragment>
      <Head>
        <title>Comboware- Tickets</title>
      </Head>
      <TicketsManagement />
    </React.Fragment>
  );
}

TicketList.layout = Admin;

export default TicketList;
