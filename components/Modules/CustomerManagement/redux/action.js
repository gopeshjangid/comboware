import { START, FAILED, SAVE_RESOURCE, MESSAGE, API } from './constants';

export const getAllUserList = (hideNotification, User_type) => (dispatch) => {
  Service.get(`${API.getAllUserList}?User_type=${User_type}`)
    .then((res) => {
      const dataTye = User_type === 'ER' ? 'engineerList' : 'userList';
      hideNotification(true, 'Fetched.');
      dispatch(saveResourceData({ [dataTye]: res?.data?.data }));
    })
    .catch((err) => {
      hideNotification(false, 'Something went wrong. Please try again');
      dispatch(requestStop({ error: err?.message }));
    });
};
