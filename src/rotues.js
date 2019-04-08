import appSearch from "./components/appSearch.vue";
import appAbout from "./components/appAbout.vue";

const routes = [
  { path: "/", component: appSearch, name: "search" },
  { path: "/about", component: appAbout, name: "about" }
];

export default routes;
