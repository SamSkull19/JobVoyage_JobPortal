import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home/HomePage";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>
          
        },
    ]
    },
  
  ]);
  
  export default router;