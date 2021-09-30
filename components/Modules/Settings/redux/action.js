
import {START ,FAILED,SAVE_RESOURCE ,MESSAGE,API} from  "./constants";
import Service from  "../../../../service/index";

export const requestInit = (data) =>{
  return {type : START , payload : data}
}

export const requestStop = (data) =>{
  return {type : FAILED , payload : data}
}

export const saveResourceData = (data) =>{
  return {type : SAVE_RESOURCE , payload : data}
}

export const saveResource = (data ,hideNotification) => (dispatch) =>{
  dispatch(requestInit({message : "Please wait... "}));
  Service.post(API.addResource ,data).then(res=>{
    hideNotification();
    dispatch(saveResourceData({message : "Resource info updated successfully."}));
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(requestStop({error : err?.message}));
  })

}

export const getResources = (query ,callback) => (dispatch) =>{
  dispatch(requestInit({message : "Please wait... "}));
  Service.get(API.getResources).then(res=>{
    callback();
    dispatch(saveResourceData({resources : res?.data?.data,message : "Resource info updated successfully."}));
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(requestStop({error : err?.message}));
  })

}




