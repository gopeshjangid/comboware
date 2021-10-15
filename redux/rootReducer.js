import { combineReducers } from "redux";
import user from  "../components/Modules/Profile/redux/reducer";
import workspace from  "../components/Modules/Workspace/redux/reducer";
import ticket from  "../components/Modules/TicketsManagement/redux/reducer";
import payment from  "../components/Modules/Payment/redux/reducer";
import login from  "../components/Modules/SignIn/redux/reducer";
import settings from  "../components/Modules/Settings/redux/reducer";
import support from  "../components/Modules/Support/redux/reducer";
import dashboard from  "../components/Modules/Dashboard/redux/reducer";
import monitoring from  "../components/Modules/Monitoring/redux/reducer";
export default  combineReducers({
  user,
  workspace,
  ticket,
  payment,
  login,
  settings,
  support,
  dashboard,
  monitoring
});