import { combineReducers } from "redux";
import user from  "../components/Modules/Profile/redux/reducer";
import workspace from  "../components/Modules/Workspace/redux/reducer";

export default  combineReducers({
  user,
  workspace
});