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
	getSubCategories,
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
	getSubCategories,
}) => {
	const classes = useStyles();
	const reduxState = useSelector((state) => state.ticket);
	const [message, setMessage] = useState({ text: "", type: "success" });
	const [loader, setLoader] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);
	const [subCategoryList, setSubCategoryList] = useState([]);
	const [categoryFormData, setCategoryFormData] = useState({
		id: 0,
		category_name: "",
		description: "",
		category_status: false,
	});
	const [subCategoryFormData, setSubCategoryFormData] = useState({
		id: 0,
		subcategory_name: "",
		category_id: 0,
		subcategory_status: false,
		points: 0,
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
		setCategoryFormData({
			id: 0,
			category_name: "",
			description: "",
			category_status: false,
		});
		setSubCategoryFormData({
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
				align: "left",
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
				align: "left",
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
				width: 50,
				renderCell: (row) => {
					return (
						<Switch
							checked={row?.category_status}
							onChange={(event) => deleteItem(event, row.id)}
							color="primary"
							name="category"
							inputProps={{ "aria-label": "primary checkbox" }}
						/>
					);
				},
			},
			{
				header: "Action",
				width: 50,
				renderCell: (row) => {
					return (
						<Fab
							color="primary"
							aria-label="edit"
							size="small"
							className={classes.margin}
						>
							<Edit onClick={() => editItem(row, "category")} />
						</Fab>
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
				align: "left",
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
				align: "left",
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
				align: "left",
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
				width: 50,
				renderCell: (row) => {
					return (
						<Switch
							checked={row?.subcategory_status}
							onChange={(event) => deleteItem(event, row.id)}
							color="primary"
							name="subcategory"
							inputProps={{ "aria-label": "primary checkbox" }}
						/>
					);
				},
			},
			{
				header: "Action",
				width: 50,
				renderCell: (row) => {
					return (
						<Fab
							color="primary"
							aria-label="edit"
							size="small"
							className={classes.margin}
						>
							<Edit onClick={() => editItem(row, "subCategory")} />
						</Fab>
					);
				},
			},
		];
	};

	const inputChangeHandler = (e, type) => {
		const { value, name } = e.target;
		if (type === "category") {
			setCategoryFormData({
				...categoryFormData,
				[name]: value,
			});
		} else {
			setSubCategoryFormData({
				...subCategoryFormData,
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
		if (value) getSubCategories(value);
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
		await getAllCategories(callback);
		if (name === "category") {
			setCategoryFormData({
				id: 0,
				category_name: "",
				description: "",
				category_status: false,
			});
		} else {
			setSubCategoryFormData({
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
			setCategoryFormData({
				id: row.id,
				category_name: row.category_name,
				description: row.description,
				category_status: row.category_status,
			});
		} else {
			setSubCategoryFormData({
				id: row.id,
				subcategory_name: row.subcategory_name,
				category_id: row.category_id,
				points: row.points,
				subcategory_status: row.subcategory_status,
			});
		}
	};

	const submitHandler = async (e, type) => {
		if (type === "category") {
			if (
				Object.entries(categoryFormData).some((v) => {
					if (v[0] === "category_name") {
						return v[1] === "";
					}
					return false;
				})
			) {
				callback(false, "Invalid category");
				return true;
			}
			setLoader(true);
			if (formStatus === "edit") {
				await saveCategory(categoryFormData, callback);
			} else {
				await saveCategory(
					{
						category_name: categoryFormData.category_name,
						description: categoryFormData.description,
						category_status: true,
					},
					callback
				);
			}
			await getAllCategories(callback);
			setCategoryFormData({
				id: 0,
				category_name: "",
				description: "",
				category_status: false,
			});
		} else {
			if (selectedCategory) {
				if (
					Object.entries(subCategoryFormData).some((v, i) => {
						if (v[0] === "subcategory_name") {
							return v[1] === "";
						}

						if (v[0] === "points") {
							return v[1] === "";
						}

						return false;
					})
				) {
					callback(false, "Please fill all the fields");
					return true;
				}
				setLoader(true);
				if (formStatus === "edit") {
					await saveSubcategory(subCategoryFormData, callback);
				} else {
					await saveSubcategory(
						{
							subcategory_name: subCategoryFormData.subcategory_name,
							category_id: selectedCategory,
							points: subCategoryFormData.points,
						},
						callback
					);
				}
				await getAllCategories(callback);
				setSubCategoryFormData({
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
					<FieldSet padding={30} title="Add Categories">
						<GridContainer spacing={2} mb={3} style={{ marginBottom: 30 }}>
							<GridItem className={classes.gridRow} xs={5}>
								<TextField
									name="category_name"
									fullWidth
									label="Name"
									value={categoryFormData.category_name}
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
									value={categoryFormData.description}
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
						<GridContainer spacing={2}>
							<GridItem xs={12}>
								<Typography variant="h6">Ticket Categories</Typography>
							</GridItem>

							<GridItem xs={12}>
								<CustomTable
									columns={getCategoryColumns()}
									data={reduxState.categories}
								/>
							</GridItem>
						</GridContainer>
					</FieldSet>
				</GridItem>
				<GridItem xs={12} sm={6}>
					<FieldSet padding={30} title="Add Sub Categories">
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
									value={subCategoryFormData.subcategory_name}
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
									value={subCategoryFormData.points}
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
						<GridContainer spacing={2}>
							<GridItem xs={12}>
								<Typography variant="h6">Ticket Sub Categories</Typography>
							</GridItem>

							<GridItem xs={12}>
								<CustomTable
									columns={getSubCategoryColumns()}
									data={subCategoryList}
								/>
							</GridItem>
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
		getSubCategories,
	}
)(TicketCategoriesManagement);
