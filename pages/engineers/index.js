import EngineersComponent from 'components/Modules/Engineers';
import Admin from 'layouts/Admin.js';
import Head from 'next/head';
import React from 'react';

const Engineers = () => {
  return (
    <div>
      <Head>
        <title>Comboware- Engineers</title>
      </Head>
      <EngineersComponent />
    </div>
  );
};

Engineers.layout = Admin;

export default Engineers;
