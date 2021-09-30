export const START = 'START_SUPPORT';
export const STOP = 'STOP_SUPPORT';
export const SAVE_SUPPORT = 'SAVE_SUPPORT';
//export const API_BASE_URL = 'http://210.242.250.38:8000';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
//export const API_BASE_URL = 'http://210.242.250.38:8000';
export const API_BASE_URL = publicRuntimeConfig?.API_BASE_URL;
export const MESSAGE = {
  creatingAccount : 'Creating account...',
  accountSuccess : 'Created success.'
}

export const COLUMNS = [
  {
    field: 'message',
    headerName : "Message",
    width: 250,
  },
  {
    field: 'date_time',
    headerName : "Created At",
    width: 130
  },
  {
    field: 'action',
    headerName : "Action",
    width: 200
  }
  
]


export const API = {
  sendMessage : API_BASE_URL+'/v1/support/sendMessage',
  getLatestMessage :  API_BASE_URL+'/v1/support/getLatestMessage',
  getAllMessages :  API_BASE_URL+'/v1/support/getAllMessages',
}