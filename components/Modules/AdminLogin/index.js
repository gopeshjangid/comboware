import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  TextField,
  Link,
  Typography,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { login } from "./redux/action";
import Snackbar from "components/Snackbar";

import LinearProgress from "components/Loader/linear";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "0.2px solid #dfe7e9",
    padding: "22px",
    background: "white",
    [theme.breakpoints.down('sm')] : {
      padding : 0,
      paddingBottom: "42px",
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    maxWidth: "80%",
  },
  title: {
    maxWidth: 500,
  },
  normalLink: {
    "&:hover": {
      color: "#2251a1",
    },
  },
}));

function SignUp({ login }) {
  const classes = useStyles();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ text: "", type: "success" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const reduxState = useSelector((state) => state?.user);

  React.useEffect(() => {
    setMessage({
      text: reduxState?.message || reduxState?.error,
      type: reduxState?.error ? "error" : "success",
    });
  }, [reduxState?.message]);

  const callBack = (status, message) => {
    if (status) {
      setMessage({ type: "success", text: message });
    } else {
      setMessage({ type: "error", text: message });
    }
    setLoading(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    login(
      { ...form, password: btoa(form?.password), user_type: "ADMIN" },
      router,
      callBack
    );
  };

  return (
    <Container component="main" maxWidth="sm">
      {loading && <LinearProgress align="top" />}
      <Snackbar
        open={!!message?.text}
        type={message?.type}
        message={message?.text}
      />
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.title} component="h1" variant="h5">
          Admin Login
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2} align="center" justify="center">
            <Grid item xs={8}>
              <TextField
                autoComplete="fname"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="user_name"
                label="Email"
                autoFocus
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </Grid>

            <Grid item xs={10}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                disabled={loading}
                className={classes.submit}
                onClick={submitHandler}
              >
                Login
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                width: "100%",
                "justify-content": "center",
              }}
            >
              <Link
                className={classes.normalLink}
                href="/"
                underline="none"
                variant="body2"
              >
                {"Back to home"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default connect(
  (state) => {
    return {};
  },
  { login }
)(SignUp);
