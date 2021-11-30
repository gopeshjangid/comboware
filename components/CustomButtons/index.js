import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
	root: {
		background: "#3699FF",
		borderRadius: "6px",
		color: "white",
		textTransform: "none",
		"&:hover": {
			background: theme?.palette?.primary.main,
		},
	},
	error: {
		borderRadius: "6px",
		background: theme?.palette?.button?.error?.default,
		color: "white !important",
		textTransform: "none",
		"&:hover": {
			background: "#d6394a",
		},
	},
	action: {
		borderRadius: "12px",
		background: "#C9F7F5",
		height: "34px",
		color: "#1BC5BD",
		textTransform: "none",
		fontSize: 10,
		height: 30,
		padding: 10,
		boxShadow: "none",
		"&:hover": {
			background: "#b3f3f0",
		},
	},
}));

export default function RegularButton(props) {
	const classes = useStyles(props);
	const { children, className, muiClasses, type, ...rest } = props;

	if (type === "action") {
		return (
			<Button {...rest} variant="contained" className={classes.action}>
				{children}
			</Button>
		);
	}

	if (type === "error") {
		return (
			<Button {...rest} className={classes.error}>
				{children}
			</Button>
		);
	}
	return (
		<Button {...rest} classes={{ root: classes.root }}>
			{children}
		</Button>
	);
}
