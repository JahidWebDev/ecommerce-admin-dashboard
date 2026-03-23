import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./page/Home";
import CreateCategory from "./components/CreateCategory";
import CategoryList from "./components/CategoryList";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/create-category",
          element: <CreateCategory />,
        },
        {
          path: "/category-list",
          element: <CategoryList />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

