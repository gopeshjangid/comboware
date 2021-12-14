import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FieldSet from "components/Form/fieldset";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import Wrapper from "components/Wrapper";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import Table from "../../Table/CustomTable";
import { getProfile } from "../Profile/redux/action";
import { getAllWorkspace, updateRequest } from "./redux/action";
import { COLUMNS } from "./redux/constants";
import styles from "./styles";
import { Chip } from "components/Custom";
import CustomTab from "components/CustomTabs";
function Admin({ getAllWorkspace, updateRequest, getProfile }) {
	const useStyles = makeStyles(styles);
	const classes = useStyles();
	const reduxState = useSelector((state) => state);
	const [message, setMessage] = useState({ text: "", type: "success" });
	const [isSubmitted, setSubmitted] = useState(false);
	const [loader, setLoader] = useState(false);
	const [requestList, setRequestList] = useState([]);

	const manageMessage = () => {
		setTimeout(() => {
			setSubmitted(false);
		}, 4000);
	};

	useEffect(() => {
		setLoader(reduxState?.workspace?.loading);
		return () => {};
	}, [reduxState?.workspace?.loading]);

	useEffect(() => {
		setRequestList(reduxState?.workspace?.serverList);
		return () => {};
	}, [reduxState?.workspace?.serverList]);

	useEffect(() => {
		setMessage({
			text: reduxState?.workspace?.message || reduxState?.workspace?.error,
			type: reduxState?.workspace?.error ? "error" : "success",
		});

		setLoader(false);
		manageMessage();
		// getAllWorkspace();
		return () => {};
	}, [reduxState?.workspace?.message]);

	useEffect(() => {
		getProfile(reduxState?.user?.profile?.id || localStorage.getItem("userId"));
		getAllWorkspace();
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
			workspaceId: data?.id,
			requestStatus: "APPROVED",
			userId: data?.user_id,
		});
	};

	const getColumns = () => {
		return COLUMNS?.map((col) => {
			if (col?.field === "action") {
				col.renderCell = (params) => {
					if (params?.request_status === "APPROVED") {
						return (
							<Chip
								style="info"
								type={"primary"}
								label={"APPROVED"}
								color="primary"
							/>
						);
					}
					return (
						<Button
							variant="contained"
							color="primary"
							size="small"
							style={{ marginLeft: 16 }}
							onClick={(e) => actionHandler(e, params, "APPROVE")}
						>
							APPROVE
						</Button>
					);
				};
			}
			return col;
		});
	};

	const onTabChange = (tab) => {
		console.log("tab", tab);
		const q = tab === 0 ? "OPEN" : "APPROVED";
		getAllWorkspace(q);
	};

	return (
		<Wrapper>
			<Loader open={loader} />
			<Snackbar
				open={isSubmitted}
				type={message?.type || "success"}
				message={message?.text}
			/>
			<FieldSet title="Server Requests List">
				<GridContainer spacing={1}>
					<GridItem xs={12} sm={12} md={12}>
						<CustomTab
							onTabChange={onTabChange}
							tabs={[
								{
									label: "Pending Requests",
									panel: <Table columns={getColumns()} data={requestList} />,
								},
								{
									label: "Approved Requests",
									panel: <Table columns={getColumns()} data={requestList} />,
								},
							]}
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
	{ updateRequest, getAllWorkspace, getProfile }
)(Admin);
