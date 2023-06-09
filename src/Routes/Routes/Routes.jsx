import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import Error from "../../pages/Error/Error";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import AllToys from "../../pages/AllToys/AllToys";
import ToyDetails from "../../pages/ToyDetails/ToyDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddToy from "../../pages/AddToy/AddToy";
import MyToys from "../../pages/MyToys/MyToys";
import EditToys from "../../pages/EditToys/EditToys";
import Blog from "../../pages/Blog/Blog";
const apiUrl = "https://toyzz-haven-server.vercel.app/";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
        loader: () => fetch(`${apiUrl}toys/limit20`),
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${apiUrl}toy/${params.id}`),
      },
      {
        path: "/addAToy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/editToy/:id",
        element: <EditToys />,
        loader: ({ params }) => fetch(`${apiUrl}toy/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);
export default route;
