import React, { useState } from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import { InputInf } from "./contexts/EP";
import { NavigationsCon } from "./contexts/Navigations";
const NavBar = () => {
  const [state, setState] = useState(false);
  const value = React.useContext(InputInf);
  const NavigationsA = React.useContext(NavigationsCon);
  const navigation = NavigationsA.navigation;
  return (
    <nav className="nav-primary">
      <div className="nav-container">
        <div className="brand">
          <Link to="/" className="link">
            <h2 className="orange">العُقاب اون لاين</h2>
          </Link>
          <div className="menu-btn">
            <button onClick={() => setState(!state)}>
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
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
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`nav-items ${state ? "" : "hide-nav"}`}>
          <ul>
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="nav-item">
                  <NavLink className="link" to={item.path}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {value.isLogin && (
          <Link to="/profile" className="profile">
            <img
              src={value.get("image")}
              loading="lazy"
              className="w-full h-48 rounded-tl-md rounded-tr-md logo"
            />
          </Link>
        )}
        <div className="get-started-link">
          <Link to="/download" className="link">
            التحميل
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
