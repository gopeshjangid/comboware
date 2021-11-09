import { Box, Button, Card, CardContent, CardHeader, Link, Grid, Typography, Avatar, TextField } from '@material-ui/core';
//import { ClassRounded, Home } from '@material-ui/icons';
import React from 'react';
import Layout from '../Layout';
import useStyle from './style';
import homeImg from "assets/img/home1.png";
import { Airplay, Work, Lock, AccountCircle, Contacts, MailOutline, Call } from '@material-ui/icons';
import Dynamic from  "next/dynamic";
import { PrimaryButton, SecondaryButton, WhiteButton } from '../Common/button';
import Testimonal from './Testimonal';
import Banner1 from 'assets/img/6.png';
import Banner2 from 'assets/img/5.png';
import Banner3 from 'assets/img/4.png';
import Banner4 from 'assets/img/3.png';
import Banner5 from 'assets/img/2.png';
import Banner6 from 'assets/img/1.png';

import comboTSackCloud from  "assets/img/combostack-cloud.jpeg";
import EngineerPerformance from  "assets/img/engineer-mainatanence-platform.png";
import customerServiceImg from  "assets/img/customer-service.png";
 
const ChatSystem = Dynamic(() => import("../../Chat"));
import Banner from "./banner";
const bannerImaeges = [
    Banner1, Banner2, Banner3, Banner4, Banner5, Banner6
]
export default function Homes(props) {
    const classes = useStyle();

    return (
        <Layout>
            <Banner />
            <Grid container className={classes.secondBox} justifyContent="center" direction='column' alignItems="center" spacing={20}>
                <Grid xs={12} item className={classes.midHeading}>
                    Trusted by smartest companies around the world
                </Grid>
                <Grid  container item alignItems="center" className={classes.bannerImageContainer}>
                    <Box xs={1} className={classes.bannerImageBox}>
                        <img src={Banner1} alt={Banner1} height='75%' width="75%" className={classes.bannerImage1} />
                    </Box>
                    <Box xs={1} className={classes.bannerImageBox}>
                        <img src={Banner3} alt={Banner3} height='35%' width="75%" className={classes.bannerImage2} />
                    </Box>
                    <Box xs={1} className={classes.bannerImageBox}>
                        <img src={Banner2} alt={Banner2} height='75%' width="35%" className={classes.bannerImage3} />
                    </Box>
                    <Box xs={1} className={classes.bannerImageBox}>
                        <img src={Banner4} alt={Banner4} height='35%' width="75%" className={classes.bannerImage2} />
                    </Box>
                    <Box xs={1} className={classes.bannerImageBox}>
                        <img src={Banner5} alt={Banner5} height='75%' width="35%" className={classes.bannerImage3} />
                    </Box>
                    <Box xs={1} className={classes.bannerImageBox}>
                        <img src={Banner6} alt={Banner6} height='35%' width="75%" className={classes.bannerImage2} />
                    </Box>

                </Grid>
            </Grid>
            
            <Grid container className={classes.backgroundColorPeach} justifyContent="center" direction='row' alignItems="center">
               
                <Grid xs={6} sm={6}>
                    <Box className={classes.boxHeading1}>
                     <Box className={classes.firstLeftBox}>
                        <Typography variant="h3" component="h3" gutterBottom className={classes.banenrHeading}>
                          COMBOSTACK CLOUD
                        </Typography>
                        <Typography color="secondary" variant="subtitle2" component="h6" gutterBottom className={classes.bannerSubHeading}>
                        The platform has basic dashboard functions, a hyper-converged architecture, can use hybrid cloud, and can achieve permission control and management classification, which is very effective to help IT personnel manage.##The view more button needs to take Combostack  ##
                        </Typography>
                        <PrimaryButton variant="contained" className={classes.marginTop10}>
                            VIEW MORE
                        </PrimaryButton>
                    </Box>
                    </Box>
                </Grid>
                <Grid xs={6} sm={6} className={classes.firstBoxImage, classes.imageLeftThird}>
                    <img src={comboTSackCloud} alt="Logo" height='100%' width="75%" className={classes.firstImage} />
                </Grid>
            </Grid>
           
            <Grid container className={classes.backgroundColorPeach} justifyContent="center" direction='row' alignItems="center">
               
               <Grid xs={6} sm={6}>
                   <Box className={classes.boxHeading1}>
                    <Box className={classes.firstLeftBox}>
                       <Typography variant="h3" component="h3" gutterBottom className={classes.banenrHeading}>
                       EnginerO Maintanance Platofrm
                       </Typography>
                       <Typography color="secondary" variant="subtitle2" component="h6" gutterBottom className={classes.bannerSubHeading}>
                       Customers can directly report for repairs online on this platform, eliminating the trouble of finding no one. The engineers on this platform can also easily maintain their needs for customers
                       </Typography>
                       <PrimaryButton variant="contained" className={classes.marginTop10}>
                           VIEW MORE
                       </PrimaryButton>
                   </Box>
                   </Box>
               </Grid>
               <Grid xs={6} sm={6} className={classes.firstBoxImage, classes.imageLeftThird}>
                   <img src={EngineerPerformance} alt="Logo" height='100%' width="75%" className={classes.firstImage} />
               </Grid>
           </Grid>

           <Grid container className={classes.backgroundColorPeach} justifyContent="center" direction='row' alignItems="center">
               <Grid xs={6} sm={6} className={classes.firstBoxImage, classes.imageLeftThird}>
                   <img src={customerServiceImg} alt="Logo" height='100%' width="75%" className={classes.firstImage} />
               </Grid>
               <Grid xs={6} sm={6}>
                   <Box className={classes.boxHeading1}>
                    <Box className={classes.firstLeftBox}>
                       <Typography variant="h3" component="h3" gutterBottom className={classes.banenrHeading}>
                         Customer Service 
                       </Typography>
                       <Typography color="secondary" variant="subtitle2" component="h6" gutterBottom className={classes.bannerSubHeading}>
                       Customers can easily use the system to apply for repairs, so that engineers can assist them. In addition, not all companies have engineers. At this time, it is very convenient to apply for repairs by yourself. 

                        </Typography>
                       <PrimaryButton variant="contained" className={classes.marginTop10}>
                           VIEW MORE
                       </PrimaryButton>
                   </Box>
                   </Box>
               </Grid>
              
           </Grid>
        
            <Grid container className={classes.secondBox} justifyContent='center' direction='row' alignItems='center'>
                <Box style={{ flexDirection: 'row', display: 'flex', margin: 'auto' }}>
                    <Box style={{ width: '50%', padding: '20px', marginLeft: '100px' }}>
                        <Typography variant='p' component='p' className={classes.boxHeading2}>
                            CONTACT
                        </Typography>
                        <Typography varivariant="h1" component="h1" align="left" className={classes.boxHeading3} style={{ color: '#0F1634' }}>
                            SCHEDULE A CALL
                        </Typography>
                        <Typography variant="hh6" component="h6" align="left" className={classes.fontSize12}>
                            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Duis ultrices nunc a quam gravida ornare. Proin imperdie vel risus eget frin, unc ut posuere urna, vitae sodal
                        </Typography>
                        <Box style={{ gridTemplateColumns: 'auto auto', display: 'inline-grid', margin: 'auto', marginTop: '20px' }}>
                            <Box>
                                <AccountCircle style={{ color: 'white' }} className={classes.contactImage} fontSize='large' />
                            </Box>
                            <Box style={{ margin: 'auto', marginLeft: '10px', fontWeight: 'bold', fontSize: '25px' }}>name</Box>
                        </Box><br />
                        <Box style={{ gridTemplateColumns: 'auto auto', display: 'inline-grid', margin: 'auto', marginTop: '20px' }}>
                            <Box>
                                <Contacts style={{ color: 'white' }} className={classes.contactImage} fontSize='large' />
                            </Box>
                            <Box style={{ margin: 'auto', marginLeft: '10px', fontWeight: 'bold', fontSize: '25px' }}>Company Name</Box>
                        </Box><br />
                        <Box style={{ gridTemplateColumns: 'auto auto', display: 'inline-grid', margin: 'auto', marginTop: '20px' }}>
                            <Box>
                                <MailOutline style={{ color: 'white' }} className={classes.contactImage} fontSize='large' />
                            </Box>
                            <Box style={{ margin: 'auto', marginLeft: '10px', fontWeight: 'bold', fontSize: '25px' }}>sales@comboware.com.tw</Box>
                        </Box><br />
                        <Box style={{ gridTemplateColumns: 'auto auto', display: 'inline-grid', margin: 'auto', marginTop: '20px' }}>
                            <Box>
                                <Call style={{ color: 'white' }} className={classes.contactImage} fontSize='large' />
                            </Box>
                            <Box style={{ margin: 'auto', marginLeft: '10px', fontWeight: 'bold', fontSize: '25px' }}>+886-2-8773-0263</Box>
                        </Box>
                    </Box>
                    <Box style={{ width: '50%', padding: '20px' }}>
                        <Box style={{ width: '70%', boxShadow: '0px 20px 60px rgb(39 112 236 / 20%)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                            <input type='text' style={{ border: '2px solid rgba(39, 112, 236, 0.3)', boxSizing: 'border-box', boxShadow: '0px 5px 15px rgba(39, 112, 236, 0.13)', borderRadius: '10px', width: '100%', height: '50px', padding: '10px' }} placeholder='Subject' />
                            <textarea id="w3review" name="w3review" rows="12" cols="50" style={{ border: '2px solid rgba(39, 112, 236, 0.3)', boxSizing: 'border-box', boxShadow: '0px 5px 15px rgba(39, 112, 236, 0.13)', borderRadius: '10px', width: '100%', padding: '10px', margin: '20px 0' }} placeholder='Message' />
                            <PrimaryButton onClick={() => router.push("/signup")} variant="contained">
                                SUBMIT
                            </PrimaryButton>
                        </Box>
                    </Box>
                </Box>
            </Grid >
        </Layout >)
}