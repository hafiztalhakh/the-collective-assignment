import React, { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import Warning from "../alerts/Warning.Alert";

function SearchInput({ origin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const param = new URLSearchParams(location.search).get("s");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (origin === "GIST_LIST" && param) {
      setInputValue(param);
    }
  }, [location.pathname]);

  const handlChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlSubmit = () => {
    if (inputValue === "") {
      Warning("Please type first");
      return;
    }
    navigate(`/gists?s=${inputValue}`);
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

SearchInput.propTypes = {
  origin: PropTypes.string.isRequired,
};

export default memo(SearchInput);
