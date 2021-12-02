import { makeStyles } from "@material-ui/core/styles";
import { Edit } from "@material-ui/icons";
import { Chip, Typography } from "components/Custom";
import Button from "components/CustomButtons";
import FieldSet from "components/Form/fieldset";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import CustomTable from "components/Table/CustomTable";
import Wrapper from "components/Wrapper";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import TextField from "../../CustomInput/TextField";
import Select from "../../Select";
import {
	getAllTickets,
	getAllCategories,
	saveCategory,
	saveSubcategory,
	enableDisableCatSubCat,
} from "./redux/action";
import { Fab } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
}));

const TicketCategoriesManagement = ({
	getAllCategories,
	saveCategory,
	saveSubcategory,
	enableDisableCatSubCat,
}) => {
	const classes = useStyles();
	const reduxState = useSelector((state) => state.ticket);
	const [message, setMessage] = useState({ text: "", type: "success" });
	const [loader, setLoader] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);
	const [subCategoryList, setSubCategoryList] = useState([]);
	const [categoryFromData, setCategoryFromData] = useState({
		id: 0,
		category_name: "",
		description: "",
		category_status: false,
	});
	const [subCategoryFromData, setSubCategoryFromData] = useState({
		id: 0,
		subcategory_name: "",
		category_id: 0,
		subcategory_status: false,
		points: "",
	});
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedCategoryText, setSelectedCategoryText] = useState(null);
	const [categories, setCategories] = useState([]);
	const [formStatus, setFormStatus] = useState("add");

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

	useEffect(() => {
		setLoader(true);
		getAllCategories(callback);
	}, []);

	useEffect(() => {
		setSubCategoryList([]);
		const updateList = reduxState.categories.map((item) => {
			if (selectedCategory && item.id === selectedCategory) {
				if (item?.subcategories) {
					setSubCategoryList(item.subcategories);
				}
			}
			return { label: item.category_name, value: item.id };
		});
		setCategories(updateList);
		setCategoryFromData({
			id: 0,
			category_name: "",
			description: "",
			category_status: false,
		});
		setSubCategoryFromData({
			id: 0,
			subcategory_name: "",
			category_id: 0,
			points: "",
			subcategory_status: false,
		});
		setFormStatus("add");
		return () => {};
	}, [reduxState.categories]);

	const getCategoryColumns = () => {
		return [
			{
				field: "name",
				header: "Name",
				width: 100,
				renderCell: (row) => {
					return (
						<Typography variant="body2" color="primary">
							{row.category_name}
						</Typography>
					);
				},
			},
			{
				field: "description",
				header: "Description",
				width: 100,
				renderCell: (row) => {
					return (
						<Typography variant="body2" color="primary">
							{row.description}
						</Typography>
					);
				},
			},
			{
				header: "Status",
				width: 100,
				renderCell: (row) => {
					return (
						<React.Fragment>
							<Fab
								color="primary"
								aria-label="edit"
								size="small"
								className={classes.margin}
							>
								<Edit onClick={() => editItem(row, "category")} />
							</Fab>
							<Switch
								checked={row?.category_status}
								onChange={(event) => deleteItem(event, row.id)}
								color="primary"
								name="category"
								inputProps={{ "aria-label": "primary checkbox" }}
							/>
						</React.Fragment>
					);
				},
			},
		];
	};

	const getSubCategoryColumns = () => {
		return [
			{
				field: "name",
				header: "Name",
				width: 100,
				renderCell: (row) => {
					return (
						<Typography variant="body2" color="primary">
							{row.subcategory_name}
						</Typography>
					);
				},
			},

			{
				field: "name",
				header: "Category",
				width: 100,
				renderCell: (row) => {
					return (
						<Typography variant="body2" color="primary">
							{selectedCategoryText}
						</Typography>
					);
				},
			},
			{
				field: "points",
				header: "Point Price",
				align: "center",
				width: 50,
				renderCell: (row) => {
					return (
						<Typography variant="body2" color="primary">
							{row.points}
						</Typography>
					);
				},
			},
			{
				header: "Status",
				width: 100,
				renderCell: (row) => {
					return (
						<React.Fragment>
							<Fab
								color="primary"
								aria-label="edit"
								size="small"
								className={classes.margin}
							>
								<Edit onClick={() => editItem(row, "subCategory")} />
							</Fab>
							<Switch
								checked={row?.subcategory_status}
								onChange={(event) => deleteItem(event, row.id)}
								color="primary"
								name="subcategory"
								inputProps={{ "aria-label": "primary checkbox" }}
							/>
						</React.Fragment>
					);
				},
			},
		];
	};

	const inputChangeHandler = (e, type) => {
		const { value, name } = e.target;
		if (type === "category") {
			setCategoryFromData({
				...categoryFromData,
				[name]: value,
			});
		} else {
			setSubCategoryFromData({
				...subCategoryFromData,
				[name]: value,
			});
		}
	};

	const changeHandler = (e) => {
		let value = e.target.value;
		let updatedList = [...reduxState.categories];
		let updatedSubCategory = [];
		updatedList.map((item) => {
			if (item.id === value) {
				if (item?.subcategories) {
					updatedSubCategory = item.subcategories;
				}
			}
		});
		setSelectedCategoryText(e.currentTarget.textContent);
		setSelectedCategory(value);
		setSubCategoryList(updatedSubCategory);
	};

	const deleteItem = async (event, id) => {
		const { name, checked } = event.target;
		setLoader(true);
		await enableDisableCatSubCat(
			{
				status: Number(checked),
				type: name,
				id,
			},
			callback
		);
		await getAllCategories();
		if (name === "category") {
			setCategoryFromData({
				id: 0,
				category_name: "",
				description: "",
				category_status: false,
			});
		} else {
			setSubCategoryFromData({
				id: 0,
				subcategory_name: "",
				category_id: 0,
				points: "",
				subcategory_status: false,
			});
		}
	};

	const editItem = (row, type) => {
		setFormStatus("edit");
		if (type === "category") {
			setCategoryFromData({
				id: row.id,
				category_name: row.category_name,
				description: row.description,
				category_status: row.category_status,
			});
		} else {
			setSubCategoryFromData({
				id: row.id,
				subcategory_name: row.subcategory_name,
				category_id: row.category_id,
				points: row.points,
				subcategory_status: row.subcategory_status,
			});
		}
	};

	const submitHandler = async (e, type) => {
		setLoader(true);
		if (type === "category") {
			if (formStatus === "edit") {
				await saveCategory(categoryFromData, callback);
			} else {
				await saveCategory(
					{
						category_name: categoryFromData.category_name,
						description: categoryFromData.description,
						category_status: true,
					},
					callback
				);
			}
			setCategoryFromData({
				id: 0,
				category_name: "",
				description: "",
				category_status: false,
			});
		} else {
			if (selectedCategory) {
				if (formStatus === "edit") {
					await saveSubcategory(subCategoryFromData, callback);
				} else {
					await saveSubcategory(
						{
							subcategory_name: subCategoryFromData.subcategory_name,
							category_id: selectedCategory,
							points: subCategoryFromData.points,
						},
						callback
					);
				}
				setSubCategoryFromData({
					id: 0,
					subcategory_name: "",
					category_id: 0,
					points: "",
					subcategory_status: false,
				});
			}
		}
		setFormStatus("view");
	};

	return (
		<Wrapper>
			<Loader open={loader} />
			<Snackbar
				open={isSubmitted}
				type={message?.type || "success"}
				message={message?.message}
			/>
			<GridContainer spacing={2}>
				<GridItem xs={12} sm={6}>
					<FieldSet padding={30} title="Ticket Categories">
						<GridContainer spacing={2} mb={3} style={{ marginBottom: 30 }}>
							<GridItem className={classes.gridRow} xs={5}>
								<TextField
									name="category_name"
									fullWidth
									label="Name"
									value={categoryFromData.category_name}
									onChange={(e) => inputChangeHandler(e, "category")}
									type="text"
									size="medium"
									inputProps={{ min: 0 }}
								/>
							</GridItem>
							<GridItem className={classes.gridRow} xs={7}>
								<TextField
									name="description"
									fullWidth
									label="Description"
									value={categoryFromData.description}
									onChange={(e) => inputChangeHandler(e, "category")}
									type="text"
									size="medium"
									inputProps={{ min: 0 }}
								/>
							</GridItem>
							<GridItem
								justify="flex-end"
								xs={12}
								style={{ textAlign: "right" }}
							>
								<Button
									variant="outlined"
									color="primary"
									size="large"
									onClick={(e) => submitHandler(e, "category")}
								>
									Save
								</Button>
							</GridItem>
						</GridContainer>
						<GridContainer>
							<CustomTable
								columns={getCategoryColumns()}
								data={reduxState.categories}
							/>
						</GridContainer>
					</FieldSet>
				</GridItem>
				<GridItem xs={12} sm={6}>
					<FieldSet padding={30} title="Sub Categories">
						<GridContainer spacing={2} mb={3} style={{ marginBottom: 30 }}>
							<GridItem xs={5}>
								<Select
									name="category"
									options={categories}
									label="Category"
									onChange={changeHandler}
									value={selectedCategory}
								/>
							</GridItem>
							<GridItem className={classes.gridRow} xs={5}>
								<TextField
									name="subcategory_name"
									fullWidth
									label="Name"
									value={subCategoryFromData.subcategory_name}
									onChange={(e) => inputChangeHandler(e, "subCategory")}
									type="text"
									size="medium"
								/>
							</GridItem>
							<GridItem className={classes.gridRow} xs={2}>
								<TextField
									name="points"
									fullWidth
									label="Point Price"
									value={subCategoryFromData.points}
									onChange={(e) => inputChangeHandler(e, "subCategory")}
									type="number"
									inputProps={{ min: 0 }}
									size={"medium"}
								/>
							</GridItem>
							<GridItem
								justify="flex-end"
								xs={12}
								style={{ textAlign: "right" }}
							>
								<Button
									variant="outlined"
									color="primary"
									size="large"
									onClick={(e) => submitHandler(e, "subCategory")}
								>
									Save
								</Button>
							</GridItem>
						</GridContainer>
						<GridContainer>
							<CustomTable
								columns={getSubCategoryColumns()}
								data={subCategoryList}
							/>
						</GridContainer>
					</FieldSet>
				</GridItem>
			</GridContainer>
		</Wrapper>
	);
};

export default connect(
	(state) => {
		return { ...state.ticket };
	},
	{
		getAllTickets,
		getAllCategories,
		saveCategory,
		saveSubcategory,
		enableDisableCatSubCat,
	}
)(TicketCategoriesManagement);
