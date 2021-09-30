export const SAVE_PAYMENT = 'SAVE_TICKET';
export const SAVE_TICKET_DETAILS = 'SAVE_TICKET_DETAILS';
export const SAVE_ALL_TICKETS = 'SAVE_ALL_TICKETS';
export const UPDATE_TICKET = 'UPDATE_TICKET';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SAVE_SUBCATEGORIES = 'SAVE_SUBCATEGORIES';
export const PAYMENT_START = 'TICKET_START';
export const PAYMENT_FAILED = 'TICKET_FAILED';

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export const API_BASE_URL = publicRuntimeConfig?.API_BASE_URL;


export const COLUMNS = [
  {
    field: 'payment_id',
    headerName : "Payment Id",
    width: 200,
  },
  {
    field: 'reference_id',
    headerName : "Reference Id",
    width: 220
  },
  {
    field: 'amount',
    headerName : "Amount ($)",
    width: 150,
     headerAlign : 'center'
  },
  {
    field: 'payment_status',
    headerName : "Status",
    width: 180,
    align : 'center',
    headerAlign : 'center'
  },
  {
    field: 'payment_date',
    headerName : "Payment Date",
    width: 200,
    align : 'center',
    headerAlign : 'center'
  }
  
]


export const PAYMENT_STATUS_LIST = ['ALL','COMPLETED', 'FAILED'];

export const API = {
  getAllPayments : API_BASE_URL+'/v1/payment/getAllPayments',
  getPaymentDetails:  API_BASE_URL+"/v1/payment/getPaymentDetails",
  savePayment : API_BASE_URL+"/v1/payment/savePayment",
  getBillingAmount : API_BASE_URL+"/v1/payment/getBillingAmount"
}