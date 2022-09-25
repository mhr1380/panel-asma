import { Fragment, useState } from "react";
import Layout from "../Layout/Layout";
import "./Categories.css";
import deleteIcon from "../assets/images/delete.png";
import edit from "../assets/images/edit.png";
import CategoriesItem from "../components/CategoriesItem";
import plus from "../assets/images/plus.png";
import CategoriesInnerBoxItem from "../components/CategoriesInnerBoxItem";
import search from "../assets/images/search.png";

const Categories = () => {
  const [showSectionBox, setShowSectionBox] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  return (
    <Fragment>
      <Layout
        header="دسته بندی"
        desktopHeader="دسته بندی"
        desktopSubHeader="دسته بندی های خود را شخصی سازی کنید"
      >
        <div className="categories-container">
          <div
            className={`categories-search-box ${showSearchBox && "show"}`}
            onClick={() => {
              setShowSearchBox(!showSearchBox);
            }}
          >
            {" "}
            <div className="flex space-between">
              <input type="text" placeholder="جستجو" />
              <img src={search} />
            </div>
            <div className="categories-search-items-container">
              <div className="categories-search-item">
                اصطلاحات قانونی اجتماعی
              </div>
              <hr className="categories-search-line" />{" "}
              <div className="categories-search-item">اصطلاحات سیاسی</div>
              <hr className="categories-search-line" />
            </div>
          </div>
          <div className="categories-top-section">
            <CategoriesItem
              title="بخش"
              showSectionBox={showSectionBox}
              setShowSectionBox={setShowSectionBox}
              additionalClass="one"
            />{" "}
            <CategoriesItem title="موضوع" additionalClass="second" />{" "}
            <CategoriesItem title="دسته" additionalClass="third" />
            {/* <CategoriesItem title="موضوع" />
            <CategoriesItem title="دسته" /> */}
          </div>
          <div className="categories-bottom-section">
            <div className="categories-top-input-container">
              <input type="text" placeholder="نام دسته بندی" />
              <img src={plus} />
            </div>
            <div className="categories-bottom-box">
              <CategoriesInnerBoxItem title="کلمه" />
              <CategoriesInnerBoxItem title="امور ناشنوایان" />
              <CategoriesInnerBoxItem title="جمله سازی" />
              <CategoriesInnerBoxItem title="آزمون" />
              <CategoriesInnerBoxItem title="آزمون" />
            </div>
            <button className="categories-button">تایید</button>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Categories;
