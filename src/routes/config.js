import SearchGists from "src/screens/search_gists";
import GistsList from "src/screens/gists_list";

const ROUTES = {
  home: {
    title: "Search Gists",
    path: "/",
    component: SearchGists,
  },
  gists: {
    title: "Gists List",
    path: "/gists",
    component: GistsList
  }
};

export default ROUTES;