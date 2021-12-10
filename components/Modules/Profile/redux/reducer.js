import { START, FAILED, SAVE_PROFILE, SAVE_IMAGE } from "./constants";
const initialState = {
	profile: {},
	usersList: [],
	skills: [{ skill_name: "", skill_level: "" }],
	system_image: "",
	loading: false,
	message: "",
	error: "",
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case START:
			return {
				...state,
				//loading: true,
				...action?.payload?.data,
			};
			break;

		case FAILED:
			return {
				...state,
				loading: false,
				message: "",
				error: action.payload?.error,
				...action.payload,
			};
			break;

		case SAVE_PROFILE:
			return {
				...state,
				loading: false,
				message: "",
				...action.payload,
			};
			break;
		case SAVE_IMAGE:
			return {
				...state,
				loading: false,
				message: "",
				...action.payload,
			};
			break;

		default:
			return state;
			break;
	}
}

export default reducer;
