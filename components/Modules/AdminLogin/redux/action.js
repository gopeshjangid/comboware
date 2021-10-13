
import {API} from  "./constants";
import Service from  "../../../../service/index";
import {saveProfile,requestInit,requestStop,getProfile } from  "../../Profile/redux/action";

export const login = (data , router ,callBack) => (dispatch) =>{
  dispatch(requestInit({message : "Logging in..."}));

  console.log("api url" ,API.login)
  Service.post(API.login ,data).then(({data})=>{
    dispatch(saveProfile({profile  : data?.data}));
    getProfile(data?.data?.id);
    callBack(true ,"Logged in success !")
    localStorage.setItem('userId' ,data?.data?.id);
    localStorage.setItem('userType' ,data?.data?.user_type);
    sessionStorage.setItem("token" , data?.data?.token);
    router.push("/dashboard")
  }).catch(err =>{
    console.log("err--" ,err)
    callBack(false ,"Incorrect login details")
    dispatch(requestStop({ error : "Incorrect login details"}));
  })

}