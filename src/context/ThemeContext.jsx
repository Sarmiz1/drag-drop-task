import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = {
    // Shared Global Colors
    colors: {
      primary: "bg-blue-600 text-white",
      secondary: "bg-gray-100 text-gray-800",
    },
    
    // Shared Icon Sizes
    iconSizes: {
      sm: 14, // e.g. SidebarDropdown
      md: 16, // e.g. TaskCard, BoardColumn
      lg: 18, // e.g. MembersCard
      xl: 22, // e.g. IconSidebar
    },

    // TaskCard specific styles
    task: {
      tags: {
        "UI Design": "bg-purple-100 text-purple-700",
        "Development": "bg-blue-100 text-blue-700",
        "Research": "bg-orange-100 text-orange-700",
      },
      defaultTag: "bg-gray-100 text-gray-700",
      priorities: {
        High: "bg-red-400",
        Medium: "bg-yellow-400",
        Low: "bg-green-400",
      },
      defaultPriority: "bg-gray-300",
    },

    // MembersCard Avatar Gradients
    avatarGradients: [
      "bg-gradient-to-tr from-blue-300 to-indigo-400",
      "bg-gradient-to-tr from-emerald-300 to-teal-400",
      "bg-gradient-to-tr from-rose-300 to-pink-400",
      "bg-gradient-to-tr from-amber-300 to-orange-400",
      "bg-gradient-to-tr from-purple-300 to-fuchsia-400",
    ],
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
