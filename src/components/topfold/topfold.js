import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./topfold.css";
import {Link} from 'react-router-dom'
import { searchExpense } from "../../redux/actions/expensesActions";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()

  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="fi fi-rr-search-alt"></i>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add-expense">
            <div className="add-button">
              <i className="fi fi-rr-add"></i>
              <label htmlFor="">Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <i className="fi fi-rr-angle-left"></i>
              <label htmlFor="">Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button">
              <i className="fi fi-rr-map-marker-cross"></i>
              <label htmlFor="">Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
