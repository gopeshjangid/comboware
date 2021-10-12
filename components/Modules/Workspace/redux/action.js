
import {SAVE_DOMAIN, REQUEST_START,REQUEST_FAILED,SAVE_REQUEST,MESSAGE,API} from  "./constants";
import Service from  "../../../../service/index";

export const errorHandler = (code) =>{
  switch (code) {
    case 500:
      return "Something went wrong. Please try again!"
      break;
  
    default:
      return  "Something went wrong. Please try again!"
      break;
  }
}

export const saveDomain = (data) =>{
  return {type : SAVE_DOMAIN , payload : data}
}

export const saveRequest = (data) =>{
  return {type : SAVE_REQUEST , payload : data}
}

export const requestStart = (data) =>{
  return {type : REQUEST_START , payload : data}
}

export const requestFailed = (data) =>{
  return {type : REQUEST_FAILED , payload : data}
}

export const createDomain = (data) => (dispatch) =>{
  dispatch(requestStart({message : "Creating domain and project..."}));
  Service.post(API.createDomain ,data).then(res=>{
    console.log("res" ,res?.response)
    dispatch(saveDomain({data  : res?.data?.data , message : "Domain and project has been created successfully."}));
  }).catch(err =>{
    console.log("err--" ,err?.response ,err?.data)
    dispatch(requestFailed({data  : null, error : err?.response?.data?.message || "Something went wrong."}));
  })

}

export const serverRequest = (data) => (dispatch) =>{
  dispatch(requestStart({message : "Creating request..."}));
  Service.post(API.createServerRequest ,data).then(res=>{
    console.log("res" ,res?.response)
    dispatch(saveRequest({ data  :  { server : {...res?.data?.data } } , message : "Server request has been created successfully."}));
  }).catch(err =>{
    console.log("err code--" ,err?.code)
    dispatch(requestFailed({data  : null, error : errorHandler()}));
  })

}

export const getWorkSpaceDetails = (id) => (dispatch) =>{
  dispatch(requestStart({message : "Fetching workspace details..."}));
  Service.get(API.getServerDetails+"?userId="+id ).then(res=>{
    console.log("res" ,res?.response)
    dispatch(saveRequest({ server : {...res?.data?.data?.workspace }}));
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(requestFailed({data  : null, error : errorHandler()}));
  })

}

