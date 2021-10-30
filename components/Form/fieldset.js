import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Typography } from "components/Custom";
const useStyles = makeStyles((theme) => ({
  box: {
    [theme.breakpoints.between("sm", "md")]: {
      width: 900,
    },
    [theme.breakpoints.up("lg")]: {
      width: 1180,
    },
  },
  fieldset: {
    padding: 30,
    borderColor: theme?.palette?.borderColor,
    borderStyle: "solid",
    paddingTop: 16,
    borderWidth: 0,
    background: "white",
    padding: (props) => props?.padding || 20,
    [theme.breakpoints.down('sm')] : {
      padding : "0px !important",
      margin : "0px !important",
      paddingTop : '16px !important',
    }
  },
  childBox : {
    marginTop :20
  }
}));

export default function FieldSet(props) {
  const classes = useStyles(props);

  return (
      <Box className={classes.fieldset}  border={0.5}>
         <Typography variant="h6" color='#3aadb9' fontSize={25}>{props?.title}</Typography>
        <div className={classes.childBox}>{props?.children}</div>
      </Box>
  );
}
