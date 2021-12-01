export const SAVE_TICKET = 'SAVE_TICKET';
export const SAVE_TICKET_DETAILS = 'SAVE_TICKET_DETAILS';
export const SAVE_ALL_TICKETS = 'SAVE_ALL_TICKETS';
export const UPDATE_TICKET = 'UPDATE_TICKET';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SAVE_SUBCATEGORIES = 'SAVE_SUBCATEGORIES';
export const TICKET_START = 'TICKET_START';
export const TICKET_FAILED = 'TICKET_FAILED';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const START = 'START';
export const FAILED = 'FAILED';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
export const API_BASE_URL = publicRuntimeConfig?.API_BASE_URL;

export const COLUMNS = [
  {
    field: 'ticket_number',
    headerName: 'Ticket Number',
    width: 180
  },
  {
    field: 'ticket_subject',
    headerName: 'Title',
    width: 200
  },
  {
    field: 'first_name',
    headerName: 'Customer Name',
    width: 180
  },
  {
    field: 'ticket_status',
    headerName: 'Status',
    width: 120,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'repair_status',
    headerName: 'Repair Status',
    width: 160,
    align: 'center'
  },
  {
    field: 'ticket_date',
    headerName: 'Created at',
    width: 150,
    align: 'center'
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    headerAlign: 'center'
  }
];

export const TICKET_STATUS_LIST = ['ALL', 'OPEN', 'PROCESSING', 'CLOSED'];
export const REPAIR_STATUS_LIST = ['ALL', 'PENDING', 'REPAIRED', 'PROCESSING', 'FAILED'];

export const API = {
  createTicket: API_BASE_URL + '/v1/ticket/createTicket',
  getAllTickets: API_BASE_URL + '/v1/ticket/getAllTicketRequest',
  getTicketDetails: API_BASE_URL + '/v1/ticket/getTicketDetails',
  updateTicket: API_BASE_URL + '/v1/ticket/updateTicketDetails',
  getCategories: API_BASE_URL + '/v1/ticket/getCategories',
  getSubCategories: API_BASE_URL + '/v1/ticket/getSubCategories',
  addActivities: API_BASE_URL + '/v1/ticket/addActivities',
  assignTicket: API_BASE_URL + '/v1/ticket/assignTicket',
  saveCategory: API_BASE_URL + '/v1/category/saveCategory',
  saveSubcategory: API_BASE_URL + '/v1/category/saveSubcategory',
  enableDisableCatSubCat: API_BASE_URL + '/v1/category/enableDisableCatSubcat',
  getCatSubCat: API_BASE_URL + '/v1/category/getCatSubcat',
  getAllCategories: API_BASE_URL + '/v1/category/getAllCategories?type=category'
};
