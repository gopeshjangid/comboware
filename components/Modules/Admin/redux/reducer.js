import { START, STOP, SAVE_PROFILE } from "./constants";
const initialState = {
  profile: {},
  skills: [{ skill_name: "", skill_level: "" }],
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

    case STOP:
      return {
        ...state,
        loading: false,
        message : '',
        error : action.payload?.error
      };
      break;

    case SAVE_PROFILE:

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
