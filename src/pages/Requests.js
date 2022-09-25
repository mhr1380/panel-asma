import Layout from "../Layout/Layout";
import { Fragment } from "react";
import "./Requests.css";
import { useState } from "react";
import down from "../assets/images/down.png";
import arrow from "../assets/images/arrow.png";
import left from "../assets/images/left.png";
const filters = [
  {
    title: "حروف الفبا",
  },
  {
    title: "تعداد درخواست",
  },
  {
    title: "جدیدترین",
  },
  {
    title: "قدیمی ترین",
  },
  {
    title: "اضافه شده",
  },
  {
    title: "اضافه نشده",
  },
  {
    title: "همه",
  },
];
const Requests = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [filter, setFilter] = useState({ title: "حروف الفبا" });
  return (
    <Fragment>
      {" "}
      <Layout
        header="درخواست ها"
        desktopHeader="درخواست ها"
        desktopSubHeader="به درخواست ها رسیدگی کنید"
      >
        <div className="requests-container">
          <div className={`requests-filter-container`}>
            {" "}
            <h2>فیلتر</h2>
            <div
              className={`requests-filter-box ${showFilterOptions && "show"}`}
            >
              <div className="requests-filter">{filter.title}</div>
              {!showFilterOptions && (
                <img
                  src={down}
                  onClick={() => {
                    setShowFilterOptions(!showFilterOptions);
                  }}
                />
              )}
              {showFilterOptions && (
                <img
                  src={left}
                  onClick={() => {
                    setShowFilterOptions(!showFilterOptions);
                  }}
                />
              )}
              <div className="requests-filter-items-container">
                {filters.map((item, index) => {
                  if (item.title !== filter.title) {
                    return (
                      <div
                        key={index}
                        className="requests-filter-items"
                        onClick={() => {
                          setFilter(item);
                          setShowFilterOptions(false);
                        }}
                      >
                        {item.title}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="requests-box">
            {" "}
            <div className="requests-box-item">
              گل سنگم
              <img src={left} />
            </div>{" "}
            <div className="requests-box-item">
              گل سنگم
              <img src={left} />
            </div>{" "}
            <div className="requests-box-item">
              گل سنگم
              <img src={left} />
            </div>{" "}
            <div className="requests-box-item">
              گل سنگم
              <img src={left} />
            </div>{" "}
            <div className="requests-box-item">
              گل سنگم
              <img src={left} />
            </div>{" "}
            <div className="requests-box-item">
              گل سنگم
              <img src={left} />
            </div>{" "}
            <div className="requests-box-item">
              گل سنگم
              <img src={left} />
            </div>{" "}
            <div className="requests-box-item">
              گل سنگم
              <img src={left} />
            </div>{" "}
            <div className="requests-box-item">
              گل سنگم
              <img src={left} />
            </div>{" "}
            <div className="requests-box-item">
              گل سنگم
              <img src={left} />
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Requests;
