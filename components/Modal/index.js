import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    justifyContent: 'space-between'
  },
  body: {
    minWidth: 500
  },
  title: {
    minWidth: 500
  }
}));

export default function Modal(prop) {
  const { isOpen, onSubmit, onChange, title, SaveText, maxWidth, fullWidth } = prop;
  const classes = useStyles();

  return (
    <Dialog
      maxWidth={maxWidth || 'sm'}
      onClose={() => (onChange ? onChange(false) : '')}
      open={isOpen}
      fullWidth={fullWidth || true}
    >
      <DialogTitle id='customized-dialog-title' onClose={() => (onChange ? onChange(false) : '')}>
        {title}
      </DialogTitle>
      <DialogContent dividers>{prop.children}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => (onChange ? onChange(false) : '')} color='primary' variant='outlined'>
          Close
        </Button>
        <Button autoFocus onClick={onSubmit} color='primary' variant='contained'>
          {SaveText || 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
