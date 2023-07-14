import { RefObject } from "react";
import { IoLogoReact, IoLogoNodejs, IoLogoDocker } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

interface TechStackProps {
  refChildren: RefObject<HTMLDivElement>
}

function TechStack({refChildren}: TechStackProps) {
  const { ref, inView } = useInView({
    delay: 400,
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div ref={refChildren}>
      <div className="flex justify-center mb-16 ">
        <div className="self-center font-bold  border-b-4 animate-fade-in box-light-neon">
          <div className="text-3xl sm:text-4xl md:text-5xl">My Expertise</div>
        </div>
      </div>
      <div
        className="lg:h-144 pt-0 sm:pt-2 md:pt-5 lg:pt-7 xl:pt-10 mb-14 lg:mb-10 xl:mb-0"
        ref={ref}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 md:px-8 lg:px-10 xl:px-32 mb-5">
          <div
            className={`border border-green p-2 min-h-[400px] bg-background bg-opacity-50 backdrop-blur-sm rounded hover:-translate-y-2 hover:scale-110 duration-500 ${
              inView ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="flex flex-row gap-3 justify-center items-center">
              <div className="text-8xl ">
                <IoLogoReact />
              </div>
              <div className="text-2xl font-bold text-center text-rainbow">
                Frontend & Mobile Engginer
              </div>
            </div>
            <div className="px-4 py-3">
              <div className="text-justify">
                Experienced in both React js and React Native with strong
                knowledge with Typescript and Special Concept:
              </div>
              <ul className="list-disc px-8">
                <li>Redux (Redux-Thunk)</li>
                <li>React Hook</li>
                <li>Atomic Design</li>
                <li>SEO Website</li>
                <li>PWA</li>
                <li>SPA</li>
              </ul>
            </div>
          </div>

          <div
            className={`border border-green p-2 min-h-[400px] bg-background bg-opacity-50 backdrop-blur-sm rounded hover:-translate-y-2 hover:scale-110 duration-500 ${
              inView ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="flex flex-row gap-3 justify-center items-center">
              <div className="text-8xl ">
                <IoLogoNodejs />
              </div>
              <div className="text-2xl font-bold text-center text-rainbow">
                Backend Node Js & Express JS
              </div>
            </div>
            <div className="px-4 py-3">
              <div className="text-justify">
                Create API and Restfull API with JWT concept for authentication
                with Express JS, Adonis and Strapi. knowledge special concept:
              </div>
              <ul className="list-disc px-8">
                <li>Authentication and Authorization</li>
                <li>SQl and NoSQL</li>
                <li>Postgresql, Mysql and MongoDB</li>
                <li>Firebase Severless Concept</li>
                <li>SOLID</li>
                <li>Storage (MinIo & Firebase Storage)</li>
              </ul>
            </div>
          </div>

          <div
            className={`border border-green p-2 min-h-[400px] bg-background bg-opacity-50 backdrop-blur-sm rounded hover:-translate-y-2 hover:scale-110 duration-500 ${
              inView ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="flex flex-row gap-3 justify-center items-center">
              <div className="text-8xl ">
                <IoLogoDocker />
              </div>
              <div className="text-2xl font-bold text-center text-rainbow">
                Devops and Docker Containerize
              </div>
            </div>
            <div className="px-4 py-3 ">
              <div className="text-justify">
                Build Image and Containerize Node, laravel and Firebase Hosting
                for pipeline, many knowledge special conscept
              </div>
              <ul className="list-disc px-8">
                <li>Docker (Image & Container)</li>
                <li>CI/CD</li>
                <li>Gitlab Pipeline</li>
                <li>SSH</li>
                <li>Linux Server Operation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
