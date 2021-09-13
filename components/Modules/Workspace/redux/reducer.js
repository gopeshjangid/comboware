import { SAVE_DOMAIN, REQUEST_START, REQUEST_FAILED ,SAVE_REQUEST } from "./constants";
const initialState = {
  domain: {
    name: "",
    description: "",
    id: "",
  },project: {
    name: "",
    description: "",
    id: "",
  },
  network: null,
  image: null,
  server: null,
  serverList : [],
  loading: false,
  message: "",
  error : ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_DOMAIN:
      return {
        ...state,
        ...action.payload?.data,
        loading : false,
        error: '',
        message : action.payload?.message
      };

      break;

      case SAVE_REQUEST:
        console.log("action?.payload?.data" ,action?.payload?.data)
        return {
          ...state,
          loading : false,
          error: '',
          message : action.payload?.message,
          ...action?.payload
        };
  
        break;

    case REQUEST_START:
      return {
        ...state,
        ...action.payload,
        error : '',
        loading: true,
      };

      break;

    case REQUEST_FAILED:
      return {
        ...state,
        ...action.payload,
        message : '',
        loading: false,
      };

      break;

    default:
      return state;
      break;
  }
}

export default reducer;
