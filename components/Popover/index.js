import * as React from 'react';
import {Box ,IconButton} from '@mui/material';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';

import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

export default function PositionedPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box>
      <Popper style={{zIndex :999}} open={open} anchorEl={anchorEl} placement={'top-start'} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper style={{width: '50%', margin: '0 auto', padding:20}}>
             {props.children}
            </Paper>
          </Fade>
        )}
      </Popper>
      <IconButton onClick={handleClick('top-start')}>{props.icon}</IconButton>
    </Box>
  );
}
