import React from 'react';
import Head from 'next/head';
import Company from '../components/Modules/Home/Company';
export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Company</title>
      </Head>
      <Company />
    </React.Fragment>
  );
}
