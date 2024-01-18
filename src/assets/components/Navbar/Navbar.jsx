import { useState } from "react";
import React from "react";
import Links from "../Links/Links";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    { name: "Home", id: 1, path: "/home" },
    { name: "About", id: 2, path: "/about" },
    { name: "Contact", id: 3, path: "/contact" },
    { name: "Products", id: 4, path: "/products" },
  ];
  return (
    <div>
      <button
        className="md:hidden h-full p-2 rounded bg-teal-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {isOpen ? (
            <XMarkIcon className="h-8 w-8 text-white-500" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-white-500" />
          )}
        </span>
      </button>
      <ul
        className={`md:flex transition-all text-white duration-500 h-full p-10 md:p-3 gap-14 absolute bg-teal-600 md:sticky ${
          isOpen ? "left-0" : "-left-48"
        }`}
      >
        {routes.map((eachroute) => (
          <Links key={eachroute.id} route={eachroute}></Links>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
