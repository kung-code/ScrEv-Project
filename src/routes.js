/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Maps from "views/Map.js";
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
    path: "/icons",
    name: "Sprint ativa",
    icon: "nc-icon nc-settings-gear-65",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Backlog",
    icon: "nc-icon nc-bullet-list-67",
    component: Maps,
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
