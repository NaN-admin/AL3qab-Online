import React from "react";
import "../css/container.css";
import { Link } from "react-router-dom";
import { InputInf } from "../../contexts/EP";
import "../../adminAds/css/style.css";

export default () => {
  const value = React.useContext(InputInf);
  return (
    <>
      <section className="cta-dark">
        <div className="cta-dark-cover"></div>
        <div className="cta-container">
          <div className="cta-details">
            <h3>العقاب اون لاين</h3>
            <h3 className="asr">عصر النهضة</h3>
            <p>
              افضل سيرفر عربي اونلاين و اول سيرفر يعتمد على المهارة لا على المال
            </p>
          </div>
          <div className="btns-group">
            {!value.isLogin && (
              <Link to="/register" className="btn-primary linko">
                التسجيل
              </Link>
            )}
            <Link to="/download" className="btn-secondary linko">
              التحميل
            </Link>
          </div>
        </div>
      </section>
      <div className="socialMedia">
        <a href="https://github.com/TheStranger0" target={"_blank"}>
          {" "}
          <span className="icon-github"></span>
        </a>
        <a href="https://www.instagram.com/mohammed_az90/" target={"_blank"}>
          <span className="icon-instagram"></span>
        </a>
      </div>
    </>
  );
};
