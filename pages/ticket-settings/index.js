import TicketCategoriesManagement from 'components/Modules/TicketsManagement/ticketCategoriesManagement';
import Admin from 'layouts/Admin.js';
import Head from 'next/head';
import React from 'react';

function TicketList() {
  return (
    <React.Fragment>
      <Head>
        <title>Comboware- Tickets</title>
      </Head>
      <TicketCategoriesManagement />
    </React.Fragment>
  );
}

TicketList.layout = Admin;

export default TicketList;
