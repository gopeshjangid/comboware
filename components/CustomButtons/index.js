import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    background: (props) => props?.danger ?  '#F64E60' :   '#3699FF',
    borderRadius: '6px',
    padding : 10,
    minWidth : 60,
    color : '#FFFFFF',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '18px',
    textTransform : 'none',
    "&:hover": {
      background: (props) => props?.danger ?  '#e43447' : '#2885e4'
    }
  },
}));

export default function RegularButton(props) {
  const classes = useStyles(props);
  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    type,
    ...rest
  } = props;
  return (
    <Button {...rest} classes={{ root: classes.root}}>
      {children}
    </Button>
  );
}

