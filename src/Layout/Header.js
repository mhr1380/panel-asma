import { Fragment, useState } from "react";
import menu from "../assets/images/menu.png";
import search from "../assets/images/search.png";
import apps from "../assets/images/apps.png";
import finance from "../assets/images/finance.png";
import request from "../assets/images/request.png";
import letter from "../assets/images/letter.png";
import ads from "../assets/images/ads.png";
import settings from "../assets/images/settings.png";
import close from "../assets/images/close.png";
import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
const Header = ({ title }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(false);
  return (
    <Fragment>
      <div className="mobile-nav">
        <div
          className={`mobile-background ${mobileMenu ? "show" : ""}`}
          onClick={() => {
            setMobileMenu(false);
          }}
        ></div>
        <div className={`mobile-menu ${mobileMenu ? "show" : ""}`}>
          <NavLink to="/categories" activeClassName="active">
            <div className="mobile-menu-item">
              <p>دسته بندی</p>
            </div>
          </NavLink>
          <NavLink to="/words" activeClassName="active">
            <div className="mobile-menu-item">
              <p>کلمه</p>
            </div>
          </NavLink>
          <NavLink to="/advertisement" activeClassName="active">
            <div className="mobile-menu-item">
              <p>تبلیغات</p>
            </div>
          </NavLink>
          <NavLink to="/finance" activeClassName="active">
            <div className="mobile-menu-item">
              <p>مالی</p>
            </div>
          </NavLink>
          <NavLink to="/requests" activeClassName="active">
            <div className="mobile-menu-item">
              <p>درخواست</p>
            </div>
          </NavLink>
        </div>
        <header className="header-container">
          <img
            className="menu-icon"
            src={menu}
            onClick={() => {
              setMobileMenu(true);
            }}
          />
          <h1 className="header-title">{title}</h1>
          <Link to="/search">
            <img src={search} className="search" />
          </Link>
        </header>
      </div>
      {/* <div className={`${desktopMenu && "show"}`}>
        <div className="desktop-title">
          <h1 className="header-title">{title}</h1>
        </div>
      </div> */}
      <div className={`desktop-nav ${desktopMenu && "show"}`}>
        <NavLink to="/categories" activeClassName="active">
          <div className="desktop-nav-item">
            <div className="desktop-nav-item-icon-container">
              <img src={apps} />
            </div>
            <p className="desktop-nav-item-title">دسته بندی</p>
          </div>
        </NavLink>
        <NavLink to="/words" activeClassName="active">
          <div className="desktop-nav-item">
            <div className="desktop-nav-item-icon-container">
              <img src={letter} />
            </div>
            <p className="desktop-nav-item-title">کلمات</p>
          </div>
        </NavLink>
        <NavLink to="/advertisement" activeClassName="active">
          <div className="desktop-nav-item">
            <div className="desktop-nav-item-icon-container">
              <img src={ads} />
            </div>
            <p className="desktop-nav-item-title">تبلیغات</p>
          </div>
        </NavLink>
        <NavLink to="/finance" activeClassName="active">
          <div className="desktop-nav-item">
            <div className="desktop-nav-item-icon-container">
              <img src={finance} />
            </div>
            <p className="desktop-nav-item-title">مالی</p>
          </div>
        </NavLink>
        <NavLink to="/requests" activeClassName="active">
          <div className="desktop-nav-item">
            <div className="desktop-nav-item-icon-container">
              <img src={request} />
            </div>
            <p className="desktop-nav-item-title">درخواست</p>
          </div>
        </NavLink>
        <img
          className={`toggle-desktop ${desktopMenu && "hide"}`}
          src={settings}
          onClick={() => {
            setDesktopMenu(!desktopMenu);
          }}
        />
        <img
          className={`toggle-close ${desktopMenu && "show"}`}
          src={close}
          onClick={() => {
            setDesktopMenu(!desktopMenu);
          }}
        />
      </div>
    </Fragment>
  );
};

export default Header;
