import { Fragment } from "react";
import Layout from "../Layout/Layout";
import "./Advertisement.css";
const Advertisement = () => {
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
              value=" برای خریدن اشتراک برنامک اشاره می توانید با ارسال پیام به شماره ی
            درج شده و پرداخت وجه اقدام کنید"
            ></textarea>
          </div>
          <button className="categories-button mg-t-70 ad-btn">تایید</button>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Advertisement;
