import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import {
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '../../CustomInput/TextField'
import Button from 'components/CustomButtons';
import {getAllEnvironments ,saveEnvironment} from "./redux/action";
import {connect} from  "react-redux";
const useStyles = makeStyles(theme => ({
  box: {
    [theme.breakpoints.between('sm', 'md')]: {
      width: 900
    },
    [theme.breakpoints.up('lg')]: {
      width: 1180
    }
  },
  fieldset: {
    padding: 30,
    borderColor: theme?.palette?.borderColor,
    borderStyle: 'solid',
    paddingTop: 16,
    borderWidth: 1,
    padding: 5
  }
}))
function EnvironmentPlan ({getAllEnvironments ,saveEnvironment, ...props}) {
  const classes = useStyles()
  const reduxState = useSelector(state => state)
  const [fixedEnvironment, setFixedEnvironment] = useState({
    plan_type: 'FIXED',
    ram: 0,
    disk: 0,
    cpu: 0,
    status: false
  })

  const [unlimitedEnvironment, setUnlimitedEnvironment] = useState({
    plan_type: 'UNLIMITED',
    ram: 0,
    disk: 0,
    cpu: 0,
    status: false
  })

  const [settings, setSettings] = useState(null)

  useEffect(() => {
    setSettings(reduxState?.settings)
    return () => {}
  }, [props])

  const environmentSubmitHandler = (e, type) => {
    e.preventDefault()
    setSubmitted(true)
    setLoading(true)

    if (type === 'FIXED') {
    } else {
    }
    //saveenvironment({environment_type : type, size : 1 ,price:environment[type] ,userId : Number(localStorage.getItem("userId"))},hideNotification);
  }

  const unlimitedChangeHandler = e => {
    let name = e.target.name
    let value = e.target.value
    setUnlimitedEnvironment({ ...unlimitedEnvironment, [name]: value })
  }

  const fixedChangeHandler = e => {
    let name = e.target.name
    let value = e.target.value
    setFixedEnvironment({ ...fixedEnvironment, [name]: value })
  }

  useEffect(() => {
    // setUserType(localStorage.getItem("userType"));
    return () => {}
  }, [])

  console.log("unlined" ,unlimitedEnvironment)
  return (
    <div>
      <Typography>Environment Criteria</Typography>
      <GridContainer spacing={3}>
        <GridItem className={classes.gridRow} xs={3}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color='primary'
                  checked={fixedEnvironment?.status}
                  onChange={e =>
                    setFixedEnvironment({
                      ...fixedEnvironment,
                      status: e.target.checked
                    })
                  }
                />
              }
              label='FIXED'
            />
          </FormGroup>
        </GridItem>
        <GridItem className={classes.gridRow} xs={2}>
          <TextField
            fullWidth
            name='ram'
            label='Minimum RAM'
            type='number'
            autocomplete='off'
            inputProps={{ min: 0 }}
            value={fixedEnvironment?.ram}
            onChange={fixedChangeHandler}
          />
        </GridItem>
        <GridItem className={classes.gridRow} xs={2}>
          <TextField
            fullWidth
            name='cpu'
            label='Minimum CPUs'
            type='number'
            inputProps={{ min: 0 }}
            autocomplete='off'
            value={fixedEnvironment?.cpu}
            onChange={fixedChangeHandler}
          />
        </GridItem>
        <GridItem className={classes.gridRow} xs={2}>
          <TextField
            fullWidth
            name='disk'
            label='Minimum size of disk'
            type='number'
            autocomplete='off'
            inputProps={{ min: 0 }}
            value={fixedEnvironment?.disk}
            onChange={fixedChangeHandler}
          />
        </GridItem>

        <GridItem justify='flex-end' xs={3}>
          <Button
            variant='outlined'
            color='primary'
            onClick={e => environmentSubmitHandler(e, 'FIXED')}
            inputProps={{ min: 0 }}
            disabled={!(Number(fixedEnvironment?.ram) && Number(fixedEnvironment?.cpu) && Number(fixedEnvironment?.disk))}
          >
            Save
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer spacing={3} style={{ marginTop: 20 }}>
        <GridItem className={classes.gridRow} xs={3}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={e =>
                    setUnlimitedEnvironment({
                      ...unlimitedEnvironment,
                      status: e.target.checked
                    })
                  }
                  checked={unlimitedEnvironment?.status}
                  color='primary'
                />
              }
              label='UNLIMITED'
            />
          </FormGroup>
        </GridItem>
        <GridItem className={classes.gridRow} xs={2}>
          <TextField
            fullWidth
            name='ram'
            label='Minimum RAM'
            type='number'
            autocomplete='off'
            inputProps={{ min: 0 }}
            value={unlimitedEnvironment?.ram}
            onChange={unlimitedChangeHandler}
          />
        </GridItem>
        <GridItem className={classes.gridRow} xs={2}>
          <TextField
            fullWidth
            name='cpu'
            label='Minimum CPUs'
            type='number'
            autocomplete='off'
            inputProps={{ min: 0 }}
            value={unlimitedEnvironment?.cpu}
            onChange={unlimitedChangeHandler}
          />
        </GridItem>
        <GridItem className={classes.gridRow} xs={2}>
          <TextField
            fullWidth
            name='disk'
            label='Minimum size of disk'
            type='number'
            autocomplete='off'
            inputProps={{ min: 0 }}
            value={unlimitedEnvironment?.disk}
            onChange={unlimitedChangeHandler}
          />
        </GridItem>

        <GridItem justify='flex-end' xs={3}>
          <Button
            variant='outlined'
            color='primary'
            onClick={e => environmentSubmitHandler(e, 'UNLIMITED')}
            disabled={!(Number(unlimitedEnvironment?.ram) && Number(unlimitedEnvironment?.cpu) && Number(unlimitedEnvironment?.disk))}
          >
            Save
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default  connect(state => state?.settings ,{saveEnvironment , getAllEnvironments})(EnvironmentPlan); 
