import { makeStyles } from '@material-ui/core/styles';
import { Chip } from 'components/Custom';
import Button from 'components/CustomButtons';
import FieldSet from 'components/Form/fieldset';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Loader from 'components/Loader';
import Search from 'components/Search';
import Snackbar from 'components/Snackbar';
import CustomTable from 'components/Table/CustomTable';
import Wrapper from 'components/Wrapper';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { getAllTickets } from './redux/action';
import styles from './styles';

const TicketsList = ({ getAllTickets, getProfile }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState({ text: '', type: 'success' });
  const [isSubmitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [ticketList, setTicketList] = useState([]);
  const [ticketDetails, setTicketDetails] = useState(null);
  const [filters, setFilter] = useState({ ticket_status: 'ALL', repair_status: 'ALL' });
  const userType = reduxState?.user?.profile?.user_type;
  const router = useRouter();
  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  useEffect(() => {
    setLoader(reduxState?.ticket?.loading);
    return () => {};
  }, [reduxState?.ticket?.loading]);

  useEffect(() => {
    setTicketList(
      reduxState?.ticket?.ticketList
        ?.map((row, key) => {
          delete row['id'];
          row.id = key + 1;
          return row;
        })
        .sort((a, b) => b.id - a.id)
    );
    return () => {};
  }, [reduxState?.ticket?.ticketList]);

  useEffect(() => {
    setMessage({
      text: reduxState?.ticket?.message || reduxState?.ticket?.error,
      type: reduxState?.ticket?.error ? 'error' : 'success'
    });

    setLoader(false);
    manageMessage();
    // getAllWorkspace();
    return () => {};
  }, [reduxState?.ticket?.message]);

  useEffect(() => {
    //  getProfile(reduxState?.user?.profile?.id || localStorage.getItem("userId"));
    let query =
      localStorage.getItem('userType') !== 'ADMIN'
        ? '?userId=' + Number(localStorage.getItem('userId')) + '&ticket_status=ALL&repair_status=ALL'
        : '?ticket_status=ALL&repair_status=ALL';
    getAllTickets(query, manageMessage);
    return () => {};
  }, []);

  useEffect(() => {
    manageMessage();
    setMessage({
      text: reduxState?.user?.message || reduxState?.user?.error,
      type: reduxState?.user?.error ? 'error' : 'success'
    });
    return () => {};
  }, [reduxState?.user?.message]);

  useEffect(() => {
    setLoader(reduxState?.user?.loading);
    return () => {};
  }, [reduxState?.user?.loading]);

  useEffect(() => {
    setLoader(true);
    return () => {};
  }, []);

  const viewTicket = (details) => {
    router.push('/ticket/' + details?.ticket_number);
  };

  const getColumnsFields = () => {
    return [
      // { field: "select", select: true },
      {
        field: 'ticket_number',
        header: 'Ticket Number',
        renderCell: (row) => {
          return <Chip type='filled' label={row?.ticket_number} />;
        }
      },
      { field: 'ticket_subject', header: 'Title', renderCell: () => {} },
      { field: 'first_name', header: 'Customer Name' },
      {
        field: 'ticket_status',
        header: 'Ticket Status',
        renderCell: (row) => {
          let color = row?.ticket_status === 'OPEN' ? 'info' : row?.ticket_status === 'CLOSED' ? 'success' : 'warning';
          return <Chip type='filled' label={row?.ticket_status} style={color} />;
        }
      },
      {
        field: 'repair_status',
        header: 'Repair Status',
        renderCell: (row) => {
          let color = row?.repair_status === 'OPEN' ? 'info' : row?.repair_status === 'CLOSED' ? 'success' : 'warning';
          return <Chip type='filled' label={row?.repair_status} style={color} />;
        }
      },
      { field: 'ticket_date', header: 'Created At' },
      {
        field: 'name',
        header: 'Action',
        renderCell: (params) => {
          return (
            <Button
              color='primary'
              size='small'
              type='action'
              style={{ marginLeft: 16 }}
              onClick={() => viewTicket(params)}
            >
              View Detail
            </Button>
          );
        }
      }
    ];
  };

  const onSearch = (input) => {
    console.log('search', input);
  };

  return (
    <Wrapper mt='20px'>
      <Loader open={loader} />
      <Snackbar open={isSubmitted} type={message?.type || 'success'} message={message?.text} />
      <FieldSet title='Tickets'>
        <GridContainer spacing={1}>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer spacing={1} justify='space-between' style={{ marginBottom: 20 }}>
              <GridItem xs={12} sm={6} align='left'>
                <Search onSubmit={onSearch} />
              </GridItem>
              <GridItem xs={12} sm={6} align='right'>
                {userType !== 'ADMIN' && (
                  <Button onClick={() => router.push('/ticket/new')} variant='contained'>
                    Create New
                  </Button>
                )}
              </GridItem>
            </GridContainer>
            <GridItem xs={12} sm={12}>
              <CustomTable columns={getColumnsFields()} data={ticketList} />
            </GridItem>
          </GridItem>
        </GridContainer>
      </FieldSet>
    </Wrapper>
  );
};

export default connect(
  (state) => {
    return { ...state };
  },
  { getAllTickets }
)(TicketsList);
