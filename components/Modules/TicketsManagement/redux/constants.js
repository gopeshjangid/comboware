export const SAVE_TICKET = 'SAVE_TICKET';
export const SAVE_TICKET_DETAILS = 'SAVE_TICKET_DETAILS';
export const SAVE_ALL_TICKETS = 'SAVE_ALL_TICKETS';
export const UPDATE_TICKET = 'UPDATE_TICKET';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SAVE_SUBCATEGORIES = 'SAVE_SUBCATEGORIES';
export const TICKET_START = 'TICKET_START';
export const TICKET_FAILED = 'TICKET_FAILED';

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export const API_BASE_URL = publicRuntimeConfig?.API_BASE_URL;


export const COLUMNS = [
  {
    field: 'ticket_number',
    headerName : "Ticket Number",
    width: 180,
  },
  {
    field: 'title',
    headerName : "Title",
    width: 200
  },
  {
    field: 'customer_name',
    headerName : "Customer Name",
    width: 180
  },
  {
    field: 'status',
    headerName : "Status",
    width: 120,
    align : 'center',
    headerAlign : 'center'
  },
  {
    field: 'repair_status',
    headerName : "Repair Status",
    width: 160,
    align : 'center'
  },
  {
    field: 'created_at',
    headerName : "Created at",
    width: 150,
    align : 'center',
  },
  {
    field: 'action',
    headerName : "Action",
    width: 150,
    headerAlign : 'center'
  }
  
]


export const API = {
  createTicket : API_BASE_URL+'/v1/ticket/createTicket',
  getAllTickets : API_BASE_URL+'/v1/ticket/createWorkspace',
  getTicketDetails:  API_BASE_URL+"/v1/ticket/getTicketDetails",
  updateTicket:  API_BASE_URL+"/v1/ticket/getServerDetails",
  getCategories:  API_BASE_URL+"/v1/ticket/getCategories",
  getSubCategories:  API_BASE_URL+"/v1/ticket/getSubCategories",
  addActivities : API_BASE_URL+"/v1/ticket/addActivities",
  
}