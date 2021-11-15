import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { connect, useSelector } from "react-redux";
import Link from "next/link";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import {Box ,FormControlLabel ,Checkbox} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signUp } from "./redux/action";
import Snackbar from "components/Snackbar";
import getConfig from "next/config";
import { Button } from "@material-ui/core";
const { publicRuntimeConfig } = getConfig();
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextField from "../../CustomInput/TextField";
import logo from "assets/img/logo.svg";
import LinearProgress from  "components/Loader/linear";
import { LoadingButton } from '@mui/lab';
function Copyright({className}) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link className={className} color="inherit" href="https://comboware.io/">
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
  link : {
    color: '#7373c5',
    fontSize: 11,
    fontWeight: 400
  },
  logo : {
    textAlign : 'center',
    paddingBottom : 12
  }
}));

function CustomerLogin(props) {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setLogin] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const router = useRouter();
  let reduxState = useSelector((state) => state);
  let clientId = publicRuntimeConfig?.clientId;

  const [form, setForm] = useState({
    email: "",
    password: "",
    first_name : '',
    last_name : ''
  });
  useEffect(() => {
    setLoaded(true);
    return () => {};
  }, []);

  const hideMessage = () => {
    setTimeout(() => {
      setError(false);
      setMessage(false);
    }, 4000);
  };

  useEffect(() => {
    setLoading(reduxState?.login?.loading);
    return () => {};
  }, [reduxState?.login?.loading]);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  

  const manageNotification = (status, message) => {
    hideMessage();
    setLoading(false);
    if (status) {
      setMessage(message);
      setError("");
    } else {
      setMessage("");
      setError(message);
    }
  };

  const doLogin = (form) =>{

    props?.signUp(form, manageNotification, router);
  }

  const responseGoogle = async (data) => {
    let postData = {
      email: data?.profileObj?.email,
      first_name: data?.profileObj?.name,
      last_name: '',
      user_type: "USER",
      is_login : isLogin
    };

    doLogin(postData);
   
  };

  const validateForm = () => {
    if (form?.email === "") {
      return false;
    } else if (form?.password === "") {
      return false;
    } else if (!validateEmail(form?.email)) {
      setEmailError(true);
      return false;
    } else {
      setEmailError(false);
      return true;
    }
  };

  const loginHandler = async (data) => {
    if (validateForm()) {
      setLoading(true);
      let postData = {
        email: form?.email,
        password: btoa(form?.password),
        first_name: form?.first_name,
        last_name: form?.last_name,
        user_type: "USER",
        is_login : isLogin
      };
      doLogin(postData)
    } else {
      setError("Please enter email and password.");
    }
  };

  const responseGoogleFailed = (data) => {
    console.log("failed data", data);
    if (data?.error === "popup_closed_by_user") {
      setError(
        "Pop closed by you by default. please try in new window or clear all caches or allow cookies."
      );
    }
  };

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
        {loading && <LinearProgress align="top" /> }
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
        {/* <Box mt={5}>
          {loaded && !reduxState?.loading && (
            <GoogleLogin
              clientId={clientId}
              buttonText={ isLogin ? "Login with google" : "Sign up with google"}
              onSuccess={responseGoogle}
              onFailure={responseGoogleFailed}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </Box> */}
        <Box mt={2}>
          {reduxState?.loading && <CircularProgress color="primary" />}
        </Box>
      </div>
      <Box mt={5}>
        <div className={classes.logo}>
          <img src={logo} />
        </div>
        
        <GridContainer
          spacing={3}
          alignContent="space-between"
          justifyContent="space-between"
        >
         {!isLogin&&<> <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  autoComplete="lname"
                  onChange={changeHandler}
                />
              </Grid>
         </>}
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
              inputProps={{ maxLength: 10 }}
              label="Password"
              required
            />
          </GridItem>
          {!isLogin &&  <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree with terms and conditions."
                />
              </Grid>
          }
          <GridItem xs={12}>
            <Button
              onClick={loginHandler}
              fullWidth
              loading={loading}
              color="secondary"
              variant="contained"
            >
              {isLogin  ? 'Login' : 'Sign Up'}
            </Button>
          </GridItem>
          <Grid item xs={12} style={{textAlign : 'right'}}>
            <Button className={classes.link}  variant="subtitle2" onClick={()=>setLogin((login)=> !login)}>
                {!isLogin ? "Already have an account? Sign in" : "Don't have account? Sign up" }
            </Button>
          </Grid>
        </GridContainer>
        <div  className={classes.link} > <Link href="/" variant="body2">
              {"Back to home"}
            </Link></div>
      </Box>
      <Box mt={8}>
        <Copyright className={classes.link} />
      </Box>
    </Container>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  {
    signUp,
  }
)(CustomerLogin);
