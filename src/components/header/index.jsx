import React from "react";
import classes from "src/components/header/index.module.css";

export default function Header({ heading }) {
  return (
    <div className={classes.header}>
      <h1 className={classes.heading}>{heading}</h1>
    </div>
  );
}
