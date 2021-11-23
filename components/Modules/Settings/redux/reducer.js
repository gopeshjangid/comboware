import { START, FAILED, SAVE_RESOURCE } from "./constants";
const initialState = {
  resources : [],
  clusters : [],
  loading : false,
  message : '',
  error : ''
};

function reducer(state = initialState, action) {
  console.log("action" ,action)
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
        ... action?.payload?.data
      };
      break;

    case FAILED:
      return {
        ...state,
        loading: false,
        message : '',
        error : action.payload?.error,
        ...action.payload
      };
      break;

    case SAVE_RESOURCE:

      return {
        ...state,
        loading: false,
        message : '',
        ...action.payload
      };
      break;

    default:
      return state;
      break;
  }
}

export default reducer;
