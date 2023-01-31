import Dashboard from "../components/Dashboard.vue";
import Logs from "../components/Logs.vue";
import Students from "../components/Students.vue";
import Archive from "../components/Archive.vue";
import StudentLogin from "../components/StudentLogin.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  { path: "/login", component: StudentLogin },
  {
    path: "/dashboard",
    component: Dashboard,
    redirect: "/logs",
    children: [
      { path: "/logs", component: Logs },
      {
        path: "/students",
        component: Students,
      },
      {
        path: "/archive",
        component: Archive,
      },
    ],
  },
];

export default routes;
