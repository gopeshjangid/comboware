
import {START ,STOP,SAVE_PROFILE ,MESSAGE,API} from  "./constants";
import Service from  "../../../../service/index";
import {saveRequest ,requestStart ,requestFailed} from  "../../Workspace/redux/action";





export const getAllWorkspace = (data) => (dispatch) =>{
  dispatch(requestStart({message : "Fetching the workspace list..."}));
  Service.get(API.getAllWorkspace+"?status=OPEN").then(({data})=>{
    dispatch(saveRequest({serverList :data?.data}))
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(requestFailed({data  : null, message : err?.message}));
  })

}


export const updateRequest = (data) => (dispatch ,getState) =>{
  
  dispatch(requestStart({message : "Approving the request... "}));
  Service.put(API.updateRequest ,data).then(res=>{
    dispatch(saveRequest({message : "Approved successfully."}));
    dispatch(getAllWorkspace());
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(requestFailed({data  : null, message : "Something went wrong. Please try again"}));
  })

}