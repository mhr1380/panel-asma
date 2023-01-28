import { Fragment } from "react";
import React from "react";

const SearchBoxItems = ({ title }) => {
  return (
    <Fragment>
      <div className="categories-search-item">{title}</div>
      <hr className="categories-search-line" />
    </Fragment>
  );
};

export default SearchBoxItems;
