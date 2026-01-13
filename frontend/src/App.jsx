import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
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
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
