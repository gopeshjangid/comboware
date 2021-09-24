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
import {signUp} from  "./redux/action";
import Snackbar from "components/Snackbar";
import getConfig from "next/config";
import { Button } from "@material-ui/core";
const { publicRuntimeConfig } = getConfig();
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextField from "../../CustomInput/TextField";

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
  const [message , setMessage] = useState('');
  const [emailError , setEmailError] = useState(false);
  const router = useRouter();
  let reduxState = useSelector(state =>state);
  let clientId = publicRuntimeConfig?.clientId;

  console.log("reduxState" ,reduxState)
  const [form , setForm] = useState({
    email : '',
    password : ''
  });
  useEffect(() => {
    setLoaded(true);
    return () => {
      
    }
  }, [])

  const manageMessage = () =>{
    setTimeout(()=>{
      setError(false);
    },4000)
  }

  useEffect(() => {
    setLoading(reduxState?.login?.loading);
    return () => {
      
    }
  }, [reduxState?.login?.loading])
  useEffect(() => {
    manageMessage();
    setMessage(reduxState?.login?.message);
    return () => {
      
    }
  }, [reduxState?.login?.message])

  useEffect(() => {
    manageMessage();
    setError(reduxState?.login?.error);
    return () => {
      
    }
  }, [reduxState?.login?.error])

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  const responseGoogle = async (data) => {
    console.log("success data" ,data)
    let postData = {
      email : data?.profileObj?.email,
      first_name : data?.profileObj?.name,
      user_type : 'USER'
    }
    props?.signUp(postData ,router);

  };

  const validateForm = () =>{

    if(form?.email === ''){
      return false;
    } else if(form?.password === ''){
      return false;
    }else if( !validateEmail(form?.email)){
      setEmailError(true);
      return false;
    } else {
      setEmailError(false);
      return true;
    }
  }

  const loginHandler = async (data) => {

    if(validateForm()){
      setLoading(true);
    let postData = {
      email : form?.email,
      password : btoa(form?.password),
      first_name : '',
      user_type : 'USER'
    }
    props?.signUp(postData ,router);
  } else {
     setError("Please enter email and password.")
  }

  };

  const responseGoogleFailed = (data) => {
    console.log("failed data" ,data )
    if(data?.error === 'popup_closed_by_user'){
      setError("Pop closed by you by default. please try in new window or clear all caches or allow cookies.");
    }
  };

  const changeHandler = (e) =>{
   let name = e.target.name;
   let value = e.target.value;

    setForm({...form ,[name] :value});
  }


  return (
    <Container component="main" maxWidth="xs">
       <Snackbar
        open={error || message}
        type={message ? "success" : "error"}
        message={error || message}
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
        <GridContainer spacing={3} alignContent="space-between" justifyContent="space-between">
              <GridItem xs={12}>
                  <TextField
                    fullWidth
                    onChange={changeHandler}
                    name="email"
                    type="email"
                    autocomplete="off"
                    label="Email"
                    required
                    error={emailError}
                    helperText={emailError && "Invalid email."}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <TextField
                    fullWidth
                    onChange={changeHandler}
                    name="password"
                    type="password"
                    inputProps={{maxLength : 10}}
                    label="Password"
                    required
                  />
                </GridItem>

                <GridItem xs={12}>
                    <Button onClick={loginHandler} fullWidth color="primary"
                      variant="contained">
                        Login
                    </Button>
                </GridItem>
            <Grid item>
              <Link href="/" variant="body2">
                {"Back to home"}
              </Link>
            </Grid>
          </GridContainer>
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
