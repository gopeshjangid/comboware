import React from "react";
import Admin from "layouts/Admin.js";

import SettingsComponent from "components/Modules/Support";
import Head from "next/head";

function Support() {

  return (
    <div>
      <Head>
        <title>Comboware- Support</title>
      </Head>
      <SettingsComponent />
   </div>
  );
}

Support.layout = Admin;

export default Support;
