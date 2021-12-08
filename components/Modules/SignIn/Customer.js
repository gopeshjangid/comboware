import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { connect, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import {
	Box,
	FormControlLabel,
	Checkbox,
	FormGroup,
	Divider,
	Link,
} from "@material-ui/core";
import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signUp, getAuthToken } from "./redux/action";
import Snackbar from "components/Snackbar";
import getConfig from "next/config";
import { Button } from "@material-ui/core";
import { LoadingButton } from "@mui/lab";
const { publicRuntimeConfig } = getConfig();
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextField from "../../CustomInput/TextField";
import LinearProgress from "components/Loader/linear";
import FieldSet from "components/Form/fieldset";
const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	logo: {
		textAlign: "center",
		paddingBottom: 12,
	},
	loginBox: {
		border: "0.2px solid #dfe7e9",
		padding: "22px",
		background: "white",
	},
	normalLink: {
		"&:hover": {
			color: "#2251a1",
		},
	},
}));

function CustomerLogin(props) {
	const classes = useStyles();
	const [loaded, setLoaded] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [isLogin, setLogin] = useState(true);
	let reduxState = useSelector((state) => state);
	const defaultForm = {
		email: "",
		phone: "",
		user_name: "",
		confirm_password: "",
		password: "",
		first_name: "",
		last_name: "",
	};
	const [form, setForm] = useState(defaultForm);

	const hideMessage = () => {
		setTimeout(() => {
			setError(false);
			setMessage(false);
		}, 4000);
	};

	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	const manageNotification = (status, message) => {
		hideMessage();
		setLoading(false);
		if (status) {
			setForm({ ...defaultForm });
			setMessage(message);
			setError("");
		} else {
			setMessage("");
			setError(message);
		}
	};

	const doLogin = (form) => {
		props?.signUp(form, manageNotification);
	};

	const pwdRegx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

	const validateForm = () => {
		let _error = { ...emailError };

		_error.email = form?.email === "" && "Email is required";
		_error.password = form?.password === "" && "Password is required";

		_error.first_name = form?.first_name === "" && "First name is required.";

		if (form?.email) {
			_error.email = !validateEmail(form?.email) && "please enter valid email.";
		}

		_error.phone =
			form?.phone === ""
				? "Phone number is required"
				: form?.phone.length < 10
				? "Please enter valid phone"
				: false;

		_error.user_name = form?.user_name === "" && "User name is required";

		if (form?.password) {
			_error.password =
				!pwdRegx.test(form?.password) &&
				"Password must be at least a capital letter, a number, a special character, minimum 8 characters.";
		}

		_error.confirm_password =
			form?.password !== form?.confirm_password &&
			"Confirm Password must be matched with password";

		setEmailError(_error);

		if (Object.values(_error).some((p) => p)) {
			return false;
		}
		return true;
	};

	const loginHandler = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			setLoading(true);
			let postData = {
				email: form?.email,
				phone: form?.phone,
				password: btoa(form?.password),
				first_name: form?.first_name,
				user_name: form?.user_name,
				last_name: form?.last_name,
				user_type: "ADMIN",
				is_login: false,
			};
			doLogin(postData);
		} else {
			setError("Please fill all the valid details.");
		}
	};

	const changeHandler = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		setForm({ ...form, [name]: value });
	};

	return (
		<FieldSet>
			{loading && <LinearProgress align="top" />}
			<Snackbar
				open={error || message}
				type={message ? "success" : "error"}
				message={error || message}
			/>

			<Box className={classes.loginBox}>
				<Box textAlign="center">
					<Typography variant="h6" component="h6">
						Create New Admin
					</Typography>
				</Box>

				<Box mt={5} pt={3} style={{ paddingLeft: 60, paddingRight: 60 }}>
					<Box component="form" noValidate onSubmit={loginHandler}>
						<GridContainer
							spacing={3}
							alignContent="space-between"
							justifyContent="space-between"
						>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="fname"
									name="first_name"
									required
									fullWidth
									id="firstName"
									label="First Name"
									value={form.first_name}
									onChange={changeHandler}
									error={!!emailError?.first_name}
									helperText={emailError?.first_name || ""}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									id="lastName"
									label="Last Name"
									name="last_name"
									autoComplete="lname"
									value={form.last_name}
									onChange={changeHandler}
								/>
							</Grid>

							<GridItem xs={12}>
								<TextField
									fullWidth
									onChange={changeHandler}
									name="phone"
									type="number"
									value={form.phone}
									label="Phone"
									required
									error={!!emailError?.phone}
									helperText={emailError?.phone || ""}
								/>
							</GridItem>
							<GridItem xs={12}>
								<TextField
									fullWidth
									onChange={changeHandler}
									name="user_name"
									value={form.user_name}
									type="text"
									label="User Name"
									required
									error={!!emailError?.user_name}
									helperText={emailError?.user_name || ""}
								/>
							</GridItem>
							<GridItem xs={12}>
								<TextField
									fullWidth
									onChange={changeHandler}
									name="email"
									type="email"
									autocomplete="off"
									label="Email"
									value={form.email}
									required
									error={!!emailError?.email}
									helperText={emailError?.email || ""}
								/>
							</GridItem>

							<GridItem xs={12}>
								<TextField
									fullWidth
									onChange={changeHandler}
									name="password"
									type="password"
									inputProps={{ maxLength: 20 }}
									label="Password"
									required
									error={!!emailError?.password}
									helperText={emailError?.password || ""}
									value={form.password}
								/>
							</GridItem>

							<GridItem xs={12}>
								<TextField
									fullWidth
									onChange={changeHandler}
									name="confirm_password"
									type="password"
									autocomplete="off"
									label="Confirm Password"
									value={form.confirm_password}
									required
									error={!!emailError?.confirm_password}
									helperText={emailError?.confirm_password || ""}
								/>
							</GridItem>

							<GridItem xs={12}>
								<LoadingButton
									onClick={loginHandler}
									fullWidth
									loading={loading}
									color="primary"
									variant="contained"
									onKeyPress={(event) => {
										if (event.key === "Enter") {
											loginHandler(event);
										}
									}}
								>
									{"Create"}
								</LoadingButton>
							</GridItem>
						</GridContainer>
					</Box>
				</Box>
			</Box>
		</FieldSet>
	);
}

export default connect(
	(state) => {
		return { ...state };
	},
	{
		signUp,
		getAuthToken,
	}
)(CustomerLogin);
