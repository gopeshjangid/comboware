export const START = 'START_SUPPORT';
export const STOP = 'STOP_SUPPORT';
export const SAVE_SUPPORT = 'SAVE_SUPPORT';
//export const API_BASE_URL = 'http://210.242.250.38:8000';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
//export const API_BASE_URL = 'http://210.242.250.38:8000';
export const API_BASE_URL = publicRuntimeConfig?.API_BASE_URL;
export const MESSAGE = {
}


export const API = {
  sendMessage : API_BASE_URL+'/v1/chat/sendMessage',
  getLatestMessage :  API_BASE_URL+'/v1/chat/getLatestMessage',
  getAllMessages :  API_BASE_URL+'/v1/chat/getAllMessages',
  replyChatByAdmin : API_BASE_URL+'/v1/chat/replyChatByAdmin',
  getAllChats : API_BASE_URL+'/v1/chat/getAllChats', 
}