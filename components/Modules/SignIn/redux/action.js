
import {SIGNUP_REQUEST ,SIGNUP_FAILED , SIGNUP_SUCCESS,MESSAGE,API} from  "./constants";
import Service from  "../../../../service/index";
import {saveProfile} from  "../../Profile/redux/action";

const signUpRequest = (data) =>{
  return {type : SIGNUP_REQUEST , payload : data}
}

const signUpSuccess = (data) =>{
  return {type : SIGNUP_SUCCESS , payload : data}
}

const signUpFailed = (data) =>{
  return {type : SIGNUP_FAILED , payload : data}
}
export const signUp = (data,callBack ,router) => (dispatch) =>{
  dispatch(signUpRequest({message : MESSAGE?.creatingAccount}));
  Service.post(API.signUp ,data).then(res=>{
    localStorage.setItem("userId" ,res?.data?.data?.id);
    localStorage.setItem('userType' ,res?.data?.data?.user_type);
    localStorage.setItem("token" , res?.data?.data?.token);
    localStorage.setItem("refreshToken" , res?.data?.data?.refreshToken);
    dispatch(saveProfile({user  : res?.data?.data}));
    if(callBack){
      callBack(true ," Logged in success!");
    }
    dispatch(signUpSuccess({data  : res?.data, message : "Logged in successfully."}));
    if(res?.data?.data?.is_profile_setup){
      router.push("/dashboard")
    } else {
      router.push("/dashboard/profile")
    }
  }).catch(err =>{
    console.log("err===9098--" ,err?.response);
    if(callBack){
      callBack(false ,err?.response?.data?.message);
    }
    dispatch(signUpFailed({data  : null, error : err?.response?.data?.message}));
  })

}

export const getAuthToken = (callBack) => (dispatch) =>{
  Service.get(API.getAuthToken+"?userId="+localStorage.getItem("userId")  ,{'x-access-token': localStorage.getItem("refreshToken")}).then(res=>{
    localStorage.setItem("token" , res?.data?.data);
    if(callBack){
      callBack(true ," Logged in success!");
    }
    
  }).catch(err =>{
    if(callBack){
      callBack(false ,"Something went wrong. Please try login.");
    }
  })

}