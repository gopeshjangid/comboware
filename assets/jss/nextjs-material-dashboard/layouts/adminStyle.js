import {
  drawerWidth,
  transition,
  container,
} from "assets/jss/nextjs-material-dashboard.js";

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
   
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
    overflow : 'auto',
    height : '100vh',
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down("sm")]: {
      width: `100%`,
      margin : '0px !important',
      padding : '0px !important'
    },
  },
  content: {
    marginTop: "20px",
    padding: "20px 15px",
    minHeight: "calc(100vh - 123px)",
    [theme.breakpoints.down("sm")]: {
      width: `100%`,
      margin : '0px !important',
      padding : '0px !important'
    },
  },
  container,
  map: {
    marginTop: "70px",
  },
});

export default appStyle;
