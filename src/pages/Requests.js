import Layout from "../Layout/Layout";
import { Fragment } from "react";
import "./Requests.css";
import { useState, useEffect } from "react";
import down from "../assets/images/down.png";
import arrow from "../assets/images/arrow.png";
import React from "react";
import left from "../assets/images/left.png";
import RequestsBoxItem from "../components/RequestsBoxItem";
import { getRequests } from "../http-service/get-requests";
import { getSpecRequest } from "../http-service/get-spec-request";
import { isAdded } from "../http-service/is-added";
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
  const [requests, setRequests] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [activeRequest, setActiveRequest] = useState(null);
  useEffect(() => {
    const fetchRequests = async () => {
      const { data } = await getRequests(filter.title);
      const { results } = data;
      setRequests(results);
    };
    fetchRequests();
    setSelectedWord(null);
    setActiveRequest(null);
  }, [filter]);
  useEffect(() => {
    const fetchSpecRequest = async () => {
      const { data } = await getSpecRequest(activeRequest);
      setSelectedWord(data);
    };
    if (activeRequest) fetchSpecRequest();
  }, [activeRequest]);

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

              <img
                src={down}
                style={{ transform: showFilterOptions && "rotate(180deg)" }}
                onClick={() => {
                  setShowFilterOptions(!showFilterOptions);
                }}
              />

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
            {requests.map((item, index) => {
              return (
                <RequestsBoxItem
                  key={index}
                  name={item.name}
                  count={item.count}
                  onClick={setActiveRequest}
                  id={item.id}
                />
              );
            })}
          </div>
          <div
            className="requests-spec-item-out"
            style={{ display: activeRequest ? "flex" : "none" }}
          >
            <div
              className="requests-spec-item"
              style={{ display: activeRequest ? "block" : "none" }}
            >
              {selectedWord &&
                selectedWord.user.map((item, index) => {
                  return (
                    <RequestsBoxItem
                      key={index}
                      name={item.full_name ? item.full_name : "بدون نام"}
                      secondName={item.username ? item.username : " "}
                    />
                  );
                })}
            </div>
            <div className="requests-spec-item-btns-container">
              {selectedWord && !selectedWord.is_added ? (
                <div
                  className="requests-spec-item-btn"
                  onClick={async () => {
                    await isAdded(activeRequest, true);
                    setActiveRequest(null);
                  }}
                >
                  اضافه کردن
                </div>
              ) : (
                ""
              )}
              {selectedWord && selectedWord.is_added ? (
                <div
                  className="requests-spec-item-btn"
                  onClick={async () => {
                    await isAdded(activeRequest, false);
                    setActiveRequest(null);
                  }}
                >
                  رد کردن
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Requests;
