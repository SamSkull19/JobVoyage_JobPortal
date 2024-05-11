import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home/HomePage";
import App from "./App";
import "./index.css";
import Login from "./UserAuth/Login";
import Register from "./UserAuth/Register";
import ErrorPage from "./ErrorPage";
import AllJobs from "./All_Job_List/AllJobs";
import Blog from "./Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>

        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/allJobs",
          element: <AllJobs></AllJobs>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
    ]
    },
  
  ]);
  
  export default router;