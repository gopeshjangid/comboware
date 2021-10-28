import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
const useStyles = makeStyles((theme) => ({
  root: {
    //background: theme?.palette?.primary?.backgroundColor,
  },
  form : {
    border : '1px solid #c6e9ec',
    background : '#eff2f2'
  },
  hoverForm : {
    border : '1px solid #c6e9ec',
    background : '#fff'
  },
  input : {
   '&:hover' : {

   }
  }

}));
export default function Search(props) {
  const {placeHolder ,onSubmit}  = props;
  const [focused ,setFocus]  = React.useState(false);
  const [input ,setInput]  = React.useState('');
  const classes = useStyles();
  let className = !focused ? classes.form :  classes.hoverForm;

  const submit = (e) =>{
   e.preventDefault();
   if(onSubmit){
    onSubmit(input);
   }
  }
  return (
    <Paper
      elevation={0}
      className={className}
      onSubmit={submit}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeHolder || "Search..."}
        inputProps={{ 'aria-label': 'search google maps' }}
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
        onChange={(e) => setInput(e.target.value)}
      />
    </Paper>
  );
}
