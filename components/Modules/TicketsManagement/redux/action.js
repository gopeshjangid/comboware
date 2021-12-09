import Service from "../../../../service";
import * as ticketConstants from "./constants";

export const errorHandler = (code) => {
	switch (code) {
		case 500:
			return "Something went wrong. Please try again!";
			break;

		default:
			return "Something went wrong. Please try again!";
			break;
	}
};

export const saveTicket = (data) => {
	return { type: ticketConstants.SAVE_ALL_TICKETS, payload: data };
};

export const saveCategories = (data) => {
	return { type: ticketConstants.SAVE_CATEGORIES, payload: data };
};

export const saveSubCategories = (data) => {
	return { type: ticketConstants.SAVE_CATEGORIES, payload: data };
};

export const saveTicketDetails = (data) => {
	return { type: ticketConstants.SAVE_TICKET_DETAILS, payload: data };
};

export const addActivity = (data) => {
	return { type: ticketConstants.ADD_ACTIVITY, payload: data };
};

export const start = (data) => {
	return { type: ticketConstants.TICKET_START, payload: data };
};

export const failed = (data) => {
	return { type: ticketConstants.TICKET_FAILED, payload: data };
};

export const saveAllTickets = (data) => {
	return { type: ticketConstants.SAVE_ALL_TICKETS, payload: data };
};

export const updateTicket = (data) => {
	return { type: ticketConstants.UPDATE_TICKET, payload: data };
};

export const saveResourceData = (type, data) => {
	return { type: type, payload: data };
};

export const requestStop = (data) => {
	return { type: ticketConstants.FAILED, payload: data };
};

export const requestInit = (data) => {
	return { type: ticketConstants.START, payload: data };
};

export const createTicket = (data, uploadImage, callBack) => (dispatch) => {
	dispatch(start({ message: "Creating ticket..." }));
	Service.post(ticketConstants.API.createTicket, data)
		.then((res) => {
			console.log("create ticket reponse", res?.response);
			if (uploadImage) {
				uploadImage(res?.data?.data?.id);
			}
			if (callBack) {
				callBack(true, "Ticket has been created successfully.");
			}
			dispatch(
				saveTicket({
					data: res?.data?.data,
					message: "Ticket has been created successfully.",
				})
			);
		})
		.catch((err) => {
			console.log("ticketConstants.API  err-- =>>>>>>>", err);

			if (callBack) {
				callBack(false, errorHandler());
			}
			dispatch(failed({ data: null, error: errorHandler() }));
		});
};

export const addNewActivity = (data, callBack) => (dispatch, getState) => {
	dispatch(start({ loading: true }));
	let headers = {};
	if (data?.type === "image") {
		headers = {
			accept: "application/json",
			"Accept-Language": "en-US,en;q=0.8",
			"Content-Type": `multipart/form-data;`,
		};
	}

	let jsonBody = data?.body;
	Service.post(
		ticketConstants.API.addActivities + data?.query,
		jsonBody,
		headers
	)
		.then((res) => {
			let state = getState();
			callBack();
			dispatch(
				saveTicket({
					ticketDetails: {
						...state?.ticket?.ticketDetails,
						activities: [
							...state?.ticket?.ticketDetails?.activities,
							res?.data?.data[0],
						],
					},
					message: "Uploaded the activity successfully.",
				})
			);
		})
		.catch((err) => {
			// console.log("ticketConstants.API  err-- =>>>>>>>", err);
			// dispatch(
			// 	failed({
			// 		data: null,
			// 		error:
			// 			data?.type === "image"
			// 				? "Error in image uploading..."
			// 				: errorHandler(),
			// 	})
			// );
		});
};

export const updateTicketDetails = (data, query, callBack) => (
	dispatch,
	getState
) => {
	dispatch(start({ message: "Saving the ticket..." }));
	Service.put(ticketConstants.API.updateTicket + query, data)
		.then((res) => {
			console.log("res", res?.response);
			let tickets = getState();
			if (callBack) {
				callBack(true, "Updated Successfully.");
			}
			dispatch(saveAllTickets({ message: "Updated Successfully." }));
		})
		.catch((err) => {
			console.log("err code--", err?.code);

			if (callBack) {
				callBack(false, errorHandler());
			}
			dispatch(failed({ data: null, error: errorHandler() }));
		});
};

export const getTicketDetails = (ticketId, userId) => (dispatch) => {
	dispatch(start({ message: "Fetching ticket details..." }));
	Service.get(
		ticketConstants.API.getTicketDetails +
			`?ticketNumber=${ticketId}&userId=${userId}&userType=${localStorage.getItem(
				"userType"
			)}`
	)
		.then((res) => {
			console.log("res", res?.response);
			dispatch(saveTicketDetails({ ticketDetails: { ...res?.data?.data } }));
		})
		.catch((err) => {
			console.log("err--", err);
			dispatch(failed({ data: null, error: errorHandler() }));
		});
};

export const getAllTickets = (qStr, callBack) => (dispatch) => {
	dispatch(start({ message: "Fetching ticket details..." }));
	Service.get(ticketConstants.API.getAllTickets + qStr)
		.then((res) => {
			console.log("res", res?.response);
			dispatch(saveTicket({ ticketList: [...res?.data?.data] }));
			if (callBack) {
				callBack();
			}
		})
		.catch((err) => {
			console.log("err--", err);
			if (callBack) {
				callBack();
			}
			dispatch(failed({ data: null, error: errorHandler() }));
		});
};

export const getCategories = (qStr) => (dispatch) => {
	dispatch(start({ loading: true }));
	Service.get(ticketConstants.API.getCategories)
		.then((res) => {
			console.log("res", res?.response);
			dispatch(saveCategories({ categories: [...res?.data?.data] }));
		})
		.catch((err) => {
			console.log("err--", err);
			dispatch(failed({ error: errorHandler() }));
		});
};

export const getSubCategories = (id) => (dispatch) => {
	dispatch(start({ loading: true }));
	Service.get(ticketConstants.API.getSubCategories + "?categoryId=" + id)
		.then((res) => {
			dispatch(saveSubCategories({ subCategories: [...res?.data?.data] }));
		})
		.catch((err) => {
			console.log("err--", err);
			dispatch(failed({ error: errorHandler() }));
		});
};

export const AssignTicket = (data, callBack) => (dispatch) => {
	dispatch(start({ message: "Assigning ticket..." }));
	Service.post(ticketConstants.API.assignTicket, data)
		.then((res) => {
			if (callBack) {
				callBack(true, "Ticket has been assigned.");
			}
			dispatch(saveTicket({ message: "Ticket has been assigned." }));
		})
		.catch((err) => {
			if (callBack) {
				callBack(false, errorHandler());
			}
			console.log("ticketConstants.API  err-- =>>>>>>>", err, err.response);
			dispatch(failed({ error: errorHandler() }));
		});
};

export const getAllCategories = (callback) => (dispatch) => {
	dispatch(requestInit({ message: "Please wait... " }));
	Service.get(`${ticketConstants.API.getAllCategories}`)
		.then((res) => {
			callback(true, "");
			dispatch({
				type: ticketConstants.GET_ALL_CATEGORIES,
				payload: res?.data?.data,
			});
		})
		.catch((err) => {
			console.log("err--", err);
			callback(true, "Something went wrong. please try again");
			dispatch(
				requestStop({
					data: null,
					error: "Something went wrong. please try again",
				})
			);
		});
};

export const saveCategory = (data, callBack) => (dispatch) => {
	Service.post(ticketConstants.API.saveCategory, data)
		.then((res) => {
			callBack(
				true,
				data?.id
					? "Category updated successfully."
					: "Category added successfully."
			);
			dispatch(getAllCategories());
		})
		.catch((err) => {
			dispatch(requestStop({ error: err?.message }));
		});
};

export const saveSubcategory = (data, callBack) => (dispatch) => {
	Service.post(ticketConstants.API.saveSubcategory, data)
		.then((res) => {
			callBack(
				true,
				data?.id
					? "Sub Category updated successfully."
					: "Sub Category added successfully."
			);
			dispatch(getSubCategories(data?.category_id || 0));
		})
		.catch((err) => {
			callBack(false, "Something went wrong. Please try again");
		});
};

export const enableDisableCatSubCat = (data, callBack) => (dispatch) => {
	dispatch(start({ message: "Please wait..." }));
	Service.put(ticketConstants.API.enableDisableCatSubCat, data)
		.then((res) => {
			callBack(
				true,
				data?.status ? "Enabled successfully." : "Disabled successfully."
			);
		})
		.catch((err) => {
			callBack(false, "Something went wrong. Please try again");
		});
};
