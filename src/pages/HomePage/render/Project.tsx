import { useInView } from "react-intersection-observer";
import { PhotoProvider, PhotoView } from "react-photo-view";
import infotec1 from "../../../asset/img/infotech-laravel/1.png";
import infotec2 from "../../../asset/img/infotech-laravel/2.png";
import infotec3 from "../../../asset/img/infotech-laravel/3.png";
import infotec4 from "../../../asset/img/infotech-laravel/4.png";
import dashNyonyaa1 from "../../../asset/img/nyonyaa-dashboard/1.png";
import dashNyonyaa2 from "../../../asset/img/nyonyaa-dashboard/2.png";
import dashNyonyaa3 from "../../../asset/img/nyonyaa-dashboard/3.png";
import nyonyaaApps1 from "../../../asset/img/nyonyaa-apps/1.png";
import nyonyaaProd1 from "../../../asset/img/nyonyaa-production/1.png";
import nyonyaaStok1 from "../../../asset/img/nyonyaa-stock/1.png";
// import nyonyaaStok2 from "../../../asset/img/nyonyaa-stock/2.png";
// import nyonyaaStok3 from "../../../asset/img/nyonyaa-stock/3.png";
import nyonyaaStok4 from "../../../asset/img/nyonyaa-stock/4.png";
import {
  SiMysql,
  SiLaravel,
  SiNodedotjs,
  SiBootstrap,
  SiExpress,
  SiPostgresql,
  SiReact,
  SiDocker,
  SiFirebase,
  SiAndroid,
  SiIos,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { RefObject } from "react";

interface ProjectProps {
    refChildren: RefObject<HTMLDivElement>
  }

function Project({refChildren}:ProjectProps) {
  const option = {
    delay: 1000,
    triggerOnce: true,
    threshold: 0,
  };
  const view1 = useInView(option);
  const view2 = useInView(option);
  const view3 = useInView(option);
  const view4 = useInView(option);
  const view5 = useInView(option);

  const imagesInfotech = [infotec1, infotec2, infotec3, infotec4];
  const imagesDashboardNyonyaa = [dashNyonyaa1, dashNyonyaa2, dashNyonyaa3];
  const imagesNyonyaaApps = [nyonyaaApps1];
  const imagesNyonyaaProduction = [nyonyaaProd1];
  const imagesNyonyaaStock = [
    nyonyaaStok1,
    // nyonyaaStok2,
    // nyonyaaStok3,
    nyonyaaStok4,
  ];

  return (
    <div ref={refChildren}>
      <div className="flex justify-center mb-16 pt-24 md:pt-40" ref={view1.ref}>
        <div
          className={`self-center font-bold  border-b-4  box-light-neon animate-fade-in ${
            view1.inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="text-3xl sm:text-4xl md:text-5xl">My Project</div>
        </div>
      </div>
      <div className=" px-5 sm:px-5 md:px-5 lg:px-10 xl:px-20 flex flex-col gap-y-10">
        <div
          className={`p-5 bg-background bg-opacity-50 backdrop-blur-sm px-4 shadow-red-custome rounded ${
            view1.inView ? "animate-slide-up" : "opacity-0"
          }`}
          ref={view2.ref}
        >
          <div className="text-3xl font-bold mb-4 text-center md:text-left text-rainbow">
            Infotech Retail Web Application
          </div>
          <div className="border-l-[5px] border-l-red grid grid-cols-1 md:grid-cols-2 pb-4">
            <div className="px-4">
              <div className="mb-2">
                <div className="text-lg font-bold">Description</div>
                <div className="text-sm text-justify">
                  Infotech Retail applications include Purchase, Sales, Master,
                  Accounts Payable, Accounts Receivable and GL
                </div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold">Tech Stack</div>
                <div className="text-5xl flex flex-wrap gap-x-5 px-3 pt-2">
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiLaravel />
                    <div className="text-xs">Laravel</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiMysql />
                    <div className="text-xs">MySQL</div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold">Link</div>
                <div className="text-sm">
                  <a
                    href="http://v2.infotechbdg.com/login"
                    target="_blank"
                    className="text-rainbow"
                  >
                    http://v2.infotechbdg.com/login
                  </a>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div>
                <PhotoProvider>
                  <div className="text-lg font-bold">Photo</div>
                  <div className="flex flex-wrap items-start">
                    {imagesInfotech.map((item, index) => (
                      <PhotoView key={index} src={item}>
                        <img
                          src={item}
                          alt={`infotech ${index}`}
                          className="w-1/6 md:w-2/6 lg:w-1/4 xl:w-1/4 px-1 cursor-pointer"
                        />
                      </PhotoView>
                    ))}
                  </div>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`p-5 bg-background bg-opacity-50 backdrop-blur-sm px-4 shadow-red-custome rounded ${
            view2.inView ? "animate-slide-up" : "opacity-0"
          }`}
          ref={view3.ref}
        >
          <div className="text-3xl font-bold mb-4 text-center md:text-left text-rainbow">
            Dashboard Nyonyaa Laundry
          </div>
          <div className="border-l-[5px] border-l-red grid grid-cols-1 md:grid-cols-2 pb-4">
            <div className="px-4">
              <div className="mb-2">
                <div className="text-lg font-bold">Description</div>
                <div className="text-sm text-justify">
                  React Application Nyonyaa Dashboard with backend Express JS
                  using Ubuntu Compute
                </div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold">Tech Stack</div>
                <div className="text-5xl flex flex-wrap gap-x-5 px-3 pt-2">
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiReact />
                    <div className="text-xs">React Js</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiBootstrap />
                    <div className="text-xs">Bootstrap</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiNodedotjs />
                    <div className="text-xs">Node Js</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiExpress />
                    <div className="text-xs">Express Js</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiPostgresql />
                    <div className="text-xs">Postgresql</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiDocker />
                    <div className="text-xs">Dockerize</div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold">Link</div>
                <div className="text-sm text-info">Privacy</div>
              </div>
            </div>
            <div className="px-4">
              <div>
                <PhotoProvider>
                  <div className="text-lg font-bold">Photo</div>
                  <div className="flex flex-wrap items-start">
                    {imagesDashboardNyonyaa.map((item, index) => (
                      <PhotoView key={index} src={item}>
                        <img
                          src={item}
                          alt={`infotech ${index}`}
                          className="w-1/6 md:w-2/6 lg:w-1/4 xl:w-1/4 px-1 cursor-pointer"
                        />
                      </PhotoView>
                    ))}
                  </div>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`p-5 bg-background bg-opacity-50 backdrop-blur-sm px-4 shadow-red-custome rounded ${
            view3.inView ? "animate-slide-up" : "opacity-0"
          }`}
          ref={view4.ref}
        >
          <div className="text-3xl font-bold mb-4 text-center md:text-left text-rainbow">
            Mobile Apps Nyonyaa (Android & IOS)
          </div>
          <div className="border-l-[5px] border-l-red grid grid-cols-1 md:grid-cols-2 pb-4">
            <div className="px-4">
              <div className="mb-2">
                <div className="text-lg font-bold">Description</div>
                <div className="text-sm text-justify">
                  Nyonyaa Laundry Consumer Application IOS and android
                </div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold">Tech Stack</div>
                <div className="text-5xl flex flex-wrap gap-x-5 px-3 pt-2">
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiReact />
                    <div className="text-xs">React Native</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiFirebase />
                    <div className="text-xs">Firebase</div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold">Link</div>
                <div className="text-sm">
                  <ul className="list-disc px-8">
                    <li className="flex items-center">
                      <SiAndroid />
                      <div className="mx-2">-</div>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.nyonyaa"
                        target="_blank"
                        className="text-rainbow"
                      >
                        Google Play
                      </a>
                    </li>
                    <li className="flex items-center">
                      <SiIos />
                      <div className="mx-2">-</div>
                      <a
                        href="https://apps.apple.com/id/app/nvonyaa-laundry/id6444783431?|=id"
                        target="_blank"
                        className="text-rainbow"
                      >
                        App Store
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div>
                <PhotoProvider>
                  <div className="text-lg font-bold">Photo</div>
                  <div className="flex flex-wrap items-start">
                    {imagesNyonyaaApps.map((item, index) => (
                      <PhotoView key={index} src={item}>
                        <img
                          src={item}
                          alt={`infotech ${index}`}
                          className="w-1/6 md:w-2/6 lg:w-1/4 xl:w-1/4 px-1 cursor-pointer"
                        />
                      </PhotoView>
                    ))}
                  </div>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`p-5 bg-background bg-opacity-50 backdrop-blur-sm px-4 shadow-red-custome rounded ${
            view4.inView ? "animate-slide-up" : "opacity-0"
          }`}
          ref={view5.ref}
        >
          <div className="text-3xl font-bold mb-4 text-center md:text-left text-rainbow">
            Mobile Android Nyonyaa Production
          </div>
          <div className="border-l-[5px] border-l-red grid grid-cols-1 md:grid-cols-2 pb-4">
            <div className="px-4">
              <div className="mb-2">
                <div className="text-lg font-bold">Description</div>
                <div className="text-sm text-justify">
                  Android application for Nyonyaa Laundry production team
                </div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold">Tech Stack</div>
                <div className="text-5xl flex flex-wrap gap-x-5 px-3 pt-2">
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiReact />
                    <div className="text-xs">React Native</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiFirebase />
                    <div className="text-xs">Firebase</div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold">Link</div>
                <div className="text-sm">
                  <ul className="list-disc px-8">
                    <li className="flex items-center">
                      <SiAndroid />
                      <div className="mx-2">-</div>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.nyonyaa.produksi"
                        target="_blank"
                        className="text-rainbow"
                      >
                        Google Play
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div>
                <PhotoProvider>
                  <div className="text-lg font-bold">Photo</div>
                  <div className="flex flex-wrap items-start">
                    {imagesNyonyaaProduction.map((item, index) => (
                      <PhotoView key={index} src={item}>
                        <img
                          src={item}
                          alt={`infotech ${index}`}
                          className="w-1/6 md:w-2/6 lg:w-1/4 xl:w-1/4 px-1 cursor-pointer"
                        />
                      </PhotoView>
                    ))}
                  </div>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`p-5 bg-background bg-opacity-50 backdrop-blur-sm px-4 shadow-red-custome rounded ${
            view5.inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="text-3xl font-bold mb-4 text-center md:text-left text-rainbow">
            Nyonyaa Stock Application
          </div>
          <div className="border-l-[5px] border-l-red grid grid-cols-1 md:grid-cols-2 pb-4">
            <div className="px-4">
              <div className="mb-2">
                <div className="text-lg font-bold">Description</div>
                <div className="text-sm text-justify">
                  Nyonyaa Stok Management dashboard with a backend using Ubuntu
                  compute
                </div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold">Tech Stack</div>
                <div className="text-5xl flex flex-wrap gap-x-5 px-3 pt-2">
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiReact />
                    <div className="text-xs">React Js</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiTypescript />
                    <div className="text-xs">Typescript</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiTailwindcss />
                    <div className="text-xs">Tailwind</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiNodedotjs />
                    <div className="text-xs">Node Js</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiExpress />
                    <div className="text-xs">Express Js</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiPostgresql />
                    <div className="text-xs">Postgresql</div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-y-2">
                    <SiDocker />
                    <div className="text-xs">Dockerize</div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div className="text-lg font-bold">Link</div>
                <div className="text-sm text-info">Privacy</div>
              </div>
            </div>
            <div className="px-4">
              <div>
                <PhotoProvider>
                  <div className="text-lg font-bold">Photo</div>
                  <div className="flex flex-wrap items-start">
                    {imagesNyonyaaStock.map((item, index) => (
                      <PhotoView key={index} src={item}>
                        <img
                          src={item}
                          alt={`infotech ${index}`}
                          className="w-1/6 md:w-2/6 lg:w-1/4 xl:w-1/4 px-1 cursor-pointer"
                        />
                      </PhotoView>
                    ))}
                  </div>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
