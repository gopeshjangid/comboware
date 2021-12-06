import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CircularProgress from "components/Loader/circular";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import TextField from "../../CustomInput/TextField";
import { getAllEnvironments, saveEnvironment } from "./redux/action";
const useStyles = makeStyles((theme) => ({
	box: {
		[theme.breakpoints.between("sm", "md")]: {
			width: 900
		},
		[theme.breakpoints.up("lg")]: {
			width: 1180
		}
	},
	fieldset: {
		padding: 30,
		borderColor: theme?.palette?.borderColor,
		borderStyle: "solid",
		paddingTop: 16,
		borderWidth: 1,
		padding: 5
	}
}));
function EnvironmentPlan({ getAllEnvironments, saveEnvironment, ...props }) {
	const classes = useStyles();
	const reduxState = useSelector((state) => state);
	const [loader, setLoader] = useState(false);
	const [fixedEnvironment, setFixedEnvironment] = useState({
		env_plan: "FIXED",
		env_configuration: { ram: 0, disk: 0, cpu: 0 },
		status: "inactive"
	});

	const [unlimitedEnvironment, setUnlimitedEnvironment] = useState({
		env_plan: "UNLIMITED",
		env_configuration: {
			ram: 0,
			disk: 0,
			cpu: 0
		},
		status: "inactive"
	});

	const planDataItem = (type) => {
		const list = reduxState?.settings?.envPlans.filter((plan) => plan.env_plan === type);
		return list.length ? list[0] : null;
	};

	useEffect(() => {
		const unlimitedPlan = planDataItem("UNLIMITED");
		const fixedPlans = planDataItem("FIXED");
		console.log("fixedPlans", fixedPlans);
		console.log("unlimitedPlan", unlimitedPlan);
		if (unlimitedPlan) {
			setUnlimitedEnvironment({
				...unlimitedPlan,
				env_configuration: JSON.parse(unlimitedPlan?.env_configuration),
				status: unlimitedPlan?.env_plan_status
			});
		}

		if (fixedPlans) {
			setFixedEnvironment({
				...fixedPlans,
				env_configuration: JSON.parse(fixedPlans?.env_configuration),
				status: fixedPlans?.env_plan_status
			});
		}
		return () => {};
	}, [reduxState?.settings?.envPlans]);

	const callBack = () => {
		setLoader(false);
	};

	const environmentSubmitHandler = (e, type) => {
		e.preventDefault();
		setLoader(true);

		if (type === "FIXED") {
			saveEnvironment(fixedEnvironment, callBack);
		} else {
			saveEnvironment(unlimitedEnvironment, callBack);
		}
	};

	useEffect(() => {
		getAllEnvironments("?user_type=ADMIN", () => {});
	}, []);

	const unlimitedChangeHandler = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setUnlimitedEnvironment({
			...unlimitedEnvironment,
			env_configuration: {
				...unlimitedEnvironment?.env_configuration,
				[name]: value
			}
		});
	};

	const fixedChangeHandler = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setFixedEnvironment({
			...fixedEnvironment,
			env_configuration: {
				...fixedEnvironment?.env_configuration,
				[name]: value
			}
		});
	};

	console.log("unlined", unlimitedEnvironment);
	return (
		<React.Fragment>
			<Typography>Environment Criteria</Typography>
			<GridContainer spacing={3}>
				<GridItem className={classes.gridRow} xs={12}>
					{loader && (
						<Box display="flex" justify="center">
							<CircularProgress />
						</Box>
					)}
				</GridItem>
				<GridItem className={classes.gridRow} xs={3}>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									checked={fixedEnvironment?.status === "active"}
									onChange={(e) =>
										setFixedEnvironment({
											...fixedEnvironment,
											status: e.target.checked ? "active" : "inactive"
										})
									}
								/>
							}
							label="FIXED"
						/>
					</FormGroup>
				</GridItem>
				<GridItem className={classes.gridRow} xs={2}>
					<TextField
						fullWidth
						name="ram"
						label="Minimum RAM"
						type="number"
						autocomplete="off"
						inputProps={{ min: 0 }}
						value={fixedEnvironment?.env_configuration?.ram}
						onChange={fixedChangeHandler}
					/>
				</GridItem>
				<GridItem className={classes.gridRow} xs={2}>
					<TextField
						fullWidth
						name="cpu"
						label="Minimum CPUs"
						type="number"
						inputProps={{ min: 0 }}
						autocomplete="off"
						value={fixedEnvironment?.env_configuration?.cpu}
						onChange={fixedChangeHandler}
					/>
				</GridItem>
				<GridItem className={classes.gridRow} xs={2}>
					<TextField
						fullWidth
						name="disk"
						label="Minimum size of disk"
						type="number"
						autocomplete="off"
						inputProps={{ min: 0 }}
						value={fixedEnvironment?.env_configuration?.disk}
						onChange={fixedChangeHandler}
					/>
				</GridItem>

				<GridItem justify="flex-end" xs={3}>
					<Button
						variant="outlined"
						color="primary"
						onClick={(e) => environmentSubmitHandler(e, "FIXED")}
						inputProps={{ min: 0 }}
						disabled={
							!(
								Number(fixedEnvironment?.env_configuration?.ram) &&
								Number(fixedEnvironment?.env_configuration?.cpu) &&
								Number(fixedEnvironment?.env_configuration?.disk)
							)
						}
					>
						Save
					</Button>
				</GridItem>
			</GridContainer>
			<GridContainer spacing={3} style={{ marginTop: 20 }}>
				<GridItem className={classes.gridRow} xs={3}>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									onChange={(e) =>
										setUnlimitedEnvironment({
											...unlimitedEnvironment,
											status: e.target.checked ? "active" : "inactive"
										})
									}
									checked={unlimitedEnvironment?.status === "active"}
									color="primary"
								/>
							}
							label="UNLIMITED"
						/>
					</FormGroup>
				</GridItem>
				<GridItem className={classes.gridRow} xs={2}>
					<TextField
						fullWidth
						name="ram"
						label="Minimum RAM"
						type="number"
						autocomplete="off"
						inputProps={{ min: 0 }}
						value={unlimitedEnvironment?.env_configuration?.ram}
						onChange={unlimitedChangeHandler}
					/>
				</GridItem>
				<GridItem className={classes.gridRow} xs={2}>
					<TextField
						fullWidth
						name="cpu"
						label="Minimum CPUs"
						type="number"
						autocomplete="off"
						inputProps={{ min: 0 }}
						value={unlimitedEnvironment?.env_configuration?.cpu}
						onChange={unlimitedChangeHandler}
					/>
				</GridItem>
				<GridItem className={classes.gridRow} xs={2}>
					<TextField
						fullWidth
						name="disk"
						label="Minimum size of disk"
						type="number"
						autocomplete="off"
						inputProps={{ min: 0 }}
						value={unlimitedEnvironment?.env_configuration?.disk}
						onChange={unlimitedChangeHandler}
					/>
				</GridItem>

				<GridItem xs={3}>
					<Button
						variant="outlined"
						color="primary"
						onClick={(e) => environmentSubmitHandler(e, "UNLIMITED")}
						disabled={
							!(
								Number(unlimitedEnvironment?.env_configuration?.ram) &&
								Number(unlimitedEnvironment?.env_configuration?.cpu) &&
								Number(unlimitedEnvironment?.env_configuration?.disk)
							)
						}
					>
						Save
					</Button>
				</GridItem>
			</GridContainer>
		</React.Fragment>
	);
}

export default connect((state) => state?.settings, {
	saveEnvironment,
	getAllEnvironments
})(EnvironmentPlan);
