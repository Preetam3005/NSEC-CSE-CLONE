import React from "react";
import {
    footerData,
    footerData2,
    footerData3,
} from "../data/FooterData";

import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#9b2c2c] text-white mt-10">

            <div className="max-w-350 mx-auto px-10 py-6">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">


                    <div className="space-y-4">

                        {footerData.map((section) => (
                            <div key={section.title}>

                                <h3 className="text-[15px] font-semibold border-b border-white/30 pb-1 mb-2">
                                    {section.title}
                                </h3>

                                <div className="text-[13px] leading-7 text-yellow-300">
                                    {section.links.join("  |  ")}
                                </div>

                            </div>
                        ))}

                    </div>


                    <div className="space-y-4">

                        {footerData2.map((section) => (
                            <div key={section.title}>

                                <h3 className="text-[15px] font-semibold border-b border-white/30 pb-1 mb-2">
                                    {section.title}
                                </h3>

                                <div className="text-[13px] leading-7 text-yellow-300">
                                    {section.links.join("  |  ")}
                                </div>

                            </div>
                        ))}

                    </div>


                    <div className="space-y-4">

                        {footerData3.map((section) => (
                            <div key={section.title}>

                                <h3 className="text-[15px] font-semibold border-b border-white/30 pb-1 mb-2">
                                    {section.title}
                                </h3>

                                <div className="text-[13px] leading-7 text-yellow-300">
                                    {section.links.join("  |  ")}
                                </div>

                            </div>
                        ))}


                        <div>

                            <h3 className="text-[15px] font-semibold border-b border-white/30 pb-1 mb-3">
                                Connect us
                            </h3>

                            <div className="flex gap-2">

                                {[FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope].map(
                                    (Icon, index) => (
                                        <div
                                            key={index}
                                            className="
                        w-9
                        h-9
                        border
                        border-yellow-400
                        flex
                        items-center
                        justify-center
                        hover:bg-yellow-400
                        hover:text-[#9b2c2c]
                        transition
                        cursor-pointer
                      "
                                        >
                                            <Icon size={14} />
                                        </div>
                                    )
                                )}

                            </div>
                        </div>

                    </div>


                    <div>

                        <h3 className="text-[15px] font-semibold border-b border-white/30 pb-1 mb-3">
                            Photo Gallery
                        </h3>

                        <div className="grid grid-cols-3 gap-2 mb-4">

                            <img
                                src="https://www.nsec.ac.in/images/home/pg1111.jpg"
                                className="h-16 w-full object-cover"
                            />

                            <img
                                src="https://www.nsec.ac.in/images/home/pg2.jpg"
                                className="h-16 w-full object-cover"
                            />

                            <img
                                src="https://www.nsec.ac.in/images/home/pg5.jpg"
                                className="h-16 w-full object-cover"
                            />

                        </div>

                        <img
                            src="https://www.nsec.ac.in/images/gallery/techno_echo/techno_echo.jpg"
                            alt=""
                            className="mb-5 border border-white/20"
                        />

                        <h3 className="text-[15px] font-semibold border-b border-white/30 pb-1 mb-3">
                            Locate us
                        </h3>
                        <a href="https://www.google.com/maps/place/Netaji+Subhash+Engineering+College/@22.47616,88.414933,3219m/data=!3m1!1e3!4m6!3m5!1s0x3a02722b05a38e87:0x276c0d30e6be12ea!8m2!3d22.4762788!4d88.4149452!16s%2Fm%2F026y4qr?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D">

                            <img
                                src="https://www.nsec.ac.in/images/home/google-location.jpg"
                                alt=""
                                className="border border-white/20"
                            />
                        </a>

                    </div>

                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="bg-[#6f1717] py-4 text-[13px]">

                <div className="max-w-350 mx-auto px-10 flex flex-col md:flex-row justify-between items-center">

                    <p>
                        © 2020 Netaji Subhash Engineering College. All Rights Reserved.
                    </p>

                    <p className="mt-2 md:mt-0">
                        Privacy Policy
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;