import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home/HomePage";
import App from "./App";
import "./index.css";
import Login from "./UserAuth/Login";

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
    ]
    },
  
  ]);
  
  export default router;