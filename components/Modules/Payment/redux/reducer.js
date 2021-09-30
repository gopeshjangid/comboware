import {SAVE_PAYMENT,PAYMENT_FAILED,PAYMENT_START,MESSAGE,API} from  "./constants";

const initialState = {
  paymentDetails:null,
  paymentList : [],
  billing : null,
  loading: false,
  message: "",
  error : ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_PAYMENT:
      return {
        ...state,
        ...action.payload,
        loading : false,
        error: '',
        message : action.payload?.message
      };

      break;

    case PAYMENT_START:
      return {
        ...state,
        ...action.payload,
        error : '',
        loading: true,
      };

      break;

    case PAYMENT_FAILED:
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
