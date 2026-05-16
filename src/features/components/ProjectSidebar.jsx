import { Plus } from "lucide-react";
import SidebarDropdown from "./ui/SidebarDropdown";
import { sidebarTabs } from "../../data/initialBoard";

const ProjectSidebar = () => {
  const IconSize = 14;

  return (
    <aside className="w-64 h-screen bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-6">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-600">Projects</h1>
        <div
          className="ml-auto h-6 w-6 rounded-full bg-[var(--color-primary)] 
        cursor-pointer p-1 flex items-center justify-center hover:scale-110 
        transition-all duration-200 ease-in-out"
        >
          <Plus color="white" size={IconSize} />
        </div>
      </div>

      <SidebarDropdown sidebarTabs={sidebarTabs} />
    </aside>
  );
};

export default ProjectSidebar;
