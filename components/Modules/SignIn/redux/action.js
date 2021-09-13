
import {SIGNUP_REQUEST ,SIGNUP_FAILED , SIGNUP_SUCCESS,MESSAGE,API} from  "./constants";
import Service from  "../../../../service/index";


const signUpRequest = (data) =>{
  return {type : SIGNUP_REQUEST , payload : data}
}

const signUpSuccess = (data) =>{
  return {type : SIGNUP_SUCCESS , payload : data}
}

const signUpFailed = (data) =>{
  return {type : SIGNUP_FAILED , payload : data}
}
export const signUp = (data ,router) => (dispatch) =>{
  dispatch(signUpRequest({message : MESSAGE?.creatingAccount}));
  Service.post(API.signUp ,data).then(res=>{

    console.log("success==",res)
    dispatch(signUpSuccess({data  : res?.data, message : MESSAGE?.accountSuccess}));
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(signUpFailed({data  : null, message : err?.message}));
  })

}