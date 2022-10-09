import React, { useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GistDetailsCard from "src/components/gist_details";
import { getGistDetails } from "src/store";
import classes from "src/screens/gists_list/index.module.css";

function GistDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
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
