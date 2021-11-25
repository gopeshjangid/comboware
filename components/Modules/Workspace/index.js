import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextInput from  "../../CustomInput";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Workspace() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={6}>
      <Card>
          <CardHeader >
            dsadadasdasd
          </CardHeader>
          <CardBody>
            <TextInput labelText="Name" />
            
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={6}>
        </GridItem>
  </GridContainer>
  );
}


export default Workspace;
