import { Info, Search, Menu } from "lucide-react";
import MembersCard from "./ui/MembersCard";

const TopBar = ({ onMenuToggle, title = "Dashboard", members = [], onAddMember, searchQuery, onSearchChange }) => {
  const IconSize = 20;
  const membersCount = members.length;

  return (
    <header className="px-4 lg:px-8 pt-4 lg:pt-6 pb-2 w-full">
      <nav className="flex items-center bg-white shadow-sm w-full px-4 lg:px-8 py-3 lg:py-4 rounded-2xl border border-gray-100">
        
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuToggle}
          className="lg:hidden mr-3 p-1.5 rounded-lg text-gray-500 hover:bg-gray-50"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center gap-3">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-tight line-clamp-1">{title}</h1>
          <Info
            className="text-gray-400 cursor-pointer hover:text-blue-500 transition-colors hidden sm:block"
            size={IconSize}
          />
        </div>

        <div className="relative hidden md:flex items-center gap-2 ml-auto">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all rounded-full py-2.5 pl-11 pr-4 w-[200px] lg:w-[280px] text-sm text-gray-700 placeholder-gray-400"
          />
          <Search
            size={18}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer"
          />
        </div>

        {/* Vertical Line */}
        <div className="w-[1px] h-8 bg-gray-200 mx-4 lg:mx-6 hidden sm:block"></div>

        <div className="hidden sm:flex items-center gap-2 ml-auto md:ml-0">
          <p className="font-semibold text-lg text-gray-800">{membersCount}</p>
          <span className="text-gray-500 text-sm font-medium">Members</span>
        </div>

        <div className="ml-auto sm:ml-5 scale-90 sm:scale-100">
          <MembersCard members={members} onAdd={onAddMember} />
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
