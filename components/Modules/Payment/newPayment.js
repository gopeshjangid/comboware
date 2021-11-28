import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, Box, Chip } from "@material-ui/core";
import CardBody from "components/Card/CardBody.js";
import styles from "./styles";
import Button from "components/CustomButtons";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import { useRouter } from "next/dist/client/router";
import Wrapper from "components/Wrapper";
import FieldSet from "components/Form/fieldset";
import { createPayment, getBillingAmount } from "./redux/action";

import PaypalPayment from "./Paypal";

function newPayment({ createPayment, getBillingAmount }) {
	const useStyles = makeStyles(styles);
	const classes = useStyles();
	const reduxState = useSelector((state) => state);
	const [message, setMessage] = useState("");
	const [isSubmitted, setSubmitted] = useState(false);
	const [loader, setLoader] = useState(false);
	const [isLoaded, setLoaded] = useState(false);
	const [paymentDetails, setPaymentDetails] = useState(null);
	const [paymentError, setPaymentError] = useState(null);
	const [billing, setBilling] = useState(null);
	const router = useRouter();

	const manageMessage = () => {
		setTimeout(() => {
			setSubmitted(false);
			setMessage("");
		}, 4000);
	};

	let amount = "10";

	useEffect(() => {
		if (reduxState?.payment?.message || reduxState?.payment?.error) {
			setMessage({
				text: reduxState?.payment?.message || reduxState?.payment?.error,
				type: reduxState?.payment?.error ? "error" : "success",
			});
			setSubmitted(true);
			manageMessage();
		}
		return () => {};
	}, [reduxState?.payment?.message]);

	useEffect(() => {
		setLoader(reduxState?.payment?.loading);
		return () => {};
	}, [reduxState?.payment?.loading]);

	useEffect(() => {
		setLoader(false);
		setBilling(reduxState?.payment?.billing);
		setPaymentDetails({ ...paymentDetails, ...reduxState?.payment?.billing });
		return () => {};
	}, [reduxState?.payment?.billing]);

	useEffect(() => {
		setPaymentDetails(reduxState?.payment?.paymentDetails);
	}, [reduxState?.payment?.paymentDetails]);

	const setPaymentNotification = (status, message) => {
		if (!status) {
			setPaymentError(message);
		}
	};

	useEffect(() => {
		setLoaded(true);
		let query = {
			userId: Number(localStorage.getItem("userId")),
			bill_duration: "current",
		};
		getBillingAmount(query, setPaymentNotification);
	}, []);

	const onSuccess = (data) => {
		createPayment({
			...data,
			payment_id: billing?.payment_id,
			payment_status: "COMPLETED",
			payment_description: "Payment success",
		});
		setPaymentDetails(data);
	};

	const onError = (data) => {
		manageMessage();
		setSubmitted(true);
		createPayment({
			...data,
			payment_id: billing?.payment_id,
			payment_status: "FAILED",
			payment_description: "Payment error due to technical glitch.",
		});
		setMessage({
			text: "Something went wrong. please try again.",
			type: "error",
		});
	};
	console.log("billing", billing);
	const showPaypalButton =
		billing?.amount && !billing?.is_paid && billing?.is_payable;
	console.log("showPaypalButton", showPaypalButton);
	return (
		<Wrapper>
			<Loader open={loader} />
			<Snackbar
				open={isSubmitted}
				type={message?.type || "success"}
				message={message?.text}
			/>
			<FieldSet title="New Payment">
				<GridContainer justify="space-around" align="center" spacing={1}>
					<GridItem xs={6}></GridItem>
					<GridItem
						xs={6}
						style={{ textAlign: "right", paddingTop: 10, paddingRight: 33 }}
					>
						&nbsp;
						<Button
							type="error"
							variant="outlined"
							onClick={() => router.push("/payment")}
						>
							Payments list
						</Button>
					</GridItem>
				</GridContainer>
				<CardBody>
					<GridContainer spacing={1}>
						<GridItem xs={12}>
							{paymentDetails?.payment_status !== "COMPLETED" ? (
								<fieldset
									className={classes.boxModal}
									borderColor="#e7e9f0"
									border={0.5}
								>
									<legend>Payment Information</legend>
									<GridContainer spacing={2}>
										{paymentError ? (
											<GridItem xs={12}>
												<Chip color="primary" label={paymentError} />
											</GridItem>
										) : (
											<GridItem xs={12}>
												<GridContainer spacing={4}>
													<GridItem xs={3}>
														<Typography>Billing Period</Typography>
													</GridItem>
													<GridItem xs={3}>
														<Typography>Start Date</Typography>
														<Typography variant="subtitle2">
															{billing?.start_date || "NA"}
														</Typography>
													</GridItem>
													<GridItem xs={3}>
														<Typography>End Date</Typography>
														<Typography variant="subtitle2">
															{billing?.end_date || "NA"}
														</Typography>
													</GridItem>
													<GridItem xs={3}>
														<Typography>Updated on</Typography>
														<Typography variant="subtitle2">
															{billing?.modified_on || "NA"}
														</Typography>
													</GridItem>
													<GridItem xs={3}>
														<Typography>Payment Amount</Typography>
													</GridItem>
													<GridItem xs={8}>
														<Chip
															color="primary"
															variant="outlined"
															label={
																"$" + (billing?.amount?.toFixed(2) || "0.00")
															}
														/>
													</GridItem>

													<GridItem xs={12}>
														{isLoaded && showPaypalButton ? (
															<PaypalPayment
																onError={onError}
																onSuccess={onSuccess}
																amount={billing?.amount || amount}
															/>
														) : (
															""
														)}
													</GridItem>
													<GridItem xs={12} style={{ textAlign: "center" }}>
														{billing?.is_paid ? (
															<Chip
																color="success"
																style={{
																	color: "#5cc45c",
																	border: "2px solid #5cd961",
																	fontWeight: "bold",
																}}
																variant="outlined"
																label={"PAID"}
															/>
														) : (
															""
														)}
													</GridItem>
												</GridContainer>
											</GridItem>
										)}
									</GridContainer>
								</fieldset>
							) : (
								<fieldset
									className={classes.boxModal}
									borderColor="#e7e9f0"
									border={0.5}
								>
									<legend>Payment Summary</legend>
									<GridContainer spacing={2}>
										<GridItem xs={12}>
											<GridContainer spacing={3}>
												<GridItem xs={4}>
													<Typography>Payment Status</Typography>
												</GridItem>
												<GridItem xs={8}>
													<Chip
														variant="filled"
														color={
															paymentDetails?.payment_status === "COMPLETED"
																? "primary"
																: "success"
														}
														variant="outlined"
														label={paymentDetails?.payment_status}
													/>
												</GridItem>
												<GridItem xs={4}>
													<Typography>Payment Created</Typography>
												</GridItem>
												<GridItem xs={8}>
													<Typography>
														{paymentDetails?.payment_date}
													</Typography>
												</GridItem>

												<GridItem xs={4}>
													<Typography>Payment Amount</Typography>
												</GridItem>
												<GridItem xs={8}>
													<Chip
														variant="filled"
														color={"primary"}
														label={
															paymentDetails?.amount
																? "$" +
																  Number(paymentDetails?.amount)?.toFixed(2)
																: "$0.00"
														}
													/>
												</GridItem>

												<GridItem xs={4}>
													<Typography>Reference Id</Typography>
												</GridItem>
												<GridItem xs={8}>
													<Typography>
														{paymentDetails?.reference_id}
													</Typography>
												</GridItem>
											</GridContainer>
										</GridItem>
									</GridContainer>
								</fieldset>
							)}
						</GridItem>
					</GridContainer>
				</CardBody>
			</FieldSet>
		</Wrapper>
	);
}

export default connect(
	(state) => {
		return { ...state };
	},
	{ createPayment, getBillingAmount }
)(newPayment);
