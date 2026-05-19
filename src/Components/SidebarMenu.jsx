import React from "react";
import { sidebarLinks } from "../data/SideBarLinks";
import { BsFillDatabaseFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside
      className="
        w-75
        bg-white
        border
        border-gray-300
        shadow-sm
        h-fit
        text-center
      "
    >

      
      <div className="bg-[#8B1E1E] text-white px-4 py-3 rounded-t-xl flex justify-center">
        <h2 className="text-[14px] font-semibold uppercase tracking-wide">
          Computer Science & Engineering
          <BsFillDatabaseFill className=""/>
        </h2>
      </div>

      
      <ul className="bg-[#8B1E1E] p-0.5 pb-5 rounded-b-xl">

        {sidebarLinks.map((item) => (
          <li
            key={item}
            className="
              px-4
              py-2.5
              bg-yellow-100
              font-large
              text-blue-700
              border-b
              border-gray-200
              hover:bg-gray-100
              hover:text-[#8B1E1E]
              transition
              duration-150
              cursor-pointer
              leading-snug
            "
          >
            {item}
          </li>
        ))}

      </ul>
    </aside>
  );
};

export default Sidebar;