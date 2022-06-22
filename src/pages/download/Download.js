import React from "react";
import "./css/download.css";
export default () => {
  return (
    <>
      <section className="cta-dark">
        <div className="cta-dark-cover"></div>
        <div className="cta-container">
          <div className="cta-details">
            <h3>التحميل</h3>
          </div>
          <div className="btns-group">
            <a href="#" className="btn-primary">
              ملف مضغوط .Zip
            </a>
            <a href="#" className="btn-secondary">
              ملف تنفيذي .Exe
            </a>
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
