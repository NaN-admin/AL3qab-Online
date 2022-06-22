import React from "react";
import "../css/blog.css";
import { Link } from "react-router-dom";

export default function Blog(props) {
  const post = props.post;
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setShow(false), 4000);
  }, [show]);
  const showAl = () => {
    setShow(true);
    navigator.clipboard.writeText(window.location.href);
  };
  return (
    <>
    <section className="cta-secondary">
      <div className="cta-cover"></div>
      <div className="cta-container">
        <div className="cta-details">
          <h3>{post.title}</h3>
          <p style={{ whiteSpace: "pre-line" }}>{post.desc}</p>
          <button className="cta-btn" onClick={() => showAl()}>
            {" "}
            مشاركة
            <span className="icon-share2"></span>
          </button>{" "}
          <button className="cta-btn p-20" onClick={() => alert("الشراء غير متاح")}>
            {" "}
            الشراء
          </button>
          <Link className="cta-btn link" to="/market">
            الرجوع
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
        <div className="cta-image">
          <img src={post.img} alt="" />
        </div>
      </div>
      {show === true ? (
        <div className="alert-success">
          <div className="alert-success-container">
            <div className="alert-details">
              <div className="alert-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="details">
                <span className="lable">شكرا</span>
                <p>تم نسخ رابط الإعلان بنجاخ</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
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
}
