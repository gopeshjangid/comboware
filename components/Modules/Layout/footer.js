import { Box, Grid, TextField, Typography, Avatar } from "@material-ui/core";
import React from "react";
import { WhiteButton } from "../Common/button";
import useStyle from "../Home/style";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { GetMenuButtons } from "./header";

export default function Footer(props) {
  const classes = useStyle();
  return (
    <Grid
      xs={12}
      container
      item
      className={classes.footer}
      justifyContent="center"
      direction="row"
      alignItems="center"
    >
      <Typography
        variant="p"
        component="p"
        align="center"
        style={{ width: "100%", marginBottom: "50px" }}
      >
        Copyright © 2021 Comboware,Inc. All Right Reserved
      </Typography>
      <Box
        justifyContent="space-between"
        style={{
          height: "100px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "right",
          paddingRight: 40,
        }}
      >
        <Box style={{width  :'50%', alignItems : 'center', margin : '0 auto', display: "flex",
          flexDirection: "column",}}>
          <Typography align="justify" variant="subtitle1" component="p">
            Comboware.,Inc
          </Typography>
          <Typography align="justify" variant="p" component="p">
            1007 N. Orange Street Floor 4 Wilmington, DE 19801
          </Typography>
          <Typography align="justify" variant="p" component="p">
            marcom@comboware.io
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
