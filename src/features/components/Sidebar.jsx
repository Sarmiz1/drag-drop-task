import { Plus } from "lucide-react";
import SidebarDropdown from "./ui/SidebarDropdown";
import { sidebarTabs } from "../../data/initialBoard";

const Sidebar = ({ activeIndex }) => {
  const IconSize = 14;

  return (
    <aside className="w-72 h-[calc(100vh-1rem)] my-2 mr-2 bg-white shadow-xl rounded-[2.5rem] p-7 flex flex-col gap-6 overflow-y-auto shrink-0 border border-gray-100/50">
      {sidebarTabs.map(
        (tab) =>
          activeIndex === tab.id && (
            <div key={tab.id} className="flex-col gap-6">
              <div className="flex items-center mb-6">
                <h1 className="text-[22px] font-bold text-gray-800 tracking-tight">
                  {tab.header}
                </h1>
                <div
                  className="ml-auto h-7 w-7 rounded-full bg-[var(--color-primary)] 
        cursor-pointer p-1 flex items-center justify-center hover:scale-110 
        transition-all duration-200 ease-in-out shadow-sm"
                >
                  <Plus color="white" size={16} strokeWidth={2.5} />
                </div>
              </div>

              <SidebarDropdown sidebarTabs={tab.tabContent} />
            </div>
          ),
      )}
    </aside>
  );
};

export default Sidebar;
