import React from "react";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TicketsManagement from "components/Modules/TicketsManagement/newTicket";
import Head from "next/head";


function Ticket() {
  return (
    <div>
      <Head><title>Comboware- New Ticket</title></Head>
      <TicketsManagement />
   </div>
  );
}

Ticket.layout = Admin;

export default Ticket;
