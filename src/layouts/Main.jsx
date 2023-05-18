import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import { useEffect } from "react";
const Main = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") {
      document.title = `Toyzz haven | Home`;
    } else {
      document.title = `Toyzz haven | ${location.pathname.replace("/", "")}`;
    }
  }, [location]);
  console.log(location);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
