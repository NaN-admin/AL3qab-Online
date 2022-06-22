import React from "react";
import "./css/profile.css";
import { InputInf } from "../contexts/EP";
import { NavigationsCon } from "../contexts/Navigations";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const navG = React.useContext(NavigationsCon);
  const value = React.useContext(InputInf);
  return (
    <>
      <section className="cta-primary">
        <div className="cta-container">
          <div className="cta-details">
            <div className="profile-header">
              <h3>مرحبا {value.get("username")}</h3>
              <img
                src={value.get("image")}
                loading="lazy"
                className="profile-logo"
                alt=""
              ></img>
            </div>
            <div className="container-info-profile">
              <p>تاريخ تسجيلك هو {value.get("dateOfLogin")}</p>{" "}
              <p>رتبتك هي {value.get("role")}</p>{" "}
              <p>
                بريدك الإلكتروني المرتبط بالحساب هو{" "}
                <strong>{value.get("email")}</strong>
              </p>
            </div>
          </div>
          <button
            className="cta-btn"
            onClick={() => {
              value.logOut();
              navigate("/", { replace: true });
              navG.setNavigations(navG.old);
            }}
          >
            تسجيل الخروج
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
          </button>
        </div>
      </section>
    </>
  );
}
