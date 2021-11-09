import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  Grid,
  Typography,
  Divider,
  List,
  ListItem
} from "@material-ui/core";
//import { ClassRounded, Home } from '@material-ui/icons';
import React from "react";
import Layout from "../Layout";
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
import CombostackBanner from "assets/img/combostack.png";
import StorageImg from "assets/img/storage.png";
import HybridImg from "assets/img/hybrid-cloud.png";
import PublicImg from "assets/img/public-cloud.png";
import PrivateImg from "assets/img/private-cloud.png";
import HighPerformance from  "assets/img/high-performance.png";
import { makeStyles } from "@material-ui/core";
// import { BorderVerticalRounded } from "@material-ui/icons";

const useStyles =  makeStyles(() => ({
    performanceImg : {
      height : '435px'
    },
    performanceTitle : {
        fontSize: '50px',
        color: '#477ad0',
        textAlign: 'justify'
    },
    performanceSubTitle : {
        'text-align': 'left',
        'margin-top': '20px',
        'margin-bottom': '20px',
        color : '#000'
    },
    performanceList: {
        'list-style-type': 'square !important'
    },
    performanceListItem  :{
        color : '#000',
        textAlign : 'left'
    },
    cloudTitle : {
        fontWeight: "600", color: "#000" ,
        fontFamily: 'sans-serif'
    },
  cloudBox : {
    padding : 30
  },
  cloudBoxDetails : {
      marginTop  :20
  },
  productTitle : {
    color : '#000',
    fontSize : 40,
    marginBottom  :25
  }
})

);
export default function Homes(props) {
  const classes = useStyles();

  return (
    <Layout>
      <Grid
        style={{ marginBottom: 40 ,marginTop :20 }}
        container
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Grid xs={12} sm={12} item>
          <Box style={{ textAlign: "center" }} >
            <img
              src={CombostackBanner}
              alt="Logo"
              height="100%"
              width="90%"
              className={classes.firstImage}
            />
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        style={{ marginBottom: 20 }}
        spacing={2}
        container
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Grid xs={12} sm={12} item>
          <Typography
            variant="subtitle2"
            style={{ textAlign: "center"}}
            className={classes.cloudTitle}
          >
            What’s included in Hybrid Infrastructure?
          </Typography>
        </Grid>
        <Grid container xs={12} sm={12} item>
          <Grid xs={12} sm={3} item>
            <Box style={{ textAlign: "center" }} className={classes.cloudBox}>
              <img
                src={PrivateImg}
                alt="Logo"
                height="100%"
                width="90%"
                className={classes.firstImage}
              />
              <Typography
                variant="p"
                component="p"
                style={{ textAlign: "center", color: "#000", fontSize: 20 }}
              >
                Private Cloud
              </Typography>
              <Typography
                component="p"
                variant="p"
                style={{ textAlign: "justify" }}
                className={classes.cloudBoxDetails}
                
              >
                Increase revenue, agility and performance from your data center
                with low cost of ownership.
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item>
            <Box style={{ textAlign: "center" }} className={classes.cloudBox}>
              <img
                src={PublicImg}
                alt="Logo"
                height="100%"
                width="90%"
                className={classes.firstImage}
              />
              <Typography
                variant="p"
                component="p"
                style={{ textAlign: "center", color: "#000", fontSize: 20 }}
              >
                Public Cloud
              </Typography>
              <Typography
                component="p"
                variant="p"
                style={{ textAlign: "justify" }}
                className={classes.cloudBoxDetails}
              >
                 Sell flexible and scalable pay-as-you-go infrastructure services to multiple customers with provisioning that takes only minutes.
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item>
            <Box style={{ textAlign: "center" }} className={classes.cloudBox}>
              <img
                src={HybridImg}
                alt="Logo"
                height="100%"
                width="90%"
                className={classes.firstImage}
              />
              <Typography
                variant="p"
                component="p"
                style={{ textAlign: "center", color: "#000", fontSize: 20 }}
              >
                Hybrid Cloud
              </Typography>
              <Typography
                component="p"
                variant="p"
                style={{ textAlign: "justify" }}
                className={classes.cloudBoxDetails}
              >
                Drive new revenue streams by leveraging public cloud for non-sensitive data and private cloud for business-critical workloads.
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item>
            <Box style={{ textAlign: "center" }} className={classes.cloudBox}>
              <img
                src={StorageImg}
                alt="Logo"
                height="100%"
                width="90%"
                className={classes.firstImage}
              />
              <Typography
                variant="p"
                component="p"
                style={{ textAlign: "center", color: "#000", fontSize: 20 }}
              >
                Storage as a Service
              </Typography>
              <Typography
                component="p"
                variant="p"
                style={{ textAlign: "justify" }}
                className={classes.cloudBoxDetails}
              >
                Deliver scalability with value-adding object, file, and block storage services so your customers don’t need to invest in more on-premises resources.

              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        style={{ marginBottom: 30 ,marginTop :30, paddingTop: 10 }}
        container
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
        spacing={2}
      >


      <Grid xs={12} sm={12} item>
          <Typography style={{ textAlign: "center" }} className={classes.productTitle} >
             Product Features
          </Typography>
        </Grid>
        <Grid xs={12} sm={5} item>
          <Box style={{ textAlign: "center" }} >
            <img
              src={HighPerformance}
              alt="Logo"
              width="90%"
              className={classes.performanceImg}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={7} item>
            <Box style={{ textAlign: "center", display: 'flex', flexDirection : 'column', justifyContent : 'space-between' }}>
              <Typography variant="p" className={classes.performanceTitle}>
                  High-Performance Compute
             </Typography>
             <Typography variant="p" className={classes.performanceSubTitle}>
               High-performance and highly available virtual machines protect your applications and services:
             </Typography>
               <List className={classes.performanceList}>
                    <li className={classes.performanceListItem}>Comboware KVM-based hypervisor</li>
                    <li className={classes.performanceListItem}>VM High availability</li> 
                    <li className={classes.performanceListItem}>Flexible storage policies per VM</li> 
                    <li className={classes.performanceListItem}>Application consistent snapshots</li> 
                    <li className={classes.performanceListItem}>Memory overcommitment</li> 
                    <li className={classes.performanceListItem}>Live migration</li> 
                    <li className={classes.performanceListItem}>Intelligent initial placement</li> 
                    <li className={classes.performanceListItem}>Microsoft SVVP certification</li>
                    <li className={classes.performanceListItem}>Linked clones</li>

               </List>
            </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
