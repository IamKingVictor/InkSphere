import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

// const navItemsInfo = [
//   { name: "Home", type: "link" },

//   { name: "Articles", type: "link" },

//   { name: "Page", type: "dropdown", items: ["About Us", "Contact Us"] },

//   { name: "Pricing", type: "link" },

//   { name: "Faq", type: "link" },
// ];

// const NavItem = ({ item }) => {
//   const [dropdown, setDropdown] = useState(false);

//   const toggleDropdownHandler = () => {
//     setDropdown((curState) => {
//       return !curState;
//     });
//   };
//   return (
//     <li className="relative group">
//       {item.type === "link" ? (
//         <>
//           <a href="/" className="px-4 py-2">
//             {item.name}
//           </a>
//           <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0  group-hover:right-[90%] opacity-0 group-hover:opacity-100">
//             /
//           </span>
//         </>
//       ) : (
//         <div className="flex flex-col items-center">
//           <button
//             href="/"
//             className="px-4 py- flex gap-x-2 items-center"
//             onClick={toggleDropdownHandler}
//           >
//             <span> {item.name}</span>
//             <MdKeyboardArrowDown />
//           </button>
//           <div
//             className={`${
//               dropdown ? "block" : "hidden"
//             }lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
//           >
//             <ul className="flex flex-col text-center shadow-lg rounded-lg overflow-hidden sm:gap-3 gap-4">
//               {item.items.map((page) => (
//                 <li>
//                   <a
//                     href="/"
//                     className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
//                   >
//                     {page}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </li>
//   );
// };

// const Header = () => {
//   const [navIsVisible, setNavIsVisible] = useState(false);

//   const navVisibilityHandler = () => {
//     setNavIsVisible((c) => {
//       return !c;
//     });
//   };
//   return (
//     <section>
//       <header className="container mx-auto px-5 flex justify-between items-center">
//         <div>
//           <img className="w-16" src={images.Logo} alt="logo" />
//         </div>
//         <div className="lg:hidden z-50 mt-5">
//           {navIsVisible ? (
//             <AiOutlineClose
//               className="w-6 h-6"
//               onClick={navVisibilityHandler}
//             />
//           ) : (
//             <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
//           )}
//         </div>
//         <div
//           className={`${
//             navIsVisible ? "right-0" : "-right-full"
//           } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row item-center fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
//         >
//           <ul className="text-white lg:text-dark-soft flex flex-col lg:flex-row gap-y-4 gap-x-2 font-semibold items-center mt-3">
//             {navItemsInfo.map((item) => (
//               <NavItem key={item.name} item={item} />
//             ))}
//           </ul>
//           <button className=" mt-3 lg:mt-2 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-alll duration 300">
//             Sign in
//           </button>
//         </div>
//       </header>
//     </section>
//   );
// };

// export default Header;

const navItems = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About Us", "Contact Us"] },
  { name: "Pricing", type: "link" },
  { name: "FAQ", type: "link" },
];

const NavItem = ({ item }) => {
  // fix pages dropdown on mobile
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((currentState) => {
      return !currentState;
    });
  };

  return (
    <li className="group relative hover:text-blue-500">
      {item.type === "link" ? (
        <>
          <a className="px-4 py-2">{item.name}</a>
        </>
      ) : (
        // else we're implementing a wway to show the pages dropdown, with links to other pages
        // the group-hover:block here allows us to display the children (ul in this case) as block elements when we hover on the div itself, the default value is hidden
        <div className="flex flex-col items-center">
          <button onClick={toggleDropdownHandler} className="px-4 py-2">
            <span className="flex gap-x-1 items-center">
              {item.name} <MdKeyboardArrowDown />
            </span>
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-md overflow-hidden">
              {item.items.map((page) => (
                <a
                  key={page}
                  href="/"
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navOpenHandler = () => {
    setNavOpen((currentState) => {
      return !currentState;
    });
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-4 flex justify-between py-4 items-center">
        <div>
          <img src={images.Logo} alt="Logo" className="w-20 md:w-18" />
        </div>

        {/* hamburger */}
        <div className="z-50 lg:hidden">
          {navOpen ? (
            <AiOutlineClose onClick={navOpenHandler} className="w-6 h-6" />
          ) : (
            <AiOutlineMenu onClick={navOpenHandler} className="w-6 h-6" />
          )}
        </div>
        {/* hamburger */}

        {/* nav bar */}
        <div
          className={` ${
            navOpen ? "left-0" : "-left-full"
          } transition-all duration-300 mt-[56px] lg:mt-0  bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="flex flex-col items-center gap-y-5 lg:flex-row gap-x-9 font-semibold text-[14px] text-white lg:text-dark-soft">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className="border-2 border-blue-500 px-6 py-2 mt-5 lg:mt-0 w-[50%] rounded-md text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-[14px]">
            Sign In
          </button>
        </div>
        {/* navbar */}
      </header>
    </section>
  );
};

export default Header;
