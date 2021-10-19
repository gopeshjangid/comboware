import * as React from 'react';
import Chips from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

 function Chip({type ,label}) {
  return (
      <Chips color='primary' label={label || ''} variant={type || "outlined"} />
  );
}



export  {Chip}
