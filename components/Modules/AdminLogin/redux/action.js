
import {API} from  "./constants";
import Service from  "../../../../service/index";
import {saveProfile,requestInit,requestStop,getProfile } from  "../../Profile/redux/action";

export const login = (data , router) => (dispatch) =>{
  dispatch(requestInit({message : "Logging in..."}));
  Service.post(API.login ,data).then(({data})=>{
    dispatch(saveProfile({profile  : data?.data}));
    getProfile(data?.data?.id);
    localStorage.setItem('userId' ,data?.data?.id);
    router.push("/dashboard")
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(requestStop({ error : "Incorrect login details"}));
  })

}