import { Fragment, useState } from "react";
import "./Search.css";
import React from "react";
import Layout from "../Layout/Layout";
const Search = () => {
  const [touchSearchBox, setTouchSearchBox] = useState(false);
  return (
    <Fragment>
      {" "}
      <Layout
        header="جستجو"
        desktopHeader="جستجو"
        desktopSubHeader="کلمه مورد نظر خود را جستجو کنید"
      >
        <div className="search-container">
          <div className="search-search-box-container">
            <input
              onClick={() => {
                setTouchSearchBox(!touchSearchBox);
              }}
              placeholder="جستجو"
              className={`search-input ${touchSearchBox && "animate"}`}
              type="text"
            />
          </div>
          <div className="search-items-container">
            <div className="search-item">سلام</div>
            <hr className="search-line" />
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Search;
