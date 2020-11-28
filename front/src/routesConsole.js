import Projects from "views/admin/Projects.js";
import Users from "views/admin/user/Users";
import EditUserView from "views/admin/user/EditUserView";


var routesConsole = [
  {
    path: "/project",
    name: "Projetos",
    icon: "nc-icon nc-chart-pie-36",
    component: Projects,
    layout: "/console",
  },
  {
    path: "/users",
    name: "Usuários",
    icon: "nc-icon nc-chart-pie-36",
    component: Users,
    layout: "/console",
  },
];
export default routesConsole;