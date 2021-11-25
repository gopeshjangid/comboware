import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: (props) => (props?.light ? 'white' : '#F4F7FC'),
    borderRadius: '6px',
    padding: 10,
    paddingTop: '20px',
    marginTop: '30px',
    width: '100%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      margin: 0,
      paddingTop: '20px',
      marginTop: '60px'
    }
  }
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
    style,
    ...rest
  } = props;
  return (
    <div className={classes.wrapper} style={style}>
      {children}
    </div>
  );
}
