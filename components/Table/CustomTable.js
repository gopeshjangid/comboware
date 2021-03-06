import { Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import classNames from "classnames";
import Loader from "components/Loader/circular";
import Search from "components/Search";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
	tableContainer: {
		width: "100%",
		background: "white",
		overflow: "auto"
	},
	headerContainer: {
		background: "#F3F6F9",
		borderRadius: 6,
		height: 43
	},
	tableHeadRow: {
		background: "#F3F6F9",
		borderRadius: 6,
		overflow: "auto",
		overflowX: "auto",
		"border-bottom": "3px solid #1976d2"
	},
	tableBodyRow: {
		overflow: "auto",
		overflowX: "auto"
	},
	tableHeadCell: {
		color: "#464E5F !important",
		padding: 1,
		border: 0,
		paddingLeft: 0
	},
	tableCell: {
		color: "#464E5F !important",
		border: "none",
		paddingLeft: 1
	},
	root: {
		background: (props) => (props?.danger ? "#F64E60" : "#3699FF"),
		borderRadius: "6px",
		minWidth: 60,
		"&:hover": {
			background: (props) => (props?.danger ? "#e43447" : "#2885e4")
		}
	},
	tableLoader: {
		paddingTop: "30px",
		paddingBottom: "65px",
		textAlign: "center"
	}
}));

export default React.memo(function CustomTable(props) {
	const classes = useStyles(props);
	const { columns, data, footer_label, selectedRows, actions, loading, isSearch } = props;
	const [selectAll, setSelectAll] = useState(false);
	const [selectedItems, setSelectedRows] = useState([]);
	const [anchorEl, setAnchorEl] = useState(null);
	const [rows, setRows] = useState(data);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const theme = useTheme();

	useEffect(() => {
		if (data?.length) {
			setRows(data);
		}
	}, [data]);

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		let selectedItems = !selectAll ? [] : data;
		setSelectedRows(selectedItems);
		if (selectedRows) selectedRows(selectedItems);
	}, [selectAll]);

	const getSelectAllCheckBox = () => {
		return <Checkbox onChange={(e) => setSelectAll(e?.target?.checked)} checked={selectAll} />;
	};

	const selectItem = (isChecked, clickedRow) => {
		let _selectedItems = [...selectedItems];

		if (isChecked) {
			_selectedItems.push(clickedRow);
		} else {
			_selectedItems = _selectedItems.filter((row) => row?.id !== clickedRow?.id);
		}

		setSelectedRows(_selectedItems);
		if (selectedRows) selectedRows(_selectedItems);
	};

	const onSearch = (q) => {};

	const getActionButton = () => {
		return (
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0
						}
					}
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				{actions &&
					actions.map((action, key) => (
						<MenuItem onClick={() => action?.handleClick && action?.handleClick()} key={"action-" + key}>
							{action?.label}
						</MenuItem>
					))}
			</Menu>
		);
	};

	const getCheckBox = (row) => {
		return (
			<Checkbox
				onChange={(e) => selectItem(e?.target?.checked, row)}
				checked={selectedItems?.some((item) => item.id === row?.id)}
			/>
		);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	return (
		<div className={classes.tableContainer}>
			{isSearch && <Search onSearch={onSearch} />}
			{getActionButton()}
			<Table rules="none" className={classes.table}>
				{columns !== undefined ? (
					<TableHead className={classes.headerContainer}>
						<TableRow className={classes.tableHeadRow}>
							{columns.map((prop, key) => {
								if (prop?.field === "action") {
									return (
										<TableCell
											style={{ width: prop?.width || 150 }}
											align={prop?.align || "center"}
											className={classes.tableHeadCell}
											key={key}
										>
											<Button onClick={handleClick}>
												<MoreHorizIcon />
											</Button>
										</TableCell>
									);
								}

								if (prop?.field === "select") {
									return (
										<TableCell
											width="10"
											style={{ width: prop?.width || 50 }}
											className={classes.tableHeadCell}
											key={key}
										>
											{getSelectAllCheckBox()}
										</TableCell>
									);
								}
								return (
									<TableCell
										align={prop?.align || "center"}
										style={{ width: prop?.width || 150 }}
										className={classes.tableHeadCell}
										key={key}
									>
										{(prop?.renderHeader && prop?.renderHeader()) || prop?.header || ""}
									</TableCell>
								);
							})}
						</TableRow>
					</TableHead>
				) : null}

				<TableBody>
					{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((row, key) => {
						return (
							<TableRow
								hover
								key={"table-row" + key}
								className={classNames({
									[classes.tableBodyRow]: true
								})}
							>
								{columns.map((col, key) => {
									if (col?.select) {
										return (
											<TableCell
												width="10"
												key={"table-col-" + key}
												variant="body"
												style={{ width: col?.width || 50 }}
												className={classNames({ [classes.tableCell]: true })}
											>
												{getCheckBox(row)}
											</TableCell>
										);
									}
									return (
										<TableCell
											key={"table-col-" + key}
											variant="body"
											style={{ width: col?.width || 150 }}
											align={col?.align || "center"}
											className={classNames({ [classes.tableCell]: true })}
										>
											{(col?.renderCell && col?.renderCell({ ...row, ...col })) ||
												(col?.field in row ? row[col?.field] : "")}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
			<Box className={classes.tableLoader}>
				{loading ? (
					<Loader open={true} label="fetching..." />
				) : (
					!data?.length && <Typography variant="body2">{"No row found!"}</Typography>
				)}
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				alignContent="center"
				alignItems="center"
				style={{
					width: "100%",
					paddingLeft: 5,
					borderTop: "1.5px solid #1976d2"
				}}
			>
				<Typography variant="body2">{footer_label || ""}</Typography>
				<TablePagination
					component="div"
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
					rowsPerPageOptions={[5, 10, 25]}
					count={rows?.length}
					labelRowsPerPage="Rows per page"
					labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count} records`}
					color={theme?.palette?.primary?.main}
					backIconButtonProps={{
						"aria-label": "forrige side"
					}}
					nextIconButtonProps={{
						"aria-label": "neste side"
					}}
					// showFirstButton
					// showLastButton
				/>
			</Box>
		</div>
	);
});
