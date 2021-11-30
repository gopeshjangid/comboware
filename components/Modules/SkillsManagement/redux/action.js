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

export const getSkillLevels = (type, hideNotification) => (dispatch) => {
  dispatch(requestInit({ message: 'Please wait... ' }));
  Service.get(`${API.getSkillLevels}?type=${type}`)
    .then((res) => {
      hideNotification();
      dispatch(saveResourceData(type, { [`${type}_list`]: res?.data?.data }));
    })
    .catch((err) => {
      console.log('err--', err);
      dispatch(requestStop({ data: null, error: 'Something went wrong. please try again' }));
    });
};
// // 1.  API: v1/user/getSkillLevels?type=SKILL/LEVEL  - GET --> fetch all list of skills => array
// // 2.  APi :  v1/user/saveSkills  - POST  { type  : SKILL/LEVEL  , name : "css/expert"} => api
export const saveSkills = (data, hideNotification) => (dispatch) => {
  dispatch(requestInit({ message: 'Please wait... ' }));
  Service.post(API.saveSkills, data)
    .then((res) => {
      hideNotification();
      dispatch(saveResourceData({ message: 'Resource info updated successfully.' }));
    })
    .catch((err) => {
      console.log('err--', err);
      dispatch(requestStop({ error: err?.message }));
    });
};

// export const getAllClusters = (data, hideNotification) => (dispatch) => {
// Service.get(API.getClusters)
// .then((res) => {
//   hideNotification();
//   dispatch(saveResourceData({ clusters: res?.data?.data }));
// })
// .catch((err) => {
//   console.log('err--', err);
//   dispatch(requestStop({ error: err?.message }));
// });
// };

// export const saveSkillsLevel = (data, hideNotification) => (dispatch) => {
// dispatch(requestInit({ message: 'Please wait... ' }));
// Service.post(API.addResource, data)
//   .then((res) => {
//     hideNotification();
//     dispatch(saveResourceData({ message: 'Resource info updated successfully.' }));
//   })
//   .catch((err) => {
//     console.log('err--', err);
//     dispatch(requestStop({ error: err?.message }));
//   });
// };
