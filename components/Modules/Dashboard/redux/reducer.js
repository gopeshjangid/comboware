import { START, FAILED, SAVE_RESOURCE , SELECT_CLUSTER } from "./constants";
const initialState = {
  hostsList : [],
  domainsList : [],
  selectedHost : null,
  selectedUser : null,
  selectedCluster : null,
  loading : false,
  message : '',
  error : ''
};

function reducer(state = initialState, action) {
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

      case SELECT_CLUSTER:

        return {
          ...state,
          domainsList : [],
          selectedCluster:action.payload
        };
        break;  

    default:
      return state;
      break;
  }
}

export default reducer;
