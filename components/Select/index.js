import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  select : {
    height : 30 +'!important',
    width :  '100%'
  }
}));

export default function CustomSelect(props) {
  const classes = useStyles();
  const {options , label ,onChange ,value ,hideInnerLabel ,style}  = props;
  
  return (
    <div>
      <FormControl className={classes.select} variant="outlined">
        {label && <InputLabel htmlFor="demo-customized-select-native">{label}</InputLabel>}
        <Select
          {...props}
          id="demo-customized-select-native"
          value={value}
          onChange={(e) => onChange  ? onChange(e) : ''}
          className={classes.select}
          style={style}
          label={label}
        
        >
         
          {
            options && options.length ? options?.map(option =><MenuItem value={option.value}>{option.label}</MenuItem>) : <MenuItem value="">{"No found !"}</MenuItem>
          }
        </Select>
      </FormControl>
    </div>
  );
}
