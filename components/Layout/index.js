import * as React from 'react';
import Container from '@mui/material/Container';
import { makeStyles  } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    //background: theme?.palette?.primary?.backgroundColor,
  },

}));
export default function FixedContainer(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth="xl" fixed>
        {props?.children}
      </Container>
    </React.Fragment>
  );
}
