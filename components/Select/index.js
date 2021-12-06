import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  select : {
    height : 30 +'!important',
    width :  '100%'
  }
}));

export default function CustomSelect(props) {
  const classes = useStyles();
  const {options , label ,onChange ,value ,hideInnerLabel ,style}  = props;
  const [optionValue , setOptionValue] = useState('');

  React.useEffect(()=>{
    setOptionValue(value);
  },[value])
  return (
    <FormControl className={classes.select} variant="outlined">
      <InputLabel htmlFor="demo-customized-select-native">{label}</InputLabel>
      <Select
        {...props}
        value={optionValue}
        onChange={(e) => onChange  ? onChange(e) : ''}
        className={classes.select}
        style={style}
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
      >
        
        {
          options && options.length ? options?.map(option =><MenuItem value={option.value}>{option.label}</MenuItem>) : <MenuItem value="">{"No record found !"}</MenuItem>
        }
      </Select>
    </FormControl>
  );
}
