export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
//export const API_BASE_URL = 'http://210.242.250.38:8000';
export const API_BASE_URL = publicRuntimeConfig?.API_BASE_URL;
export const MESSAGE = {
  creatingAccount : 'Creating account...',
  accountSuccess : 'Created success.'
}


export const API = {
  signUp : API_BASE_URL+'/v1/user/register'
}