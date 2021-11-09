import { Box, Button, Card, CardContent, CardHeader, Link, Grid, Typography, Avatar, TextField } from '@material-ui/core';
//import { ClassRounded, Home } from '@material-ui/icons';
import React from 'react';
import useStyle from './style';
import homeImg from "assets/img/home1.png";
import { Airplay, Work, Lock, AccountCircle, Contacts, MailOutline, Call } from '@material-ui/icons';
import { PrimaryButton, SecondaryButton, WhiteButton } from '../Common/button';
import Carousel from  "../../Carousel";
import ComboSTackBannerImg from  "assets/img/combostack-banner.jpeg";
import EngineerBannerImg from "assets/img/engineero-banner.png";

export default function Banner(props) {
    const classes = useStyle();

    return (
        <div>
           <Carousel stopOnHover  showArrows={true} autoPlay={true} showIndicators={true}  infiniteLoop={true} interval={3000} >
             <Grid container spacing={2} className={classes.bannerBox} justifyContent="center" direction='row' alignItems="center">
                <Grid xs={7} sm={6}>
                    <Box className={classes.contentBox}>
                        <Typography variant="h3" component="h3" gutterBottom className={classes.banenrHeading}>
                          COMBOSTACK
                        </Typography>
                        <Typography  variant="p" component="p" gutterBottom className={classes.bannerSubHeading}>
                           Combostack is a cloud platform that can be combined with private clouds and public clouds. It is a standard hybrid cloud platform and we provide it to customers##The view more button needs to take comboware first part  ##
                        </Typography>
                        <PrimaryButton variant="contained" className={classes.viewMore}>
                            VIEW MORE
                        </PrimaryButton>
                    </Box>
                </Grid>
                <Grid xs={5} sm={6} className={classes.contentBox}>
                    <img src={ComboSTackBannerImg} alt="Logo" height='100%' width="100%" className={classes.firstImage} />
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.bannerBox} justifyContent="center" direction='row' alignItems="center">
                <Grid xs={7} sm={6}>
                    <Box className={classes.firstLeftBox}>
                        <Typography variant="h3" component="h3" gutterBottom className={classes.banenrHeading}>
                          ENGINEERO
                        </Typography>
                        <Typography  variant="p" component="p" gutterBottom className={classes.bannerSubHeading}>
                           EngineerO is a platform for assisting technical engineers to maintain and accept cases. One can receive tickets, handle maintenance for each customer, and obtain some additional income. ##The view more button needs to take EngineerO page  first part  ##
                        </Typography>
                        <PrimaryButton variant="contained" className={classes.viewMore}>
                            VIEW MORE
                        </PrimaryButton>
                    </Box>
                </Grid>
                <Grid xs={5} sm={6} className={classes.firstBoxImage}>
                    <img src={EngineerBannerImg} alt="Logo" height='100%' width="100%" className={classes.firstImage} />
                </Grid>
            </Grid>
           </Carousel>
           </div >)
}