
import {START ,STOP,SAVE_SUPPORT ,MESSAGE,API} from  "./constants";
import Service from  "../../../../service/index";

export const getAllMessages = (query) => (dispatch) =>{
  Service.get(API.getAllMessages+query).then(({data})=>{
    dispatch({type : SAVE_SUPPORT , payload  :  {messageList: [...data?.data]}});
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch({type : STOP , payload : {error : "Something went wrong"}});
  })

}

export const getLatestMessage = (query) => (dispatch) =>{
  Service.get(API.getLatestMessage+query).then(({data})=>{
    dispatch({type : SAVE_SUPPORT , payload  :  {latestMessage:  data?.data}});
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch({type : STOP , payload : {error : err?.message}});
  })

}


export const sendMessage = (data) => (dispatch ,getState) =>{
  
  Service.post(API.sendMessage ,data).then(res=>{
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch({type : STOP , payload : {error : "Something went wrong"}});
  })

}