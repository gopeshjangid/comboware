import { Fab, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Edit, RemoveRedEye } from "@material-ui/icons";
import GridItem from "components/Grid/GridItem.js";
import Loader from "components/Loader";
import Modal from "components/Modal";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Chip, Typography } from "../../Custom";
import CustomTab from "../../CustomTabs";
import GridContainer from "../../Grid/GridContainer";
import Snackbar from "../../Snackbar";
import CustomTable from "../../Table/CustomTable";
import Wrapper from "../../Wrapper";
import { getAllUserList, getProfile } from "./redux/action";

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1)
	},
	extendedIcon: {
		marginRight: theme.spacing(1)
	}
}));

const CustomerManagement = ({ getAllUserList, getProfile }) => {
	const reduxState = useSelector((state) => state.customer_management);
	const [message, setMessage] = useState({ text: "", type: "success" });
	const [loader, setLoader] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);
	const [detailModal, setDetailModal] = useState(false);
	const [updateModal, setUpdatedModal] = useState(false);
	const [userDetail, setUserDetail] = useState({});
	const classes = useStyles();

	const callback = (status, message) => {
		setLoader(false);
		if (message) {
			setSubmitted(true);
			setMessage({ type: status ? "success" : "error", message: message });
			setTimeout(() => {
				setSubmitted(false);
			}, 4000);
		}
	};

	useEffect(async () => {
		setLoader(true);
		setDetailModal(false);
		await getAllUserList("ER", callback);
		await getAllUserList("USER", callback);
		return () => {};
	}, []);

	const getColumns = () => {
		return [
			{
				field: "first_name",
				header: "Name",
				renderCell: (row) => {
					return (
						<Typography variant="body1" color="primary">
							{row?.first_name + " " + row?.last_name}
						</Typography>
					);
				}
			},
			{ field: "email", header: "Email" },
			{
				field: "trial_expire_date",
				header: "Trial Expiration Date",
				renderCell: (row) => {
					if (!row?.trial_expire_date) {
						return "";
					}
					return <Chip style="info" label={row?.trial_expire_date} color="primary" />;
				}
			},
			{
				field: "trial_extend_date",
				header: "Trial Extend Date",
				renderCell: (row) => {
					if (!row?.trial_extend_date) {
						return "";
					}
					return <Chip style="info" label={row?.trial_extend_date} color="primary" />;
				}
			},
			{
				field: "status",
				header: "STATUS",
				renderCell: (row) => {
					return (
						<Chip label={row?.status ? "ACTIVE" : "INACTIVE"} type={row?.status ? "filled" : "outlined"} />
					);
				}
			},
			{
				field: "action",
				header: "action",
				width: 100,
				renderCell: (row) => {
					return (
						<React.Fragment>
							<Fab color="primary" aria-label="edit" size="small" className={classes.margin}>
								<RemoveRedEye onClick={(e) => viewDetail(e, row.id)} />
							</Fab>
							<Fab color="default" aria-label="edit" size="small" className={classes.margin}>
								<Edit onClick={(e) => updateStatus(e, row.id)} />
							</Fab>
						</React.Fragment>
					);
				}
			}
		];
	};

	const getUsersColumns = () => {
		return [
			{
				field: "first_name",
				header: "Name",
				renderCell: (row) => {
					return (
						<Typography variant="body1" color="primary">
							{row?.first_name + " " + row?.last_name}
						</Typography>
					);
				}
			},
			{ field: "email", header: "Email" },
			{
				field: "trial_expire_date",
				header: "Trial Expiration Date",
				renderCell: (row) => {
					if (!row?.trial_expire_date) {
						return "";
					}
					return <Chip style="info" label={row?.trial_expire_date} color="primary" />;
				}
			},
			{
				field: "trial_extend_date",
				header: "Trial Extend Date",
				renderCell: (row) => {
					if (!row?.trial_extend_date) {
						return "";
					}
					return <Chip style="info" label={row?.trial_extend_date} color="primary" />;
				}
			},
			{
				field: "status",
				header: "STATUS",
				renderCell: (row) => {
					return (
						<Chip label={row?.status ? "ACTIVE" : "INACTIVE"} type={row?.status ? "filled" : "outlined"} />
					);
				}
			},
			{
				field: "action",
				header: "STATUS",
				width: 100,
				renderCell: (row) => {
					return (
						<React.Fragment>
							<Fab color="primary" aria-label="edit" size="small" className={classes.margin}>
								<RemoveRedEye onClick={(e) => viewDetail(e, row.id)} />
							</Fab>
							<Fab color="default" aria-label="edit" size="small" className={classes.margin}>
								<Edit onClick={(e) => updateStatus(e, row.id)} />
							</Fab>
						</React.Fragment>
					);
				}
			}
		];
	};

	const updateStatus = async (event, id) => {
		// const { name, checked } = event.target;
		// setLoader(true);
		setUpdatedModal(true);
		// const status = Number(checked);
		// await getAllUserList(name, callback);
	};

	const viewDetail = async (event, id) => {
		setLoader(true);
		await getProfile(id, callback);
		setDetailModal(true);
	};

	useEffect(() => {
		setUserDetail(reduxState.user_detail);
	}, [reduxState.user_detail]);

	const hideDetail = (flag, type) => {
		if (type === "detail") {
			setDetailModal(flag);
			setUserDetail({});
		} else {
			setUpdatedModal(flag);
		}
	};

	return (
		<React.Fragment>
			<Loader open={loader} />
			<Snackbar open={isSubmitted} type={message?.type || "success"} message={message?.message} />
			<Wrapper>
				<GridContainer spacing={2}>
					<CustomTab
						tabs={[
							{
								label: "engineers",
								panel: <CustomTable columns={getColumns()} data={reduxState.engineers_list} />
							},
							{
								label: "customer",
								panel: <CustomTable columns={getUsersColumns()} data={reduxState.usersList} />
							}
						]}
					/>
				</GridContainer>
			</Wrapper>
			{detailModal && (
				<Modal
					title="Detail"
					isOpen={detailModal}
					onSubmit={() => hideDetail(false, "detail")}
					onChange={(flag) => hideDetail(flag, "detail")}
					submitText="Ok"
					SaveText="OK"
					maxWidth="md"
				>
					{userDetail && (
						<GridContainer spacing={2}>
							<GridItem xs={12} sm={12} md={6}>
								<List component="nav" aria-label="main mailbox folders">
									<ListItem button>
										<ListItemText
											primary={"Name:"}
											secondary={`${userDetail.first_name || "-"} ${userDetail.last_name || "-"}`}
										/>
									</ListItem>
									<ListItem button>
										<ListItemText primary={"UserName:"} secondary={userDetail.user_name || "-"} />
									</ListItem>
									<ListItem button>
										<ListItemText
											primary={`Created at:`}
											secondary={userDetail.created_at || "-"}
										/>
									</ListItem>
								</List>
							</GridItem>
							{userDetail.user_type === "ER" && (
								<GridItem xs={12} sm={12} md={6}>
									<List component="nav" aria-label="main mailbox folders">
										<React.Fragment>
											<ListItem button>
												<ListItemText
													primary={`Company Name:`}
													secondary={userDetail.company_name || "-"}
												/>
											</ListItem>
											<ListItem button>
												<ListItemText
													primary={`Company Position:`}
													secondary={userDetail.company_position || "-"}
												/>
											</ListItem>
											<ListItem button>
												<ListItemText
													primary={`Company Phone:`}
													secondary={userDetail.company_phone || "-"}
												/>
											</ListItem>
										</React.Fragment>
									</List>
								</GridItem>
							)}
						</GridContainer>
					)}
				</Modal>
			)}
			{updateModal && (
				<Modal
					title="Detail"
					isOpen={updateModal}
					onSubmit={() => hideDetail(false, "update")}
					onChange={(flag) => hideDetail(flag, "update")}
					submitText="Ok"
					SaveText="OK"
					maxWidth="md"
				>
					{userDetail && (
						<GridContainer spacing={2}>
							<GridItem xs={12} sm={12} md={6}>
								<List component="nav" aria-label="main mailbox folders">
									<ListItem button>
										<ListItemText
											primary={"Name:"}
											secondary={`${userDetail.first_name || "-"} ${userDetail.last_name || "-"}`}
										/>
									</ListItem>
									<ListItem button>
										<ListItemText primary={"UserName:"} secondary={userDetail.user_name || "-"} />
									</ListItem>
									<ListItem button>
										<ListItemText
											primary={`Created at:`}
											secondary={userDetail.created_at || "-"}
										/>
									</ListItem>
								</List>
							</GridItem>
							{userDetail.user_type === "ER" && (
								<GridItem xs={12} sm={12} md={6}>
									<List component="nav" aria-label="main mailbox folders">
										<React.Fragment>
											<ListItem button>
												<ListItemText
													primary={`Company Name:`}
													secondary={userDetail.company_name || "-"}
												/>
											</ListItem>
											<ListItem button>
												<ListItemText
													primary={`Company Position:`}
													secondary={userDetail.company_position || "-"}
												/>
											</ListItem>
											<ListItem button>
												<ListItemText
													primary={`Company Phone:`}
													secondary={userDetail.company_phone || "-"}
												/>
											</ListItem>
										</React.Fragment>
									</List>
								</GridItem>
							)}
						</GridContainer>
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
