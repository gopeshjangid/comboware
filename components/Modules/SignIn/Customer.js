import React ,{useState ,useEffect} from "react";
import { GoogleLogin } from "react-google-login";
import {connect ,useSelector} from  "react-redux";
import Link from "next/link";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {useRouter} from  "next/router";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {signUp} from  "../Profile/redux/action";
import Snackbar from "components/Snackbar";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Comboware
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function CustomerLogin(props) {
  const classes = useStyles();
  const [loaded , setLoaded] = useState(false);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState('');
  const router = useRouter();
  let reduxState = useSelector(state =>state?.user);
  let clientId = publicRuntimeConfig?.clientId;
  useEffect(() => {
    setLoaded(true);
    return () => {
      
    }
  }, [])

  useEffect(() => {
    setLoading(reduxState?.loading);
    return () => {
      
    }
  }, [reduxState])

  

  const responseGoogle = async (data) => {
    console.log("success data" ,data)
    let postData = {
      email : data?.profileObj?.email,
      first_name : data?.profileObj?.name,
      user_type : 'USER'
    }
    props?.signUp(postData ,router);

  };

  const responseGoogleFailed = (data) => {
    console.log("failed data" ,data )
    if(data?.error === 'popup_closed_by_user'){
      setError("Pop closed by you by default. please try in new window or clear all caches or allow cookies.");
    }
  };

  console.log("sssssssssreduxState" ,reduxState)

  return (
    <Container component="main" maxWidth="xs">
       <Snackbar
        open={!!error}
        type={"error"}
        message={error}
      />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in with Google
        </Typography>

        <Box mt={5}>
          {loaded && !reduxState?.loading  && <GoogleLogin
            clientId={clientId}
            buttonText="Login with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogleFailed}
            cookiePolicy={"single_host_origin"}
          /> }
        </Box>
        <Box mt={2}>
           {reduxState?.loading && <CircularProgress color="primary"/> }
        </Box>  
      </div>
      <Box mt={5}>
        <Grid container justify="center">
            <Grid item>
              <Link href="/" variant="body2">
                {"Back to home"}
              </Link>
            </Grid>
          </Grid>
      </Box>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default connect ((state) =>{
  return{...state}
}, {
  signUp
})(CustomerLogin)
