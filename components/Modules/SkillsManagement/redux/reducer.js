import { START, FAILED, SAVE_RESOURCE, SKILL_LIST, LEVEL_LIST } from './constants';
const initialState = {
  resources: [],
  clusters: [],
  envPlans: [],
  skills: [],
  levels: [],
  loading: false,
  message: '',
  error: ''
};

function reducer(state = initialState, action) {
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
    case SAVE_RESOURCE:
      return {
        ...state,
        loading: false,
        message: '',
        ...action.payload
      };
    case SKILL_LIST:
      return {
        ...state,
        loading: false,
        message: '',
        skills: action.payload.skills
      };
    case LEVEL_LIST:
      return {
        ...state,
        loading: false,
        message: '',
        levels: action.payload.levels
      };
    default:
      return state;
  }
}

export default reducer;
