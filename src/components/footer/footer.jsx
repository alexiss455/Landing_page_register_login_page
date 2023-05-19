import Logo from "../header/logo";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const createFooterList = (title, links) => (
  <ul className="text-gray-500">
    <li className="text-lg font-bold text-white ">{title}</li>
    <li className="flex flex-col mt-4 gap-1">
      {links.map((link, index) => (
        <a key={index} href="#" className="hover:text-cyan-400 duration-200">
          {link}
        </a>
      ))}
    </li>
  </ul>
);

const Footer = () => (
  <div className="bg-slate-950 py-16">
    <div className="max-w-7xl mx-auto flex justify-between max-lg:flex-col gap-8 max-xl:px-4">
      <Logo className={"text-white hover:text-cyan-400 max-md:text-center duration-200"} />
      <div className="flex gap-20 max-md:flex-col max-md:gap-14 max-md:text-center">
        {createFooterList("Features", [
          "Link Shortening",
          "Branded Links",
          "Analytics",
        ])}
        {createFooterList("Resources", ["Blog", "Developers", "Support"])}
        {createFooterList("Company", [
          "About",
          "Our Team",
          "Careers",
          "Contact",
        ])}

        <ul className="text-white flex gap-3 text-3xl max-md:justify-center max-md:mt-10 ">
          <AiFillFacebook  className="hover:text-cyan-400 "/>
          <AiFillTwitterSquare  className="hover:text-cyan-400 "/>
          <AiFillLinkedin  className="hover:text-cyan-400 "/>
          <AiFillInstagram  className="hover:text-cyan-400 "/>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
