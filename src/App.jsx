import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./page/Home";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    fetchData();
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: isLoading ? <Loading /> : <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
