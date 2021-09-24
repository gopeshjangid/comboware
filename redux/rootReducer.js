import { combineReducers } from "redux";
import user from  "../components/Modules/Profile/redux/reducer";
import workspace from  "../components/Modules/Workspace/redux/reducer";
import ticket from  "../components/Modules/TicketsManagement/redux/reducer";
import payment from  "../components/Modules/Payment/redux/reducer";
import login from  "../components/Modules/SignIn/redux/reducer";
export default  combineReducers({
  user,
  workspace,
  ticket,
  payment,
  login
});