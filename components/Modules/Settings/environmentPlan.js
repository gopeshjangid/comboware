import React, { useState, useEffect, useRef } from "react";
import {  useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Button,Typography ,Checkbox  ,FormControlLabel ,FormGroup   } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles =  makeStyles((theme) => ({
  box : {
    [theme.breakpoints.between('sm', 'md')]: {
      width  :900
    },
    [theme.breakpoints.up('lg')]: {
      width  :1180
    },
  },
  fieldset : {
    padding : 30,
    borderColor : theme?.palette?.borderColor,
    borderStyle: 'solid',
    paddingTop : 16,
    borderWidth : 1,
    padding : 5,
},
}));
function EnvironmentPlan() {
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [environment, setEnvironment] = useState("Fixed");
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    setSettings(reduxState?.settings);
    return () => {};
  }, [reduxState?.settings]);

  const environmentSubmitHandler = (e ,type) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    //saveenvironment({environment_type : type, size : 1 ,price:environment[type] ,userId : Number(localStorage.getItem("userId"))},hideNotification);
  };

  

  const environmentChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setenvironment({ ...environment, [name]: value });
  };

  useEffect(() => {
   // setUserType(localStorage.getItem("userType"));
    return () => {};
  }, []);


  return (
    <div>
        <GridContainer spacing={2}>
                  <GridItem container className={classes.gridRow} xs={4}>
                    <Typography>Choose environment type</Typography>
                  </GridItem>
                  <GridItem className={classes.gridRow} xs={6}>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label="Fixed" />
                    <FormControlLabel  control={<Checkbox color="primary" />} label="Unlimited" />
                    </FormGroup>
                  </GridItem>
                  <GridItem container justify="flex-end" xs={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={(e) => environmentSubmitHandler(e,"RAM")}
                      disabled={
                        !(environment?.RAM )
                      }
                    >
                      Save
                    </Button>
                  </GridItem>

                    </GridContainer>
             
    </div>
  );
}

export default EnvironmentPlan;
