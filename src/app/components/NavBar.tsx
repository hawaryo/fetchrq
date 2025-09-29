"use client";
import { useState } from "react";
import Logo from "./icons/logo";
import CloseIcon from "./icons/CloseIcon";
import OpenIcon from "./icons/OpenIcon";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="mx-auto flex max-w-[110rem] items-center justify-between border-b-2 border-black p-4">
      <Logo />
      <div
        className={`sm:text[1rem] absolute top-[5.6rem] mx-auto ${open ? "flex" : "hidden"} w-[100vw] h-[100vh] flex-col items-center border-t-2 border-black bg-white p-2 pt-5 text-[2rem] sm:h-auto sm:flex sm:static sm:mx-0 sm:w-auto sm:border-none sm:p-0`}
      >
        <ul className="flex flex-col gap-5 sm:flex-row">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="sm:hidden" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <OpenIcon />}
      </div>
    </nav>
  );
}
