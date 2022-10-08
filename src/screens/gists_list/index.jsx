import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "src/components/search_bar";
import Card from "src/components/card";
import classes from "src/screens/gists_list/index.module.css";

export default function GistsList() {
  const gists = useSelector((store) => store.gists);
  console.log(gists);
  return (
    <div className={classes.container}>
      <SearchInput origin="GIST_LIST" />
      <div>
        <h2> {gists?.data?.length > 0} Gigs result (s)</h2>
        <hr />
      </div>
      {[123, 12, 13].map((gist, index) => {
        return <Card key={index} />;
      })}
    </div>
  );
}
