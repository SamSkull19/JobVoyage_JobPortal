import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home/HomePage";
import App from "./App";
import "./index.css";
import Login from "./UserAuth/Login";
import Register from "./UserAuth/Register";
import ErrorPage from "./ErrorPage";
import AllJobs from "./All_Job_List/AllJobs";
import Blog from "./Blog/Blog";
import JobDetails from "./JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyAddJobs from "./MyJobs/MyAddJobs";
import AddJobs from "./AddAJob/AddJobs";
import UpdateMyJobs from "./MyJobs/UpdateMyJobs";
import MyAppliedJobs from "./MyAppliedJobs/MyAppliedJobs";

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
        {
          path: "/jobDetails/:id",
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
        },
        {
          path: "/addJobs",
          element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
        },
        {
          path: "/myAddJobs",
          element: <PrivateRoute><MyAddJobs></MyAddJobs></PrivateRoute>
        },
        {
          path: "/updateMyJobs/:id",
          element: <PrivateRoute><UpdateMyJobs></UpdateMyJobs></PrivateRoute>
        },

        {
          path: "/myAppliedJobs",
          element: <PrivateRoute><MyAppliedJobs></MyAppliedJobs></PrivateRoute>
        },
    
    ]
    },
  
  ]);
  
  export default router;