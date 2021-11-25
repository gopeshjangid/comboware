import React from 'react';
import Head from 'next/head';
import Home from '../components/Modules/Home/Engineero';
export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Comboware- Engineero</title>
      </Head>
      <Home />
    </React.Fragment>
  );
}
