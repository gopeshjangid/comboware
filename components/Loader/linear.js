import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Styled from  "styled-components";

const StyledLinear = Styled(LinearProgress)`
   position: fixed;
   top: 0;
   width: 100%;
   left : 0;
   right: 0;
`;

export default function LinearIndeterminate({align}) {
  if(align === 'top'){
   return <StyledLinear sx={{width:'100%'}}  />
  }
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}
