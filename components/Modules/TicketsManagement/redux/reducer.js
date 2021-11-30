import {
  SAVE_CATEGORIES,
  SAVE_SUBCATEGORIES,
  SAVE_TICKET_DETAILS,
  SAVE_TICKET,
  UPDATE_TICKET,
  ADD_ACTIVITY,
  SAVE_ALL_TICKETS,
  TICKET_FAILED,
  TICKET_START,
  MESSAGE,
  API
} from './constants';

const initialState = {
  ticketDetails: null,
  ticketList: [],
  activities: [],
  categories: [],
  subCategories: [],
  loading: false,
  message: '',
  error: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TICKET_DETAILS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: '',
        message: action.payload?.message
      };
    case SAVE_ALL_TICKETS:
      return {
        ...state,
        loading: false,
        error: '',
        ...action?.payload
      };
    case TICKET_START:
      return {
        ...state,
        ...action.payload,
        error: '',
        loading: true
      };
    case SAVE_CATEGORIES:
      return {
        ...state,
        ...action.payload,
        error: '',
        loading: false
      };
    case SAVE_SUBCATEGORIES:
      return {
        ...state,
        ...action.payload,
        error: '',
        loading: false
      };
    case TICKET_FAILED:
      return {
        ...state,
        ...action.payload,
        message: '',
        loading: false
      };
    default:
      return state;
  }
}

export default reducer;