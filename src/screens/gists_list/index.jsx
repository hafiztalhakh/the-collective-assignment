import React from "react";
import SearchInput from "src/components/search_bar";
import Card from "src/components/card";
import classes from "src/screens/gists_list/index.module.css";

export default function GistsList() {
  return (
    <div className={classes.container}>
      <SearchInput />
      <div>
        <h2>3 Gigs result (s)</h2>
        <hr />
      </div>
      {[1, 2, 3].map((gist, index) => {
        return <Card key={index} />;
      })}
    </div>
  );
}
