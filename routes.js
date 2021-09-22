
import Dashboard from "@material-ui/icons/Dashboard";
import Setting from "@material-ui/icons/Settings";
import LocationOn from "@material-ui/icons/Storage";
import Notifications from "@material-ui/icons/ViewStream";
import Images from "@material-ui/icons/PermMedia";
import NetworkIcon from "@material-ui/icons/SettingsApplications";
import ServerIcon from "@material-ui/icons/SettingsSystemDaydream";
import PaymentOutlined from "@material-ui/icons/PaymentOutlined";
import Category from "@material-ui/icons/Category";
const dashboardRoutes = [
  {
    path: "/",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    layout: "/dashboard",
    accessors : ['USER' ,'ER' ,'ADMIN']
  },
  {
    path: "/workspace",
    name: "Workspace",
    icon: LocationOn,
    layout: "/index",
    accessors : ['USER' ,'ER'],
    subItems : [
      
      {
        path : "/workspace/images",
        icon : Images,
        name : 'Images'
      },
      {
        path : "/workspace/networks",
        icon : NetworkIcon,
        name : 'Networks'
      },
      {
        path : "/dashboard/workspace/sizetypes",
        icon : Category,
        name : 'Size Types'
      },
      {
        path : "/workspace/servers",
        icon : ServerIcon,
        name : 'Virtual Servers'
      }
    ]
  },
  {
    path: "/requests",
    name: "Manage Server Requests",
    accessors : ['ADMIN'],
    rtlName: "إخطارات",
    icon: Notifications,
    layout: "/admin",
  },
  {
    path: "/#",
    name: "Ticket Management",
    accessors : ['USER' ,'ER' ,'ADMIN'],
    rtlName: "إخطارات",
    icon: Notifications,

    layout: "/ticket",
  },
  {
    path: "/#",
    name: "Payments",
    accessors : ['USER' ,'ER' ,'ADMIN'],
    rtlName: "إخطارات",
    icon: PaymentOutlined,

    layout: "/payment",
  },
  {
    path: "/#",
    name: "Settings",
    icon: Setting,
    layout: "/dashboard",
  },
];

export default dashboardRoutes;
