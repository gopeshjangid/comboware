import React, { useState } from "react";
import {connect ,useSelector} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import {Button} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {useRouter} from  "next/router";
import {login} from  "./redux/action";
import Snackbar from "components/Snackbar";

import Loader from  "components/Loader/linear";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2,12),
    maxWidth: "358px",
  },
  title : {
    maxWidth  :500
  }
}));

 function SignUp({login}) {
  const classes = useStyles();
  const [form, setForm] = useState({email : '' ,password : ''});
  const [message, setMessage] = useState({text : '' ,type : 'success'});
  const [loading, setLoading] = useState(false);
   const router = useRouter();
   const reduxState = useSelector((state) =>state?.user)

   React.useEffect(()=>{
    setMessage({text : reduxState?.message || reduxState?.error , type  : reduxState?.error ? "error"  :"success"});
   },[reduxState?.message])

   const callBack = (status, message) =>{
     if(status){
      setMessage({type : 'success' ,text :message});
     } else {
      setMessage({type : 'error' ,text :message});
     }
     setLoading(false);
   }

  const submitHandler = (e) =>{
    e.preventDefault();
    setLoading(true)
    login({...form,password: btoa(form?.password) , user_type : 'ADMIN'} ,router,callBack);
  }

  console.log("form" ,form)
  return (
    <Container component="main" maxWidth="sm">
      {loading && <Loader />}
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
        <Typography className={classes.title} component="h1" variant="h5" >
          Admin Login
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2} align="center" justify="center">
            <Grid item xs={8} >
              <TextField
                autoComplete="fname"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="user_name"
                label="Email"
                autoFocus
                onChange={(e) => setForm({...form , email : e.target.value})}
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
                onChange={(e) => setForm({...form , password : e.target.value})}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            className={classes.submit}
            onClick={submitHandler}
          >
            Login
          </Button>
        </form>
      </div>
      
    </Container>
  );
}

export default connect((state) =>{
  return {};
} ,{login})(SignUp);
