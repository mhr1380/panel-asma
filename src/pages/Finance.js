import { Fragment, useEffect, useState } from "react";
import "./Finance.css";
import Layout from "../Layout/Layout";
import React from "react";
import apps from "../assets/images/apps.png";
import { getFactures } from "../http-service/get-factures";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {
  persianNumToEnglishNum,
  slashToHiphen,
} from "../components/DateFunctions";
const Finance = () => {
  const [factures, setFactures] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    const fetchFactures = async () => {
      const { data } = await getFactures();
      setFactures(data.results);
    };
    fetchFactures();
  }, []);

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
            <DatePicker
              value={from}
              onChange={setFrom}
              locale={persian_fa}
              calendar={persian}
              maxDate={to ? to : tomorrow}
            />
            <DatePicker
              value={to}
              onChange={setTo}
              locale={persian_fa}
              calendar={persian}
              minDate={from}
              maxDate={tomorrow}
            />

            <div
              className="finance-date-button"
              onClick={async () => {
                const { data } = await getFactures(
                  slashToHiphen(
                    persianNumToEnglishNum(from.convert().format())
                  ),
                  slashToHiphen(persianNumToEnglishNum(to.convert().format()))
                );
                setFactures(data.results);
              }}
            >
              تایید
            </div>
          </div>
          <div className="finance-items-box">
            {factures.map((facture) => (
              <div className="finance-item" key={facture.id}>
                <p>{facture.user ? facture.user : "بدون نام"}</p>
                <p style={{ direction: "ltr" }}>{facture.phone_number}</p>
                <p>{facture.date.substr(0, 10)}</p>
                <p>{facture.price}</p>
              </div>
            ))}
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
