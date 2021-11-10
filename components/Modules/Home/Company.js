import { Box, List, ListItem, Divider, Button, Card, CardContent, CardHeader, Link, Grid, Typography, Avatar, TextField } from '@material-ui/core';
//import { ClassRounded, Home } from '@material-ui/icons';
import React from 'react';
import Layout from '../Layout';
import useStyle from './style';
import homeImg from "assets/img/home1.png";
import { Airplay, Work, Lock, AccountCircle, Contacts, MailOutline, Call } from '@material-ui/icons';
import Dynamic from  "next/dynamic";
import { PrimaryButton, SecondaryButton, WhiteButton } from '../Common/button';
import Testimonal from './Testimonal';
import CompanyBanner from 'assets/img/company-middle.png';
import WhiteS from 'assets/img/brand-logo-white-s.png';
import BlueS from 'assets/img/brand-logo-blue-s.png';
import WhiteB from 'assets/img/brand-logo-white-b.png';
import BlueB from 'assets/img/brand-logo-blue-b.png';

export default function Homes(props) {
    const classes = useStyle();

    return (
        <Layout>
            <Grid container xs={12} sm={12} item justifyContent="center" direction='row' alignItems="center">
                    <Box>
                        <Typography>
                        Comboware was founded in Silicon Valley. It is a ComboStack cloud platform that breaks the traditional tedious work steps and meets the innovative system solutions needed by enterprises. The underlying technology has been running for 20 years. It has integrated IaaS & SaaS systems. Comboware also has its own IDC computer room provides ComboCloud cloud service. Customers can choose to go to the cloud or build services on the ground, allowing enterprises to choose the application system or software they need on one platform, and provide uninterrupted operation and remote office On demand, customers can use their own private cloud with peace of mind, or they can connect to the public cloud to turn it into a hybrid cloud architecture. Users only need to complete operations in the same user interface while integrating the services of other partner vendors. It only requires simple steps to complete the deployment and solve the complex difficulties of the system. Customers can achieve IT maintenance and remote operation at the same time without time and domain restrictions, and even save costs and human resources for the enterprise.
                        </Typography>
                    </Box>
            </Grid>
            <Grid container className={classes.secondBox} justifyContent="center" direction='column' alignItems="center">
                <Grid xs={12} sm={12} item className={classes.midHeading}>
                    <Box>
                        <img src={CompanyBanner} alt={CompanyBanner} height='100%' width="100%" className={classes.bannerImage1} />
                    </Box>
                </Grid>
            </Grid>
            
            <Grid container justifyContent="center" direction='row' alignItems="center">
                <Grid xs={6} sm={6} className={classes.firstBoxImage}>
                    <Box className={classes.firstLeftBox}>
                        <Typography variant="h3" component="h3" gutterBottom className={classes.banenrHeading}>Software Stack Positioning</Typography>
                        <List>
                            <ListItem>1:1 binary compatible RHEL rebuild</ListItem>
                            <ListItem>Upstream KVM</ListItem>
                            <ListItem>Optimized KVM with better performance</ListItem>
                            <ListItem>System containers</ListItem>
                            <ListItem>Optimized system containers with better performance and density</ListItem>
                            <ListItem>API Management</ListItem>
                            <ListItem>CLI Management</ListItem>
                            <ListItem>UI Management</ListItem>
                            <ListItem>Third-party software integrations</ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid xs={6} sm={6} className={classes.firstBoxImage}>
                    <Box className={classes.firstLeftBox}>
                        <Typography variant="h3" component="h3" gutterBottom className={classes.banenrHeading}> What We Do</Typography>
                        <List>
                            <ListItem>It can be a hybrid cloud, a private cloud can be built on the enterprise side, and a private cloud service can be provided in IDC.</ListItem>
                            <ListItem>Built-in Kubernetes environment can be used without additional setup.</ListItem>
                            <ListItem>The built-in package helps you package various software, system functions, object storage S3, virtualized computing, virtualized distributed storage iSCSI, virtualized backup redundancy, server load balancing, and software-defined network SDN.</ListItem>
                            <ListItem>Provide service services for corporate Mail, cloud hard drives, CRM, and ERP.</ListItem>
                            <ListItem>Provide IaaS cloud maintenance and operation services, provide cloud maintenance and operation service personnel, and help enterprises manage cloud systems for IaaS.</ListItem>
                        </List>
                    </Box>
                </Grid>
            </Grid>
            <Grid  container item justifyContent="center" direction='row' alignItems="center" className={classes.bannerImageContainer}>
                    <Box xs={3} className={classes.bannerImageBox}>
                        <img src={WhiteS} alt={WhiteS} height='75%' width="75%" className={classes.bannerImage1} />
                    </Box>
                    <Box xs={3} className={classes.bannerImageBox}>
                        <img src={BlueS} alt={BlueS} height='35%' width="75%" className={classes.bannerImage2} />
                    </Box>
                    <Box xs={3} className={classes.bannerImageBox}>
                        <img src={WhiteB} alt={WhiteB} height='75%' width="35%" className={classes.bannerImage3} />
                    </Box>
                    <Box xs={3} className={classes.bannerImageBox}>
                        <img src={BlueB} alt={BlueB} height='35%' width="75%" className={classes.bannerImage2} />
                    </Box>
            </Grid>
        </Layout >)
}