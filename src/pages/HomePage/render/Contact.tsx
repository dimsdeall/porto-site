import { SiGmail, SiGitlab, SiGithub, SiLinkedin } from "react-icons/si";

function Contact() {
  return (
    <div className="mt-10 mb-10 mx-2">
      <div className="flex justify-center gap-x-7">
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
      </div>
    </div>
  );
}

export default Contact;
