import { Box, Button, Card, CardContent, CardHeader, Link, Grid, Typography, Avatar, TextField } from '@material-ui/core';
//import { ClassRounded, Home } from '@material-ui/icons';
import React from 'react';
import Layout from '../Layout';
import useStyle from './style';
import homeImg from "assets/img/home1.png";
import { Airplay, Work, Lock, AccountCircle, Contacts, MailOutline, Call } from '@material-ui/icons';
import Dynamic from  "next/dynamic";
import { PrimaryButton, SecondaryButton, WhiteButton } from '../Common/button';
import CombostackBanner from "assets/img/combostack.png";
export default function Homes(props) {
    const classes = useStyle();

    return (
        <Layout>
            <Grid style={{marginBottom : 20}} container item  justifyContent="center" direction='row' alignItems="center">
                <Grid xs={12} sm={12} item >
                    <Box style={{textAlign : 'center'}}>
                      <img src={CombostackBanner} alt="Logo" height='100%' width="90%" className={classes.firstImage} />
                    </Box>
                </Grid>
            </Grid>
            <Grid style={{marginBottom : 20}} container item  justifyContent="center" direction='row' alignItems="center">
                <Grid xs={12} sm={12} item >
                    <Typography style={{textAlign : 'center'}}>
                       What’s included in Hybrid Infrastructure?
                    </Typography>
                </Grid>
            </Grid>
            </Layout >)
}