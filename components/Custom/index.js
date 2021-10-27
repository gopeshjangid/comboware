import * as React from 'react';
import Chips from '@mui/material/Chip';
import Typography1 from '@mui/material/Typography';
import { makeStyles  } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  typography : {
    color : (props) => props?.color === 'primary' ? '#464E5F' : props?.color === 'secondary' ?  '#B5B5C3' : props?.color,
    fontSize : (props) => props?.fontSize+"px" || '14px'
  },
  info : {
    background: (props) => props?.style === 'info'  ? '#C9F7F5' : props?.style === 'success' ?  '#4caf50' : props?.style === 'warning'? '#00d7b9' : '#C9F7F5',
    color :(props) => props?.style === 'info'  ? '' : props?.style === 'success' ?  '#fff' : props?.style === 'warning'? '#fff' : '',
  }

}));

 function Chip({type ,label, ...props}) {
  const classes = useStyles(props);
  const {color} = props;
  return (
      <Chips color={props?.style  || 'primary'}   label={label || ''} variant={type || "outlined"} />
  );
}

function Typography(props) {
  const classes = useStyles(props);
  return (
      <Typography1 variant={props?.variant} className={classes.typography}  >{props?.children}</Typography1>
  );
}



export  {Chip,Typography}
