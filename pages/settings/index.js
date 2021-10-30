import React from "react";
import Admin from "layouts/Admin.js";

import SettingsComponent from "components/Modules/Settings";
import Head from "next/head";

function Settings() {

  return (
    <div>
      <Head>
        <title>Comboware- Settings</title>
      </Head>
      <SettingsComponent />
   </div>
  );
}

Settings.layout = Admin;

export default Settings;
