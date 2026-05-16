import * as LucideIcons from "lucide-react";
import { memo } from "react";
import { Logo } from "./ui/Logo";
import { useTheme } from "../../context/ThemeContext";
import { teamMembers, iconSidebarIcons } from "../../data/initialBoard";

const IconSidebar = ({ activeIndex, setActiveIndex }) => {
  const { iconSizes } = useTheme();

  return (
    <div
      className="bg-[var(--color-primary)] h-[calc(100vh-1rem)] w-20 rounded-[2.5rem] m-2
      flex flex-col items-center py-8 text-white gap-8 shadow-2xl relative"
    >
      {/* Top Section - Beautiful 3D Logo */}
      <Logo />

      {/* Middle Section - Navigation Icons */}
      <div className="flex flex-col items-center gap-6 w-full">
        {iconSidebarIcons.map((iconName, index) => {
          const Icon = LucideIcons[iconName];
          const isActive = activeIndex === index;
          const isSettings = iconName === "Settings";

          if (!Icon) return null;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex items-center justify-center w-10 h-10 rounded-2xl cursor-pointer transition-all duration-300
                ${isActive ? "bg-white/20 text-white shadow-inner" : "text-white/60 hover:text-white hover:bg-white/5"}
                ${isSettings ? "mb-6" : ""}
              `}
            >
              <Icon
                size={iconSizes.lg}
                className={`transition-transform duration-300 ${isActive ? "scale-110" : ""}`}
              />

              {/* Horizontal Divider Line below Settings */}
              {isSettings && (
                <div className="w-8 h-[1px] bg-white/20 absolute -bottom-6"></div>
              )}

              {/* Active Dot Indicator */}
              {isActive && (
                <div className="absolute -right-3 flex items-center justify-center animate-pulse">
                  <LucideIcons.Dot
                    size={32}
                    className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Section - User Avatar */}
      <div className="rounded-full bg-gradient-to-tr from-gray-300 to-gray-50 h-10 w-10 mt-auto p-[2px] cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md">
        <div className="bg-[var(--color-primary)] w-full h-full rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={teamMembers[0].img}
            alt="User Avatar"
            className="w-full h-full object-cover bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default IconSidebar;
