import { Switch } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from 'components/CustomButtons';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Chip, Typography } from '../../Custom';
import CustomTab from '../../CustomTabs';
import GridContainer from '../../Grid/GridContainer';
import Snackbar from '../../Snackbar';
import CustomTable from '../../Table/CustomTable';
import Wrapper from '../../Wrapper';
import { getAllUserList, getProfile } from './redux/action';

const CustomerManagement = ({ getAllUserList, getProfile }) => {
  const reduxState = useSelector((state) => state.customer_management);
  const [message, setMessage] = useState({ text: '', type: 'success' });
  const [loader, setLoader] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  const callback = (status, message) => {
    setLoader(false);
    if (message) {
      setSubmitted(true);
      setMessage({ type: status ? 'success' : 'error', message: message });
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
  };

  useEffect(async () => {
    setLoader(true);
    setUserModal(false);
    await getAllUserList('ER', callback);
    await getAllUserList('USER', callback);
  }, []);

  const getColumns = () => {
    return [
      {
        field: 'first_name',
        header: 'Name',
        renderCell: (row) => {
          return (
            <Typography variant='body1' color='primary'>
              {row?.first_name + ' ' + row?.last_name}
            </Typography>
          );
        }
      },

      { field: 'email', header: 'Email' },
      {
        field: 'trial_expire_date',
        header: 'Trial Expiration Date',
        renderCell: (row) => {
          if (!row?.trial_expire_date) {
            return '';
          }
          return <Chip style='info' label={row?.trial_expire_date} color='primary' />;
        }
      },
      {
        field: 'trial_extend_date',
        header: 'Trial Extend Date',
        renderCell: (row) => {
          if (!row?.trial_extend_date) {
            return '';
          }
          return <Chip style='info' label={row?.trial_extend_date} color='primary' />;
        }
      },
      {
        field: 'status',
        header: 'STATUS',
        renderCell: (row) => {
          return (
            <Switch
              checked={row?.status}
              onChange={(event) => updateStatus(event, row.id)}
              color='primary'
              name='USER'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          );
        }
      },
      {
        field: 'action',
        header: 'STATUS',
        width: 100,
        renderCell: (row) => {
          return (
            <Button type='action' onClick={(e) => viewDetail(e, row.id)}>
              View detail
            </Button>
          );
        }
      }
    ];
  };

  const getUsersColumns = () => {
    return [
      {
        field: 'first_name',
        header: 'Name',
        renderCell: (row) => {
          return (
            <Typography variant='body1' color='primary'>
              {row?.first_name + ' ' + row?.last_name}
            </Typography>
          );
        }
      },
      { field: 'email', header: 'Email' },
      {
        field: 'trial_expire_date',
        header: 'Trial Expiration Date',
        renderCell: (row) => {
          if (!row?.trial_expire_date) {
            return '';
          }
          return <Chip style='info' label={row?.trial_expire_date} color='primary' />;
        }
      },
      {
        field: 'trial_extend_date',
        header: 'Trial Extend Date',
        renderCell: (row) => {
          if (!row?.trial_extend_date) {
            return '';
          }
          return <Chip style='info' label={row?.trial_extend_date} color='primary' />;
        }
      },
      {
        field: 'status',
        header: 'STATUS',
        renderCell: (row) => {
          return (
            <Switch
              checked={row?.status}
              onChange={(event) => updateStatus(event, row.id)}
              color='primary'
              name='ER'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          );
        }
      },
      {
        field: 'action',
        header: 'STATUS',
        width: 100,
        renderCell: (row) => {
          return (
            <Button type='action' onClick={(e) => viewDetail(e, row.id)}>
              View detail
            </Button>
          );
        }
      }
    ];
  };

  const updateStatus = async (event, id) => {
    const { name, checked } = event.target;
    setLoader(true);
    const status = Number(checked);
    await getAllUserList(name, callback);
  };

  const viewDetail = async (event, id) => {
    setLoader(true);
    setUserModal(true);
    await getProfile(id, callback);
    setUserDetail(reduxState.user_detail);
  };

  const hideDetail = (flag) => {
    setUserDetail({});
    setUserModal(flag);
  };

  return (
    <React.Fragment>
      <Loader open={loader} />
      <Snackbar open={isSubmitted} type={message?.type || 'success'} message={message?.message} />
      <Wrapper>
        <GridContainer spacing={2}>
          <CustomTab
            tabs={[
              {
                label: 'engineers',
                panel: <CustomTable columns={getColumns()} data={reduxState.engineers_list} />
              },
              {
                label: 'customer',
                panel: <CustomTable columns={getUsersColumns()} data={reduxState.usersList} />
              }
            ]}
          />
        </GridContainer>
      </Wrapper>
      {userModal && (
        <Modal
          title='Detail'
          isOpen={userModal}
          onSubmit={() => {
            setUserModal(false), setUserDetail({});
          }}
          onChange={(flag) => {
            setUserModal(flag), setUserDetail({});
          }}
          submitText='Ok'
          SaveText='OK'
          maxWidth='md'
        >
          {userDetail && (
            <List component='nav' aria-label='main mailbox folders'>
              <ListItem button>
                <ListItemText
                  primary={'Name:'}
                  secondary={`${userDetail.first_name || ''} ${userDetail.last_name || ''}`}
                />
              </ListItem>
              <ListItem button>
                <ListItemText primary={'UserName:'} secondary={userDetail.user_name || ''} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={`Company Name:`} secondary={userDetail.company_name || ''} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={`Company Position:`} secondary={userDetail.company_position || ''} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={`Company Phone:`} secondary={userDetail.company_phone || ''} />
              </ListItem>
              <ListItem button>
                <ListItemText primary={`Created at:`} secondary={userDetail.created_at || ''} />
              </ListItem>
            </List>
          )}
        </Modal>
      )}
    </React.Fragment>
  );
};

export default connect(
  (state) => {
    return { ...state?.customer_management };
  },
  { getAllUserList, getProfile }
)(CustomerManagement);
