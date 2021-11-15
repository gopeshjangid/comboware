import {
  Box,
  List,
  ListItem,
  Divider,
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  Grid,
  Typography,
  Avatar,
  TextField,
} from "@material-ui/core";
//import { ClassRounded, Home } from '@material-ui/icons';
import React from "react";
import Layout from "../Layout";
import homeImg from "assets/img/home1.png";
import {
  Airplay,
  Work,
  Lock,
  AccountCircle,
  Contacts,
  MailOutline,
  Call,
} from "@material-ui/icons";
import Dynamic from "next/dynamic";
import { PrimaryButton, SecondaryButton, WhiteButton } from "../Common/button";
import Testimonal from "./Testimonal";
import CompanyBanner from "assets/img/company-middle.png";
import WhiteS from "assets/img/brand-logo-white-s.png";
import BlueS from "assets/img/brand-logo-blue-s.png";
import WhiteB from "assets/img/brand-logo-white-b.png";
import BlueB from "assets/img/brand-logo-blue-b.png";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  intro: {
    "line-height": "36px",
    color: "black",
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    color: "black",
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      'font-size': '30px'
    },
  },
  subtitle: {
    fontSize: 30,
    textAlign: "left",
    color: "black",
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      'font-size': '20px'
    },
  },
  centerImag: {
    width: "80%",
  },
  boxHeading: {
    color: "#477ad0",
    "font-size": "40px",
    fontWeight: 500,
  },
  boxModal: {
    padding: 42,
  },
  list: {
    "list-style-type": "square !important",
    paddingLeft: "18px",
    lineHeight: "35px",
  },
  listItem: {
    color: "black",
    fontSize: 15,
  },
  imageBox: {
    width: "50%",
    margin: "0 auto",
  },
}));
export default function Homes(props) {
  const classes = useStyles();

  return (
    <Layout>
      <Grid
        container
        xs={12}
        sm={12}
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Box p="40px">
          <Typography className={classes.title}>
            Engineero Maintenance platform
          </Typography>
          <Typography className={classes.subtitle}>
            The benefits of becoming a technical maintenance provider
          </Typography>
          <Typography className={classes.intro}>
            Engineers can quickly register as a technical maintenance service
            provider on this platform. Fill in your technical ability, technical
            level and proficiency in using various tools when registering. This
            will be the basis for system matching. You can be in this platform
            Show off your skills, you will be able to serve customers all over
            the world and let the world see you. You can receive cases and earn
            income regardless of time and place.
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        xs={12}
        sm={12}
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Box p="40px">
          <Typography className={classes.subtitle}>What is Ticket?</Typography>
          <Typography className={classes.intro}>
            When a customer applies for maintenance service requirements online,
            the system will automatically set up a ticket, and the system will
            automatically match the ticket to suitable engineers. At this time,
            the engineer will receive a ticket notification, and the engineer
            can choose to accept or reject it. , Choose to accept: the engineer
            can provide technical maintenance services to the customer, and
            after completing the ticket, he will receive a bonus; choose to
            reject: the engineer will lose the opportunity to provide technical
            maintenance.
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        xs={12}
        sm={12}
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Box p="40px">
          <Typography className={classes.subtitle}>
            How to get bonus rewards?
          </Typography>
          <Typography className={classes.intro}>
            After each technical maintenance and operation of a ticket, the
            engineer will receive the system transfer bonus to the designated
            account.
          </Typography>
        </Box>
      </Grid>

      <Grid
        container
        xs={12}
        sm={12}
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Box p="40px">
          <Typography className={classes.subtitle}>
            Manage the work environment
          </Typography>
          <Typography className={classes.intro}>
            After you register, you will be able to enable your own virtual
            machine environment, and you can create and manage more service
            items.
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        xs={12}
        sm={12}
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Box p="40px">
          <Typography className={classes.subtitle}>Manage Ticket</Typography>
          <Typography className={classes.intro}>
            You can easily filter and manage your own tickets .
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        xs={12}
        sm={12}
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Box p="30px">
          <Typography style={{marginBottom:0}} className={classes.title} textAlign="left">Customer Ticket platform</Typography>
        </Box>
      </Grid>
      <Grid
        container
        xs={12}
        sm={12}
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Box p="40px">
          <Typography className={classes.subtitle}>Why apply for maintenance online?</Typography>
          <Typography className={classes.intro}>
          Engineers from all over the world provide technical maintenance services on this platform. You can save a lot of time and money to find engineers. You only need a few simple steps to complete the registration.
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        xs={12}
        sm={12}
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Box p="40px">
          <Typography className={classes.subtitle}>Create and manage tickets 
</Typography>
          <Typography className={classes.intro}>
          This platform provides customers with fast and convenient online maintenance services. A few simple procedures can create the maintenance content they need and seek support. Customers can get rid of the trouble of not being able to find an engineer and use the way to create tickets online. , The system will automatically send to suitable engineers, the system will notify you of status updates, and you can also see all the tickets you have opened 
.
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        xs={12}
        sm={12}
        item
        justifyContent="center"
        direction="row"
        alignItems="center"
      >
        <Box p="40px">
          <Typography className={classes.subtitle}>Establish a working environment 
 
</Typography>
          <Typography className={classes.intro}>
          You can build your own working environment to serve other customers, or you can purchase other services. 

          </Typography>
        </Box>
      </Grid>
    </Layout>
  );
}
