import React, { memo } from "react";
import PropTypes from "prop-types";
import classes from "src/components/card/index.module.css";
import { Link } from "react-router-dom";

function Card({ data }) {
  console.log(data);
  return (
    <div key={data?.id} className={classes.card}>
      <p className={classes.description}>
        <Link to={`/gist/${data?.id}`}>{data?.description || "No Description"}</Link>
      </p>
      <ul className={classes.dInlineBlock}>
        {Object.values(data?.files).map((el) => (
          <li className={`${classes.badge} list-unstyle`}>{el?.language}</li>
        ))}
      </ul>

      {/* <p className={classes.title}>Files:</p>
      <ul className={classes.dInlineBlock}>
        {Object.values(data?.files).map((el) => (
          <li className={`list-unstyle`}>
            <a href={el?.raw_url} target="_blank">
              {el?.filename}
            </a>
          </li>
        ))}
      </ul>
      <br />
      <p className={classes.title}>Fork:</p>
      <ul className={classes.dInlineBlock}>
        <li className={`list-unstyle ${classes.dInlineBlock} ${classes.avatarBox}`}>
          <img
            className={`${classes.d_inline_block} ${classes.avatar}`}
            src={"https://avatars.githubusercontent.com/u/17852853?s=60&v=4"}
            alt={"name"}
          />
          <span>Tom Herry</span>
        </li>
      </ul> */}
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default memo(Card);
