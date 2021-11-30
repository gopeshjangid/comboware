import { Box } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Button from 'components/CustomButtons';
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Chip, Typography } from '../../Custom';
import CustomTab from '../../CustomTabs';
import GridContainer from '../../Grid/GridContainer';
import Snackbar from '../../Snackbar';
import CustomTable from '../../Table/CustomTable';
import Wrapper from '../../Wrapper';
import { getAllUserList } from './redux/action';
import useStyles from './styles';

const CustomerManagement = ({ getAllUserList }) => {
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [userList, setUserList] = useState([]);
  const [engineerList, setEngineerList] = useState([]);
  const [fromData, setFromData] = useState({ skill: '', level: '' });
  const [isLoading, setLoading] = useState(false);

  console.log(reduxState.customer_management);
  useEffect(async () => {
    await getAllUserList('ER');
    await getAllUserList('USER');
    return () => {};
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
          return <Chip label={row?.status ? 'ACTIVE' : 'INACTIVE'} type={row?.status ? 'filled' : 'outlined'} />;
        }
      },
      {
        field: 'action',
        header: 'STATUS',
        width: 100,
        renderCell: (row) => {
          return (
            <Box display='flex' justifyContent='space-between'>
              <Button type='action'>View detail</Button>
            </Box>
          );
        }
      }
    ];
  };

  const getSkillLevelColumns = () => {
    return [
      {
        field: 'id',
        header: '#',
        align: 'center',
        width: 80,
        renderCell: (row) => {
          return (
            <Typography variant='body2' color='primary'>
              {row.id}
            </Typography>
          );
        }
      },
      {
        field: 'name',
        header: 'Level',
        width: 100,
        renderCell: (row) => {
          return (
            <Typography variant='body2' color='primary'>
              {row.name}
            </Typography>
          );
        }
      },
      {
        header: 'Action',
        width: 70,
        renderCell: (row) => {
          return <Delete onClick={() => deleteSkillItem(row, 'level')} color='secondary' />;
        }
      }
    ];
  };

  console.log(fromData);

  return (
    <React.Fragment>
      <Snackbar open={isSubmitted} type={reduxState?.workspace?.error ? 'error' : 'success'} message={message} />
      <Wrapper>
        <GridContainer spacing={2}>
          <CustomTab
            tabs={[
              {
                label: 'engineers',
                panel: <CustomTable columns={getColumns()} data={reduxState.customer_management.engineers_list} />
              },
              {
                label: 'customer',
                panel: <CustomTable columns={getColumns()} data={reduxState.customer_management.userList} />
              }
            ]}
          />
        </GridContainer>
      </Wrapper>
    </React.Fragment>
  );
};

export default connect(
  (state) => {
    return { ...state?.customer_management };
  },
  { getAllUserList }
)(CustomerManagement);
