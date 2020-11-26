import Projects from "views/admin/Projects.js";
import Users from "views/admin/Users.js";


var routeEdit = [
  {
    path: "/project",
    name: "Projetos",
    icon: "nc-icon nc-chart-pie-36",
    component: Projects,
    layout: "/console",
  },
  {
    path: "/users",
    name: "Criar Usuário",
    icon: "nc-icon nc-chart-pie-36",
    component: Users,
    layout: "/console",
  },
];
export default routeEdit;