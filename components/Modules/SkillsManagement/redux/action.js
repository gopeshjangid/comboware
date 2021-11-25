import { START, FAILED, SAVE_RESOURCE, API } from './constants';
import Service from '../../../../service/index';
import {getAllHosts} from "../../Dashboard/redux/action";
export const requestInit = (data) => {
  return { type: START, payload: data };
};

export const requestStop = (data) => {
  return { type: FAILED, payload: data };
};

export const getAllClusters = (data, hideNotification) => (dispatch) => {
  Service.get(API.getClusters)
    .then((res) => {
      hideNotification();
      dispatch(saveResourceData({ clusters: res?.data?.data }));
    })
    .catch((err) => {
      console.log('err--', err);
      dispatch(requestStop({ error: err?.message }));
    });
};

export const saveSkills = (data, hideNotification) => (dispatch) => {
  dispatch(requestInit({ message: 'Please wait... ' }));
  Service.post(API.addResource, data)
    .then((res) => {
      hideNotification();
      dispatch(saveResourceData({ message: 'Resource info updated successfully.' }));
    })
    .catch((err) => {
      console.log('err--', err);
      dispatch(requestStop({ error: err?.message }));
    });
};

export const saveSkillsLevel = (data, hideNotification) => (dispatch) => {
  dispatch(requestInit({ message: 'Please wait... ' }));
  Service.post(API.addResource, data)
    .then((res) => {
      hideNotification();
      dispatch(saveResourceData({ message: 'Resource info updated successfully.' }));
    })
    .catch((err) => {
      console.log('err--', err);
      dispatch(requestStop({ error: err?.message }));
    });
};

