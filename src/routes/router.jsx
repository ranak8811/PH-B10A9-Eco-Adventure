import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";
import DetailsPage from "../pages/DetailsPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/Register";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRouter>
            <DetailsPage></DetailsPage>
          </PrivateRouter>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/fakeData.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id === parseInt(params.id));
          return singleData;
        },
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRouter>
            <UpdateProfile></UpdateProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRouter>
            <UserProfile></UserProfile>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
]);

export default router;

// ----------------------------------------------------------------
