import Service from '../../../../service';
import { API, ENGINEERS_LIST, FAILED, USERS_LIST } from './constants';

export const requestStop = (data) => {
  return { type: FAILED, payload: data };
};

export const saveResourceData = (type, data) => {
  return { type: type, payload: data };
};

export const getAllUserList = (user_type) => (dispatch) => {
  console.log(user_type);
  Service.get(`${API.getAllUserList}?userType=${user_type}`)
    .then((res) => {
      if (user_type === 'ER') {
        dispatch(saveResourceData(ENGINEERS_LIST, { engineers_list: res?.data?.data }));
      } else {
        dispatch(saveResourceData(USERS_LIST, { usersList: res?.data?.data }));
      }
    })
    .catch((err) => {
      console.log('err--', err);
      dispatch(requestStop({ data: null, error: 'Something went wrong. please try again' }));
    });
};
