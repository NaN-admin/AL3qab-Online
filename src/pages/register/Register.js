import "./css/register.css";

import React from "react";

export default function Register() {
  const [message, setMessage] = React.useState("");

  return (
    <>
    <section className="newsletter-secondary">
      <div className="newsletter-header">
        <h1>إنشاء حساب سيرفر العقاب</h1>
        <p>استخدم كلمة سر قوية</p>
        <p>لا يمكنك استخدام بريد الكتروني مستخدم مسبقا</p>
      </div>
      <div className="newsletter-footer">
        <form onSubmit={(c) => c.preventDefault()} className="newsletter-form">
          <input
            type="text"
            placeholder="البريد الإلكتروني"
            className="input"
            required
          />{" "}
          <input
            type="text"
            placeholder="اسم المستخدم"
            className="input"
            required
          />{" "}
          <input
            type="password"
            placeholder="كلمة المرور"
            className="input"
            required
          />{" "}
          <input
            type="password"
            placeholder="سؤال الأمان لإستعادة الحساب"
            className="input"
            required
          />{" "}
          <input
            type="password"
            placeholder="جواب سؤال الأمان"
            className="input"
            required
          />
          <input
            type="submit"
            className="submit-btn"
            onClick={() => setMessage("التسجيل غير متاح")}
            value="إنشاء حساب"
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
}
