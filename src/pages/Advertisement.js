import { Fragment, useEffect } from "react";
import Layout from "../Layout/Layout";
import { useState } from "react";
import React from "react";
import "./Advertisement.css";
import { editAd } from "../http-service/edit-ad";
import { getAd } from "../http-service/get-ad";
const Advertisement = () => {
  const [adText, setAdText] = useState("");
  useEffect(() => {
    const fetchAd = async () => {
      const { data } = await getAd();
      setAdText(data.description);
    };
    fetchAd();
  }, []);

  return (
    <Fragment>
      <Layout
        header="تبلیغات"
        desktopHeader="تبلیغات"
        desktopSubHeader="بنر تبلیغاتی خود را شخصی سازی کنید"
      >
        <div className="advertisement-container">
          <div className="advertisement-top">متن بنر را اضافه کنید</div>
          <div className="advertisement-text-container">
            <textarea
              value={adText}
              onChange={(e) => setAdText(e.target.value)}
            ></textarea>
          </div>
          <button
            className="categories-button mg-t-70 ad-btn"
            onClick={async () => {
              const { data } = await editAd(adText);
              console.log(data);
            }}
          >
            تایید
          </button>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Advertisement;
