import Dashboard from "views/Dashboard.js";
import PendingTaskUser from "views/PendingTaskUser.js";
import Sprint from "views/Sprint.js";
import Backlog from "views/Backlog.js";
import Help from "views/Help.js";
import Task from "views/Task";

var routes = [
  {
    path: "/dashboard",
    name: "Projeto",
    icon: "nc-icon nc-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/sprint",
    name: "Sprint ativa",
    icon: "nc-icon nc-settings-gear-65",
    component: Sprint,
    layout: "/admin",
  },
  {
    path: "/backlog",
    name: "Backlog",
    icon: "nc-icon nc-bullet-list-67",
    component: Backlog,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Seu trabalho",
    icon: "nc-icon nc-single-02",
    component: PendingTaskUser,
    layout: "/admin",
  },
  {
    path: "/task",
    name: "Tarefa",
    icon: "nc-icon nc-single-02",
    component: Task,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/help",
    name: "Ajuda",
    icon: "nc-icon nc-alert-circle-i",
    component: Help,
    layout: "/admin",
  },
];
export default routes;
