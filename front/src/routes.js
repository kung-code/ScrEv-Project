import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Sprint from "views/Sprint.js";
import Backlog from "views/Backlog.js";
import UpgradeToPro from "views/Upgrade.js";

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
    path: "/notifications",
    name: "Seu trabalho",
    icon: "nc-icon nc-single-02",
    component: Notifications,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Ajuda",
    icon: "nc-icon nc-alert-circle-i",
    component: UpgradeToPro,
    layout: "/admin",
  },
];
export default routes;
