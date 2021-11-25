import React from 'react';
import Admin from 'layouts/Admin.js';

import SettingsComponent from 'components/Modules/Support';
import Head from 'next/head';

function Support() {
  return (
    <React.Fragment>
      <Head>
        <title>Comboware- Support</title>
      </Head>
      <SettingsComponent />
    </React.Fragment>
  );
}

Support.layout = Admin;

export default Support;
