import {
	SAVE_PAYMENT,
	UPDATE_TICKET,
	SAVE_ALL_TICKETS,
	PAYMENT_FAILED,
	PAYMENT_START,
	API,
} from "./constants";
import Service from "../../../../service/index";

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

export const savePayment = (data) => {
	return { type: SAVE_PAYMENT, payload: data };
};

export const start = (data) => {
	return { type: PAYMENT_START, payload: data };
};

export const failed = (data) => {
	return { type: PAYMENT_FAILED, payload: data };
};

export const createPayment = (data) => (dispatch) => {
	dispatch(start({ message: "Initiating the payment, please wait..." }));
	Service.post(API.savePayment, data)
		.then((res) => {
			dispatch(
				savePayment({
					paymentDetails: res?.data?.data,
					message: "Payment created successfully.",
				})
			);
		})
		.catch((err) => {
			dispatch(failed({ data: null, error: errorHandler() }));
		});
};

export const getAllPayments = (qStr) => (dispatch) => {
	dispatch(start({ message: "Fetching payments..." }));
	Service.get(API.getAllPayments + qStr)
		.then((res) => {
			dispatch(savePayment({ paymentList: [...res?.data?.data] }));
		})
		.catch((err) => {
			console.log("err--", err);
			dispatch(failed({ data: null, error: errorHandler() }));
		});
};

export const getBillingAmount = (data, setPaymentNotification) => (
	dispatch
) => {
	dispatch(start({ message: "Please wait..." }));
	Service.post(API.getBillingAmount, data)
		.then((res) => {
			if (!res?.data?.status) {
				setPaymentNotification(false, res?.data?.message);
				dispatch(savePayment({ loading: false }));
			} else {
				dispatch(savePayment({ billing: res?.data?.data }));
			}
		})
		.catch((err) => {
			console.log("err bill payment amount error--", err);
			dispatch(failed({ data: null, error: errorHandler() }));
		});
};

export const getPaymentDetails = (data) => (dispatch) => {
	dispatch(start({ message: "getting payment..." }));
	Service.post(API.getPaymentDetails, data)
		.then((res) => {
			dispatch(savePayment({ paymentDetails: res?.data?.data }));
		})
		.catch((err) => {
			dispatch(failed({ data: null, error: errorHandler() }));
		});
};
