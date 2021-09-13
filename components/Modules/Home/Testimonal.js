import { Typography } from '@material-ui/core';
import React from 'react';
import useStyle from './style';
export default function Testimonal(props) {
    const classes = useStyle();
    return (
        <Typography variant="h1" component="h1" align="center" className={classes.boxHeading3} style={{ color: 'black', width:'100%' }}>
            Testimonal
        </Typography>
    )
}