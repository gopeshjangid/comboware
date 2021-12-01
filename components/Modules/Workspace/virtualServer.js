import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography, Box, Chip } from "@material-ui/core";
import TextField from "../../CustomInput/TextField";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import { serverRequest, getWorkSpaceDetails } from "../Workspace/redux/action";
import { IMAGE, NETWORK, FLAVOR } from "./redux/constants";
import Wrapper from "components/Wrapper";
import FieldSet from "components/Form/fieldset";

function Server({ serverRequest, getWorkSpaceDetails }) {
	const useStyles = makeStyles(styles);
	const classes = useStyles();
	const reduxState = useSelector((state) => state);
	const [message, setMessage] = useState("");
	const [isSubmitted, setSubmitted] = useState(false);
	const [loader, setLoader] = useState(false);
	const [server, setServer] = useState({
		form: {
			networks: {
				name: NETWORK?.name,
				uuid: NETWORK?.id,
				fixed_ip: "static",
			},

			server: {
				server_name: reduxState?.user?.profile?.first_name + "Cloud",
				ram: 4,
				cpu: 2,
				capacity: 64,
			},
			imageRef: IMAGE?.id,
			flavorRef: FLAVOR?.id,
			userId: reduxState?.user?.profile?.id,
		},
		error: {
			network_name: false,
			user_name: false,
			password: false,
		},
		label: {
			textTransform: "none",
			fontSize: "13px !important",
		},
		labelData: {
			textTransform: "none",
			fontWeight: "bold",
			fontSize: "13px",
		},
	});

	const manageMessage = () => {
		setTimeout(() => {
			setSubmitted(false);
		}, 4000);
	};

	useEffect(() => {
		if (reduxState?.workspace?.message || reduxState?.workspace?.error) {
			setMessage({
				text: reduxState?.workspace?.message || reduxState?.workspace?.error,
				type: reduxState?.workspace?.error ? "error" : "success",
			});
			setSubmitted(true);
			manageMessage();
		}
		return () => {};
	}, [reduxState?.workspace?.message]);

	useEffect(() => {
		setLoader(reduxState?.workspace?.loading);
		return () => {};
	}, [reduxState?.workspace?.loading]);

	useEffect(() => {
		console.log("reduxState?.workspace?.server", reduxState?.workspace?.server);
		if (!reduxState?.workspace?.server?.id && isSubmitted) {
			getWorkSpaceDetails(Number(localStorage.getItem("userId")));
		} else {
			setServer({
				...server,
				form: {
					...server?.form,
					server: reduxState?.workspace?.server?.id
						? { ...reduxState?.workspace?.server }
						: {
								...server?.form?.server,
								server_name: reduxState?.user?.profile?.first_name + "Cloud",
						  },
				},
			});
		}
		setSubmitted(false);
		return () => {};
	}, [reduxState?.workspace?.server]);

	useEffect(() => {
		getWorkSpaceDetails(Number(localStorage.getItem("userId")));
	}, []);

	const validateServerDetails = () => {
		if (!reduxState?.workspace?.domain?.id) {
			setMessage({ text: "Please create domain first", type: "error" });
			return false;
		} else if (!reduxState?.workspace?.project?.id) {
			setMessage({ text: "Please create project first", type: "error" });
			return false;
		} else {
			setMessage({ text: "", type: "success" });
			return true;
		}

		let _server = { ...server };
		_server.error = {
			..._server.error,
			first_name: _server?.form?.first_name === "",
		};

		setServer(_server);

		return !Object.values(_server?.error).some((field) => field);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setSubmitted(true);
		if (validateServerDetails()) {
			setLoader(true);
			serverRequest({
				...server?.form,
				userId: localStorage.getItem("userId"),
			});
		}
	};

	const changeHandler = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setServer({
			...server,
			form: {
				...server?.form,
				server: { ...server?.form?.server, [name]: value },
			},
		});
	};

	return (
		<Wrapper>
			<Loader open={loader} />
			<Snackbar
				open={isSubmitted}
				type={message?.type || "success"}
				message={message?.text}
			/>
			<FieldSet title="Virtual Server Configuration">
				<GridContainer spacing={1}>
					<GridItem xs={12} sm={6} md={6}>
						<Typography
							gutterBottom={2}
							align="left"
							variant="subtitle1"
							color="secondary"
						>
							Network Configuration
						</Typography>
						<Box
							className={classes.boxModal}
							borderColor="#e7e9f0"
							border={0.5}
						>
							<GridContainer spacing={3}>
								<GridItem xs={12}>
									<GridContainer spacing={1}>
										<GridItem xs={4}>
											<Typography className={classes.label}>
												Network Name:
											</Typography>
										</GridItem>
										<GridItem xs={8}>
											<Typography
												className={classes.labelData}
												variant="subtitle2"
												color="textSecondary"
											>
												{NETWORK.name}
											</Typography>
										</GridItem>
										<GridItem xs={4}>
											<Typography className={classes.label}>Type:</Typography>
										</GridItem>
										<GridItem xs={8}>
											<Typography
												className={classes.labelData}
												variant="subtitle2"
												color="textSecondary"
											>
												{NETWORK.type}
											</Typography>
										</GridItem>
										{/*<GridItem xs={4}>
                      <Typography >Network ID:</Typography>
                    </GridItem>
                    <GridItem xs={8}>
                      <Typography variant="subtitle2" color="textSecondary">{NETWORK.id}</Typography>
                    </GridItem> */}
									</GridContainer>
								</GridItem>
								{/* <GridItem xs={12}>
                  <TextField
                    onChange={profileChangeHandler}
                    name="Public IP"
                    fullWidth
                    label="Public IP"
                    error={server?.error?.first_name}
                    helperText={
                      server?.error?.first_name && "Please enter first name"
                    }
                  />
                </GridItem>  */}
							</GridContainer>
						</Box>
					</GridItem>

					<GridItem xs={12} sm={6} md={6}>
						<Typography
							gutterBottom={2}
							align="left"
							variant="subtitle1"
							color="secondary"
						>
							Size Configuration
						</Typography>
						<Box
							className={classes.boxModal}
							borderColor="#e7e9f0"
							border={0.5}
						>
							<GridContainer spacing={1}>
								<GridItem xs={12}>
									<GridContainer spacing={1}>
										<GridItem xs={4}>
											<Typography className={classes.label}>RAM</Typography>
										</GridItem>
										<GridItem xs={8}>
											<Typography
												className={classes.labelData}
												variant="subtitle2"
												color="textSecondary"
											>
												{FLAVOR?.size?.ram}
											</Typography>
										</GridItem>
										<GridItem xs={4}>
											<Typography className={classes.label}>CPUs</Typography>
										</GridItem>
										<GridItem xs={8}>
											<Typography
												className={classes.labelData}
												variant="subtitle2"
												color="textSecondary"
											>
												{FLAVOR.size?.cpu}
											</Typography>
										</GridItem>
										{/* <GridItem xs={4}>
                        <Typography >FLAVOR ID</Typography>
                      </GridItem>
                      <GridItem xs={8}>
                        <Typography variant="subtitle2" color="textSecondary">{FLAVOR?.id}</Typography>
                      </GridItem> */}
									</GridContainer>
								</GridItem>
							</GridContainer>
						</Box>
					</GridItem>

					<GridItem xs={12} sm={6} md={6}>
						<Typography
							gutterBottom={2}
							align="left"
							variant="subtitle1"
							color="secondary"
						>
							Image Template
						</Typography>
						<Box
							className={classes.boxModal}
							borderColor="#e7e9f0"
							border={0.5}
						>
							<GridContainer spacing={1}>
								<GridItem xs={12}>
									<GridContainer spacing={1}>
										<GridItem xs={5}>
											{" "}
											<Typography className={classes.label}>
												Template Name:
											</Typography>
										</GridItem>
										<GridItem xs={7}>
											<Typography
												className={classes.labelData}
												variant="subtitle2"
												color="textSecondary"
											>
												Engineero-workspace
											</Typography>
										</GridItem>
									</GridContainer>
								</GridItem>
								<GridItem xs={12}>
									<GridContainer spacing={2}>
										<GridItem xs={5}>
											{" "}
											<Typography className={classes.label}>Status:</Typography>
										</GridItem>
										<GridItem xs={7}>
											{" "}
											<Typography
												className={classes.labelData}
												variant="subtitle2"
												color="textSecondary"
											>
												Active
											</Typography>
										</GridItem>
									</GridContainer>
								</GridItem>
								<GridItem item xs={12}>
									<GridContainer spacing={1}>
										<GridItem xs={5}>
											{" "}
											<Typography className={classes.label}>
												Os Type:
											</Typography>
										</GridItem>
										<GridItem xs={7}>
											{" "}
											<Typography
												className={classes.labelData}
												variant="subtitle2"
												color="textSecondary"
											>
												{IMAGE?.os_type}
											</Typography>
										</GridItem>
									</GridContainer>
								</GridItem>

								<GridItem item xs={12}>
									<GridContainer spacing={1}>
										{/* <GridItem xs={5}>
                      <Typography>Image ID:</Typography>
                    </GridItem>
                    <GridItem xs={7}>
                      <Typography align="left" variant="subtitle2" color="textSecondary">{IMAGE?.id}</Typography>
                    </GridItem> */}
									</GridContainer>
								</GridItem>
							</GridContainer>
						</Box>
					</GridItem>

					<GridItem xs={12} sm={6} md={6}>
						<Typography
							gutterBottom={2}
							align="left"
							variant="subtitle1"
							color="secondary"
						>
							Compute Configuration
						</Typography>
						<Box
							className={classes.boxModal}
							borderColor="#e7e9f0"
							border={0.5}
						>
							<GridContainer spacing={3}>
								<GridItem xs={12}>
									<TextField
										variant="outlined"
										fullWidth
										name="server_name"
										label="Server Name"
										type="text"
										id="vCPUs"
										value={server?.form?.server?.server_name || "server name"}
										disabled
									/>
								</GridItem>
								<GridItem xs={4}>
									<TextField
										variant="outlined"
										required
										fullWidth
										name="cpu"
										label="vCPUs"
										type="number"
										id="vCPUs"
										value={server?.form?.server?.cpu || 2}
										onChange={changeHandler}
										disabled
									/>
								</GridItem>
								<GridItem item xs={4}>
									<TextField
										variant="outlined"
										required
										fullWidth
										name="ram"
										label="RAM"
										type="number"
										id="RAM"
										helperText="in GB"
										value={server?.form?.server?.ram || 4}
										inputProps={{ minLength: 0 }}
										onChange={changeHandler}
										disabled
									/>
								</GridItem>
								<GridItem xs={4}>
									<TextField
										variant="outlined"
										required
										fullWidth
										name="capacity"
										label="Storage Capacity"
										type="number"
										id="storage"
										helperText="Volume size in GB"
										onChange={changeHandler}
										value={server?.form?.server?.capacity || 64}
										disabled
									/>
								</GridItem>
							</GridContainer>
						</Box>
					</GridItem>
					{server?.form?.server?.id ? (
						<GridItem xs={12} sm={6} md={6}>
							<Typography
								gutterBottom={2}
								align="left"
								variant="subtitle1"
								color="secondary"
							>
								Server Details
							</Typography>
							<Box
								className={classes.boxModal}
								borderColor="#e7e9f0"
								border={0.5}
							>
								<GridContainer spacing={3}>
									<GridItem xs={12}>
										<GridContainer spacing={1}>
											<GridItem xs={4}>
												<Typography>Status:</Typography>
											</GridItem>
											<GridItem xs={8}>
												<Typography variant="subtitle2" color="textSecondary">
													{NETWORK.name}
												</Typography>
											</GridItem>
											<GridItem xs={4}>
												<Typography>Progress:</Typography>
											</GridItem>
											<GridItem xs={8}>
												<Typography variant="subtitle2" color="textSecondary">
													{NETWORK.type}
												</Typography>
											</GridItem>{" "}
											<GridItem xs={4}>
												<Typography>VM Status:</Typography>
											</GridItem>
											<GridItem xs={8}>
												<Typography variant="subtitle2" color="textSecondary">
													{NETWORK.id}
												</Typography>
											</GridItem>
										</GridContainer>
									</GridItem>
								</GridContainer>
							</Box>
						</GridItem>
					) : (
						<GridItem
							xs={12}
							sm={12}
							md={12}
							align="right"
						>
							{reduxState?.user?.profile?.is_profile_setup ? (
								<Button
									type="button"
									variant="contained"
									color="primary"
									className={classes.submit}
									onClick={submitHandler}
								>
									Send Request
								</Button>
							) : (
								<Chip
									label="You can not make request since you have not setup your profile."
									variant="outlined"
									color="primary"
								/>
							)}
						</GridItem>
					)}
				</GridContainer>
			</FieldSet>
		</Wrapper>
	);
}

export default connect(
	(state) => {
		return { ...state };
	},
	{ serverRequest, getWorkSpaceDetails }
)(Server);
