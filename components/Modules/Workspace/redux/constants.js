export const SAVE_DOMAIN = 'SAVE_DOMAIN';
export const SAVE_SERVER_USER = 'SAVE_SERVER_USER';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const SAVE_REQUEST = 'SAVE_REQUEST';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
//export const API_BASE_URL = 'http://210.242.250.38:8000';
export const API_BASE_URL = publicRuntimeConfig?.API_BASE_URL;
export const NETWORK = {
        id : '9f5e5d0a-8918-4321-8fec-eb062a784fd7',
        name : 'Engineero-network',
        type : 'Physical',
        subnetCIDR : '192.168.60.0/24',
        dhcp : 'enabled',
        allocationPool : '192.168.60.110 — 192.168.60.210' 
    };

export const FLAVOR = {
      id: '423def1e-30ec-4a2d-bad7-226c2de9250b',
      size  : {
        cpu : 2,
        ram :4
      }
  }
export const IMAGE = {
    id :  'bef927d4-1eec-441e-a161-a25a43a80a7c',
    size : '7 GiB',
    os_type : 'Generic Linux'
 } 
export const MESSAGE = {
  creatingDomain : 'Creating domain...',
  accountSuccess : 'Created success.'
}


export const API = {
  createDomain : API_BASE_URL+'/v1/workspace/createDomain',
  createServerRequest : API_BASE_URL+'/v1/workspace/createWorkspace',
  getServerDetails:  API_BASE_URL+"/v1/workspace/getServerDetails"
}