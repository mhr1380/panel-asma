import { Fragment } from "react";
import arrow from "../assets/images/arrow.png";
import { useState, useEffect } from "react";
const items = [
  { title: "کلمه" },
  { title: "امور ناشنوایان" },
  { title: "جمله سازی" },
  { title: "آزمون" },
  { title: "آزمون" },
];
const CategoriesItem = ({
  title,
  showSectionBox,
  setShowSectionBox,
  additionalClass,
}) => {
  const [showBox, setShowBox] = useState(false);

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
          <input type="text" placeholder="جستجو" />
          <img src={arrow} />
          {/* <div className="dropdown-box"></div> */}
          <div className="categories-list-item">
            {items.map((item, index) => {
              return (
                <div className="categories-item" key={index}>
                  {item.title}
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
