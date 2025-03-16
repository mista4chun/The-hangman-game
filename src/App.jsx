import AppLayout from "./AppLayout";
import HowToPlay from "./components/HowToPlay";
import Home from "./components/Home";
import PickACategory from "./components/PickACategory";
import RandomWord from "./components/RandomWord";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchCategories } from "./components/PickACategory";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pick-a-category",
        element: <PickACategory />,
        loader: fetchCategories,
      },
      {
        path: "/pick-a-category/:category",
        element: <RandomWord />,
      },
      {
        path: "/how-to-play",
        element: <HowToPlay />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
