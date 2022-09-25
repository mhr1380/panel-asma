import { Fragment } from "react";
import "./Finance.css";
import Layout from "../Layout/Layout";
import apps from "../assets/images/apps.png";
const Finance = () => {
  return (
    <Fragment>
      {" "}
      <Layout
        header="مالی"
        desktopHeader="مالی"
        desktopSubHeader="به امور مالی خود رسیدگی کنید"
      >
        <div className="finance-container">
          <div className="finance-date-container">
            <h2>تاریخ</h2>
            <input placeholder="از" type="date" />
            <input placeholder="تا" type="date" />
          </div>
          <div className="finance-items-box">
            <div className="finance-item">
              <p>محمدحسین رحیمی</p>
              <p>50.000</p>
            </div>
            <div className="finance-item">
              <p>محمدحسین رحیمی</p>
              <p>50.000</p>
            </div>
            <div className="finance-item">
              <p>محمدحسین رحیمی</p>
              <p>50.000</p>
            </div>
            <div className="finance-item">
              <p>محمدحسین رحیمی</p>
              <p>50.000</p>
            </div>
            <div className="finance-item">
              <p>محمدحسین رحیمی</p>
              <p>50.000</p>
            </div>
            <div className="finance-item">
              <p>محمدحسین رحیمی</p>
              <p>50.000</p>
            </div>
            <div className="finance-item">
              <p>محمدحسین رحیمی</p>
              <p>50.000</p>
            </div>
            <div className="finance-item">
              <p>محمدحسین رحیمی</p>
              <p>50.000</p>
            </div>
            <div className="finance-item">
              <p>محمدحسین رحیمی</p>
              <p>50.000</p>
            </div>
            <div className="finance-item">
              <p>محمدحسین رحیمی</p>
              <p>50.000</p>
            </div>
          </div>
          <div className="finance-btn-container">
            <div className="finance-btn">
              <p>خروجی</p>
              <img src={apps} />
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Finance;
