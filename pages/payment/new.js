import React from 'react';
import Admin from 'layouts/Admin.js';

import NewPayment from 'components/Modules/Payment/newPayment';
import Head from 'next/head';

function Ticket() {
  return (
    <React.Fragment>
      <Head>
        <title>Comboware- New Payment</title>
      </Head>
      <NewPayment />
    </React.Fragment>
  );
}

Ticket.layout = Admin;

export default Ticket;
