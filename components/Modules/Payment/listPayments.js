import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Chip } from "@material-ui/core";
import Button from "components/CustomButtons";
import Snackbar from "components/Snackbar";
import CustomTable from "components/Table/CustomTable";
import Wrapper from "components/Wrapper";
import FieldSet from "components/Form/fieldset";
import { COLUMNS } from "./redux/constants";
import { getAllPayments } from "./redux/action";
import { useRouter } from "next/dist/client/router";
import Search from "components/Search";
function TicketsList({ getAllPayments }) {
	const reduxState = useSelector((state) => state);
	const [message, setMessage] = useState({ text: "", type: "success" });
	const [isSubmitted, setSubmitted] = useState(false);
	const [loader, setLoader] = useState(false);
	const [ticketList, setTicketList] = useState([]);
	const [paymentDetails, setPaymentDetails] = useState(null);
	const [filters, setFilter] = useState({
		payment_id: "",
		payment_status: "ALL",
	});
	const router = useRouter();
	const userType = reduxState?.user?.profile?.user_type;
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
				? "?userId=" +
				  Number(localStorage.getItem("userId")) +
				  "&payment_status=COMPLETED&payment_id="
				: "?payment_id=''&payment_status=COMPLETED";
		getAllPayments(query);
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

	const getColumnsFields = () => {
		return [
			{ field: "select", select: true },
			{ field: "payment_id", header: "Payment ID" },
			{ field: "reference_id", header: "Reference ID" },
			{
				field: "amount",
				header: "Amount",
				renderCell: (row) => {
					return (
						<Chip
							label={
								row?.amount ? "$" + Number(row?.amount).toFixed(2) : "$0.00"
							}
							variant="outlined"
							color={"secondary"}
						/>
					);
				},
			},
			{
				field: "payment_status",
				header: "Status",
				renderCell: (row) => {
					return (
						<Chip
							label={row?.payment_status}
							color={
								row?.payment_status === "COMPLETED" ? "primary" : "warning"
							}
						/>
					);
				},
			},
			{ field: "payment_date", header: "Payment Date" },
		];
	};

	const getColumns = () => {
		return COLUMNS?.map((col) => {
			if (col?.field === "payment_id") {
				col.renderCell = (params) => {
					return (
						<Button
							variant="outlined"
							color="primary"
							size="small"
							style={{ marginLeft: 16 }}
						>
							{params?.row?.payment_id}
						</Button>
					);
				};
			}

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
			if (col?.field === "payment_status") {
				col.renderCell = (params) => {
					return (
						<Chip
							label={params?.row?.payment_status}
							color={
								params?.row?.payment_status === "COMPLETED"
									? "success"
									: "error"
							}
						/>
					);
				};
			}

			if (col?.field === "amount") {
				col.renderCell = (params) => {
					return <Chip label={"$" + params?.row?.amount} />;
				};
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
		getAllPayments(query);
		setFilter(_filters);
	};

	const onSearch = (input) => {
		console.log("search", input);
	};

	return (
		<Wrapper>
			<Snackbar
				open={isSubmitted}
				type={message?.type || "success"}
				message={message?.text}
			/>
			<FieldSet title="Payment list">
				<GridContainer spacing={2}>
					<GridItem xs={6}>
						<Search onSubmit={onSearch} placeHolder="Search payments" />
					</GridItem>
					<GridItem xs={6} align="right">
						{userType !== "ADMIN" && (
							<Button onClick={() => router.push("/payment/new")}>
								Pay Bill
							</Button>
						)}
					</GridItem>

					<GridItem xs={12}>
						<CustomTable
							loading={loader}
							columns={getColumnsFields()}
							data={ticketList}
						/>
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
	{ getAllPayments }
)(TicketsList);
