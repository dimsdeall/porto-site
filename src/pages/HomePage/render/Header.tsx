import { useInView } from "react-intersection-observer";
import photo from "../../../asset/img/dimas.png";

function Header() {
  const { ref, inView } = useInView({
    delay: 400,
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <div ref={ref} className="mb-20 px-8">
      <section
        className={`grid grid-cols-1 md:grid-cols-3 bg-background h-full bg-opacity-70 py-5 px-10 rounded-lg border-[1px] border-yellow backdrop-blur-sm ${
          inView ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="col-span-2 flex flex-col gap gap-y-4 justify-center">
          <div className="text-3xl">Hey, I'm</div>
          <div className="text-7xl">Dimas Nurcahyo Putra</div>
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
            className="rounded-full h-4/6 w-auto border-[3px] border-red mb-3"
          />
          <button className="button-light">See My Expertise</button>
        </div>
      </section>
    </div>
  );
}

export default Header;
