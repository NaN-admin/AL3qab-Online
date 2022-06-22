import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminAds from "./pages/adminAds/AdminAds";
import Home from "./pages/home/Home";
import Blog from "./pages/adminAds/js/Blog";
import NavBar from "./pages/NavBar";
import Login from "./pages/login/Login";
import blogs from "./pages/adminAds/json/blogs.json";
import products from "./pages/market/json/products.json";
import Profile from "./pages/profile/Profile";
import { InputInf } from "./pages/contexts/EP";
import Download from "./pages/download/Download";
import Register from "./pages/register/Register";
import Market from "./pages/market/Market";
import Product from "./pages/market/js/Product";

function Logon(props) {
  return (
    <>
      <NavBar />
      <props.component />
    </>
  );
}
function Element(props) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <props.component post={props.post} />;
    </>
  );
}

export default function App() {
  const value = React.useContext(InputInf);
  const E4MeS = {
    title: "خطأ 404",
    desc: "لم يتم العثور على هذه الصفحة ",
    img: "https://www9.0zz0.com/2022/06/21/17/244243730.jpg",
    authorLogo: "https://www9.0zz0.com/2022/06/20/14/723922189.jpg",
    authorName: "The Stranger",
    date: "Jan 16 2022",
  };
  const support = {
    title: "الدعم الفني",
    desc: "الدعم الفني غير متاح هذا المشروع مجرد تصميم غير مرتبط باي واجهة خلفية",
    img: "https://www9.0zz0.com/2022/06/22/10/409002967.jpg",
    authorLogo: "https://www9.0zz0.com/2022/06/20/14/723922189.jpg",
    authorName: "The Stranger",
    date: "Jan 16 2022",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<AdminAds />} />
        {!value.isLogin && (
          <>
            <Route path="login" element={<Logon component={Login} />} />
            <Route path="register" element={<Logon component={Register} />} />
          </>
        )}
        {value.isLogin && (
          <>
            <Route path="profile" element={<Logon component={Profile} />} />
            <Route path="market" element={<Market />} />
            {products.map((ele, key) => (
              <Route
                key={key}
                path={"market/" + (key + 1)}
                element={<Element post={ele} component={Product} />}
              />
            ))}
          </>
        )}
        <Route path="*" element={<Element post={E4MeS} component={Blog} />} />
        <Route
          path="support"
          element={<Element post={support} component={Blog} />}
        />
        <Route path="download" element={<Logon component={Download} />} />
        {blogs.map((ele, key) => (
          <Route
            key={key}
            path={"posts/" + (key + 1)}
            element={<Element post={ele} component={Blog} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
