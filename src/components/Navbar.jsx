import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Paperclip,
  HomeIcon,
  CheckCircleIcon,
  X,
  Menu,
} from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const lists = [
    {
      name: "Home",
      icon: <HomeIcon className="inline h-4 w-4" />,
      href: "/home",
      action: () => window.location.reload(), // This will reload the page on 'Home' click
    },
    {
      name: "Certifications",
      icon: <CheckCircleIcon className="inline h-4 w-4" />,
      href: "/certifications",
    },
    {
      name: "Resume",
      icon: <Paperclip className="inline h-4 w-4" />,
      href: "/resume",
    },
  ];

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-10 backdrop-blur-md">
      <div className="container px-4 mx-auto relative text-md">
        <div className="flex justify-between lg:justify-center items-center">
          <ul className="hidden lg:flex space-x-24 items-center">
            {lists.map((item, index) => (
              <li key={index} className="relative group">
                <span className="text-red-700 pr-2 items-center pb-10">
                  {item.icon}
                </span>
                <Link
                  to={item.href}
                  onClick={item.name === "Home" ? item.action : undefined} // Reload only when 'Home' is clicked
                  className="text-neutral-300 cursor-pointer font-normal group-hover:text-transparent group-hover:bg-clip-text hover:bg-gradient-to-r from-red-400 to-red-800 transition duration-300 ease-in-out hover:font-medium"
                >
                  {item.name}
                </Link>
                {/* Underline below the text */}
                <span className="absolute left-5 right-0 h-1 rounded-full bg-red-800 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 bottom-[-4px]"></span>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex justify-center ml-auto">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X className="text-purple-200" />
              ) : (
                <Menu className="text-purple-200" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-black w-full pl-5 flex flex-col justify-center lg:hidden">
            <ul className="flex flex-col mt-5 mb-5 space-y-5">
              {lists.map((item, index) => (
                <li key={index}>
                  <span className="text-red-700 pr-2 items-center pb-10">
                    {item.icon}
                  </span>
                  <Link
                    to={item.href}
                    onClick={item.name === "Home" ? item.action : undefined} // Reload on 'Home' click in mobile drawer as well
                    className="hover:bg-gradient-to-r hover:from-red-400 hover:to-red-800 hover:text-transparent hover:bg-clip-text text-neutral-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
