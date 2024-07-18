import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const navItemsInfo = [
  { name: "Home", type: "link" },

  { name: "Articles", type: "link" },

  { name: "Page", type: "dropdown", items: ["About Us", "Contact Us"] },

  { name: "Pricing", type: "link" },

  { name: "Faq", type: "link" },
];

const NavItem = ({ item }) => {
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0  group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <>
          <a href="/" className="px-4 py- flex gap-x-2 items-center">
            <span> {item.name}</span>
            <MdKeyboardArrowDown />
          </a>
          <div className="hidden transition-all duration-500 pt-4 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max">
            <ul className="flex flex-col shadow-lg rounded-lg overflow-hidden sm:gap-3 gap-4">
              {item.items.map((page) => (
                <li>
                  <a
                    href="/"
                    className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((c) => {
      return !c;
    });
  };
  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between items-center">
        <div>
          <img className="w-16" src={images.Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-50 mt-5">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row item-center fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white lg:text-dark-soft flex flex-col lg:flex-row gap-y-4 gap-x-2 font-semibold items-center mt-3">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className=" mt-3 lg:mt-2 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-alll duration 300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
