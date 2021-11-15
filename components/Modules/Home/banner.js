import { Box, Grid, Typography } from "@material-ui/core";
//import { ClassRounded, Home } from '@material-ui/icons';
import React from "react";
import useStyle from "./style";
import { ArrowRight } from "@material-ui/icons";
import { PrimaryButton, SecondaryButton, WhiteButton } from "../Common/button";
import Carousel from "../../Carousel";
import { IconButton } from "@material-ui/core";
import ComboSTackBannerImg from "assets/img/combostack-banner.jpeg";
import EngineerBannerImg from "assets/img/engineero-banner.png";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from "mdbreact";
import { useRouter } from "next/router";
//import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
//import 'mdbreact/dist/css/mdb.css';
const CarouselPage = () => {
  const classes = useStyle();
  const router = useRouter();
  return (
    <div size="xl" style={{ width: "100%", maxWidth: "100%" }}>
      <MDBCarousel
        activeItem={1}
        length={2}
        interval={3000}
        showIndicators={true}
        showControls={false}
        className="z-depth-1"
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
                <Box className={classes.bannerContentBox}>
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
                    className={classes.bannerDesc}
                  >
                    The built-in functions of the ComboStack private cloud
                    platform make you unexpectedly powerful, allowing IT
                    personnel to master the management, and the security also
                    makes the company feel at ease. This is a hyper-converged
                    hybrid cloud architecture product, which can provide
                    services built in the cloud. You can also provide services
                    built on the ground, or you can choose additional backup
                    methods, and also connect to public clouds such as AWS, GCP,
                    and built-in S3, K8s, and the management mode adopts
                    multi-tenant users and all are independent individuals. More
                    stable and safe
                  </Typography>
                  <IconButton
                    variant="contained"
                    onClick={() => router.push("/combostack")}
                    className={classes.bannerViewMore}
                  >
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
                <Box className={classes.bannerContentBox}>
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
                    className={classes.bannerDesc}
                  >
                    Engineero maintenance and operation matching platform has
                    dual service functions, and the operation of this platform
                    is very simple and easy. It allows engineers all over the
                    world to provide their own professional technical services
                    and earn income. It can also provide enterprises all over
                    the world. Applying for maintenance online on the platform,
                    whether it is an engineer or a company, both parties can
                    save a lot of time and manpower costs, and can solve
                    maintenance needs through the platform.
                  </Typography>
                  <IconButton
                    variant="contained"
                    className={classes.bannerViewMore}
                  >
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
