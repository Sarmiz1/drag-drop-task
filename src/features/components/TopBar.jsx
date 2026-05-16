import { Info, Search } from "lucide-react";
import MembersCard from "./ui/MembersCard";
import { teamMembers } from "../../data/initialBoard";

const title = "Cohorts-based courses";

const TopBar = () => {
  const IconSize = 20;
  const membersCount = teamMembers.length;

  return (
    <header className="px-8 pt-6 pb-2 w-full">
      <nav className="flex items-center bg-white shadow-sm w-full px-8 py-4 rounded-2xl border border-gray-100">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{title}</h1>
          <Info
            className="text-gray-400 cursor-pointer hover:text-blue-500 transition-colors"
            size={IconSize}
          />
        </div>

        <div className="relative flex items-center gap-2 ml-auto">
          <input
            type="text"
            placeholder="Search tasks..."
            className="border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all rounded-full py-2.5 pl-11 pr-4 w-[280px] text-sm text-gray-700 placeholder-gray-400"
          />
          <Search
            size={18}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer"
          />
        </div>

        {/* Vertical Line */}
        <div className="w-[1px] h-8 bg-gray-200 mx-6"></div>

        <div className="flex items-center gap-2">
          <p className="font-semibold text-lg text-gray-800">{membersCount}</p>
          <span className="text-gray-500 text-sm font-medium">Members</span>
        </div>

        <div className="ml-5">
          <MembersCard members={teamMembers} />
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
