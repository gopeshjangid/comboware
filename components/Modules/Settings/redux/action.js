
import {START ,FAILED,SAVE_PROFILE ,MESSAGE,API} from  "./constants";
import Service from  "../../../../service/index";
import {saveRequest} from  "../../Workspace/redux/action";

export const requestInit = (data) =>{
  return {type : START , payload : data}
}

export const requestStop = (data) =>{
  return {type : FAILED , payload : data}
}

export const saveProfile = (data) =>{
  return {type : SAVE_PROFILE , payload : data}
}

export const signUp = (data ,router) => (dispatch) =>{
  dispatch(requestInit({message : 'Logging in...'}));
  Service.post(API.signUp ,data).then(res=>{
    console.log("login success" ,res)
    localStorage.setItem("userId" ,res?.data?.data?.id);
    localStorage.setItem('userType' ,res?.data?.data?.user_type);
    dispatch(saveProfile({user  : res?.data?.data}));
    if(!res?.data?.data?.is_profile_setup){
      router.push("/dashboard/profile");
    } else {
      router.push("/dashboard");
    }
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(requestStop({data  : null, error : err?.message}));
  })

}

export const updateProfile = (data) => (dispatch) =>{
  dispatch(requestInit({message : "Updating the profile... "}));
  Service.put(API.updateProfile ,data).then(res=>{
    dispatch(saveProfile({message : "Profile updated successfully."}));
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(requestStop({data  : null, message : err?.message}));
  })

}



export const getProfile = (id) => (dispatch) =>{
  dispatch(requestInit({message : "Fetching the profile..."}));
  Service.get(API.getProfile+"?userId="+id).then(({data})=>{
    console.log("getProfile res" ,data)
    dispatch(saveRequest({domain :data?.data?.domain ,project :data?.data?.project }))
    dispatch(saveProfile( {profile : data?.data?.user , skills : data?.data?.skills}));
  }).catch(err =>{
    console.log("err--" ,err)
    //dispatch(requestStop({data  : null, message : err?.message}));
  })

}

export const updateSystemInfo = (data) => (dispatch) =>{
  dispatch(requestInit({message : "Updating the system info... "}));
  Service.put(API.updateSystemInfo+data?.query ,data?.body).then(res=>{
    dispatch(saveProfile({message : "System info updated successfully."}));
    dispatch(getProfile(Number(localStorage.getItem('userId'))));
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(requestStop({data  : null, message : err?.message}));
  })

}

export const logoutUser = (data) => (dispatch) =>{
  dispatch(requestInit({message : "Logging out... "}));
  dispatch(saveProfile({profile : {}}));
  dispatch(saveRequest({domain :{id : "" ,name : ""} ,project : {id : "" ,name : "" }}));

}

