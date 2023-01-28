import { Fragment, useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import "./Categories.css";
import deleteIcon from "../assets/images/delete.png";
import edit from "../assets/images/edit.png";
import CategoriesItem from "../components/CategoriesItem";
import plus from "../assets/images/plus.png";
import CategoriesInnerBoxItem from "../components/CategoriesInnerBoxItem";
import search from "../assets/images/search.png";
import React from "react";
import SearchBoxItems from "../components/SearchBoxItems";
import { http } from "../http-service/http";
const items = [{ title: "کلمه" }, { title: "امور ناشنوایان" }];

const Categories = () => {
  const [showSectionBox, setShowSectionBox] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [addCategory, setAddCategory] = useState("");

  const [updateBox, setUpdateBox] = useState(0);

  const [boxItems, setBoxItems] = useState([]);

  const [url, setUrl] = useState("word");

  const [part, setPart] = useState();
  const [subject, setSubject] = useState();
  const [cat, setCat] = useState();

  const [subjectItems, setSubjectItems] = useState([]);
  const [catItems, setCatItems] = useState([]);

  const onAddCategory = async () => {
    if (cat) {
      const { data } = await http.get();
    }
  };

  useEffect(() => {
    const loadSubjectItems = async () => {
      console.log(part);
      if (part) {
        const { data } = await http.get(`/${url}-api/${url}-categories/`);
        setBoxItems(data.results);
        setSubjectItems(data.results);
        console.log("in if");
      }
    };

    loadSubjectItems();
    setSubject("");
    setCat("");
  }, [part, updateBox]);

  useEffect(() => {
    if (subject) {
      const loadCatItems = async () => {
        const { data } = await http.get(
          `/${url}-api/${url}-categories/?parent__farsi_name=${subject}`
        );
        setCatItems(data.results);
        setBoxItems(data.results);
      };
      loadCatItems();
      setCat("");
    }
  }, [subject, updateBox]);
  useEffect(() => {
    if (cat) {
      const loadCatItems = async () => {
        const { data } = await http.get(
          `/${url}-api/${url}-categories/?parent__farsi_name=${cat}`
        );
        setBoxItems(data.results);
      };
      loadCatItems();
    }
  }, [cat, updateBox]);
  return (
    <Fragment>
      <Layout
        header="دسته بندی"
        desktopHeader="دسته بندی"
        desktopSubHeader="دسته بندی های خود را شخصی سازی کنید"
      >
        <div className="categories-container">
          {part && (
            <div
              className={`categories-search-box ${showSearchBox ? "show" : ""}`}
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
                <SearchBoxItems title="اصطلاحات قانونی" />
                <SearchBoxItems title="اصطلاحات سیاسی" />
                <SearchBoxItems title="اصطلاحات سیاسی" />
                <SearchBoxItems title="اصطلاحات سیاسی" />
              </div>
            </div>
          )}
          <div className="categories-top-section">
            <CategoriesItem
              title="بخش"
              additionalClass="one"
              value={part}
              setValue={setPart}
              items={items}
              extra={setUrl}
            />{" "}
            {part && (
              <CategoriesItem
                title="موضوع"
                additionalClass="second"
                value={subject}
                setValue={setSubject}
                items={subjectItems}
                identifier="farsi_name"
              />
            )}
            {subject && (
              <CategoriesItem
                title="دسته"
                additionalClass="third"
                value={cat}
                setValue={setCat}
                items={catItems}
                identifier="farsi_name"
              />
            )}
            {/* <CategoriesItem title="موضوع" />
            <CategoriesItem title="دسته" /> */}
          </div>
          <div className="categories-bottom-section">
            <div className="categories-top-input-container">
              <input
                type="text"
                placeholder="نام دسته بندی"
                value={addCategory}
                onChange={(e) => setAddCategory(e.target.value)}
              />
              <img src={plus} />
            </div>
            <div className="categories-bottom-box">
              {console.log(boxItems)}
              {boxItems.map((item, index) => (
                <CategoriesInnerBoxItem
                  url={url}
                  key={item.id + item.farsi_name}
                  title={item.farsi_name}
                  id={item.id}
                  setUpdateBox={setUpdateBox}
                  onClick={() => {}}
                />
              ))}
            </div>
            {/* <button className="categories-button">تایید</button> */}
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Categories;
