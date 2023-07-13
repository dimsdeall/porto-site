import { Outlet } from "react-router-dom";
import logo from "../../asset/img/logo192.png";
import { ButtonSlide } from "../../components/atoms";

function MainLayout() {
  return (
    // <div className="background-layer text-white pt-2">
    <div className="pt-1 background-layer">
      <div className="px-3 md:px-10 py-2 grid md:grid-cols-3 ">
        <div className="hidden md:block">
          <img alt="logo" src={logo} className="h-28" />
        </div>
        <div className="grid col-span-2 md:justify-items-end items-center rounded-sm">
          <div className="flex gap-x-3 p-7 bg-background bg-opacity-60 rounded border-[1px] border-green backdrop-blur-[3px] animate-fade-in justify-center flex-wrap gap-y-4 sm:gap-y-0">
            <ButtonSlide label="Project" />
            <ButtonSlide label="Contact" />
            <ButtonSlide label="About" />
          </div>
        </div>
      </div>
      <div className="mx-0 md:mx-2">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
