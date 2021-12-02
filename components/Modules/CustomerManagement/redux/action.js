import Service from '../../../../service';
import { API, ENGINEERS_LIST, FAILED, USERS_LIST, USER_DETAIL } from './constants';

export const requestStop = (data) => {
  return { type: FAILED, payload: data };
};

export const saveResourceData = (type, data) => {
  return { type: type, payload: data };
};

export const getAllUserList = (user_type, callback) => (dispatch) => {
  Service.get(`${API.getAllUserList}?userType=${user_type}`)
    .then((res) => {
      callback(true, '');
      if (user_type === 'ER') {
        dispatch(saveResourceData(ENGINEERS_LIST, { engineers_list: res?.data?.data }));
      } else {
        dispatch(saveResourceData(USERS_LIST, { usersList: res?.data?.data }));
      }
    })
    .catch((err) => {
      console.log('err--', err);
      callback(true);
      dispatch(requestStop({ data: null, error: 'Something went wrong. please try again' }));
    });
};

export const getProfile = (userId, callback) => (dispatch) => {
  Service.get(`${API.getProfile}?userId=${userId}`)
    .then((res) => {
      callback(true, '');
      dispatch(saveResourceData(USER_DETAIL, res?.data?.data.user));
    })
    .catch((err) => {
      console.log('err--', err);
      callback(true);
      dispatch(requestStop({ data: null, error: 'Something went wrong. please try again' }));
    });
};
