import CircularProgress from "@material-ui/core/CircularProgress";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { infoColor, title } from "assets/jss/nextjs-material-dashboard.js";
import React from "react";



const styles = {
  progress: {
    color: infoColor,
    width: "6rem !important",
    height: "6rem !important",
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0",
  },
  iconWrapper: {
    display: "block",
  },
  title: {
    ...title,
    color: "#FFFFFF",
  },
};

export default function PageChange(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.wrapperDiv}>
      <div className={classes.iconWrapper}>
        <CircularProgress className={classes.progress} />
      </div>
      <h4 className={classes.title}>
        Loading page contents for: {props.path}
      </h4>
    </div>
  );
}
