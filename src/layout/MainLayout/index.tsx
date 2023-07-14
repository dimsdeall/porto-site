import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="pt-1 background-layer">
      <div className="mx-0 md:mx-2">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
