import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, IconButton, Box } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextField from "../../CustomInput/TextField";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import Modal from "components/Modal";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import Table from "../../Table/Table-Grid";
import Select from "../../Select";
import {
  COLUMNS,
  TICKET_STATUS_LIST,
  REPAIR_STATUS_LIST,
} from "./redux/constants";
import { getAllTickets } from "./redux/action";
import Drawer from "../../Drawers";
import { useRouter } from "next/dist/client/router";

function TicketsList({ getAllTickets, getProfile }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const reduxState = useSelector((state) => state);
  const [message, setMessage] = useState({ text: "", type: "success" });
  const [isSubmitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [ticketList, setTicketList] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [filters, setFilter] = useState({ticket_status : 'ALL' ,repair_status : 'ALL'});
  const router = useRouter();
  const manageMessage = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  useEffect(() => {
    // setLoader(reduxState?.payment?.loading);
    return () => {};
  }, [reduxState?.payment?.loading]);

  useEffect(() => {
    setTicketList(
      reduxState?.payment?.paymentList?.map((row, key) => {
        delete row["id"];
        row.id = key + 1;
        return row;
      })
    );
    return () => {};
  }, [reduxState?.payment?.paymentList]);

  console.log("reduxState", reduxState);
  useEffect(() => {
    setMessage({
      text: reduxState?.payment?.message || reduxState?.payment?.error,
      type: reduxState?.payment?.error ? "error" : "success",
    });

    setLoader(false);
    manageMessage();
    // getAllWorkspace();
    return () => {};
  }, [reduxState?.payment?.message]);

  useEffect(() => {
    //  getProfile(reduxState?.user?.profile?.id || localStorage.getItem("userId"));
    let query =
      localStorage.getItem("userType") !== "ADMIN"
        ? "?userId=" + Number(localStorage.getItem("userId"))+'&ticket_status=ALL&repair_status=ALL'
        : "?ticket_status=ALL&repair_status=ALL";
    getAllTickets(query);
    return () => {};
  }, []);

  useEffect(() => {
    manageMessage();
    setMessage({
      text: reduxState?.user?.message || reduxState?.user?.error,
      type: reduxState?.user?.error ? "error" : "success",
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

  const actionHandler = (e, data, status) => {
    e.preventDefault();
    setSubmitted(true);
    setLoader(true);
    console.log("data", data);
    updateRequest({
      workspaceId: data?.row?.id,
      requestStatus: "APPROVED",
      userId: data?.row?.user_id,
    });
  };

  const viewTicket = (details) => {
    setPaymentDetails(details);
  };

  const closeTicketDrawer = (open) => {
    if (!open) {
      setPaymentDetails(null);
    }
  };

  const getColumns = () => {
    return COLUMNS?.map((col) => {
      if (col?.field === "action") {
        col.renderCell = (params) => {
          return (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => viewTicket(params?.row)}
            >
              View
            </Button>
          );
        };
      }
      if (col?.field === "ticket_number") {
      }

      if (col?.field === "ticket_number") {
        col.renderCell = (params) => {
          return (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() =>
                router.push("/payment/" + params?.row?.payment_number)
              }
            >
              {params?.row?.payment_number}
            </Button>
          );
        };
      }
      return col;
    });
  };
  console.log("filter", filters);

  const onFilterChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let query =
      localStorage.getItem("userType") !== "ADMIN"
        ? "?userId=" + Number(localStorage.getItem("userId"))
        : "";
    let sign = query === "" ? "?" : "&";
    let _filters = { ...filters, [name]: value };
      if (!filters) {
        query += sign + `${name}=${value}`;
      } else {
        query += sign + `${new URLSearchParams(_filters).toString()}`;
      }
    getAllTickets(query);
    setFilter(_filters);
  };
  return (
    <div>
      <Loader open={loader} />
      <Snackbar
        open={isSubmitted}
        type={message?.type || "success"}
        message={message?.text}
      />

      <Drawer open={!!paymentDetails} onClose={closeTicketDrawer}>
        <Box className={classes.drawerBox}>
          <GridContainer spacing={3}>
            <GridItem xs={6}>
              <Typography color="primaryText">Title:</Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="secondary">
                {paymentDetails?.payment_subject}
              </Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="primaryText">Category:</Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="secondary">
                {paymentDetails?.category_name}
              </Typography>
            </GridItem>

            <GridItem xs={6}>
              <Typography color="primaryText">SubCategory:</Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="secondary">
                {paymentDetails?.subcategory_name}
              </Typography>
            </GridItem>

            <GridItem xs={6}>
              <Typography color="primaryText">Payment Status:</Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="secondary">
                {paymentDetails?.payment_status}
              </Typography>
            </GridItem>

            <GridItem xs={6}>
              <Typography color="primaryText">
                Repair Processing Date:
              </Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="secondary">
                {paymentDetails?.repair_status}
              </Typography>
            </GridItem>

            <GridItem xs={6}>
              <Typography color="primaryText">Customer Name:</Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="secondary">
                {paymentDetails?.first_name}
              </Typography>
            </GridItem>

            <GridItem xs={6}>
              <Typography color="primaryText">Customer Email:</Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="secondary">{paymentDetails?.email}</Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="primaryText">Company Name:</Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="secondary">
                {paymentDetails?.company_name}
              </Typography>
            </GridItem>

            <GridItem xs={6}>
              <Typography color="primaryText">Company Email:</Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="secondary">
                {paymentDetails?.company_email}
              </Typography>
            </GridItem>

            <GridItem xs={6}>
              <Typography color="primaryText">Company Phone:</Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="secondary">
                {paymentDetails?.company_phone}
              </Typography>
            </GridItem>

            <GridItem xs={6}>
              <Typography color="primaryText">Company Address:</Typography>
            </GridItem>
            <GridItem xs={6}>
              <Typography color="secondary">
                {paymentDetails?.company_address}
              </Typography>
            </GridItem>

            <GridItem xs={6}>
              <Typography color="primaryText">System Image:</Typography>
            </GridItem>
            <GridItem xs={6}>
              <img
                className={classes.system_image}
                src={paymentDetails?.system_image}
                alt="system image"
              />
            </GridItem>
          </GridContainer>
        </Box>
      </Drawer>
      <GridContainer spacing={1}>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader>
              <GridContainer spacing={1} justify="space-between">
                <GridItem xs={6}>
                  <Typography variant="h5">Payments</Typography>
                </GridItem>
                <GridItem xs={6} align="right">
                  {" "}
                  <Button
                    onClick={() => router.push("/payment/new")}
                    variant="outlined"
                  >
                    Create New
                  </Button>
                </GridItem>
                <GridItem xs={12}>&nbsp;</GridItem>
                <GridItem xs={6}>
                  <Select
                    name="ticket_status"
                    options={TICKET_STATUS_LIST.map((status) => ({
                      label: status,
                      value: status,
                    }))}
                    label="Status"
                    value={filters?.payment_status}
                    onChange={onFilterChange}
                  />
                </GridItem>

                <GridItem xs={6}>
                  <Select
                    name="repair_status"
                    options={REPAIR_STATUS_LIST.map((status) => ({
                      label: status,
                      value: status,
                    }))}
                    label="Payment Status"
                    value={filters?.repair_status}
                    onChange={onFilterChange}
                  />
                </GridItem>
              </GridContainer>
            </CardHeader>
            <CardBody>
              <GridContainer spacing={2}>
                <Table pageSize={15} columns={getColumns()} rows={ticketList} />
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>

        {/* <GridItem xs={12} sm={12} md={12} align="right" alignContent="flex-end">
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitHandler}
          >
            Save Changes
          </Button>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  { getAllTickets }
)(TicketsList);