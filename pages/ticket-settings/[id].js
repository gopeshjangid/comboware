import React from 'react';
import Admin from 'layouts/Admin.js';
import TicketsManagement from 'components/Modules/TicketsManagement/ticketDetails';
import Head from 'next/head';
import Layout from 'components/Layout';
function TicketDetails() {
  return (
    <React.Fragment>
      <Head>
        <title>Comboware- Update Details</title>
      </Head>
      <Layout>
        <TicketsManagement />
      </Layout>
    </React.Fragment>
  );
}

TicketDetails.layout = Admin;

export default TicketDetails;
