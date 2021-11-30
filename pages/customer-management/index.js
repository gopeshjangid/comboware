import Admin from 'layouts/Admin.js';
import Head from 'next/head';
import React from 'react';
import CustomerManagement from '../../components/Modules/CustomerManagement';

const Customer = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Comboware- Customer Management</title>
      </Head>
      <CustomerManagement />
    </React.Fragment>
  );
};

Customer.layout = Admin;

export default Customer;
