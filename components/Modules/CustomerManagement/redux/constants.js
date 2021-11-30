export const START = 'START';
export const FAILED = 'FAILED';
export const SAVE_RESOURCE = 'SAVE_RESOURCE';
export const SELECT_CLUSTER = 'SELECT_CLUSTER';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export const API_BASE_URL = publicRuntimeConfig?.API_BASE_URL;
export const MESSAGE = {
  creatingAccount : 'Creating account...',
  accountSuccess : 'Created success.'
}

export const SKILLS = ["BEGINNER" ,"INTERMEDIATE" ,"EXPERT"];


export const API = {
  getAllUserList : API_BASE_URL+'/v1/workspace/getAllUserList ',
}