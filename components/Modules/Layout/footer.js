import { Box, Grid, TextField, Typography, Avatar } from '@material-ui/core';
import React from 'react';
import { WhiteButton } from '../Common/button';
import useStyle from '../Home/style';
import { Facebook, Instagram, Pinterest, Twitter, YouTube } from '@material-ui/icons';
import { GetMenuButtons } from './header';

export default function Footer(props) {
    const classes = useStyle();
    return (
        <Grid xs={12} container item className={classes.firstBox} justifyContent="center" direction='row' alignItems="center">
            <Box style={{ flexDirection: 'row', display: 'flex', margin: 'auto', color: 'white', margin: '100px' }}>
                <Box style={{ width: '30%', padding: '20px', marginLeft: '100px' }}>
                    <Typography variant='p' component='p'>
                        COMBOWARE
                    </Typography>
                    <Box style={{ gridColumnGap: '5px', gridTemplateColumns: 'auto auto auto auto auto', display: 'inline-grid', margin: 'auto', marginTop: '20px' }}>
                        <Avatar aria-label="recipe" style={{
                            backgroundColor: 'white', boxShadow: '0px 10px 80px rgba(81, 121, 254, 0.2)', width: '40px'
                        }}>
                            <Twitter style={{ color: '#1853F9' }} fontSize='small' />
                        </Avatar>
                        <Avatar aria-label="recipe" style={{
                            backgroundColor: 'white', boxShadow: '0px 10px 80px rgba(81, 121, 254, 0.2)', width: '40px'
                        }}>
                            <Facebook style={{ color: '#1853F9' }} fontSize='small' />
                        </Avatar>
                        <Avatar aria-label="recipe" style={{
                            backgroundColor: 'white', boxShadow: '0px 10px 80px rgba(81, 121, 254, 0.2)', width: '40px'
                        }}>
                            <YouTube style={{ color: '#1853F9' }} fontSize='small' />
                        </Avatar>
                        <Avatar aria-label="recipe" style={{
                            backgroundColor: 'white', boxShadow: '0px 10px 80px rgba(81, 121, 254, 0.2)', width: '40px'
                        }}>
                            <Pinterest style={{ color: '#1853F9' }} fontSize='small' />
                        </Avatar>
                        <Avatar aria-label="recipe" style={{
                            backgroundColor: 'white', boxShadow: '0px 10px 80px rgba(81, 121, 254, 0.2)', width: '40px'
                        }}>
                            <Instagram style={{ color: '#1853F9' }} fontSize='small' />
                        </Avatar>
                    </Box>
                </Box>
                <Box style={{ width: '20%', padding: '20px', marginLeft: '100px' }}>
                    <Box >
                        <Typography variant='h6' component='h6'>
                            More
                        </Typography>
                        <GetMenuButtons flag={true} />
                    </Box>
                </Box>
                <Box style={{ width: '20%', padding: '20px', marginLeft: '100px' }}>
                    <Box >
                        <Typography variant='h6' component='h6'>
                            Contact
                        </Typography>
                        <GetMenuButtons flag={true} contactLink={true}/>
                    </Box>
                </Box>
                <Box style={{ width: '30%', padding: '20px' }}>
                    <Box style={{ width: '70%', boxShadow: '0px 20px 60px rgb(39 112 236 / 20%)', borderRadius: '10px', textAlign: 'center' }}>
                        <Typography variant='h6' component='h6'>
                            Subscribe today!
                        </Typography>
                        <input type='text' className={classes.contactInput} placeholder='Name' />
                        <input type='text' className={classes.contactInput} placeholder='Email' />
                        <WhiteButton style={{ marginTop: '20px', width: '100%' }} variant="contained">
                            SUBMIT
                        </WhiteButton>
                    </Box>
                </Box>
            </Box>

            <Typography variant="p" component="p" align='center' style={{ color: 'white', width: '100%', marginBottom: '50px' }}>
                Copyright © 2021 ComboWare.,lnc. All Rights Reserved.
            </Typography>
        </Grid>)
}