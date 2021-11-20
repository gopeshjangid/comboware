import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { connect, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Divider,
  Link
} from "@material-ui/core";
import {
  LockOutlined as LockOutlinedIcon,
  KeyboardArrowUp,
} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signUp, getAuthToken } from "./redux/action";
import Snackbar from "components/Snackbar";
import getConfig from "next/config";
import { Button } from "@material-ui/core";
import { LoadingButton } from "@mui/lab";
const { publicRuntimeConfig } = getConfig();
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextField from "../../CustomInput/TextField";
import logo from "assets/img/logo.svg";
import LinearProgress from "components/Loader/linear";
import BasicPopover from "components/Popover";
import { route } from "next/dist/next-server/server/router";
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
  logo: {
    textAlign: "center",
    paddingBottom: 12,
  },
  loginBox : {
    border: '0.2px solid #dfe7e9',
    padding: '22px',
    background: 'white'
  },
  normalLink : {
   '&:hover' : {
    color : '#2251a1'
   }
  }
}));

function CustomerLogin(props) {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [autoLoginLoading, setAutoLoginLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const [keepLogin, setKeepLogin] = useState(false);
  const router = useRouter();
  let reduxState = useSelector((state) => state);
  let clientId = publicRuntimeConfig?.clientId;

  const [form, setForm] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const autoLoginHandler = (status, msg) => {
    if (status) {
      router.push("/dashboard");
      setMessage(msg);
    } else {
      setAutoLoginLoading(false);
      setError(msg);
    }
  };
  useEffect(() => {
    // setLoaded(true);
    if (localStorage.getItem("keepLogin") && router.query.retry) {
      setAutoLoginLoading(true);
      props.getAuthToken(autoLoginHandler);
    } else if (localStorage.getItem("keepLogin")) {
      // router.push("/dashboard")
    }
    return () => {};
  }, []);

  const hideMessage = () => {
    setTimeout(() => {
      setError(false);
      setMessage(false);
    }, 4000);
  };

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

  const doLogin = (form) => {
    props?.signUp(form, manageNotification, router);
  };

  const responseGoogle = async (data) => {
    console.log("success data", data);
    let postData = {
      email: data?.profileObj?.email,
      first_name: data?.profileObj?.name,
      last_name: "",
      user_type: props?.loginType,
      is_login: isLogin,
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
        user_type: props?.loginType|| '',
        is_login: isLogin,
      };
      doLogin(postData);
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

  const KeepSignedLogin = (e) => {
    setKeepLogin(e.target.checked);
    localStorage.setItem("keepLogin", e.target.checked);
  };
  const {loginType} = props;

  console.log("loginType" ,loginType)
  return (
    <Container component="main" maxWidth="xs">
      {loading && <LinearProgress align="top" />}
      <Snackbar
        open={error || message}
        type={message ? "success" : "error"}
        message={error || message}
      />
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
      </div>
      <div className={classes.logo}>
        <img src={logo} />
      </div>
      <Box mt={2} align="center" textAlign="center">
        {autoLoginLoading ? (
          <>
            <CircularProgress color="primary" />
            <Typography>Please wait...</Typography>{" "}
          </>
        ) : (
          ""
        )}
      </Box>
      <Box className={classes.loginBox}>
      <Box textAlign="center">
        <Typography variant="h6" component="h6">{loginType === 'ER' ? 'Engineer Login'  :"Customer Login"}</Typography>
      </Box>
      {!autoLoginLoading ? (
        <Box mt={5}>
          <GridContainer
            spacing={3}
            alignContent="space-between"
            justifyContent="space-between"
          >
            {!isLogin && (
              <>
                {" "}
                <Grid item xs={12} sm={6}>
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
              </>
            )}
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
            {!isLogin && (
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree with terms and conditions."
                />
              </Grid>
            )}
            <GridItem xs={12}>
              <LoadingButton
                onClick={loginHandler}
                fullWidth
                loading={loading}
                color="secondary"
                variant="contained"
              >
                {isLogin ? "Login" : "Sign Up"}
              </LoadingButton>
            </GridItem>
            {isLogin ? (
              <Grid item xs={12} style={{ textAlign: "left" }}>
                <FormGroup style={{ flexDirection: "row" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={keepLogin}
                        onChange={KeepSignedLogin}
                      />
                    }
                    label="Keep me signed in"
                  />
                  <BasicPopover
                    icon={
                      <>
                        <KeyboardArrowUp />
                        <Typography style={{ fontSize: "13px" }} variant="p">
                          Details
                        </Typography>
                      </>
                    }
                  >
                    <Box>
                      <Typography
                        component="h5"
                        varaint="h6"
                        style={{
                          fontWeight: 500,
                          textTransform: "none",
                          "margin-bottom": "8px",
                        }}
                      >
                        "Keep me Signed In" checkbox
                      </Typography>
                      <Divider />
                      <Typography varaint="subtitle1" style={{ padding: 10 }}>
                        Choosing "Keep me signed in" reduces the number of times
                        you're asked to sign-In on this device.
                      </Typography>
                      <Typography varaint="subtitle1" style={{ padding: 10 }}>
                        To keep your account secure, use this option only on
                        your personal devices."
                      </Typography>
                    </Box>
                  </BasicPopover>
                </FormGroup>
              </Grid>
            ) : (
              ""
            )}
            <Grid item xs={12} style={{ textAlign: "right" }}>
              <Button
                className={classes.link}
                variant="subtitle2"
                onClick={() => setLogin((login) => !login)}
              >
                {!isLogin
                  ? "Already have an account? Sign in"
                  : "Don't have account? Sign up"}
              </Button>
            </Grid>
            <Grid item xs={12} style={{display: 'flex', width : '100%','justify-content': 'space-between'}}>
              <Link className={classes.normalLink} href="/" underline="none" variant="body2">
                {"Back to home"}
              </Link>
              <Link
                underline="none"
                className={classes.normalLink}
                href={loginType === 'ER' ? '/login/customer' : '/login/engineer' }
              >
                {loginType === 'ER' ? 'Login as customer' : 'Login as engineer'}
              </Link>

            </Grid>
          </GridContainer>
        </Box>
      ) : (
        ""
      )}
      </Box>
      <Box mt={8}>
        <Copyright />
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
    getAuthToken,
  }
)(CustomerLogin);
