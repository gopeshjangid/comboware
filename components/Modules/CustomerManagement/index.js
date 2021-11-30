import { Delete } from '@material-ui/icons';
import { Typography } from 'components/Custom';
import GridContainer from 'components/Grid/GridContainer';
import Snackbar from 'components/Snackbar';
import CustomTab from '../../CustomTabs';
import CustomTable from 'components/Table/CustomTable';
import Wrapper from 'components/Wrapper';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { getAllUserList } from './redux/action';

const CustomerManagement = () => {
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);
  const [userList, setUserList] = useState([]);
  const [engineerList, setEngineerList] = useState([]);
  const [fromData, setFromData] = useState({ skill: '', level: '' });
  const [isLoading, setLoading] = useState(false)

  const hideNotification = (status, message) => {
    setLoading(false)
    if (!status) {
      setError(message)
    } else {
      setError('')
    }
  }
  useEffect(() => {
    getAllUserList(hideNotification, 'ER');
    getAllUserList(hideNotification, 'USER');
    return () => {};
  }, [reduxState?.CustomerManagement?.engineerList, reduxState?.CustomerManagement?.userList]);

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setFromData({
      ...fromData,
      [name]: value
    });
  };

  const getColumns = () => {
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
        header: 'Skill Set',
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
          return <Delete onClick={() => deleteSkillItem(row, 'skill')} color='secondary' />;
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

  const handleClick = () => {};

  console.log(fromData);

  return (
    <React.Fragment>
      <Snackbar open={isSubmitted} type={reduxState?.workspace?.error ? 'error' : 'success'} message={message} />
      <Wrapper>
        <GridContainer spacing={2}>
          <CustomTab
            tabs={[
              { label: 'engineers', panel: <CustomTable columns={getColumns()} data={userList} /> },
              { label: 'customer', panel: <CustomTable columns={getColumns()} data={userList} /> }
            ]}
          />
        </GridContainer>
      </Wrapper>
    </React.Fragment>
  );
};

export default CustomerManagement;
