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
  ListItem,
} from "@material-ui/core";
//import { ClassRounded, Home } from '@material-ui/icons';
import React from "react";
import Layout from "../Layout";

import { PrimaryButton, SecondaryButton, WhiteButton } from "../Common/button";
import CombostackBanner from "assets/img/combostack.png";
import StorageImg from "assets/img/storage.png";
import HybridImg from "assets/img/hybrid-cloud.png";
import PublicImg from "assets/img/public-cloud.png";
import PrivateImg from "assets/img/private-cloud.png";
import HighPerformance from "assets/img/high-performance.png";

import DefinedStorageImg from "assets/img/defined-storage.png";
import SelfServiceImg from "assets/img/self-service.png";
import MonitoringImg from "assets/img/monitoring.png";
import NetworkingImg from "assets/img/networking.png";

import SimpllicityImg from "assets/img/simplicity.png";
import ServerPerformanceImg from "assets/img/server-performace.png";
import AvailablityImg from "assets/img/availability.png";
import LowerCostImg from "assets/img/lower-cost.png";
import { makeStyles } from "@material-ui/core";
// import { BorderVerticalRounded } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  performanceImg: {
    height: "435px",
  },
  performanceTitle: {
    fontSize: "50px",
    color: "#477ad0",
    textAlign: "justify",
    "font-family": "sans-serif",
    "font-style": "normal",
    "font-weight": 400,
  },
  performanceSubTitle: {
    "text-align": "left",
    "margin-top": "20px",
    "margin-bottom": "20px",
    color: "#000",
    fontSize: "15px",
    "font-family": "sans-serif",
    "font-style": "normal",
    "font-weight": 400,
  },
  performanceList: {
    "list-style-type": "square !important",
    paddingLeft: "18px",
    lineHeight: "25px",
  },
  performanceListItem: {
    color: "#000",
    textAlign: "left",
    "font-family": "sans-serif",
    "font-style": "normal",
    "font-weight": 500,
  },
  cloudTitle: {
    fontWeight: "600",
    color: "#000",
    fontFamily: "sans-serif",
  },
  cloudBox: {
    padding: 30,
  },
  cloudBoxDetails: {
    marginTop: 20,
  },
  productTitle: {
    color: "#000",
    fontSize: 40,
    marginBottom: 25,
  },
  contentBox: {
    padding: "40px",
    background: "white",
  },
  block: {
    background: "white",
  },
  benefitsTitle: {
    fontSize: 27,
    fontWeight: 500,
    color: "#477ad0",
  },
  tileSubTitle: {
    "font-size": "20px",
    color: 'black',
    "font-weight": 300,
    width: "215px",
    "text-align": "left",
  },
  tileTitle: {
    "font-size": "24px",
    "font-weight": 600,
    color: "black",
  },
  tileimg: {
    height: "130px",
  },
}));
export default function Homes(props) {
  const classes = useStyles();

  return (
    <Layout>
      <Grid
        className={classes.block}
        style={{ marginBottom: 40, marginTop: 0, width: '100%' }}
        container
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
        
      >
        <Grid xs={12} sm={12} item>
          <Box style={{ textAlign: "center" }}>
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
        className={classes.block}
      >
        <Grid xs={12} sm={12} item>
          <Typography
            variant="subtitle2"
            style={{ textAlign: "center" }}
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
                Sell flexible and scalable pay-as-you-go infrastructure services
                to multiple customers with provisioning that takes only minutes.
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
                Drive new revenue streams by leveraging public cloud for
                non-sensitive data and private cloud for business-critical
                workloads.
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
                Deliver scalability with value-adding object, file, and block
                storage services so your customers don’t need to invest in more
                on-premises resources.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        style={{ marginBottom: 30, marginTop: 30, paddingTop: 10 }}
        container
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
        spacing={2}
        className={classes.block}
      >
        <Grid xs={12} sm={12} item>
          <Typography
            style={{ textAlign: "center" }}
            className={classes.productTitle}
          >
            Product Features
          </Typography>
        </Grid>
        <Grid xs={12} sm={5} item>
          <Box style={{ textAlign: "center" }}>
            <img
              src={HighPerformance}
              alt="Logo"
              width="90%"
              className={classes.performanceImg}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={7} item>
          <Box
            className={classes.contentBox}
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="p" className={classes.performanceTitle}>
              High-Performance Compute
            </Typography>
            <Typography variant="p" className={classes.performanceSubTitle}>
              High-performance and highly available virtual machines protect
              your applications and services:
            </Typography>
            <List className={classes.performanceList}>
              <li className={classes.performanceListItem}>
                Comboware KVM-based hypervisor
              </li>
              <li className={classes.performanceListItem}>
                VM High availability
              </li>
              <li className={classes.performanceListItem}>
                Flexible storage policies per VM
              </li>
              <li className={classes.performanceListItem}>
                Application consistent snapshots
              </li>
              <li className={classes.performanceListItem}>
                Memory overcommitment
              </li>
              <li className={classes.performanceListItem}>Live migration</li>
              <li className={classes.performanceListItem}>
                Intelligent initial placement
              </li>
              <li className={classes.performanceListItem}>
                Microsoft SVVP certification
              </li>
              <li className={classes.performanceListItem}>Linked clones</li>
            </List>
          </Box>
        </Grid>
      </Grid>
      <Grid
        className={classes.block}
        style={{ marginBottom: 30, marginTop: 30, paddingTop: 10 }}
        container
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <Grid xs={12} sm={7} item>
          <Box
            className={classes.contentBox}
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="p" className={classes.performanceTitle}>
              Software-Defined Storage
            </Typography>
            <Typography variant="p" className={classes.performanceSubTitle}>
              Combostack Storage uses your server disk drives to create
              clustered storage and keep your data safe:
            </Typography>
            <List className={classes.performanceList}>
              <li className={classes.performanceListItem}>
                All-Flash, Hybrid with Tiering
              </li>
              <li className={classes.performanceListItem}>
                Replication and Erasure Coding
              </li>
              <li className={classes.performanceListItem}>
                Block storage via iSCSI
              </li>
              <li className={classes.performanceListItem}>
                Amazon S3 compatible Object Storage s
              </li>
              <li className={classes.performanceListItem}>
                File storage via NFS
              </li>
              <li className={classes.performanceListItem}>
                High performance with InfiniBand and RDMA
              </li>
            </List>
          </Box>
        </Grid>
        <Grid xs={12} sm={5} item>
          <Box style={{ textAlign: "center" }}>
            <img
              src={DefinedStorageImg}
              alt="Logo"
              width="90%"
              className={classes.performanceImg}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid
        style={{ marginBottom: 30, marginTop: 30, paddingTop: 10 }}
        container
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
        spacing={2}
        className={classes.block}
      >
        <Grid xs={12} sm={12} item></Grid>
        <Grid xs={12} sm={5} item>
          <Box style={{ textAlign: "center" }}>
            <img
              src={NetworkingImg}
              alt="Logo"
              width="90%"
              className={classes.performanceImg}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={7} item>
          <Box
            className={classes.contentBox}
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="p" className={classes.performanceTitle}>
              Software-Defined Networking
            </Typography>
            <Typography variant="p" className={classes.performanceSubTitle}>
              Full virtual private networking and virtual distributed switching
            </Typography>
            <List className={classes.performanceList}>
              <li className={classes.performanceListItem}>Virtual Networks</li>
              <li className={classes.performanceListItem}>
                Distributed switching
              </li>
              <li className={classes.performanceListItem}>Virtual routing</li>
              <li className={classes.performanceListItem}>
                Network address translation (SNAT/DNAT)
              </li>
              <li className={classes.performanceListItem}>
                Integrated DHCP and IP management
              </li>
              <li className={classes.performanceListItem}>
                Load Balancing as a Service
              </li>
              <li className={classes.performanceListItem}>Security Groups</li>
            </List>
          </Box>
        </Grid>
      </Grid>
      <Grid
        style={{ marginBottom: 30, marginTop: 30, paddingTop: 10 }}
        container
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
        spacing={2}
        className={classes.block}
      >
        <Grid xs={12} sm={7} item>
          <Box
            className={classes.contentBox}
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="p"
              style={{ textAlign: "left" }}
              className={classes.performanceTitle}
            >
              Management with Advanced Monitoring
            </Typography>
            <Typography variant="p" className={classes.performanceSubTitle}>
              Clustered management for all components
            </Typography>
            <List className={classes.performanceList}>
              <li className={classes.performanceListItem}>
                Single management console
              </li>
              <li className={classes.performanceListItem}>
                Clustered management without single point of failure
              </li>
              <li className={classes.performanceListItem}>
                Web-Console for VMs
              </li>
              <li className={classes.performanceListItem}>
                100% Open Stack compatible API
              </li>
              <li className={classes.performanceListItem}>
                Advanced monitoring based on Prometheus and Grafana
              </li>
              <li className={classes.performanceListItem}>
                Automated centralized updates
              </li>
              <li className={classes.performanceListItem}>Maintenance mode</li>
            </List>
          </Box>
        </Grid>
        <Grid xs={12} sm={5} item>
          <Box style={{ textAlign: "center" }}>
            <img
              src={MonitoringImg}
              alt="Logo"
              width="90%"
              className={classes.performanceImg}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        style={{ marginBottom: 30, marginTop: 30, paddingTop: 10 }}
        container
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
        spacing={2}
        className={classes.block}
      >
        <Grid xs={12} sm={5} item>
          <Box style={{ textAlign: "center" }}>
            <img
              src={SelfServiceImg}
              alt="Logo"
              width="90%"
              className={classes.performanceImg}
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={7} item>
          <Box
            className={classes.contentBox}
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="p"
              style={{ textAlign: "left" }}
              className={classes.performanceTitle}
            >
              Multitenancy and Self-Service
            </Typography>
            <Typography variant="p" className={classes.performanceSubTitle}>
              Multitenancy to build isolated Virtual Datacenter
            </Typography>
            <List className={classes.performanceList}>
              <li className={classes.performanceListItem}>
                Self-Service portal for tenant user
              </li>
              <li className={classes.performanceListItem}>
                Integration with custom Self-service portals by API
              </li>
              <li className={classes.performanceListItem}>
                Isolated private networks for each tenant
              </li>
              <li className={classes.performanceListItem}>
                RBAC model for tenants
              </li>
              <li className={classes.performanceListItem}>
                Multiple billing models
              </li>
            </List>
          </Box>
        </Grid>
      </Grid>

      <Grid
        style={{ marginBottom: 30, marginTop: 30, paddingTop: 10 }}
        container
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
        spacing={2}
        className={classes.block}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography
            variant="p"
            style={{ textAlign: "center" }}
            className={classes.benefitsTitle}
          >
            Benefits of ComboStack’s Hybrid Infrastructure
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Box
            style={{
              textAlign: "center",
              display: "flex",
              padding: 40,
              "justify-content": "center",
            }}
          >
            <Box className={classes.tileimg} style={{ textAlign: "center" }}>
              <img
                src={SimpllicityImg}
                alt="Logo"
                width="90%"
                className={classes.tileimg}
              />
            </Box>
            <Box
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "140px",
                marginLeft: "2%",
                "align-items": "flex-start",
              }}
            >
              <Typography variant="p" className={classes.tileTitle}>
                Simplicity
              </Typography>
              <Typography variant="p" className={classes.tileSubTitle}>
                Reduce the Complexity of IT Operations
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Box
            style={{
              textAlign: "center",
              display: "flex",
              padding: 40,
              "justify-content": "center",
            }}
          >
            <Box className={classes.tileimg} style={{ textAlign: "center" }}>
              <img
                src={AvailablityImg}
                alt="Logo"
                width="90%"
                className={classes.tileimg}
              />
            </Box>
            <Box
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "140px",
                marginLeft: "2%",
                "align-items": "flex-start",
              }}
            >
              <Typography variant="p" className={classes.tileTitle}>
              Simplified High Availability
              </Typography>
              <Typography variant="p" className={classes.tileSubTitle}>
              Recover systems from server or component failure automatically 

              </Typography>
            </Box>
          </Box>
        </Grid>
      
        <Grid xs={12} sm={6} item>
          <Box
            style={{
              textAlign: "center",
              display: "flex",
              padding: 40,
              "justify-content": "center",
            }}
          >
            <Box className={classes.tileimg} style={{ textAlign: "center" }}>
              <img
                src={LowerCostImg}
                alt="Logo"
                width="90%"
                className={classes.tileimg}
              />
            </Box>
            <Box
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "140px",
                marginLeft: "2%",
                "align-items": "flex-start",
              }}
            >
              <Typography variant="p" className={classes.tileTitle}>
              Lower Costs

              </Typography>
              <Typography variant="p" className={classes.tileSubTitle}>
              Drop CapEx and OpEx drastically
              </Typography>
            </Box>
          </Box>
        </Grid>
      
        <Grid xs={12} sm={6} item>
          <Box
            style={{
              textAlign: "center",
              display: "flex",
              padding: 40,
              "justify-content": "center",
            }}
          >
            <Box className={classes.tileimg} style={{ textAlign: "center" }}>
              <img
                src={ServerPerformanceImg}
                alt="Logo"
                width="90%"
                className={classes.tileimg}
              />
            </Box>
            <Box
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "140px",
                marginLeft: "2%",
                "align-items": "flex-start",
              }}
            >
              <Typography variant="p" className={classes.tileTitle}>
              Increased Server Performance 

              </Typography>
              <Typography variant="p" className={classes.tileSubTitle}>
              Get the most out of your infrastructure resources with Combostack and highly scalable storage 

              </Typography>
            </Box>
          </Box>
        </Grid>
      
      </Grid>
    </Layout>
  );
}
