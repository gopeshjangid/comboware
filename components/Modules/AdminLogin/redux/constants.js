export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const API_BASE_URL = process.env?.NODE_ENV === 'development' ? process.env?.NEXT_PUBLIC_API_BASE_URL :  process.env?.NEXT_PUBLIC_PROD_API_BASE_URL;
export const MESSAGE = {
  creatingAccount : 'Creating account...',
  accountSuccess : 'Created success.'
}


export const API = {
  login : API_BASE_URL+'/v1/user/adminLogin'
}