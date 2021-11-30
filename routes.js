import Dashboard from "@material-ui/icons/Dashboard";
import Setting from "@material-ui/icons/Settings";
import LocationOn from "@material-ui/icons/Storage";
import Notifications from "@material-ui/icons/ViewStream";
import Images from "@material-ui/icons/PermMedia";
import NetworkIcon from "@material-ui/icons/SettingsApplications";
import ServerIcon from "@material-ui/icons/SettingsSystemDaydream";
import PaymentOutlined from "@material-ui/icons/PaymentOutlined";
import Support from "@material-ui/icons/ContactSupport";
import Monitor from "@material-ui/icons/DesktopMac";
import Category from "@material-ui/icons/Category";
const dashboardRoutes = [
	{
		path: "/",
		name: "Dashboard",
		rtlName: "لوحة القيادة",
		icon: Dashboard,
		layout: "/dashboard",
		accessors: ["USER", "ER", "ADMIN"],
	},
	{
		path: "/#",
		name: "Tickets ",
		accessors: ["USER", "ER", "ADMIN"],
		rtlName: "إخطارات",
		icon: Notifications,

		layout: "/ticket",
	},
	{
		path: "/#",
		name: "Payments",
		accessors: ["USER", "ER", "ADMIN"],
		rtlName: "إخطارات",
		icon: PaymentOutlined,
		layout: "/payment",
	},
	{
		path: "/#",
		name: "Skills Management",
		accessors: ["ADMIN"],
		rtlName: "المهندسين",
		icon: PaymentOutlined,
		layout: "/skills-management",
	},

	{
		path: "/",
		name: "Settings",
		accessors: ["ADMIN"],
		icon: Setting,
		layout: "/settings",
	},
	{
		path: "/",
		name: "Support",
		accessors: ["ADMIN"],
		icon: Support,
		layout: "/support",
	},
	{
		path: "/",
		name: "System Monitoring",
		accessors: ["ADMIN"],
		icon: Monitor,
		layout: "/monitoring",
	},

	{
		path: "/#",
		name: "Ticket Settings",
		accessors: ["ADMIN"],
		rtlName: "المهندسين",
		icon: PaymentOutlined,
		layout: "/ticket-settings",
	},
	{
		path: "/requests",
		name: "Workspace Requests",
		accessors: ["ADMIN"],
		rtlName: "إخطارات",
		icon: Notifications,
		layout: "/admin",
	},
	{
		path: "/#",
		name: "Customer Management",
		accessors: ["ADMIN"],
		rtlName: "إخطارات",
		icon: Notifications,
		layout: "/customer-management",
	},
	{
		path: "/servers",
		name: "Workspace",
		icon: LocationOn,
		layout: "/workspace",
		accessors: ["USER", "ER"],
		// subItems : [

		//   {
		//     path : "/workspace/images",
		//     icon : Images,
		//     name : 'Images'
		//   },
		//   {
		//     path : "/workspace/networks",
		//     icon : NetworkIcon,
		//     name : 'Networks'
		//   },
		//   {
		//     path : "/dashboard/workspace/sizetypes",
		//     icon : Category,
		//     name : 'Size Types'
		//   },
		//   {
		//     path : "/workspace/servers",
		//     icon : ServerIcon,
		//     name : 'Virtual Servers'
		//   }
		// ]
	},
];

export default dashboardRoutes;
