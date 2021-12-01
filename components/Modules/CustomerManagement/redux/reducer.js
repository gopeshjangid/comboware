import { START, FAILED, USERS_LIST, ENGINEERS_LIST } from './constants';
const initialState = {
  profile: {},
  usersList: [],
  engineers_list: [],
  system_image: '',
  loading: false,
  message: '',
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
        ...action?.payload?.data
      };

    case FAILED:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload?.error,
        ...action.payload
      };
    case USERS_LIST:
      return {
        ...state,
        loading: false,
        message: '',
        ...action.payload
      };
    case ENGINEERS_LIST:
      return {
        ...state,
        loading: false,
        message: '',
        ...action.payload
      };

    default:
      return state;
  }
};

export default reducer;
