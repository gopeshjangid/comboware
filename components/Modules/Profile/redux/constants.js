export const START = 'START';
export const FAILED = 'FAILED';
export const SAVE_PROFILE = 'SAVE_PROFILE';
//export const API_BASE_URL = 'http://210.242.250.38:8000';
export const API_BASE_URL = 'http://localhost:8000';
export const MESSAGE = {
  creatingAccount : 'Creating account...',
  accountSuccess : 'Created success.'
}


export const API = {
  updateProfile : API_BASE_URL+'/v1/user/updateProfile',
  createDomain : API_BASE_URL+'/v1/workspace/createDomain',
  signUp : API_BASE_URL+'/v1/user/register',
  getProfile : API_BASE_URL+'/v1/user/getProfile'
}