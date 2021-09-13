import React from 'react';
import Header from './header';
import Footer from './footer';
import { Grid } from '@material-ui/core';

export default function Layout(props) {
    return (
        <Grid container direction="column">
            <Header />
            <div>{props.children}</div>
            <Footer />
        </Grid>
    )
}