import "./css/login.css";
import users from "./json/users.json";
import { InputInf } from "../contexts/EP";
import { NavigationsCon } from "../contexts/Navigations";
import { useNavigate } from "react-router-dom";

import React from "react";

export default () => {
  const navigate = useNavigate();

  const value = React.useContext(InputInf);
  const email = value.email;
  const setEmail = value.setEmail;
  const password = value.password;
  const setPassword = value.setPassword;
  const [message, setMessage] = React.useState("");
  const loginInfo = { email, password };
  const NavigationsA = React.useContext(NavigationsCon);
  const login = () => {
    const a = users.filter((info) => {
      if (
        (info.email === loginInfo.email &&
          info.password === loginInfo.password) ||
        (info.username === loginInfo.email &&
          info.password === loginInfo.password)
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (a.length === 0) {
      setMessage("كلمة السر او معرف الدخول خاطئ");
    } else if (a.length !== 0 || value.isLogin === true) {
      value.setIsLogin(true);
      setMessage("");
      navigate("/profile", { replace: true });
      NavigationsA.setNavigations([
        ...NavigationsA.navigation.filter(
          (e) => e.path !== "/login" && e.path !== "/register"
        ),
        { title: "المتجر", path: "/market" },
      ]);
    }
  };
  return (
    <>
      <section className="newsletter-secondary">
        <div className="newsletter-header">
          <h1>تسجيل الدخول في سيرفر العُقاب</h1>
          <p>في حالة نسيان كلمة السر الرجاء التواصل مع الدعم الفني</p>
          <p>
            وبمكنك استخدام اسم مستخدم test وكلمة السر 12345678 لتجربة التسجيل
            وهذا متاح بالفترة التجريبية فقط
          </p>
        </div>
        <div className="newsletter-footer">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="newsletter-form"
          >
            <input
              type="text"
              placeholder="أدخل بريدك الإلكتروني او اسم المستخدم"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              required
            />{" "}
            <input
              type="password"
              placeholder="أدخل كلمة المرور"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="submit"
              className="submit-btn"
              onClick={() => login()}
              value="الدخول"
            />
            <p className="p-note">{message}</p>
          </form>
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
