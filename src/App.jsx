import { useState } from "react";
import "./App.css";
import TopBar from "./features/components/TopBar";
import Sidebar from "./features/components/Sidebar";
import IconSidebar from "./features/components/IconSidebar";
import Board from "./features/board/Board";

import { initialBoardData, sidebarTabs as initialSidebarTabs } from "./data/initialBoard";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Lift state for board and sidebar
  const [boardData, setBoardData] = useState(initialBoardData);
  const [sidebarTabs, setSidebarTabs] = useState(initialSidebarTabs);

  // Handler to add a new task to a specific column
  const handleAddTask = (columnId) => {
    const newTask = {
      id: `task-${Date.now()}`,
      title: "New Task",
      description: "Click to edit description",
      tag: "Development",
      priority: "Medium",
      comments: 0,
      attachments: 0,
      assignees: [],
    };

    setBoardData((prev) =>
      prev.map((col) =>
        col.id === columnId ? { ...col, tasks: [newTask, ...col.tasks] } : col
      )
    );
  };

  // Handler to add a new project category (tab content)
  const handleAddProject = (tabId) => {
    const newProject = {
      id: Date.now(),
      title: "New Project",
      active: false,
    };

    setSidebarTabs((prev) =>
      prev.map((tab) =>
        tab.id === tabId
          ? {
              ...tab,
              tabContent: tab.tabContent.map((group, index) =>
                index === 0 
                  ? { ...group, contents: [...group.contents, newProject] }
                  : group
              ),
            }
          : tab
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-50/50 overflow-hidden text-gray-800 relative">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebars Container (Responsive) */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Primary Sidebar (Icon Menu) */}
        <IconSidebar
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        {/* Secondary Sidebar (Project Menus) */}
        <Sidebar 
          activeIndex={activeIndex} 
          sidebarTabs={sidebarTabs}
          onAddProject={handleAddProject}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden w-full">
        <TopBar onMenuToggle={() => setMobileMenuOpen(true)} />
        <main className="flex-1 overflow-x-auto overflow-y-hidden">
          <Board boardData={boardData} setBoardData={setBoardData} onAddTask={handleAddTask} />
        </main>
      </div>
    </div>
  );
}

export default App;
