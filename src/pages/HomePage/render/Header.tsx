import { useInView } from "react-intersection-observer";
import photo from "../../../asset/img/dimas.png";
import { RefProps } from "..";

interface HeaderProps {
  onScroll:(args:RefProps) => void
}

function Header({onScroll}:HeaderProps) {
  const { ref, inView } = useInView({
    delay: 400,
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div ref={ref} className="px-2 md:px-8 h-auto mb-14 lg:mb-10 xl:mb-0 xl:min-h-screen pt-0 sm:pt-5 md:pt-10">
      <section
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-background h-full bg-opacity-70 py-5 px-5 sm:px-7 md:px-10 rounded-lg border-[1px] border-yellow backdrop-blur-sm gap-x-2 ${
          inView ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="order-last md:order-first lg:col-span-2 flex flex-col gap gap-y-4 justify-center">
          <div className="text-lg lg:text-3xl">Hey, I'm</div>
          <div className="text-3xl lg:text-5xl xl:text-7xl">Dimas Nurcahyo Putra</div>
          <div className="text-rainbow text-justify">
            I am a Fullstack Javascript, PHP and DevOps Developer with more than
            6 years experience on this sector. Previously worked at a software
            provider company in retail sector and worked at a startup for
            laundry management company. Understand concept of OOP, API, MVC,
            Cloud Computer and Dockerize Integration and be able to manage
            computing-based servers or VPS with Linux OS. Always learn new
            things and try new things around software development and IT.
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img
            alt="dimas"
            src={photo}
            className="rounded-full h-1/2 lg:h-3/6 w-auto border-[3px] border-red mb-3"
          />
          <button className="button-light" onClick={() => onScroll('Tech')}>See My Expertise</button>
        </div>
      </section>
    </div>
  );
}

export default Header;
