import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {DialogTitle,Grid, Box, Button,DialogContent,DialogActions,Dialog} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
  buttonWrapper : {
    justifyContent : 'space-between'
  },
  body : {
    minWidth : 500
  },
  title : {
    minWidth : 500
  }
}));

export default function MOdal(prop) {
  const {isOpen, onSubmit,onChange, title , SaveText}  = prop;
  const classes = useStyles();

  return (
    <Dialog maxWidth="sm" onClose={() => onChange ?  onChange(false) : ''}  open={isOpen}>
    <DialogTitle id="customized-dialog-title" onClose={() => onChange ?  onChange(false) : ''} className={classes.title}>
       {title}
    </DialogTitle>
    <DialogContent dividers className={classes.body}>
      {prop.children}
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={() => onChange ?  onChange(false) : ''} color="primary" variant="outlined">
        Close
      </Button>
      <Button autoFocus onClick={onSubmit} color="primary" variant="contained">
        {SaveText || "Save"}
      </Button>
    </DialogActions>
    </Dialog>
  );
}
