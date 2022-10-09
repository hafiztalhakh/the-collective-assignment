import React, { memo } from "react";
import PropTypes from "prop-types";
import classes from "src/components/card/index.module.css";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div key={data?.id} className={classes.card}>
      <p className={classes.description}>
        <Link to={`/gist/${data?.id}`}>{data?.description || "No Description"}</Link>
      </p>
      <ul className={classes.dInlineBlock}>
        {Object.values(data?.files).map((el) => (
          <li key={el?.language} className={`${classes.badge} list-unstyle`}>
            {el?.language}
          </li>
        ))}
      </ul>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default memo(Card);
