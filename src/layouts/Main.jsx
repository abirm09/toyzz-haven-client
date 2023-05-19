import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import { useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnim from "../assets/common/loading.json";
import Footer from "../pages/Shared/Footer/Footer";
const Main = () => {
  const location = useLocation();
  const navigation = useNavigation();
  useEffect(() => {
    if (location.pathname == "/") {
      document.title = `Toyzz haven | Home`;
    } else {
      document.title = `Toyzz haven | ${location.pathname.replace("/", "")}`;
    }
  }, [location]);

  return (
    <>
      <Header />
      {navigation.state === "loading" && (
        <div className="w-full min-h-screen bg-white fixed top-0 left-0 flex justify-center items-center z-40">
          <Lottie
            animationData={loadingAnim}
            loop={true}
            className="w-56 h-56"
          />
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
