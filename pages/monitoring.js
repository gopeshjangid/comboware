import React from "react";
import Monitoring from  "../components/Modules/Monitoring";
import Head from  "next/head";
import Admin from "layouts/Admin.js";
 function Monitoring1() {

  return <><Head><title>Comboware-monitoring</title></Head><Monitoring /> </>;
}


Monitoring1.layout = Admin;

export default Monitoring1;