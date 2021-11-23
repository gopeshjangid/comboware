import { Alert, Box } from '@mui/material'
import AlertTitle from '@mui/material/AlertTitle'
import { Chip, Typography } from 'components/Custom'
import Button from 'components/CustomButtons'
import Loader from 'components/Loader/circular'
import Modal from 'components/Modal'
import CustomTable from 'components/Table/CustomTable'
import Tabs from 'components/CustomTabs'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Domains from './domainsList'
import { SELECT_CLUSTER } from './redux/constants'
import { getAllHosts } from './redux/action'

const hostsListBox = ({ getAllHosts, domainsList, hostsList, profile }) => {
  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [domainModal, setDomainModal] = useState(false)
  const [modalHotList, setHostsList] = useState([])
  const [domainClusterUrl, setDomainClusterUrl] = useState('')
  const dispatch = useDispatch()
  const hideNotification = (status, message) => {
    setLoading(false)
    if (!status) {
      setError(message)
    } else {
      setError('')
    }
  }

  useEffect(() => {
    if (hostsList?.length === 0) {
      setLoading(true)
      getAllHosts(hideNotification)
    } else {
      setLoading(false)
    }

    return () => {}
  }, [])

  if (profile?.user_type !== 'ADMIN') {
    return null
  }

  const viewHostDomainModal = row => {
    setDomainClusterUrl(row?.clusterInfo?.cluster_url)
    dispatch({ type: SELECT_CLUSTER, payload: row?.clusterInfo })
    setHostsList(row.hostsList)
    setDomainModal(true)
  }

  const getColumns = () => {
    return [
      {
        field: 'cluster_Info',
        header: 'Cluster Name',
        align: 'center',
        width: 200,
        renderCell: row => {
          return (
            <Typography variant='body1' color='primary'>
              {row?.clusterInfo?.cluster_name}
            </Typography>
          )
        }
      },
      {
        field: 'cpu',
        header: 'Cluster IP',
        width: 100,
        renderCell: row => {
          return (
            <Typography variant='body2' color='primary'>
              {row?.clusterInfo?.cluster_ip}
            </Typography>
          )
        }
      },
      {
        field: 'ram',
        header: 'Cluster Username',
        width: 100,
        renderCell: row => {
          return (
            <Typography variant='body2' color='primary'>
              {row?.clusterInfo?.cluster_username}
            </Typography>
          )
        }
      },
      {
        field: 'status',
        header: 'STATUS',
        renderCell: row => {
          return (
            <Chip
              label={row?.status === 'enabled' ? 'ACTIVE' : 'INACTIVE'}
              type={row?.status === 'enabled' ? 'filled' : 'outlined'}
            />
          )
        }
      },
      {
        header: 'Action',
        width: 70,
        renderCell: row => {
          return (
            <Button onClick={() => viewHostDomainModal(row)} type='action'>
              View Hosts
            </Button>
          )
        }
      }
    ]
  }

  const getHostListColumns = () => {
    return [
      {
        field: 'hypervisor_hostname',
        header: 'Host Name',
        align: 'center',
        width: 200,
        renderCell: row => {
          return (
            <Typography variant='body1' color='primary'>
              {row?.hypervisor_hostname}
            </Typography>
          )
        }
      },
      {
        field: 'cpu',
        header: 'CPU',
        width: 100,
        renderCell: row => {
          return (
            <Typography variant='body2' color='primary'>
              {row?.vcpus - row?.vcpus_used}/{row?.vcpus}
            </Typography>
          )
        }
      },
      {
        field: 'ram',
        header: 'RAM(MB)',
        width: 100,
        renderCell: row => {
          return (
            <Typography variant='body2' color='primary'>
              {row?.memory_mb - row?.memory_mb_used}/{row?.memory_mb}
            </Typography>
          )
        }
      },
      {
        field: 'disk',
        header: 'DISK(GB)',
        width: 100,
        renderCell: row => {
          return (
            <Typography variant='body2' color='primary'>
              {row?.free_disk_gb}
            </Typography>
          )
        }
      },
      // {
      //   field: 'status',
      //   header: 'STATUS',
      //   renderCell: row => {
      //     return (
      //       <Chip
      //         label={row?.status === 'enabled' ? 'ACTIVE' : 'INACTIVE'}
      //         type={row?.status === 'enabled' ? 'filled' : 'outlined'}
      //       />
      //     )
      //   }
      // }
    ]
  }

  const handleClick = () => {}

  return (
    <div>
      {domainModal && (
        <Modal
          title='Host/Domain List'
          isOpen={domainModal}
          onSubmit={() => {
            setDomainModal(false), setHostsList([])
          }}
          onChange={flag => {
            setDomainModal(flag), setHostsList([])
          }}
          submitText='Ok'
          SaveText='OK'
          maxWidth='md'
        >
          <Tabs
            tabs={[
              {
                label: 'Host list',
                panel: (
                  <CustomTable
                    footer_label={'Available hypervisors'}
                    columns={getHostListColumns()}
                    data={modalHotList}
                  />
                )
              },
              {
                label: 'Domains List',
                panel: <Domains domainClusterUrl={domainClusterUrl} />
              }
            ]}
          />
        </Modal>
      )}
      {isLoading ? (
        <Box display="flex" justify="center">
          <Loader />
        </Box>
      ) : error ? (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : (
        <CustomTable
          footer_label={'Available hypervisors'}
          columns={getColumns()}
          data={hostsList}
          actions={[
            { label: 'Edit', handleClick: handleClick },
            { label: 'DELETE', handleClick: handleClick }
          ]}
        />
      )}
    </div>
  )
}

export default connect(
  state => {
    return { ...state?.dashboard, profile: state?.user?.profile }
  },
  { getAllHosts }
)(hostsListBox)
