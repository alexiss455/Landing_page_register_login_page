import { useState } from "react";
import Logo from "./logo";
import Menu_bar from "./menu_bar";
import Authentication from "../authentication_form/authentication";
function Navbar() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen((prevValue) => !prevValue);
  }
  const [login, setLogin] = useState(false);
  function handleLogin() {
    setLogin((prevValue) => !prevValue);
    document.body.classList.add("no-scroll");
  }
  const ifShowAuthForm = () => {
    setLogin(!login);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className="fixed w-full right-0 top-0 bg-white z-50">
      <div className="flex justify-between items-center max-xl:px-4 h-24 max-w-7xl mx-auto">
        <div>
          <Logo />
        </div>
        <nav
          className={`max-md:flex-col max-md:fixed max-md:top-0
        ${
          !open ? "max-md:-right-full" : "max-md:right-0"
        } max-md:bg-slate-200 max-md:w-3/4 max-md:h-screen
        flex md:justify-between items-center max-md:justify-center
         max-md:gap-20 gap-12 text-lg font-semibold text-gray-500 duration-300`}
        >
          <ul className="flex gap-4 max-md:gap-7 max-md:flex-col max-md:items-center">
            <li className="hover:text-slate-800 duration-400">
              <a href="#">Feature</a>
            </li>
            <li className="hover:text-slate-800 duration-400">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-slate-800 duration-400">
              <a href="#">Resources</a>
            </li>
          </ul>
          <div
            onClick={handleLogin}
            className="bg-slate-800 text-white px-4 py-2 rounded-full active:scale-75 duration-300 relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:hover:bg-slate-200 after:hover:bg-opacity-30 overflow-hidden"
          >
            Sign Up
          </div>
        </nav>
        <Menu_bar
          handleClick={handleClick}
          className="max-md:absolute top-10 right-4 z-30"
          top={open === true ? "rotate-45 translate-y-1.5 " : ""}
          mid={open === true ? "opacity-0" : ""}
          bottom={open === true ? "-rotate-45 -translate-y-1.5 " : ""}
        />
      </div>
      <Authentication login={login} ifShowAuthForm={ifShowAuthForm} />
    </header>
  );
}

export default Navbar;
