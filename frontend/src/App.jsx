import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Browse from "./pages/Browse";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default App;
