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
import Banner7 from 'assets/img/7.png';
import Banner8 from 'assets/img/8.png';
import Banner9 from 'assets/img/9.png';
import Banner10 from 'assets/img/10.png';
const ChatSystem = Dynamic(() => import("../../Chat"),{ssr : false})
const bannerImaeges = [
    Banner1, Banner2, Banner3, Banner4, Banner5, Banner6
]
export default function Homes(props) {
    const classes = useStyle();

    return (
        <Layout>
            <Grid  container item className={classes.firstBox} justifyContent="center" direction='row' alignItems="center">
                <Grid xs={7} sm={6} item>
                    <Box className={classes.firstLeftBox}>
                        <Typography variant="h1" component="h1" gutterBottom className={classes.firstLeftBoxHeading}>
                            Comboware Blockchain
                        </Typography>
                        <Typography variant="hp" component="h6" gutterBottom className={classes.firstLeftBoxDetail}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        </Typography>
                        <WhiteButton variant="contained" className={classes.marginTop10}>
                            VIEW MORE
                        </WhiteButton>
                    </Box>
                </Grid>
                <Grid xs={5} sm={6} item className={classes.firstBoxImage}>
                    <img src={homeImg} alt="Logo" height='100%' width="90%" className={classes.firstImage} />
                </Grid>
            </Grid>
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
            <Grid container className={classes.secondBox} justifyContent="center" direction='row' alignItems="center">
                <Grid xs={7} sm={6}>
                    <Box className={classes.firstLeftBox}>
                        <Typography variant="h6" component="h6" gutterBottom className={classes.boxHeading2}>
                            responsive and retina-ready
                        </Typography>
                        <Typography variant="h1" component="h1" gutterBottom className={classes.boxHeading3}>
                            Lorem ipsum dolor sit consectetur.
                        </Typography>
                        <Typography variant="hh6" component="h6" gutterBottom className={classes.fontSize12}>
                            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Duis ultrices nunc a quam gravida ornare. Proin imperdie vel risus eget frin, unc ut posuere urna, vitae sodal
                        </Typography>
                        <PrimaryButton variant="contained" className={classes.marginTop10}>
                            VIEW MORE
                        </PrimaryButton>
                    </Box>
                </Grid>
                <Grid xs={5} sm={6} className={classes.firstBoxImage}>
                    <img src={Banner7} alt="Logo" height='100%' width="100%" className={classes.firstImage} />
                </Grid>
            </Grid>
            <Grid container className={classes.backgroundColorPeach} justifyContent="center" direction='row' alignItems="center">
                <Grid xs={65} sm={6} className={classes.firstBoxImage, classes.imageLeftThird}>
                    <img src={Banner8} alt="Logo" height='100%' width="75%" className={classes.firstImage} />
                </Grid>
                <Grid xs={6} sm={6}>
                    <Box className={classes.boxHeading1}>
                        <Typography variant="h6" component="h6" gutterBottom className={classes.forthBoxDetail1}>
                            responsive and retina-ready
                        </Typography>
                        <Typography variant="h1" component="h1" gutterBottom className={classes.forthBoxDetail2}>
                            Lorem ipsum dolor sit consectetur.
                        </Typography>
                        <Typography variant="hh6" component="h6" gutterBottom className={classes.fontSize12}>
                            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Duis ultrices nunc a quam gravida ornare. Proin imperdie vel risus eget frin, unc ut posuere urna, vitae sodal
                        </Typography>
                        <SecondaryButton variant="contained" className={classes.marginTop10}>
                            VIEW MORE
                        </SecondaryButton>
                    </Box>
                </Grid>
            </Grid>
            <Grid container className={classes.secondBox} justifyContent="center" direction='row' alignItems="center">
                <Grid xs={7} sm={6}>
                    <Box className={classes.boxHeading1}>
                        <Typography variant="h6" component="h6" gutterBottom className={classes.boxHeading2}>
                            responsive and retina-ready
                        </Typography>
                        <Typography variant="h1" component="h1" gutterBottom className={classes.boxHeading3}>
                            Lorem ipsum dolor sit consectetur.
                        </Typography>
                        <Typography variant="hh6" component="h6" gutterBottom className={classes.fontSize12}>
                            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Duis ultrices nunc a quam gravida ornare. Proin imperdie vel risus eget frin, unc ut posuere urna, vitae sodal
                        </Typography>
                        <PrimaryButton variant="contained" className={classes.marginTop10}>
                            VIEW MORE
                        </PrimaryButton>
                    </Box>
                </Grid>
                <Grid xs={5} sm={6} className={classes.firstBoxImage}>
                    <img src={Banner9} alt="Logo" height='100%' width="75%" className={classes.firstImage} />
                </Grid>
            </Grid>
            <Grid container className={classes.firstBox} justifyContent="center" direction='row' alignItems="center">
                <Grid xs={12} container item alignItems="center" className={classes.projectsContainer}>
                    <Box xs={1} >
                        34 Project Design
                    </Box>
                    <Box xs={1} >
                        97 Happy Clients
                    </Box>
                    <Box xs={1} >
                        15 Completed Project
                    </Box>
                    <Box xs={1} >
                        62 Completed Codes
                    </Box>
                </Grid>
            </Grid>
            <Grid container className={classes.backgroundColorPeach} justifyContent="center" direction='row' alignItems="center">
                <Testimonal />
            </Grid>
            <Grid container className={classes.secondBox} justifyContent="center" direction='column' alignItems="center" >
                <Grid xs={12} item className={classes.midHeading} style={{ fontSize: '40px', width: '60%' }}>
                    <Typography variant="h6" component="h6" align="center" className={classes.boxHeading2}>
                        Perfect Solution for your business
                    </Typography>
                    <Typography variant="h1" component="h1" align="center" className={classes.boxHeading3} style={{ color: 'black' }}>
                        Perfect Solution for your business
                    </Typography>
                    <Typography variant="hh6" component="h6" align="center" className={classes.fontSize12}>
                        Lorem ipsum dolor sit amet, consectetur adip iscing elit. Duis ultrices nunc a quam gravida ornare. Proin imperdie vel risus eget frin, unc ut posuere urna, vitae sodal
                    </Typography>
                </Grid>
                <Grid container xs={12} item justify='center' alignItems='center' direction='row' style={{ justifyContent: 'space-evenly', padding: '20px' }}>
                    <Grid style={{ width: '20%' }}>
                        <Card style={{ borderRadius: '10px' }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar} style={{
                                        backgroundColor: 'white', boxShadow: '0px 10px 80px rgba(81, 121, 254, 0.2)'
                                    }}>
                                        <Airplay style={{ color: '#1853F9' }} className={classes.avatar} />
                                    </Avatar>
                                }
                            />
                            <CardContent>
                                <Typography style={{ fontWeight: 'bold', margin: '0 0 10px 0', textTransform: 'uppercase' }} variant="h5" component="p">
                                    Lorem ipsum dolor sit consectetur.
                                </Typography>
                                <Typography variant="h6" component="h6" className={classes.fontSize12}>
                                    Lorem ipsum dolor sit amet, consectetur adip iscing elit. Duis ultrices nunc a quam gravida ornare. Proin imperdie vel risus eget frin, unc ut posuere urna, vitae sodal
                                </Typography>
                                <Link
                                    style={{
                                        marginRight: '20px',
                                        color: '#1853F9',
                                        fontStyle: 'normal',
                                        lineHeight: '16px',
                                        letterSpacing: '0.25em!important',
                                        margin: '20px 0'
                                    }}
                                    component="button"
                                    key={'View More1'}
                                    variant="body2"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                >
                                    {'VIEW MORE'}
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid style={{ width: '20%' }}>
                        <Card style={{ backgroundColor: '#1853F9', borderRadius: '10px' }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar} style={{
                                        backgroundColor: 'white', boxShadow: '0px 10px 80px rgba(81, 121, 254, 0.2)'
                                    }}>
                                        <Work style={{ color: '#1853F9' }} className={classes.avatar} />
                                    </Avatar>
                                }
                            />
                            <CardContent>
                                <Typography style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: 'white', textTransform: 'uppercase' }} variant="h5" component="p">
                                    Lorem ipsum dolor sit consectetur.
                                </Typography>
                                <Typography variant="h6" component="h6" className={classes.fontSize12} style={{ color: 'white' }}>
                                    Lorem ipsum dolor sit amet, consectetur adip iscing elit. Duis ultrices nunc a quam gravida ornare. Proin imperdie vel risus eget frin, unc ut posuere urna, vitae sodal
                                </Typography>
                                <Link
                                    style={{
                                        marginRight: '20px',
                                        color: 'white',
                                        fontStyle: 'normal',
                                        lineHeight: '16px',
                                        letterSpacing: '0.25em!important',
                                        margin: '20px 0'
                                    }}
                                    component="button"
                                    key={'View More1'}
                                    variant="body2"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                >
                                    {'VIEW MORE'}
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid style={{ width: '20%' }}>
                        <Card style={{ borderRadius: '10px' }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar} style={{
                                        backgroundColor: 'white', boxShadow: '0px 10px 80px rgba(81, 121, 254, 0.2)'
                                    }}>
                                        <Lock style={{ color: '#1853F9' }} className={classes.avatar} />
                                    </Avatar>
                                }
                            />
                            <CardContent>
                                <Typography style={{ fontWeight: 'bold', margin: '0 0 10px 0', textTransform: 'uppercase' }} variant="h5" component="p">
                                    Lorem ipsum dolor sit consectetur.
                                </Typography>
                                <Typography variant="h6" component="h6" className={classes.fontSize12}>
                                    Lorem ipsum dolor sit amet, consectetur adip iscing elit. Duis ultrices nunc a quam gravida ornare. Proin imperdie vel risus eget frin, unc ut posuere urna, vitae sodal
                                </Typography>
                                <Link
                                    style={{
                                        marginRight: '20px',
                                        color: '#1853F9',
                                        fontStyle: 'normal',
                                        lineHeight: '16px',
                                        letterSpacing: '0.25em!important',
                                        margin: '20px 0'
                                    }}
                                    component="button"
                                    key={'View More1'}
                                    variant="body2"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                >
                                    {'VIEW MORE'}
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.backgroundColorPeach} justifyContent="center" direction='column' alignItems="center" >
                <Grid xs={12} item className={classes.midHeading} style={{ fontSize: '40px', width: '60%' }}>
                    <Typography variant="h6" component="h6" align="center" className={classes.boxHeading2}>
                        Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography variant="h1" component="h1" align="center" className={classes.boxHeading3} style={{ color: '#0F1634' }}>
                        Lorem ipsum dolor sit consectetur.
                    </Typography>
                    <Typography variant="hh6" component="h6" align="center" className={classes.fontSize12}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum velit, sagittis quis scelerisque vitae, pellentesque eu tortor. Ut et nisl nunc. Etiam quis dui at nisl consectetur finibus non sed nulla. Nunc sollicitudin lectus eget magna tincidunt, ut lacinia nisi porttitor. Pellentesque a enim non ipsum
                    </Typography>
                </Grid>
            </Grid>
            {/* <ChatSystem /> */}
            <Grid container className={classes.backgroundColorPeach} justifyContent="center" direction='row' alignItems="center" >
                <Grid container direction='column' xs={7} sm={6} >
                    <Box style={{ gridTemplateColumns: 'auto auto', display: 'grid', marginLeft: '100px' }}>
                        <Box style={{ padding: '15px' }}>
                            <Typography variant="h2" component="h2" align="Left" >
                                1.
                            </Typography>
                            <Typography variant="h5" component="h5" align="Left" style={{ color: '#1853F9' }}>
                                Lorem ipsum dolor sit amet,
                            </Typography>
                            <Typography variant="p" component="p" align="Left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum velit, sagittis quis scelerisque vitae...
                            </Typography>
                        </Box>
                        <Box style={{ padding: '15px' }}>
                            <Typography variant="h2" component="h2" align="Left" >
                                2.
                            </Typography>
                            <Typography variant="h5" component="h5" align="Left" style={{ color: '#1853F9' }}>
                                Lorem ipsum dolor sit amet,
                            </Typography>
                            <Typography variant="p" component="p" align="Left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum velit, sagittis quis scelerisque vitae...
                            </Typography>
                        </Box>
                    </Box>
                    <Box style={{ padding: '15px' }} style={{ gridTemplateColumns: 'auto auto', display: 'grid', marginLeft: '100px' }}>
                        <Box style={{ padding: '15px' }}>
                            <Typography variant="h2" component="h2" align="Left" >
                                3.
                            </Typography>
                            <Typography variant="h5" component="h5" align="Left" style={{ color: '#1853F9' }}>
                                Lorem ipsum dolor sit amet,
                            </Typography>
                            <Typography variant="p" component="p" align="Left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum velit, sagittis quis scelerisque vitae...
                            </Typography>
                        </Box>
                        <Box style={{ padding: '15px' }}>
                            <Typography variant="h2" component="h2" align="Left" >
                                4.
                            </Typography>
                            <Typography variant="h5" component="h5" align="Left" style={{ color: '#1853F9' }}>
                                Lorem ipsum dolor sit amet,
                            </Typography>
                            <Typography variant="p" component="p" align="Left">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum velit, sagittis quis scelerisque vitae...
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={5} sm={6} style={{ textAlign: 'center' }}>
                    <img src={Banner10} alt="Logo" height='100%' width="80%" className={classes.firstImage} style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }} />
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