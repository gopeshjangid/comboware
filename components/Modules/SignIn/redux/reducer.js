import  {SIGNUP_FAILED ,SIGNUP_REQUEST , SIGNUP_SUCCESS} from "./constants";
const initialState = {
  loading : false,
  action_type : 'LOGIN',
  error : "",
  message : ""
}

function reducer  (state = initialState , action) {

  switch (action?.type) {
    case SIGNUP_REQUEST:
       return {
         ...state,
         loading : true,
         ... action?.payload
       }
      break;

      case SIGNUP_FAILED:
        return {
          ...state,
          loading : false,
          ... action?.payload,
          message : ""
        }
       break;

       case SIGNUP_SUCCESS:
        return {
          ...state,
          loading : false,
          error : "",
          ... action?.payload
        }
       break;
  
    default:
      return state;
      break;
  }

}

export default reducer;