import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch"
		}
	}
}));

export default function Textfield(props) {
	const classes = useStyles();
	const { label, value, onChange, ...rest } = props;
	return (
		<Box component="form" noValidate autoComplete="off">
			<TextField
				id="outlined-basic"
				value={value || ""}
				onChange={onChange}
				{...rest}
				label={label}
				variant="outlined"
				InputLabelProps={{
					shrink: true
				}}
			/>
		</Box>
	);
}
