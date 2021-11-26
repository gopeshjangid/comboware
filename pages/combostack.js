import React from 'react';
import Head from 'next/head';
import Home from '../components/Modules/Home/Combostack';
export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Combostack</title>
      </Head>
      <Home />
    </React.Fragment>
  );
}
