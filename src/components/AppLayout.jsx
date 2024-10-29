import { Outlet } from "react-router";
import Profile from "../pages/Profile";

function AppLayout() {
  return (
    <div>
      <Profile />
      <Outlet />
    </div>
  );
}

export default AppLayout;
