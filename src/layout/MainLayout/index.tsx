import { Outlet } from "react-router-dom";
import logo from "../../asset/img/logo192.png";
import { ButtonSlide } from "../../components/atoms";

function MainLayout() {
  return (
    // <div className="background-layer text-white pt-2">
    <div className="pt-1 background-layer">
      <div className="px-10 py-2 grid grid-cols-2">
        <div className="animate-pulse">
          <img alt="logo" src={logo} className="h-28 animate-spin-slow" />
        </div>
        <div className="grid justify-items-end items-center rounded-sm ">
          <div className="flex gap-x-3 p-7 bg-background bg-opacity-60 rounded border-[1px] border-green backdrop-blur-[3px] animate-fade-in">
            <ButtonSlide label="Project" />
            <ButtonSlide label="Contact" />
            <ButtonSlide label="About" />
          </div>
          {/* <FcAbout></FcAbout> */}
          {/* <IoLogoGithub className='text-white text-5xl hover:text-info cursor-pointer'/>
          <IoLogoGithub className='text-white text-5xl hover:text-info cursor-pointer'/>
          <IoLogoGithub className='text-white text-5xl hover:text-info cursor-pointer'/> */}
        </div>
      </div>
      <div className="mx-2">
        <Outlet />
      </div>
      {/* <div className="flex bg-background p-3 border border-1 border-yellow rounded-lg opacity-90 px-2 mx-2  mt-10 h-144">
        Footer
      </div> */}
    </div>
  );
}

export default MainLayout;
