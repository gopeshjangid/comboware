import React, { useState, useEffect, useRef } from 'react'

import { connect, useSelector } from 'react-redux'
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import { Typography, IconButton, Box } from '@material-ui/core'
import TextField from '../../CustomInput/TextField'
import useStyles from './styles'
import Button from 'components/CustomButtons'
import Modal from 'components/Modal'
import Loader from 'components/Loader'
import Snackbar from 'components/Snackbar'
import { saveResource, getResources } from './redux/action'
import FieldSet from 'components/Form/fieldset'
import Tabs from 'components/CustomTabs'
import Environment from 'components/Modules/Settings/environmentPlan'
import CustomTable from 'components/Table/CustomTable'
import Wrapper from 'components/Wrapper'
import { Chip } from 'components/Custom'
import UsersList from 'components/Modules/Dashboard/usersList'
import HostManageMent from './hostsManagement'
function Settings ({ saveResource, getResources, settings }) {
  const classes = useStyles()
  const reduxState = useSelector(state => state)
  const [message, setMessage] = useState('')
  const [resource, setResource] = useState({
    fixed: { RAM: 0, CPU: 0, VOLUME: 0 },
    unlimited: { RAM: 0, CPU: 0, VOLUME: 0 }
  })

  const [isSubmitted, setSubmitted] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [loader, setLoader] = useState(false)

  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  const getValue = str => {
    let filtered =
      settings?.resources?.filter(setting => setting?.resource_type === str) ||
      []
    console.log('filtered', filtered, 'ress', settings?.resources)
    return filtered?.length ? filtered[0]?.price : 0
  }

  useEffect(() => {
    let RAM = getValue('RAM')
    let CPU = getValue('CPU')
    let VOLUME = getValue('VOLUME')
    setResource({ ...resource, RAM, CPU, VOLUME })
  }, [settings?.resources])

  const hideNotification = () => {
    setSubmitted(false)
    setLoader(false)
  }
  useEffect(() => {
    setMessage(reduxState?.workspace?.message || reduxState?.workspace?.error)
    manageMessage()
    return () => {}
  }, [reduxState?.workspace?.message])

  useEffect(() => {
    getResources(
      reduxState?.user?.profile?.id || localStorage.getItem('userId'),
      hideNotification
    )
    return () => {}
  }, [])

  // useEffect(() => {
  //   setProfile({...profile, form : {...profile?.form, ...reduxState?.user?.profile}})
  //   return () => {};
  // }, [reduxState?.user?.profile]);

  useEffect(() => {
    manageMessage()
    setMessage(reduxState?.user?.message || reduxState?.user?.error)
    return () => {}
  }, [reduxState?.user?.message])

  useEffect(() => {
    setLoader(reduxState?.user?.loading)
    return () => {}
  }, [reduxState?.user?.loading])

  const resourceSubmitHandler = (e, type) => {
    e.preventDefault()
    setSubmitted(true)
    setLoading(true)
    saveResource(
      {
        resource_type: type,
        size: 1,
        price: resource[type],
        userId: Number(localStorage.getItem('userId'))
      },
      hideNotification
    )
  }

  const resourceChangeHandler = e => {
    let name = e.target.name
    let value = e.target.value
    setResource({ ...resource, [name]: value })
  }

  return (
    <div>
      {/* <Loader open={loader} /> */}
      <Snackbar
        open={isSubmitted}
        type={reduxState?.workspace?.error ? 'error' : 'success'}
        message={message}
      />
      <Wrapper>
        <GridContainer spacing={2}>
          <GridItem xs={12}>
            <FieldSet padding={30} title='Resource Quotation Management'>
              <GridContainer spacing={3}>
                <GridItem
                  container
                  style={{ textAlign: 'center' }}
                  className={classes.gridRow}
                  xs={2}
                >
                  <Typography>Fixed Quotation</Typography>
                </GridItem>
                <GridItem className={classes.gridRow} xs={3}>
                  <TextField
                    name='RAM'
                    fullWidth
                    label='RAM Charge ($/GiB)'
                    value={resource?.RAM}
                    onChange={resourceChangeHandler}
                    type='number'
                    inputProps={{ min: 0 }}
                  />
                </GridItem>
                <GridItem className={classes.gridRow} xs={3}>
                  <TextField
                    name='CPU'
                    fullWidth
                    label='CPU Charge ($/Core)'
                    value={resource?.CPU}
                    onChange={resourceChangeHandler}
                    type='number'
                    inputProps={{ min: 0 }}
                  />
                </GridItem>

                <GridItem className={classes.gridRow} xs={3}>
                  <TextField
                    name='VOLUME'
                    fullWidth
                    label='Volume Charge ($/GiB)'
                    value={resource?.VOLUME}
                    onChange={resourceChangeHandler}
                    type='number'
                    inputProps={{ min: 0 }}
                  />
                </GridItem>
                <GridItem justify='flex-end' xs={1}>
                  <Button
                    variant='outlined'
                    color='primary'
                    onClick={e => resourceSubmitHandler(e, 'FIXED')}
                    disabled={!resource?.VOLUME}
                  >
                    Save
                  </Button>
                </GridItem>
              </GridContainer>

              <GridContainer spacing={3} style={{marginTop :20}}>
                <GridItem xs={12} sm={12} md={12}>
                  <GridContainer spacing={2}>
                    <GridItem
                      container
                      style={{ textAlign: 'center' }}
                      className={classes.gridRow}
                      xs={2}
                    >
                      <Typography>Unlimited Quotation</Typography>
                    </GridItem>
                    <GridItem className={classes.gridRow} xs={3}>
                      <TextField
                        name='RAM'
                        fullWidth
                        label='RAM Charge ($/GiB)'
                        value={resource?.RAM}
                        onChange={resourceChangeHandler}
                        type='number'
                        inputProps={{ min: 0 }}
                      />
                    </GridItem>

                    <GridItem className={classes.gridRow} xs={3}>
                      <TextField
                        name='CPU'
                        fullWidth
                        label='CPU Charge ($/Core)'
                        value={resource?.CPU}
                        onChange={resourceChangeHandler}
                        type='number'
                        inputProps={{ min: 0 }}
                      />
                    </GridItem>

                    <GridItem className={classes.gridRow} xs={3}>
                      <TextField
                        name='VOLUME'
                        fullWidth
                        label='Volume Charge ($/GiB)'
                        value={resource?.VOLUME}
                        onChange={resourceChangeHandler}
                        type='number'
                        inputProps={{ min: 0 }}
                      />
                    </GridItem>
                    <GridItem justify='flex-end' xs={1}>
                      <Button
                        variant='outlined'
                        color='primary'
                        onClick={e => resourceSubmitHandler(e, 'UNLIMITED')}
                        disabled={!resource?.VOLUME}
                      >
                        Save
                      </Button>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </FieldSet>
          </GridItem>
          <GridItem xs={12}>
            <HostManageMent />
          </GridItem>

          <GridItem xs={12}>
            <FieldSet title='Customers'>
              <UsersList />
            </FieldSet>
          </GridItem>

          <GridItem xs={12}>
            <FieldSet title='Environment Configuration'>
              <Environment />
            </FieldSet>
          </GridItem>
        </GridContainer>
      </Wrapper>
    </div>
  )
}

export default connect(
  state => {
    return { ...state }
  },
  { saveResource, getResources }
)(Settings)
