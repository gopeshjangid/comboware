
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
    
    dispatch(signUpSuccess({data  : res?.data, message : "Logged in successfully."}));
    if(res?.data?.data?.is_profile_setup){
      router.push("/dashboard")
    } else {
      router.push("/dashboard/profile")
    }
  }).catch(err =>{
    console.log("err===9098--" ,err?.response);
    dispatch(signUpFailed({data  : null, error : err?.response?.data?.message}));
  })

}