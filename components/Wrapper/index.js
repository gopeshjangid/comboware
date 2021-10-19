import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: (props) => props?.light ?  'white' :   '#F4F7FC',
    borderRadius: '6px',
    padding : 10,
    width  : '100%',
    height : '100vh'
  },
}));

export default function Wrapper(props) {
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
    <div className={classes.wrapper}>
      {children}
    </div>
  );
}

