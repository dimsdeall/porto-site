import { Outlet } from "react-router-dom";

function BlankLayout() {
  return (
    <div className="background-layer text-white">
      <Outlet />
    </div>
  );
}

export default BlankLayout;
