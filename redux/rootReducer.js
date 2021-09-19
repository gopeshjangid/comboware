import { combineReducers } from "redux";
import user from  "../components/Modules/Profile/redux/reducer";
import workspace from  "../components/Modules/Workspace/redux/reducer";
import ticket from  "../components/Modules/TicketsManagement/redux/reducer";
export default  combineReducers({
  user,
  workspace,
  ticket
});