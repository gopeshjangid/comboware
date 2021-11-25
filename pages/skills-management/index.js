import EngineersComponent from 'components/Modules/SkillsManagement';
import Admin from 'layouts/Admin.js';
import Head from 'next/head';
import React from 'react';

const Engineers = () => {
  return (
    <div>
      <Head>
        <title>Comboware- Skills Management</title>
      </Head>
      <EngineersComponent />
    </div>
  );
};

Engineers.layout = Admin;

export default Engineers;
