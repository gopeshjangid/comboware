import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, Box } from "@material-ui/core";
import styles from "./styles";
import Button from "components/CustomButtons";
import { Chip } from "components/Custom";
import Snackbar from "components/Snackbar";
import CustomTable from "components/Table/CustomTable";
import Wrapper from "components/Wrapper";
import FieldSet from "components/Form/fieldset";
import Search from "components/Search";
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
	const [ticketDetails, setTicketDetails] = useState(null);
	const [filters, setFilter] = useState({
		ticket_status: "ALL",
		repair_status: "ALL",
	});
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
					delete row["id"];
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
			type: reduxState?.ticket?.error ? "error" : "success",
		});

		setLoader(false);
		manageMessage();
		// getAllWorkspace();
		return () => {};
	}, [reduxState?.ticket?.message]);

	useEffect(() => {
		//  getProfile(reduxState?.user?.profile?.id || localStorage.getItem("userId"));
		let query =
			localStorage.getItem("userType") !== "ADMIN"
				? "?userId=" +
				  Number(localStorage.getItem("userId")) +
				  "&ticket_status=ALL&repair_status=ALL"
				: "?ticket_status=ALL&repair_status=ALL&user_type=ADMIN";
		getAllTickets(query, manageMessage);
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

	const viewTicket = (details) => {
		router.push("/ticket/" + details?.ticket_number);
	};

	const closeTicketDrawer = (open) => {
		if (!open) {
			setTicketDetails(null);
		}
	};

	const getColumnsFields = () => {
		return [
			// { field: "select", select: true },
			{
				field: "ticket_number",
				header: "Ticket Number",
				renderCell: (row) => {
					return <Chip type="filled" label={row?.ticket_number} />;
				},
			},
			{ field: "ticket_subject", header: "Title", renderCell: () => {} },
			{ field: "first_name", header: "Customer Name" },
			{
				field: "ticket_status",
				header: "Ticket Status",
				renderCell: (row) => {
					let color =
						row?.ticket_status === "OPEN"
							? "info"
							: row?.ticket_status === "CLOSED"
							? "success"
							: "warning";
					return (
						<Chip type="filled" label={row?.ticket_status} style={color} />
					);
				},
			},
			{
				field: "repair_status",
				header: "Repair Status",
				renderCell: (row) => {
					let color =
						row?.repair_status === "OPEN"
							? "info"
							: row?.repair_status === "CLOSED"
							? "success"
							: "warning";
					return (
						<Chip type="filled" label={row?.repair_status} style={color} />
					);
				},
			},
			{ field: "ticket_date", header: "Created At" },
			{
				field: "name",
				header: "Action",
				renderCell: (params) => {
					return (
						<Button
							color="primary"
							size="small"
							type="action"
							style={{ marginLeft: 16 }}
							onClick={() => viewTicket(params)}
						>
							View Detail
						</Button>
					);
				},
			},
		];
	};

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

	const onSearch = (input) => {
		console.log("search", input);
	};
	return (
		<Wrapper mt="20px">
			<Snackbar
				open={isSubmitted}
				type={message?.type || "success"}
				message={message?.text}
			/>

			<Drawer open={!!ticketDetails} onClose={closeTicketDrawer}>
				<Box className={classes.drawerBox}>
					<GridContainer spacing={3}>
						<GridItem xs={6}>
							<Typography color="primaryText">Title:</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="secondary">
								{ticketDetails?.ticket_subject}
							</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="primaryText">Category:</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="secondary">
								{ticketDetails?.category_name}
							</Typography>
						</GridItem>

						<GridItem xs={6}>
							<Typography color="primaryText">SubCategory:</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="secondary">
								{ticketDetails?.subcategory_name}
							</Typography>
						</GridItem>

						<GridItem xs={6}>
							<Typography color="primaryText">Ticket Status:</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="secondary">
								{ticketDetails?.ticket_status}
							</Typography>
						</GridItem>

						<GridItem xs={6}>
							<Typography color="primaryText">
								Repair Processing Date:
							</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="secondary">
								{ticketDetails?.repair_status}
							</Typography>
						</GridItem>

						<GridItem xs={6}>
							<Typography color="primaryText">Customer Name:</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="secondary">
								{ticketDetails?.first_name}
							</Typography>
						</GridItem>

						<GridItem xs={6}>
							<Typography color="primaryText">Customer Email:</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="secondary">{ticketDetails?.email}</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="primaryText">Company Name:</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="secondary">
								{ticketDetails?.company_name}
							</Typography>
						</GridItem>

						<GridItem xs={6}>
							<Typography color="primaryText">Company Email:</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="secondary">
								{ticketDetails?.company_email}
							</Typography>
						</GridItem>

						<GridItem xs={6}>
							<Typography color="primaryText">Company Phone:</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="secondary">
								{ticketDetails?.company_phone}
							</Typography>
						</GridItem>

						<GridItem xs={6}>
							<Typography color="primaryText">Company Address:</Typography>
						</GridItem>
						<GridItem xs={6}>
							<Typography color="secondary">
								{ticketDetails?.company_address}
							</Typography>
						</GridItem>

						<GridItem xs={6}>
							<Typography color="primaryText">System Image:</Typography>
						</GridItem>
						<GridItem xs={6}>
							<img
								className={classes.system_image}
								src={ticketDetails?.system_image}
								alt="system image"
							/>
						</GridItem>
					</GridContainer>
				</Box>
			</Drawer>
			<FieldSet title="Tickets">
				<GridContainer spacing={1}>
					<GridItem xs={12} sm={12} md={12}>
						<GridContainer spacing={1} justify="space-between">
							<GridItem xs={12} sm={6} align="left">
								{/* <Search onSubmit={onSearch} /> */}
							</GridItem>
							<GridItem xs={12} sm={6} align="right">
								{userType !== "ADMIN" && (
									<Button
										onClick={() => router.push("/ticket/new")}
										variant="contained"
									>
										Create New
									</Button>
								)}
							</GridItem>
							<GridItem xs={12}>&nbsp;</GridItem>
							{/* <GridItem xs={6}>
                  <Select
                    name="ticket_status"
                    options={TICKET_STATUS_LIST.map((status) => ({
                      label: status,
                      value: status,
                    }))}
                    label="Status"
                    value={filters?.ticket_status}
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
                    label="Repair Status"
                    value={filters?.repair_status}
                    onChange={onFilterChange}
                  />
                </GridItem> */}
						</GridContainer>

						<GridItem xs={12} sm={12}>
							<CustomTable
								columns={getColumnsFields()}
								data={ticketList}
								loading={loader}
							/>
						</GridItem>
					</GridItem>
				</GridContainer>
			</FieldSet>
		</Wrapper>
	);
}

export default connect(
	(state) => {
		return { ...state };
	},
	{ getAllTickets }
)(TicketsList);
