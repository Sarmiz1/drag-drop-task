import { ChevronDown, Folder, Cog, Check, Flame } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";

const SidebarDropdown = ({ sidebarTabs = [] }) => {
  // Use an object to track the open state of each individual tab by its ID
  const [openTabs, setOpenTabs] = useState({});
  const { iconSizes } = useTheme();

  const toggleTab = (id) => {
    setOpenTabs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {sidebarTabs.map((tab) => {
        const isDropdownOpen = openTabs[tab.id] || false;

        return (
          <div key={tab.id}>
            <div
              className="w-full h-8 flex items-center justify-between bg-white shadow 
              rounded p-2 cursor-pointer"
              onClick={() => toggleTab(tab.id)}
            >
              <div className="flex items-center gap-2">
                {(() => {
                  switch (tab.id) {
                    case 1:
                      return <Folder size={iconSizes.sm} />;
                    case 2:
                      return <Flame size={iconSizes.sm} />;
                    case 3:
                      return <Cog size={iconSizes.sm} />;
                    case 4:
                      return <Check size={iconSizes.sm} />;
                    default:
                      return null;
                  }
                })()}
                <h3>{tab.title}</h3>
              </div>
              <div
                className={`${isDropdownOpen ? "rotate-0" : "-rotate-90"} 
                transition-transform duration-200 ease-in-out flex items-center justify-center`}
              >
                <button className="cursor-pointer flex items-center justify-center">
                  <ChevronDown size={iconSizes.sm} />
                </button>
              </div>
            </div>

            {/* Tab Contents */}
            <div
              className={`grid  mt-2 transition-all duration-300 ease-in-out ${
                isDropdownOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden flex flex-col gap-1">
                {tab.contents?.map((content) => (
                  <div
                    key={content.id}
                    className={`ml-6 p-2 rounded-md transition-colors ${
                      content.active ? "bg-gray-100" : "hover:bg-gray-50"
                    }`}
                  >
                    <h2 className="text-gray-600">{content.title}</h2>
                  </div>
                ))}

                {tab.contents?.length === 0 && (
                  <p className="text-gray-400 text-sm font-normal text-center py-4">
                    Empty
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
