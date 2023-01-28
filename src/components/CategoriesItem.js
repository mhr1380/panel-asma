import React, { Fragment } from "react";
import arrow from "../assets/images/arrow.png";
import { useState, useEffect } from "react";
const CategoriesItem = ({
  title,
  items,
  additionalClass,
  value,
  setValue,
  identifier = "title",
  extra,
}) => {
  const [showBox, setShowBox] = useState(false);
  const [search, setSearch] = useState();
  const [searchItems, setSearchItems] = useState(items);
  const [showSectionBox, setShowSectionBox] = useState(false);

  useEffect(() => {
    setSearchItems(filterSearch(items, ""));
  }, [items]);
  useEffect(() => {
    setSearch(value);
  }, [value]);
  const filterSearch = (elements, search) => {
    if (elements.length === 32) {
      return [];
    }
    return elements.filter((item) => {
      return item[identifier].includes(search);
    });
  };

  useEffect(() => {
    const handleRemoveItem = () => {
      if (showSectionBox) {
        setShowBox(true);
      } else {
        const mytimeout = setTimeout(() => {
          setShowBox(false);
        }, 600);
      }
    };
    handleRemoveItem();
  }, [showSectionBox]);
  return (
    <Fragment>
      {" "}
      <div
        className={`select-item-container ${
          showBox ? "z-index" : ""
        } ${additionalClass}`}
      >
        <h3>{title}</h3>
        <div
          onClick={() => setShowSectionBox(!showSectionBox)}
          className={`categories-input-container ${
            showSectionBox ? "height-224" : ""
          }`}
        >
          <input
            type="text"
            placeholder="جستجو"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchItems(filterSearch(items, e.target.value));
            }}
          />
          <img src={arrow} />
          {/* <div className="dropdown-box"></div> */}
          <div className="categories-list-item">
            {searchItems.map((item, index) => {
              return (
                <div
                  className="categories-item"
                  key={index}
                  onClick={() => {
                    setValue(item[identifier]);
                    setSearch(item[identifier]);
                    if (extra) {
                      extra(item[identifier] === "کلمه" ? "word" : "affair");
                    }
                  }}
                >
                  {item[identifier]}
                </div>
              );
            })}
          </div>
        </div>{" "}
      </div>
    </Fragment>
  );
};

export default CategoriesItem;
