
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
  return {type : SAVE_TICKET , payload : data}
}
export const saveCategories = (data) =>{
  return {type : SAVE_CATEGORIES , payload : data}
}

export const saveSubCategories = (data) =>{
  return {type : SAVE_SUBCATEGORIES , payload : data}
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

export const createTicket = (data) => (dispatch) =>{
  dispatch(start({message : "Creating ticket..."}));
  Service.post(API.createTicket ,data).then(res=>{
    console.log("create ticket reponse" ,res?.response)
    dispatch(saveTicket({data  : res?.data?.data , message : "Ticket has been created successfully."}));
  }).catch(err =>{
    console.log("api  err-- =>>>>>>>" ,err)
    dispatch(failed({data  : null, error : errorHandler()}));
  })

}

export const addNewActivity = (data) => (dispatch ,getState) =>{
  dispatch(start({loading : true}));
  Service.post(API.addActivities ,data).then(res=>{
    let state = getState();
    console.log("add activity reponse" ,res?.response)
    dispatch(saveTicket({ticket  :{...state?.ticket ,activities : [...state?.ticket?.activities ,res?.data?.data]}, message : "Uploaded the activity successfully."}));
  }).catch(err =>{
    console.log("api  err-- =>>>>>>>" ,err)
    dispatch(failed({data  : null, error : errorHandler()}));
  })

}

export const updateTicketDetails = (data) => (dispatch ,getState) =>{
  dispatch(start({message : "Saving the ticket..."}));
  Service.put(API.updateTicket ,data).then(res=>{
    console.log("res" ,res?.response)
    let tickets = getState();
    dispatch(saveTicket({ data  :  { ticketList : {...res?.data?.data } } , message : "Saved successfully."}));
  }).catch(err =>{
    console.log("err code--" ,err?.code)
    dispatch(failed({data  : null, error : errorHandler()}));
  })

}

export const getTicketDetails = (qStr) => (dispatch) =>{
  dispatch(start({message : "Fetching ticket details..."}));
  Service.get(API.getTicketDetails+qStr).then(res=>{
    console.log("res" ,res?.response)
    dispatch(saveTicketDetails({ ticket : {...res?.data?.data?.ticket }}));
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
    dispatch(failed({data  : null, error : errorHandler()}));
  })

}

export const getSubCategories = (id) => (dispatch) =>{
  dispatch(start({loading : true}));
  Service.get(API.getSubCategories+"?categoryId"+id).then(res=>{
    console.log("res" ,res?.response)
    dispatch(saveSubCategories({ subCategories : [...res?.data?.data]}));
  }).catch(err =>{
    console.log("err--" ,err)
    dispatch(failed({data  : null, error : errorHandler()}));
  })

}

