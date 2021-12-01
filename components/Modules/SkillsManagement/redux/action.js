import { START, FAILED, SAVE_RESOURCE, API } from './constants';
import Service from '../../../../service';

export const requestInit = (data) => {
  return { type: START, payload: data };
};

export const requestStop = (data) => {
  return { type: FAILED, payload: data };
};

export const saveResourceData = (type, data) => {
  return { type: type, payload: data };
};

export const getSkillLevels = (type) => (dispatch) => {
  dispatch(requestInit({ message: 'Please wait... ' }));
  Service.get(`${API.getSkillLevels}?type=${type}`)
    .then((res) => {
      dispatch(saveResourceData(`${type}_LIST`, res?.data?.data));
    })
    .catch((err) => {
      console.log('err--', err);
      dispatch(requestStop({ data: null, error: 'Something went wrong. please try again' }));
    });
};

export const saveSkills = (data) => (dispatch) => {
  dispatch(requestInit({ message: 'Please wait... ' }));
  Service.post(API.saveSkills, data)
    .then((res) => {
      dispatch(saveResourceData({ message: 'Resource info updated successfully.' }));
    })
    .catch((err) => {
      console.log('err--', err);
      dispatch(requestStop({ error: err?.message }));
    });
};
