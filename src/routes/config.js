import SearchGists from "src/screens/search_gists";
import GistsList from "src/screens/gists_list";
import GistDetails from "src/screens/gist_details";

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
  },
  gistDetails: {
    title: "Gists Details",
    path: "/gist/:id",
    component: GistDetails
  }
};

export default ROUTES;