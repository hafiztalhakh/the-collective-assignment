import React from "react";
import classes from "src/components/card/index.module.css";

export default function Card() {
  return (
    <div className={classes.card}>
      <p className="description">No Description</p>
      <p>Files:</p>
      <ul className={classes.dInlineBlock}>
        <li className={`${classes.badge} list-unstyle`}>JavaScript</li>
        <li className={`${classes.badge} list-unstyle`}>Python</li>
      </ul>
      <br />
      <p>Fork:</p>
      <ul className={classes.dInlineBlock}>
        <li className={`list-unstyle ${classes.dInlineBlock} ${classes.avatarBox}`}>
          <img
            className={`${classes.d_inline_block} ${classes.avatar}`}
            src={"https://avatars.githubusercontent.com/u/17852853?s=60&v=4"}
            alt={"name"}
          />
          <span>Tom Herry</span>
        </li>
      </ul>
    </div>
  );
}
