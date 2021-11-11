import {
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
//import { ClassRounded, Home } from '@material-ui/icons';
import React from "react";
import useStyle from "./style";
import {
  ArrowRight,
} from "@material-ui/icons";
import { PrimaryButton, SecondaryButton, WhiteButton } from "../Common/button";
import Carousel from "../../Carousel";
import { IconButton } from "@material-ui/core";
import ComboSTackBannerImg from "assets/img/combostack-banner.jpeg";
import EngineerBannerImg from "assets/img/engineero-banner.png";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from "mdbreact";
//import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
//import 'mdbreact/dist/css/mdb.css';
const CarouselPage = () => {
  const classes = useStyle();
  return (
    <div size="xl" style={{width : '100%' ,maxWidth : '100%'}}>
      <MDBCarousel
        activeItem={1}
        length={2}
        interval={113000}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        thumbnails
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <Grid
              container
              spacing={1}
              className={classes.bannerBox}
              justifyContent="center"
              direction="row"
              alignItems="center"
            >
              <Grid xs={12} sm={6}>
                <Box className={classes.contentBox}>
                  <Typography
                    variant="h3"
                    component="h3"
                    gutterBottom
                    className={classes.banenrHeading}
                  >
                    COMBOSTACK
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    gutterBottom
                    className={classes.bannerSubHeading}
                  >
                    Combostack is a cloud platform that can be combined with
                    private clouds and public clouds. It is a standard hybrid
                    cloud platform and we provide it to customers##The view more
                    button needs to take comboware first part ##
                  </Typography>
                  <IconButton variant="contained" className={classes.bannerViewMore}>
                    View More &nbsp; <ArrowRight />
                  </IconButton>
                </Box>
              </Grid>
              <Grid xs={12} sm={6} className={classes.contesntBox}>
                <img
                  src={ComboSTackBannerImg}
                  alt="Logo"
                  height="100%"
                  width="100%"
                  className={classes.bannerImage}
                />
              </Grid>
            </Grid>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <Grid
              container
              spacing={2}
              className={classes.bannerBox}
              justifyContent="center"
              direction="row"
              alignItems="center"
            >
              <Grid xs={12} sm={6} className={classes.firstBoxImage}>
                <img
                  src={EngineerBannerImg}
                  alt="Logo"
                  height="100%"
                  width="100%"
                  className={classes.bannerImage}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <Box className={classes.contentBox}>
                  <Typography
                    variant="h3"
                    component="h3"
                    gutterBottom
                    className={classes.banenrHeading}
                  >
                    ENGINEERO
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    gutterBottom
                    className={classes.bannerSubHeading}
                  >
                    EngineerO is a platform for assisting technical engineers to
                    maintain and accept cases. One can receive tickets, handle
                    maintenance for each customer, and obtain some additional
                    income. ##The view more button needs to take EngineerO page
                    first part ##
                  </Typography>
                  <IconButton variant="contained" className={classes.bannerViewMore}>
                    View More &nbsp; <ArrowRight />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default CarouselPage;
