import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
const useStyles =  makeStyles((theme) => ({
  box : {
    [theme.breakpoints.between('sm', 'md')]: {
      width  :900
    },
    [theme.breakpoints.up('lg')]: {
      width  :1180
    },
  },
  fieldset : {
    padding : 30,
    borderColor : theme?.palette?.borderColor,
    borderStyle: 'solid',
    paddingTop : 16,
    borderWidth : 1,
    padding : 5,
},
}));

export default function FieldSet(props) {
  const classes = useStyles();
  
  return (
    <div
      className={classes.box}
    >

         <fieldset
                className={classes.fieldset}
                borderColor="#e7e9f0"
                border={0.5}
              >
                 {props?.title && <legend>{props?.title}</legend> }
                {props?.children}
                </fieldset>
     
    </div>
  );
}
