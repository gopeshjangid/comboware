import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`
	};
}

export default function CustomTab(props) {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const { tabs } = props;

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<Box sx={{ bgcolor: "background.paper", width: "100%" }}>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="secondary"
					textColor="inherit"
					variant="fullWidth"
					aria-label="full width tabs "
				>
					{tabs &&
						tabs
							?.filter((tab) => !tab?.hide)
							.map((tab, index) => <Tab icon={tab?.icon} key={"tabname-" + index} label={tab?.label} />)}
				</Tabs>
			</AppBar>
			<Box sx={{ height: "auto" }}>
				{tabs &&
					tabs
						?.filter((tab) => !tab?.hide)
						.map((tab, key) => (
							<TabPanel key={"panel-" + key} value={value} index={key}>
								{tab?.panel}
							</TabPanel>
						))}
			</Box>
		</Box>
	);
}
