import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import AOS from "aos";
AOS.init({
  once: false,
  offset: 400,
});
import "aos/dist/aos.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>
);
