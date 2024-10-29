import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import Error from "./pages/Error";
import EditProfile from "./pages/EditProfile";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Tasks /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/editProfile", element: <EditProfile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
