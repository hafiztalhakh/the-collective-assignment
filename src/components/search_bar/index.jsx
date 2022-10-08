import React, { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGists } from "src/store";
import classes from "./index.module.css";
import Warning from "../alerts/Warning.Alert";

function SearchInput({ origin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const param = new URLSearchParams(location.search).get("s");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (param) {
      dispatch(getGists(param));
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
    dispatch(getGists(inputValue));
    setInputValue("");
    if (origin === "SEARCH_PAGE") {
      navigate(`/gists?s=${inputValue}`);
    }
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
