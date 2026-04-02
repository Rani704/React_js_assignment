import { Bell, Command, Search } from "lucide-react";
import logo from "../assets/aventisia_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faK } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="w-full  sm:px-6 py-3 flex items-center justify-between bg-gradient-to-r from-[#1E1B4B] via-[#2a255f] to-[#1E1B4B] text-white shadow-lg">
      
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
        />
        <span className="font-bold text-lg sm:text-xl">Workspace</span>

        {/* Hide on small screens */}
        <select className="hidden sm:block text-white px-3 py-1.5 rounded-full text-sm bg-white/10">
          <option>Workspace 1</option>
        </select>
      </div>

      {/* CENTER SEARCH (hidden on mobile) */}
      <div className="hidden md:flex flex-1 justify-center px-4">
        <div className="relative w-full max-w-xl">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search..."
            className="w-full bg-white/10 px-4 py-2 pl-10 pr-16 rounded-md text-sm outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-blue-600"
          />

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <Command size={14} className="text-gray-400" />
            <FontAwesomeIcon icon={faK} className="text-gray-400 text-xs" />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-4">
        
        {/* Show search icon on mobile */}
        <button className="md:hidden">
          <Search size={18} />
        </button>

        <Bell size={18} />

        <div className="bg-purple-300 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
          GK
        </div>
      </div>
    </div>
  );
};

export default Navbar;