import { ChevronDown, Folder, Cog, Check, Flame } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";

const SidebarDropdown = ({ sidebarTabs = [], onSelectProject }) => {
  const [openTabs, setOpenTabs] = useState({ 1: true }); // Default first one open
  const { iconSizes } = useTheme();

  const toggleTab = (id) => {
    setOpenTabs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {sidebarTabs.map((tab) => {
        const isDropdownOpen = openTabs[tab.id] || false;

        return (
          <div key={tab.id} className="flex flex-col">
            <button
              className="w-full h-10 flex items-center justify-between px-3 py-2 cursor-pointer group hover:bg-gray-50 rounded-xl transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-100"
              onClick={() => toggleTab(tab.id)}
              aria-expanded={isDropdownOpen}
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                  {(() => {
                    switch (tab.title) {
                      case "Main Projects": return <Folder size={14} />;
                      case "Archive": return <Flame size={14} />;
                      case "Priority": return <Flame size={14} />;
                      case "Daily": return <Folder size={14} />;
                      case "Account": return <Cog size={14} />;
                      default: return <Folder size={14} />;
                    }
                  })()}
                </div>
                <h3 className="text-[14px] font-bold text-gray-700 tracking-tight">{tab.title}</h3>
              </div>
              <ChevronDown 
                size={14} 
                className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-0" : "-rotate-90"}`} 
              />
            </button>

            {/* Tab Contents */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isDropdownOpen ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-1 pl-10 pr-2">
                {tab.contents?.map((content) => (
                  <button
                    key={content.id}
                    onClick={() => onSelectProject(content.id)}
                    className={`group flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all duration-200 outline-none ${
                      content.active 
                        ? "bg-blue-50 text-blue-700 focus:ring-2 focus:ring-blue-200" 
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-800 focus:bg-gray-50"
                    }`}
                  >
                    <span className="text-[13px] font-semibold">{content.title}</span>
                    {content.active && (
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                    )}
                  </button>
                ))}

                {tab.contents?.length === 0 && (
                  <p className="text-gray-400 text-[12px] font-medium pl-2 py-2 italic">
                    No items found
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarDropdown;
