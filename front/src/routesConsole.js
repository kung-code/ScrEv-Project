import Console from "views/admin/Console.js";
import Users from "views/admin/Users.js";


var routesConsole = [
  {
    path: "/dash",
    name: "Criar Projeto",
    icon: "nc-icon nc-chart-pie-36",
    component: Console,
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
export default routesConsole;