import React, { useEffect, memo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GistDetailsCard from "src/components/gist_details";
import classes from "src/screens/gists_list/index.module.css";
import { getGistDetails } from "src/store";

function GistDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const gists = useSelector((store) => store.gists);

  useEffect(() => {
    if (id) {
      dispatch(getGistDetails(id));
    }
  }, [id]);

  return (
    <div className={classes.container}>
      <GistDetailsCard loading={gists?.loading} data={gists?.details} />
    </div>
  );
}

export default memo(GistDetails);
