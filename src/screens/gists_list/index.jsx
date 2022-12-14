import React, { useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "src/components/search_bar";
import Card from "src/components/card";
import classes from "src/screens/gists_list/index.module.css";
import { getGists, setGistLoading } from "src/store";

function GistsList() {
  const dispatch = useDispatch();
  const location = useLocation();
  const param = new URLSearchParams(location.search).get("s");
  const gists = useSelector((store) => store.gists);

  useEffect(() => {
    if (param) {
      dispatch(getGists(param));
    }

    return () => {
      dispatch(setGistLoading(true));
    };
  }, [location, param]);

  return (
    <div className={classes.container}>
      <SearchInput origin="GIST_LIST" />
      {gists?.isLoading ? (
        <div>
          <p className="text-center">Loading...</p>
        </div>
      ) : (
        <>
          <div>
            {gists?.data?.length > 0 ? (
              <h2>
                {gists?.data?.length} gist results found for {param}
              </h2>
            ) : (
              <h2>No result found</h2>
            )}
            <hr />
          </div>
          {gists?.data?.length > 0 &&
            gists?.data?.map((gist) => {
              return <Card key={gist.id} data={gist} />;
            })}
        </>
      )}
    </div>
  );
}

export default memo(GistsList);
