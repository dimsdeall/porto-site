import { RefObject } from "react";
import logo from "../../../asset/img/logo192.png";
import { ButtonSlide } from '../../../components/atoms'
import { RefProps } from "..";

interface NavbarProps {
    ref: RefObject<HTMLDivElement>
    onScroll:(args:RefProps) => void
}

function Navbar({ref, onScroll}:NavbarProps) {
  return (
    <div className="px-3 md:px-10 py-2 grid md:grid-cols-3 " ref={ref}>
    <div className="hidden md:block">
      <img alt="logo" src={logo} className="h-28" />
    </div>
    <div className="grid col-span-2 md:justify-items-end items-center rounded-sm">
      <div className="flex gap-x-3 p-7 bg-background bg-opacity-60 rounded border-[1px] border-green backdrop-blur-[3px] animate-fade-in justify-center flex-wrap gap-y-4 sm:gap-y-0">
        <ButtonSlide label="Expertise" onClick={() => onScroll('Tech')} />
        <ButtonSlide label="Project" onClick={() => onScroll('Project')} />
        <ButtonSlide label="About" onClick={() => onScroll('Nav')} />
      </div>
    </div>
  </div>
  )
}

export default Navbar