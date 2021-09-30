
import {SAVE_CATEGORIES, SAVE_SUBCATEGORIES,SAVE_TICKET_DETAILS, SAVE_TICKET,UPDATE_TICKET,ADD_ACTIVITY,SAVE_ALL_TICKETS,TICKET_FAILED,TICKET_START,MESSAGE,API} from  "./constants";
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

export const saveTicket = (data) =>{
  return {type : SAVE_ALL_TICKETS , payload : data}
}
export const saveCategories = (data) =>{
  return {type : SAVE_CATEGORIES , payload : data}
}

export const saveSubCategories = (data) =>{
  return {type : SAVE_CATEGORIES , payload : data}
}

export const saveTicketDetails = (data) =>{
  return {type : SAVE_TICKET_DETAILS , payload : data}
}



export const addActivity = (data) =>{
  return {type : ADD_ACTIVITY , payload : data}
}

export const start = (data) =>{
  return {type : TICKET_START , payload : data}
}

export const failed = (data) =>{
  return {type : TICKET_FAILED , payload : data}
}

export const saveAllTickets = (data) =>{
  return {type : SAVE_ALL_TICKETS , payload : data}
}

export const updateTicket = (data) =>{
  return {type : UPDATE_TICKET , payload : data}
}

export const createTicket = (data ,uploadImage) => (dispatch) =>{
  dispatch(start({message : "Creating ticket..."}));
  Service.post(API.createTicket ,data).then(res=>{
    console.log("create ticket reponse" ,res?.response)
    if(uploadImage){
      uploadImage(res?.data?.data?.id);
    }
    dispatch(saveTicket({data  : res?.data?.data , message : "Ticket has been created successfully."}));
  }).catch(err =>{
    console.log("api  err-- =>>>>>>>" ,err)
    dispatch(failed({data  : null, error : errorHandler()}));
  })

}

export const addNewActivity = (data ,callBack) => (dispatch ,getState) =>{
  dispatch(start({loading : true}));
  let headers = {};
  if(data?.type === 'image'){
    headers =   {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data;`
    }
  }

  let jsonBody = data?.body;
  Service.post(API.addActivities+data?.query ,jsonBody ,headers).then(res=>{
    let state = getState();
    console.log("add activity reponse" ,res?.response)
    callBack();
    dispatch(saveTicket({ticketDetails  :{...state?.ticket?.ticketDetails ,activities : [...res?.data?.data]}, message : "Uploaded the activity successfully."}));
  }).catch(err =>{
    console.log("api  err-- =>>>>>>>" ,err)
    dispatch(failed({data  : null, error : errorHandler()}));
  })

}

export const updateTicketDetails = (data,query) => (dispatch ,getState) =>{
  dispatch(start({message : "Saving the ticket..."}));
  Service.put(API.updateTicket+query ,data).then(res=>{
    console.log("res" ,res?.response)
    let tickets = getState();
    dispatch(saveAllTickets({message: 'Updated Successfully.'}))
  }).catch(err =>{
    console.log("err code--" ,err?.code)
    dispatch(failed({data  : null, error : errorHandler()}));
  })

}

export const getTicketDetails = (ticketId ,userId) => (dispatch) =>{
  dispatch(start({message : "Fetching ticket details..."}));
  Service.get(API.getTicketDetails+`?ticketNumber=${ticketId}&userId=${userId}&userType=${localStorage.getItem("userType")}`).then(res=>{
    console.log("res" ,res?.response)
    dispatch(saveTicketDetails({ ticketDetails : {...res?.data?.data }}));
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(failed({data  : null, error : errorHandler()}));
  })

}

export const getAllTickets = (qStr) => (dispatch) =>{
  dispatch(start({message : "Fetching ticket details..."}));
  Service.get(API.getAllTickets+qStr).then(res=>{
    console.log("res" ,res?.response)
    dispatch(saveTicket({ ticketList : [...res?.data?.data]}));
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(failed({data  : null, error : errorHandler()}));
  })

}

export const getCategories = (qStr) => (dispatch) =>{
  dispatch(start({loading : true}));
  Service.get(API.getCategories).then(res=>{
    console.log("res" ,res?.response)
    dispatch(saveCategories({ categories : [...res?.data?.data]}));
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(failed({ error : errorHandler()}));
  })

}

export const getSubCategories = (id) => (dispatch) =>{
  dispatch(start({loading : true}));
  Service.get(API.getSubCategories+"?categoryId="+id).then(res=>{
    console.log("res" ,res?.response)
    dispatch(saveSubCategories({ subCategories : [...res?.data?.data]}));
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(failed({error : errorHandler()}));
  })

}

export const AssignTicket = (data) => (dispatch) =>{
  dispatch(start({message : "Assigning ticket..."}));
  Service.post(API.assignTicket ,data).then(res=>{
    dispatch(saveTicket({message : "Ticket has been assigned."}));
  }).catch(err =>{
    console.log("api  err-- =>>>>>>>" ,err ,err.response)
    dispatch(failed({error : errorHandler()}));
  })

}



