import React from "react";
import { FaHome, FaChevronDown } from "react-icons/fa";
import { navLinks } from "../data/Navlinks";

const Navbar = () => {
  return (
    <nav className="bg-[#8B1E1E] text-white shadow-md">

      <div className="max-w-350 mx-auto">

        <ul className="flex items-center justify-center">

          {/* HOME ICON */}
          <li
            className="
              px-4
              py-3
              border-r
              border-white/10
              hover:bg-[#6f1717]
              transition
              duration-200
              cursor-pointer
            "
          >
            <FaHome className="text-yellow-300 text-sm" />
          </li>

          {/* NAV LINKS */}
          {navLinks.map((link) => (
            <li
              key={link.title}
              className="
                relative
                group
                border-r
                border-white/10
              "
            >

              {/* NAV TITLE */}
              <div
                className="
                  flex
                  items-center
                  gap-1
                  px-3
                  py-3
                  text-[11px]
                  lg:text-[12px]
                  font-semibold
                  uppercase
                  tracking-wide
                  hover:bg-[#6f1717]
                  transition
                  duration-200
                  cursor-pointer
                  whitespace-nowrap
                "
              >
                {link.title}

                {link.dropdown && (
                  <FaChevronDown className="text-[8px]" />
                )}
              </div>

              {/* DROPDOWN */}
              {link.dropdown && (
                <ul
                  className="
                    absolute
                    left-0
                    top-full
                    hidden
                    group-hover:block
                    bg-[#6f1717]
                    text-white
                    hover:text-yellow-100
                    min-w-70
                    shadow-xl
                    z-50
                    border
                    border-gray-200
                  "
                >

                  {link.dropdown.map((item) => (
                    <li
                      key={item}
                      className="
                        px-4
                        py-3
                        text-[12px]
                        font-medium
                        border-b
                        border-gray-100
                        transition
                        duration-150
                        cursor-pointer
                      "
                    >
                      {item}
                    </li>
                  ))}

                </ul>
              )}

            </li>
          ))}

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;