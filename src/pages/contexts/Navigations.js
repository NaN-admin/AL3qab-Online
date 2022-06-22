import React, { createContext, useState } from "react";

export const NavigationsCon = createContext(0);

export const NavigationsConPro = (props) => {
  const [navigation, setNavigations] = useState([
    { title: "التسجيل", path: "/register" },
    { title: "تسجيل الدخول", path: "/login" },
    { title: "إعلانات الإدارة", path: "/posts" },
    { title: "الدعم الفني", path: "/support" },
  ]);
  const [old, setOld] = React.useState([]);
  React.useEffect(() => {
    setOld(navigation);
  }, []);
  return (
    <NavigationsCon.Provider value={{ navigation, setNavigations, old }}>
      {props.children}
    </NavigationsCon.Provider>
  );
};
