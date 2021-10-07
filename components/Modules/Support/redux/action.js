
import {START ,STOP,SAVE_SUPPORT ,MESSAGE,API} from  "./constants";
import Service from  "../../../../service/index";

export const getAllMessages = (query) => (dispatch) =>{
  Service.get(API.getAllMessages+query).then(({data})=>{
    dispatch({type : SAVE_SUPPORT , payload  :  {messageList: [...data?.data] ,chat_id : Number(localStorage.getItem("chatId"))}});
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch({type : STOP , payload : {error : "Something went wrong"}});
  })

}

export const getLatestMessage = (query) => (dispatch ,getState) =>{
  Service.get(API.getLatestMessage+query).then(({data})=>{
    let state = getState();
    if(data?.data){
      dispatch({type : SAVE_SUPPORT , payload  :  {messageList: [...state?.support?.messageList,data?.data] }});
    }
  }).catch(err =>{
    
  })

}


export const sendMessage = (data) => (dispatch ,getState) =>{
  
  Service.post(API.sendMessage ,data).then(res=>{
    dispatch({type : SAVE_SUPPORT , payload  :  {chat_id: res?.data?.data?.chat_id } });
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch({type : STOP , payload : {error : "Something went wrong"}});
  })

}

export const getAllChats = (data) => (dispatch ,getState) =>{
  
  Service.get(API.getAllChats).then(res=>{
    dispatch({type : SAVE_SUPPORT , payload  :  {chatList: [...res?.data?.data] } });
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch({type : STOP , payload : {error : "Something went wrong"}});
  })

}