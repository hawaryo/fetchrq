"use client";
import { useState } from "react";
import Logo from "./icons/logo";
import CloseIcon from "./icons/CloseIcon";
import OpenIcon from "./icons/OpenIcon";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="mx-auto flex max-w-[110rem] items-center justify-between border-b-1 border-black p-4">
      <Logo />
      <div
        className={`absolute top-[5.6rem] mx-auto text-[2rem] ${open ? "flex" : "hidden"} sm:text-[1.5rem] h-[100vh] w-[100vw] flex-col items-center border-t-2 border-black bg-white p-2 pt-5 sm:static sm:mx-0 sm:flex sm:h-auto sm:w-auto sm:border-none sm:p-0`}
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
