import React from "react";

const MainHeader = () => {
  return (
    <div className="bg-white border-b border-gray-300">

      {/* MAIN HEADER CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-2 h-[100px] flex items-center justify-between">

        {/* LEFT LOGO SECTION */}
        <div className="w-[15%] flex items-center justify-center">

          <a href="https://www.nsec.ac.in/index2.php">
            <img
              src="https://www.nsec.ac.in/images/Logo_16X35inch.jpg"
              alt="NSEC Logo"
              className="w-[120px] h-auto object-contain"
            />
          </a>

        </div>

        {/* CENTER TEXT SECTION */}
        <div className="w-[50%] text-center">

          <h1 className="text-[20px] lg:text-[28px] font-bold uppercase text-[#8B1E1E] tracking-wide leading-tight">
            Netaji Subhash
            Engineering College
          </h1>

          <hr className="w-48 mx-auto my-1 border-[#8B1E1E]/40" />

          <p className="text-[10px] lg:text-[12px] text-gray-700 leading-snug">
            Approved by AICTE, Affiliated to MAKAUT, Accredited by NBA*
            (Programmes) and NAAC & Ranked by NIRF# [2020] & ARIIA
          </p>

        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="w-[35%] flex items-center justify-end gap-3">

          {/* ICCE */}
          <a
            href="https://icce.org.in/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://icce.org.in/assets/logos/icce2026-logo-FINAL_red.png?v=1.0.1"
              alt="ICCE 2026"
              className="w-[110px] h-auto object-contain"
            />
          </a>

          {/* FEEDBACK */}
          <a href="#">
            <img
              src="https://www.nsec.ac.in/images/sthofefo_01.jpg"
              alt="Feedback Form"
              className="w-[80px] h-auto object-contain"
            />
          </a>

          {/* ADMISSION */}
          <a href="#">
            <img
              src="https://www.nsec.ac.in/images/Animation-nsec.gif"
              alt="Admission Open"
              className="w-[170px] h-auto object-contain"
            />
          </a>

        </div>
      </div>
    </div>
  );
};

export default MainHeader;