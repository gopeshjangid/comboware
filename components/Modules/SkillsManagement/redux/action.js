import { START, FAILED, SAVE_RESOURCE, API } from "./constants";
import Service from "../../../../service";

export const requestInit = (data) => {
	return { type: START, payload: data };
};

export const requestStop = (data) => {
	return { type: FAILED, payload: data };
};

export const saveResourceData = (type, data) => {
	return { type: type, payload: data };
};

export const getSkillLevels = (type, callback) => (dispatch) => {
	dispatch(requestInit({ message: "Please wait... " }));
	Service.get(`${API.getSkillLevels}?type=${type}`)
		.then((res) => {
			callback(true, "");
			dispatch(saveResourceData(`${type}_LIST`, res?.data?.data));
		})
		.catch((err) => {
			console.log("err--", err);
			dispatch(requestStop({ data: null, error: "Something went wrong. please try again" }));
		});
};

export const saveSkills = (data, callback) => (dispatch) => {
	dispatch(requestInit({ message: "Please wait... " }));
	Service.post(API.saveSkills, data)
		.then((res) => {
			const msg = `${data?.type === "SKILL" ? "Skill" : "Level"} ${data?.id ? "updated" : "saved"} successfully`;
			callback(true, msg);
			dispatch(saveResourceData({ message: "Resource info updated successfully." }));
		})
		.catch((err) => {
			console.log("err--", err);
			dispatch(requestStop({ error: err?.message }));
		});
};

export const changeSkillLevelStatus = (data, callback) => (dispatch) => {
	dispatch(requestInit({ message: "Please wait... " }));
	Service.put(API.changeSkillLevelStatus, data)
		.then((res) => {
			const msg = `${data?.type === "SKILL" ? "Skill" : "Level"} updated successfully`;
			callback(true, msg);
			dispatch(saveResourceData({ message: "Resource info updated successfully." }));
		})
		.catch((err) => {
			console.log("err--", err);
			dispatch(requestStop({ error: err?.message }));
		});
};
