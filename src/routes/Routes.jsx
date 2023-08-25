import { Navigate, createBrowserRouter } from "react-router-dom";
import Category from "../shared/Category/Category";
import Main from "../layout/Main/Main";
import NewsLayout from "../layout/NewsLayout/NewsLayout";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Login/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={`/category/0`}></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "about",
    element: <About></About>,
  },
  {
    path: "career",
    element: <Career></Career>,
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-mozaddidbabar.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-mozaddidbabar.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
