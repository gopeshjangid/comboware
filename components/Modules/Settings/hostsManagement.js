import React, { useState, useEffect, useRef } from 'react'

import { connect, useSelector } from 'react-redux'
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import { Typography, IconButton, Box } from '@material-ui/core'
import { CloseOutlined } from '@material-ui/icons'
import TextField from '../../CustomInput/TextField'
import useStyles from './styles'
import Button from 'components/CustomButtons'
import CircularProgress from 'components/Loader/circular'
import Snackbar from 'components/Snackbar'
import { saveCluster } from './redux/action'
import FieldSet from 'components/Form/fieldset'
import HostList from 'components/Modules/Dashboard/hostsList'
function Settings ({ saveCluster, settings }) {
  const classes = useStyles()
  const reduxState = useSelector(state => state)
  const [message, setMessage] = useState({ type: 'success', content: '' })
  const [isNew, setNew] = useState(false)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState({
    cluster_ip: false,
    cluster_uuid: false,
    cluster_flavor_ref: false,
    cluster_image_ref: false
  })
  const [cluster, setCluster] = useState({
    cluster_name: '',
    cluster_ip: '',
    cluster_username: '',
    cluster_uuid: '',
    cluster_password: '',
    cluster_flavor_ref: '',
    cluster_image_ref: ''
  })
  const [isSubmitted, setSubmitted] = useState(false)
  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  const hideNotification = status => {
    setSubmitted(false)
    setLoader(false)
    setMessage({
      content: status
        ? 'Cluster has been saved.'
        : 'Something went wrong. Please try again later.',
      type: status ? 'success' : 'error'
    })
  }

  const checkValidation = (type, value) => {
    const _error = { ...error }
    if (type === 'cluster_ip') {
      _error.cluster_ip = !/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        value
      )
    } else {
      _error[type] = value && value?.length < 36
    }
    setError(_error)
  }

  const hostSubmitHandler = e => {
    setSubmitted(true)
    e.preventDefault()
    if (Object.values(cluster).every(val => val !=='') && Object.values(error).every(err => !err)) {
      setLoader(true)
      setMessage({type : 'success' ,content : 'Please wait...'});
      saveCluster(cluster, hideNotification)
    } else {
      manageMessage();
      setMessage({type : 'error' ,content : 'Please fill all the valid details.'});
    }
  }

  const blurHandler = e => {
    checkValidation(e.target.name, e.target.value)
  }

  const hostChangeHandler = e => {
    let name = e.target.name
    let value = e.target.value
    setCluster({ ...cluster, [name]: value })
  }

  return (
    <div>
      <Snackbar
        open={isSubmitted}
        type={message?.type}
        message={message?.content}
      />
      <GridContainer spacing={3}>
        {!isNew ? (
          <GridItem xs={12} sm={12} md={12}>
            {' '}
            <FieldSet padding={10} title='Clusters List'>
              <Box
                style={{ marginBottom: 20 }}
                display='flex'
                justifyContent='flex-end'
              >
                <Button onClick={() => setNew(true)}>Add New</Button>
              </Box>
              <HostList />
            </FieldSet>
          </GridItem>
        ) : (
          <GridItem xs={12} sm={12} md={12}>
            <FieldSet padding={30} title='Add New Cluster'>
              <GridContainer spacing={2}>
                <GridItem style={{ textAlign: 'right' }} className={classes.gridRow}
                  xs={6}>{loader && <CircularProgress />} </GridItem>
                <GridItem
                  className={classes.gridRow}
                  xs={6}
                  style={{ textAlign: 'right' }}
                >
                  <IconButton onClick={() => setNew(false)}>
                    <CloseOutlined />
                  </IconButton>{' '}
                </GridItem>
                <GridItem className={classes.gridRow} xs={6}>
                  <TextField
                    name='cluster_name'
                    fullWidth
                    label='Host Name'
                    value={cluster?.cluster_name}
                    onChange={hostChangeHandler}
                  />
                </GridItem>

                <GridItem className={classes.gridRow} xs={6}>
                  <TextField
                    fullWidth
                    name='cluster_username'
                    label='Cluster login username'
                    value={cluster?.cluster_username}
                    onChange={hostChangeHandler}
                    type='text'
                  />
                </GridItem>

                <GridItem className={classes.gridRow} xs={3}>
                  <TextField
                    fullWidth
                    name='cluster_password'
                    label='Cluster password'
                    value={cluster?.cluster_password}
                    onChange={hostChangeHandler}
                    type='password'
                    autocomplete="off"
                  />
                </GridItem>
                <GridItem className={classes.gridRow} xs={3}>
                  <TextField
                    name='cluster_ip'
                    fullWidth
                    label='Cluster IP'
                    value={cluster?.cluster_ip}
                    onChange={hostChangeHandler}
                    type='text'
                    inputProps={{ min: 0 }}
                    onKeyPress={blurHandler}
                    error={error?.cluster_ip}
                    helperText={
                      error?.cluster_ip ? 'Cluster ip is not valid.' : ''
                    }
                  />
                </GridItem>
                <GridItem className={classes.gridRow} xs={6}>
                  <TextField
                    fullWidth
                    name='cluster_image_ref'
                    label='Image template ref'
                    value={cluster?.cluster_image_ref}
                    onChange={hostChangeHandler}
                    type='text'
                    onKeyPress={blurHandler}
                    error={error?.cluster_image_ref}
                    helperText={
                      error?.cluster_image_ref &&
                      'Image template ref is not valid.'
                    }
                  />
                </GridItem>
                <GridItem className={classes.gridRow} xs={6}>
                  <TextField
                    fullWidth
                    name='cluster_flavor_ref'
                    label='Flavor ref'
                    value={cluster?.cluster_flavor_ref}
                    onChange={hostChangeHandler}
                    onKeyPress={blurHandler}
                    type='text'
                    error={error?.cluster_flavor_ref}
                    helperText={
                      error?.cluster_flavor_ref && 'Flavor ref is not valid.'
                    }
                  />
                </GridItem>

                <GridItem className={classes.gridRow} xs={6}>
                  <TextField
                    fullWidth
                    name='cluster_uuid'
                    label='Network UUID'
                    value={cluster?.cluster_uuid}
                    onKeyDown={blurHandler}
                    onChange={hostChangeHandler}
                    type='text'
                    error={error?.cluster_uuid}
                    helperText={
                      error?.cluster_uuid && 'Network UUID is not valid.'
                    }
                  />
                </GridItem>

                <GridItem style={{ textAlign: 'right' }} xs={12}>
                  <Button
                    variant='outlined'
                    color='primary'
                    onClick={e => hostSubmitHandler(e)}
                  >
                    Save
                  </Button>
                </GridItem>
              </GridContainer>
            </FieldSet>
          </GridItem>
        )}
      </GridContainer>
    </div>
  )
}

export default connect(
  state => {
    return { ...state }
  },
  { saveCluster }
)(Settings)
