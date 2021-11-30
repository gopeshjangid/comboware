import React, { useState, useEffect } from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table-Grid";
import { getLogs } from "./redux/action";
import { connect, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
function Settings({ getLogs }) {
	const reduxState = useSelector((state) => state);
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(reduxState?.monitoring?.logs);
		return () => {};
	}, [reduxState?.monitoring?.logs]);
	const callBack = () => {};

	useEffect(() => {
		getLogs(callBack);
	}, []);

	const columns = [
		{ field: "id", headerName: "#", width: 90 },
		{
			field: "date_time",
			headerName: "Date Time",
			width: 130,
		},
		{
			field: "log_level",
			headerName: "Type",
			width: 100,
		},
		{
			field: "log_message",
			headerName: "Description",
			width: 290,
		},
	];
	console.log("data", data);
	return (
		<GridContainer spacing={1} style={{ paddingTop: 50 }}>
			<Typography>System Log information</Typography>
			<GridItem xs={12} sm={12} md={12}>
				<Table columns={columns} rows={data} />
			</GridItem>
		</GridContainer>
	);
}

export default connect(null, { getLogs })(Settings);
