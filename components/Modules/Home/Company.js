import {
  Box,
  List,
  ListItem,
  Divider,
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  Grid,
  Typography,
  Avatar,
  TextField,
} from "@material-ui/core";
//import { ClassRounded, Home } from '@material-ui/icons';
import React from "react";
import Layout from "../Layout";
import homeImg from "assets/img/home1.png";
import {
  Airplay,
  Work,
  Lock,
  AccountCircle,
  Contacts,
  MailOutline,
  Call,
} from "@material-ui/icons";
import Dynamic from "next/dynamic";
import { PrimaryButton, SecondaryButton, WhiteButton } from "../Common/button";
import Testimonal from "./Testimonal";
import CompanyBanner from "assets/img/company-middle.png";
import WhiteS from "assets/img/brand-logo-white-s.png";
import BlueS from "assets/img/brand-logo-blue-s.png";
import WhiteB from "assets/img/brand-logo-white-b.png";
import BlueB from "assets/img/brand-logo-blue-b.png";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  intro: {
    "line-height": "36px",
    color: "black",
  },
  title: {
    fontSize: 20,
    color: "black",
    marginBottom: 20,
  },
  centerImag  :{
      width : '80%'
  },
  boxHeading : {
    color: '#477ad0',
    'font-size': '40px',
    fontWeight : 500
  },
  boxModal : {
      padding: 42
  },
  list: {
    "list-style-type": "square !important",
    paddingLeft: "18px",
    lineHeight: "35px",
  },
  listItem : {
      color :'black',
      fontSize: 15
  },
  imageBox : {
          width : '50%',
          margin : '0 auto'
  }

}));
export default function Homes(props) {
  const classes = useStyles();

  return (
    <Layout>
      <Grid
        container
        xs={12}
        sm={12}
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Box p="40px">
          <Typography className={classes.title}>About us</Typography>
          <Typography className={classes.intro}>
            Comboware was founded in Silicon Valley. It is a ComboStack cloud
            platform that breaks the traditional tedious work steps and meets
            the innovative system solutions needed by enterprises. The
            underlying technology has been running for 20 years. It has
            integrated IaaS & SaaS systems. Comboware also has its own IDC
            computer room provides ComboCloud cloud service. Customers can
            choose to go to the cloud or build services on the ground, allowing
            enterprises to choose the application system or software they need
            on one platform, and provide uninterrupted operation and remote
            office On demand, customers can use their own private cloud with
            peace of mind, or they can connect to the public cloud to turn it
            into a hybrid cloud architecture. Users only need to complete
            operations in the same user interface while integrating the services
            of other partner vendors. It only requires simple steps to complete
            the deployment and solve the complex difficulties of the system.
            Customers can achieve IT maintenance and remote operation at the
            same time without time and domain restrictions, and even save costs
            and human resources for the enterprise.
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        className={classes.secondBox}
        justifyContent="center"
        direction="column"
        alignItems="center"
      >
        <Grid xs={12} sm={12} item className={classes.midHeading}>
          <Box textAlign="center">
            <img
              src={CompanyBanner}
              alt={CompanyBanner}
              height="100%"
              width="100%"
              className={classes.centerImag}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Grid xs={12} sm={6} className={classes.firstBoxImage}>
          <Box className={classes.boxModal}>
            <Typography
              variant="h3"
              component="h3"
              gutterBottom
              className={classes.boxHeading}
            >
              Software Stack Positioning
            </Typography>
            <List className={classes.list}>
              <li className={classes.listItem}>1:1 binary compatible RHEL rebuild</li>
              <li className={classes.listItem}>Upstream KVM</li>
              <li className={classes.listItem}>Optimized KVM with better performance</li>
              <li className={classes.listItem}>System containers</li>
              <li className={classes.listItem}>
                Optimized system containers with better performance and density
              </li>
              <li className={classes.listItem}>API Management</li>
              <li className={classes.listItem}>CLI Management</li>
              <li className={classes.listItem}>UI Management</li>
              <li className={classes.listItem}>Third-party software integrations</li>
            </List>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} className={classes.firstBoxImage}>
          <Box className={classes.boxModal}>
            <Typography
              variant="h3"
              component="h3"
              gutterBottom
              className={classes.boxHeading}
            >
              {" "}
              What We Do
            </Typography>
            <List className={classes.list}>
              <li className={classes.listItem}>
                It can be a hybrid cloud, a private cloud can be built on the
                enterprise side, and a private cloud service can be provided in
                IDC.
              </li>
              <li className={classes.listItem}>
                Built-in Kubernetes environment can be used without additional
                setup.
              </li>
              <li className={classes.listItem}>
                The built-in package helps you package various software, system
                functions, object storage S3, virtualized computing, virtualized
                distributed storage iSCSI, virtualized backup redundancy, server
                load balancing, and software-defined network SDN.
              </li>
              <li className={classes.listItem}>
                Provide service services for corporate Mail, cloud hard drives,
                CRM, and ERP.
              </li>
              <li className={classes.listItem}>
                Provide IaaS cloud maintenance and operation services, provide
                cloud maintenance and operation service personnel, and help
                enterprises manage cloud systems for IaaS.
              </li>
            </List>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
        style={{marginTop :20}}
        className={classes.bannerImageContainer}
      >
        <Grid
        container
        item xs={12} sm={6} style={{textAlign : 'center'}} >
          <img
            src={WhiteS}
            alt={WhiteS}
            className={classes.imageBox}
          />
        </Grid>
        <Grid
        container
        style={{textAlign : 'center'}}
        item xs={12} sm={6} >
          <img
            src={BlueS}
            alt={BlueS}
            className={classes.imageBox}
          />
        </Grid>
        <Grid
        container
        style={{textAlign : 'center'}}
        item xs={12}  sm={6} >
          <img
            src={WhiteB}
            alt={WhiteB}
            className={classes.imageBox}
          />
        </Grid>
        <Grid
        container
        style={{textAlign : 'center'}}
        item xs={12} sm={6} >
          <img
            src={BlueB}
            alt={BlueB}
            className={classes.imageBox}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
