import React from 'react';
import Header from './header';
import Footer from './footer';
import { Grid } from '@material-ui/core';
import styles from './style';
export default function Layout(props) {
    const classes = styles();
    return (
        <Grid  container direction="column">
            <Header />
            <div className={classes.contentLayout} style={{background : 'white'}}>{props.children}</div>
            <Footer />
        </Grid>
    )
}