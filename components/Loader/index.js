import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import {Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    display : 'flex',
    flexDirection : 'column'
  },
}));

export default function SimpleLoader({open ,label}) {
  const classes = useStyles();

  return (
     
      <Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="inherit" />
        <Typography>{label || "Please wait..."}</Typography>
      </Backdrop>
  );
}
