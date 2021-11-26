import {Alert ,Box} from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';
import { Chip, Typography } from 'components/Custom';
import Loader from 'components/Loader/circular';
import CustomTable from 'components/Table/CustomTable';
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { getAllDomains } from './redux/action';

function hostsListBox({ getAllDomains, domainsList, profile, domainClusterUrl }) {
  const reduxState = useSelector((state) => state);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const hideNotification = (status, message) => {
    setLoading(false);
    if (!status) {
      setError(message);
    } else {
      setError('');
    }
  };

  

  useEffect(() => {
      setLoading(true);
      getAllDomains(hideNotification, reduxState?.dashboard?.selectedCluster?.cluster_url);
    return () => {};
  }, [reduxState?.dashboard?.selectedCluster]);

  if (profile?.user_type !== 'ADMIN') {
    return null;
  }

  const getColumns = () => {
    return [
      {
        field: 'name',
        header: 'Domain Name',
        width: 200,
        renderCell: (row) => {
          return (
            <>
              <Typography variant='body1' color='primary'>
                {row?.name}
              </Typography>
            </>
          );
        }
      },
      {
        field: 'description',
        header: 'Description'
      },
      {
        field: 'enabled',
        header: 'STATUS',
        renderCell: (row) => {
          return <Chip label={row?.enabled ? 'ACTIVE' : 'INACTIVE'} type={row?.enabled ? 'filled' : 'outlined'} />;
        }
      }
    ];
  };

  const handleClick = () => {};
console.log("loading" ,isLoading)
  return (
    <React.Fragment>
      {isLoading ? (
        <Box display="flex" justify="center" ><Loader /></Box>
      ) : error ? (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : (
        <CustomTable
          footer_label={'Available Domains'}
          columns={getColumns()}
          data={domainsList}
          actions={[
            { label: 'Edit', handleClick: handleClick },
            { label: 'DELETE', handleClick: handleClick }
          ]}
        />
      )}
    </React.Fragment>
  );
}

export default connect(
  (state) => {
    return { ...state?.dashboard, profile: state?.user?.profile };
  },
  { getAllDomains }
)(hostsListBox);
