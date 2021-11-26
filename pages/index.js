import React from 'react';
import Head from 'next/head';
import Home from '../components/Modules/Home';
export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Comboware</title>
      </Head>
      <Home />
    </React.Fragment>
  );
}
