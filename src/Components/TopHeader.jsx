import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  "IQAC",
  "R&D",
  "NBA",
  "NAAC",
  "UBA",
  "MOOCs",
  "ARIIA",
  "IIC",
  "IDEA Lab",
  "Anti-ragging",
];

const TopHeader = () => {
  return (
    <div className="bg-[#9b2c2c] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* LEFT SECTION */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-300" />
            <span>9831817307</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <FaEnvelope className="text-yellow-300" />
            <span>info@nsec.ac.in</span>
          </div>
        </div>

        {/* CENTER LINKS */}
        <div className="hidden lg:flex items-center gap-4">
          {quickLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-yellow-300 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* RIGHT SOCIALS */}
        <div className="flex items-center gap-4">
          <FaFacebookF className="cursor-pointer hover:text-yellow-300 transition" />
          <FaInstagram className="cursor-pointer hover:text-yellow-300 transition" />
          <FaWhatsapp className="cursor-pointer hover:text-yellow-300 transition" />

          <a href="#" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;