export const START = 'START_REQUEST';
export const STOP = 'STOP_REQUEST';
export const SAVE_PROFILE = 'SAVE_REQUEST';
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
    field: 'server_name',
    header : "Server Name",
    width: 250,
  },
  {
    field: 'ram',
    header : "RAM",
    width: 130
  },
  {
    field: 'cpu',
    header : "CPUs",
    width: 120
  },
  {
    field: 'request_status',
    header : "Status",
    width: 200
  },
  {
    field: 'created_date',
    header : "Created Date",
    width: 200
  },
  {
    field: 'action',
    header : "Action",
    width: 200
  }
  
]


export const API = {
  getAllWorkspace : API_BASE_URL+'/v1/workspace/getAllWorkspaceRequest',
  updateRequest :  API_BASE_URL+'/v1/workspace/updateRequest',
}