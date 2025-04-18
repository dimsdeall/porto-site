import { useInView } from "react-intersection-observer";
import photo from "../../../asset/img/dimas.png";
import { RefProps } from "..";
import { SiGitlab } from "react-icons/si";

interface HeaderProps {
  onScroll: (args: RefProps) => void;
}

function Header({ onScroll }: HeaderProps) {
  const { ref, inView } = useInView({
    delay: 400,
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div ref={ref} className="h-auto px-2 pt-0 md:px-8 sm:pt-5 md:pt-10">
      <section
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-background h-full bg-opacity-70 py-5 px-5 sm:px-7 md:px-10 rounded-lg border-[1px] border-yellow backdrop-blur-sm gap-x-2 ${
          inView ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center order-last md:order-first lg:col-span-2 gap gap-y-4">
          <div className="text-lg text-rainbow lg:text-3xl">Hey, I'm</div>
          <div className="text-3xl text-rainbow lg:text-5xl xl:text-7xl">
            Dimas Nurcahyo Putra
          </div>
          <div className="text-justify text-rainbow">
            This site design inspired by Coldplay and Neon themes, this website
            is built with React Typescript library with Tailwindcss and Vite as
            build tools using pipline from gitlab and hosted by firebase
            hosting. You can look at the repository below for more details.
          </div>
          <div className="flex flex-row items-center justify-center font-extrabold gap-x-2 text-info hover:text-blue md:justify-normal">
            <SiGitlab />
            <a
              href="https://gitlab.com/server-dimsdeall/home-react-type"
              target="_blank"
            >
              Repository Site
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            alt="dimas"
            src={photo}
            className="rounded-full h-1/2 lg:h-3/6 w-auto border-[3px] border-info mb-3"
          />
          <button className="button-light" onClick={() => onScroll("Tech")}>
            See My Expertise
          </button>
        </div>
      </section>
    </div>
  );
}

export default Header;
