import { Alert, Box, IconButton } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay'
import AlertTitle from '@mui/material/AlertTitle'
import { Chip, Typography } from 'components/Custom'
import Loader from 'components/Loader/circular'
import CustomTable from 'components/Table/CustomTable'
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { getAllVirtualMachines } from '../Workspace/redux/action'

function VM ({ getAllVirtualMachines, selectedHost }) {
  const reduxState = useSelector(state => state)
  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const hideNotification = status => {
    setLoading(false)
    setError(!status)
  }

  console.log('selectedhost', reduxState?.dashboard)

  const getAllMachines = () => {
    setLoading(true)
    getAllVirtualMachines(
      {
        cluster_url: reduxState?.dashboard?.selectedCluster?.cluster_url,
        filter: { host: selectedHost?.hypervisor_hostname, all_tenants: true }
      },
      hideNotification
    )
  }

  useEffect(() => {
    getAllMachines()
    return () => {}
  }, [selectedHost])

  const getColumns = () => {
    return [
      {
        field: 'name',
        header: 'Name',
        width: 200,
        renderCell: row => {
          return (
            <>
              <Typography variant='body1' color='primary'>
                {row?.name}
              </Typography>
            </>
          )
        }
      },
      {
        field: 'memory_mb',
        header: 'RAM (MiB)'
      },
      {
        field: 'vcpus',
        header: 'CPU'
      },
      {
        field: 'hci_info',
        header: 'OS',
        renderCell: row => {
          return <Chip label={row?.hci_info?.os_type} type={'outlined'} />
        }
      },
      {
        field: 'status',
        header: 'STATUS',
        renderCell: row => {
          return (
            <Chip
              label={row?.status ? 'ACTIVE' : 'INACTIVE'}
              type={row?.status ? 'filled' : 'outlined'}
            />
          )
        }
      }
    ]
  }

  const handleClick = () => {}
  console.log('loading', isLoading)
  return (
    <React.Fragment>
      <Box display="flex" mb='10px' pb='10px'>
      <Typography
          style={{ textTransform: 'none' }}
          variant='body'
          color='primary'
        >
          HOST NAME:&nbsp;&nbsp;
        </Typography>
        <Typography
          style={{ textTransform: 'none' }}
          variant='subtitle2'
          color='primary'
        >
          {selectedHost?.hypervisor_hostname}
        </Typography>
      </Box>

      {isLoading ? (
        <Box display='flex' justify='center'>
          <Loader />
        </Box>
      ) : error ? (
        <Alert severity='error'>
          <AlertTitle>
            Something went wrong. Please try reload{' '}
            <IconButton onClick={() => getAllMachines()}>
              <ReplayIcon />
            </IconButton>
          </AlertTitle>
          {error}
        </Alert>
      ) : (
        <Box>
          <CustomTable
            footer_label={'Available Virtual Machines'}
            columns={getColumns()}
            data={reduxState?.workspace?.virtualMachines || []}
            actions={[
              { label: 'Edit', handleClick: handleClick },
              { label: 'DELETE', handleClick: handleClick }
            ]}
          />
        </Box>
      )}
    </React.Fragment>
  )
}

export default connect(
  state => {
    return { ...state?.dashboard, profile: state?.user?.profile }
  },
  { getAllVirtualMachines }
)(VM)
