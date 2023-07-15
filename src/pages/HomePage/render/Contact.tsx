import {
  SiGmail,
  SiGitlab,
  SiGithub,
  SiLinkedin,
  SiInstagram,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

function Contact() {
  const { ref, inView } = useInView({
    delay: 400,
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div className="mt-10 mb-10 mx-2 md:px-20 lg:px-44 xl:px-80" ref={ref}>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 bg-background bg-opacity-50 p-5 border gap-5 border-red ${
          inView ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="text-rainbow text-center text-1xl">
          Thank you for reviewing, contact me
        </div>
        <div className="flex justify-center gap-x-7 flex-wrap gap-y-2">
          <div className="text-3xl hover:text-red cursor-pointer">
            <a href="mailto:dimsdeall@gmail.com">
              <SiGmail />
            </a>
          </div>
          <div className="text-3xl hover:text-red cursor-pointer">
            <a href="https://gitlab.com/dimsdeall" target="_blank">
              <SiGitlab />
            </a>
          </div>
          <div className="text-3xl hover:text-red cursor-pointer">
            <a href="https://github.com/dimsdeall" target="_blank">
              <SiGithub />
            </a>
          </div>
          <div className="text-3xl hover:text-red cursor-pointer">
            <a href="https://linkedin.com/in/dimsdeall" target="_blank">
              <SiLinkedin />
            </a>
          </div>
          <div className="text-3xl hover:text-red cursor-pointer">
            <a href="https://instagram.com/dimsdeall" target="_blank">
              <SiInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
