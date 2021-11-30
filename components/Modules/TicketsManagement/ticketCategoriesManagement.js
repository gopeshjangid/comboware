import { makeStyles } from "@material-ui/core/styles";
import { Delete, Edit } from "@material-ui/icons";
import { Chip, Typography } from "components/Custom";
import Button from "components/CustomButtons";
import FieldSet from "components/Form/fieldset";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Loader from "components/Loader";
import Snackbar from "components/Snackbar";
import CustomTable from "components/Table/CustomTable";
import Wrapper from "components/Wrapper";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import TextField from "../../CustomInput/TextField";
import Select from "../../Select";
import { getAllTickets } from "./redux/action";
import styles from "./styles";
import { Fab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
}));

const TicketCategoriesManagement = ({ getAllTickets, getProfile }) => {
	const classes = useStyles();
	const reduxState = useSelector((state) => state);
	const [message, setMessage] = useState({ text: "", type: "success" });
	const [loader, setLoader] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);
	const [categoryList, setCategoryList] = useState([]);
	const [subCategoryList, setSubCategoryList] = useState([]);
	const userType = reduxState?.user?.profile?.user_type;
	const router = useRouter();
	const [categoryFromData, setCategoryFromData] = useState({
		id: 0,
		name: "",
		point_price: "null",
		status: false,
	});
	const [subCategoryFromData, setSubCategoryFromData] = useState({
		id: null,
		category_id: null,
		name: null,
		status: null,
	});
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedCategoryText, setSelectedCategoryText] = useState(null);
	const [categories, setCategories] = useState([]);

	const manageMessage = () => {
		setTimeout(() => {
			setSubmitted(false);
		}, 4000);
	};

	useEffect(() => {
		setLoader(reduxState?.ticket?.loading);
		return () => {
			setCategoryFromData({
				id: 0,
				name: "",
				status: false,
			});
			setSubCategoryFromData({
				id: 0,
				category_id: 0,
				name: "",
				point_price: 0,
				status: false,
			});
			setCategoryList([]);
			setSubCategoryList([]);
			setSelectedCategoryText(null);
		};
	}, [reduxState?.ticket?.loading]);

	useEffect(() => {
		const updateList = categoryList.map((item) => {
			return { label: item.name, value: item.id };
		});
		setCategories(updateList);
		setCategoryFromData({
			id: 0,
			name: "",
			point_price: "null",
			status: false,
		});
		setSubCategoryFromData({
			id: 0,
			category_id: 0,
			name: "",
			status: false,
		});
		return () => {};
	}, [categoryList]);

	const getCategoryColumns = () => {
		return [
			{
				field: "id",
				header: "#",
				align: "center",
				width: 30,
				renderCell: (row) => {
					return (
						<Typography variant="body2" color="primary">
							{row.id}
						</Typography>
					);
				},
			},
			{
				field: "name",
				header: "Name",
				width: 100,
				renderCell: (row) => {
					return (
						<Typography variant="body2" color="primary">
							{row.name}
						</Typography>
					);
				},
			},

			{
				field: "status",
				header: "Status",
				renderCell: (row) => {
					return (
						<Chip
							label={row?.status ? "ACTIVE" : "INACTIVE"}
							type={row?.status ? "filled" : "outlined"}
						/>
					);
				},
			},
			{
				header: "Action",
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
							<Fab
								color="secondary"
								aria-label="delete"
								size="small"
								className={classes.margin}
							>
								<Delete onClick={() => deleteItem(row, "category")} />
							</Fab>
						</React.Fragment>
					);
				},
			},
		];
	};

	const getSubCategoryColumns = () => {
		return [
			{
				field: "id",
				header: "#",
				align: "center",
				width: 30,
				renderCell: (row) => {
					return (
						<Typography variant="body2" color="primary">
							{row.id}
						</Typography>
					);
				},
			},
			{
				field: "name",
				header: "Name",
				width: 100,
				renderCell: (row) => {
					return (
						<Typography variant="body2" color="primary">
							{row.name}
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
				field: "point_price",
				header: "Point Price",
				align: "center",
				width: 50,
				renderCell: (row) => {
					return (
						<Typography variant="body2" color="primary">
							{row.point_price}
						</Typography>
					);
				},
			},
			{
				field: "status",
				header: "Status",
				renderCell: (row) => {
					return (
						<Chip
							label={row?.status ? "ACTIVE" : "INACTIVE"}
							type={row?.status ? "filled" : "outlined"}
						/>
					);
				},
			},
			{
				header: "Action",
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
							<Fab
								color="secondary"
								aria-label="delete"
								size="small"
								className={classes.margin}
							>
								<Delete onClick={() => deleteItem(row, "subCategory")} />
							</Fab>
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

	const submitHandler = (e, type) => {
		if (type === "category") {
			let updatedList = [...categoryList];
			const userExists = updatedList.some((item) => {
				return item.name === categoryFromData.name;
			});
			if (
				!userExists &&
				categoryFromData.name &&
				categoryFromData.point_price
			) {
				updatedList.push({
					...categoryFromData,
					id: updatedList.length + 1,
					status: true,
				});
			}
			setCategoryList(updatedList);
		} else {
			let updatedList = [...categoryList];
			updatedList = updatedList.map((item) => {
				if (item.id === selectedCategory) {
					if (item?.subCategory) {
						const userExists = item?.subCategory.some((item) => {
							return item.name === subCategoryFromData.name;
						});
						if (!userExists && subCategoryFromData.name) {
							item?.subCategory.push({
								...subCategoryFromData,
								id: item?.subCategory.length + 1,
								status: true,
							});
						}
					} else {
						item = {
							...item,
							subCategory: [
								{
									...subCategoryFromData,
									id: 1,
									status: true,
								},
							],
						};
					}
					setSubCategoryList(item.subCategory);
				}
				return item;
			});
			setCategoryList(updatedList);
		}
	};

	const changeHandler = (e) => {
		let value = e.target.value;
		let updatedList = [...categoryList];
		let updatedSubCategory = [];
		updatedList.map((item) => {
			if (item.id === value) {
				if (item?.subCategory) {
					updatedSubCategory = item.subCategory;
				}
			}
		});
		setSelectedCategoryText(e.currentTarget.textContent);
		setSelectedCategory(value);
		setSubCategoryList(updatedSubCategory);
	};

	const deleteItem = (row, type) => {
		let updatedList = [...categoryList];
		if (type === "category") {
			updatedList = updatedList.filter((item) => {
				return item.id !== row.id;
			});
		} else {
			let updatedSubCategory = [];
			updatedList = updatedList.map((item) => {
				if (item.id === selectedCategory) {
					if (item?.subCategory) {
						item.subCategory = item.subCategory.filter((subItem) => {
							return subItem.id !== row.id;
						});
						updatedSubCategory = item.subCategory;
					}
				}
				return item;
			});
			setSubCategoryList(updatedSubCategory);
		}
		setCategoryList(updatedList);
	};

	const editItem = (row, type) => {
		if (type === "category") {
			setTimeout(() => {
				setCategoryFromData({
					id: row.id,
					name: row.name,
					point_price: row.point_price,
					status: row.status,
				});
			}, 500);
		} else {
			setTimeout(() => {
				setSubCategoryFromData({
					id: row.id,
					name: row.name,
					category_id: selectedCategory,
					status: row.status,
				});
			}, 500);
		}
	};

	return (
		<Wrapper>
			<Loader open={loader} />
			<Snackbar
				open={isSubmitted}
				type={message?.type || "success"}
				message={message?.text}
			/>
			<GridContainer spacing={2}>
				<GridItem xs={12} sm={5}>
					<FieldSet padding={30} title="Ticket Categories">
						<GridContainer spacing={2} mb={3} style={{ marginBottom: 30 }}>
							<GridItem className={classes.gridRow} xs={6}>
								<TextField
									name="name"
									fullWidth
									label="Name"
									value={categoryFromData.name}
									onChange={(e) => inputChangeHandler(e, "category")}
									type="text"
									size="medium"
									inputProps={{ min: 0 }}
								/>
							</GridItem>

							<GridItem justify="flex-end" xs={1}>
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
							<CustomTable columns={getCategoryColumns()} data={categoryList} />
						</GridContainer>
					</FieldSet>
				</GridItem>
				<GridItem xs={12} sm={7}>
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
									name="name"
									fullWidth
									label="Name"
									value={subCategoryFromData.name}
									onChange={(e) => inputChangeHandler(e, "subCategory")}
									type="text"
									size="medium"
								/>
							</GridItem>
							<GridItem className={classes.gridRow} xs={2}>
								<TextField
									name="point_price"
									fullWidth
									label="Point Price"
									value={subCategoryFromData.point_price}
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
		return { ...state };
	},
	{ getAllTickets }
)(TicketCategoriesManagement);
