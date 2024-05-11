import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home/HomePage";
import App from "./App";
import "./index.css";
import Login from "./UserAuth/Login";
import Register from "./UserAuth/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
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
    ]
    },
  
  ]);
  
  export default router;