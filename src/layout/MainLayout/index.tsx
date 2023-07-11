import { Outlet } from "react-router-dom";
import "./index.css";

function MainLayout() {
  return (
    <div className="background-layer text-white pt-2">
      <div className="flex bg-background p-3 border border-1 border-yellow rounded-lg opacity-90 px-2 mx-2 my-3">
        Dimsdeall Site
      </div>
      <div className="mx-7">
        <Outlet />
      </div>
      <div className="flex bg-background p-3 border border-1 border-yellow rounded-lg opacity-90 px-2 mx-2 ">
        Footer
      </div>
    </div>
  );
}

export default MainLayout;
