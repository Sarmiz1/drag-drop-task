import { Info, Search, Plus } from "lucide-react";
import MembersCard from "./ui/MembersCard";

const members = [
  { id: 1, name: "John Doe", role: "Admin" },
  { id: 2, name: "Jane Doe", role: "User" },
  { id: 3, name: "John Doe", role: "Admin" },
  { id: 4, name: "Jane Doe", role: "User" },
];
const title = "Cohorts-based courses";

const TopBar = () => {
  const IconSize = 20;
  const membersCount = members.length;

  return (
    <nav className="container fixed flex items-center bg-white shadow-sm w-full px-12 py-4 mt-4 rounded-2xl">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <Info
          className="text-gray-400 cursor-pointer relative top-1"
          size={IconSize}
        />
      </div>

      <div className="relative flex items-center gap-2 ml-auto">
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-gray-300 rounded-2xl p-2 w-[240px] px-12"
        />
        <Search
          size={IconSize}
          className="text-gray-400 absolute top-3 left-3 cursor-pointer"
        />
      </div>

      {/* Vertical Line */}
      <div className="w-[1px] h-8 bg-gray-300 mx-5"></div>

      <div className="flex items-center gap-2">
        <p className="font-semibold text-lg text-gray-900">{membersCount}</p>
        <span className="text-gray-600">Members</span>
      </div>

      <div className=" ml-5">
        <MembersCard members={members} />
      </div>
    </nav>
  );
};

export default TopBar;
