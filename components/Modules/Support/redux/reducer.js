import { START, STOP, SAVE_SUPPORT } from "./constants";
const initialState = {
  latestMessage: null,
  messageList : [],
  chatList : [],
  loading : false,
  chat_id :  0,
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

    case STOP:
      return {
        ...state,
        loading: false,
        message : '',
        error : action.payload?.error
      };
      break;

    case SAVE_SUPPORT:

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
