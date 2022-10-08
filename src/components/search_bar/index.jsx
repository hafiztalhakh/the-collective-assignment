import React, { useState } from "react";
import classes from "./index.module.css";

export default function SearchInput() {
  const [inputValue, setInputValue] = useState("");

  const handlChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlSubmit = () => {
    alert(inputValue);
    setInputValue("");
  };

  const handleOnKeyPress = (e) => {
    if (e.charCode === 13) handlSubmit();
  };

  return (
    <div className={classes.search}>
      <input
        type="text"
        className={classes.searchTerm}
        placeholder="Search..."
        value={inputValue}
        onChange={handlChange}
        onKeyPress={handleOnKeyPress}
      />
      <button className={classes.searchButton} onClick={handlSubmit}>
        <i className="fa fa-search" />
      </button>
    </div>
  );
}
