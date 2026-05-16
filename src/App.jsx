import { useState } from "react";
import "./App.css";
import TopBar from "./features/components/TopBar";
import Sidebar from "./features/components/Sidebar";
import IconSidebar from "./features/components/IconSidebar";
import Board from "./features/board/Board";

import { useBoard } from "./hooks/useBoard";
import { useSidebar } from "./hooks/useSidebar";
import { useLayout } from "./hooks/useLayout";
import { useTeam } from "./hooks/useTeam";
import SettingsModal from "./features/components/SettingsModal";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [settingsModal, setSettingsModal] = useState({ isOpen: false, activeTab: "Profile" });
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useLayout();
  const { activeIndex, setActiveIndex, sidebarTabs, activeProjectTitle, activeProjectId, activeFilters, handleAddProject, handleSelectProject } = useSidebar();
  const { members, handleAddMember } = useTeam();
  const boardProps = useBoard(activeProjectId);

  const onSelectProject = (itemId) => {
    const item = handleSelectProject(itemId);
    // Detect if "Profile" (3001) or "Billing" (3002) was clicked
    if (itemId === 3001 || itemId === 3002) {
      setSettingsModal({ 
        isOpen: true, 
        activeTab: itemId === 3001 ? "Profile" : "Billing" 
      });
    }
  };

  return (
    <div className="flex h-screen bg-gray-50/50 overflow-hidden text-gray-800 relative">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={closeMobileMenu}
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
          onSelectProject={onSelectProject}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden w-full">
        <TopBar 
          onMenuToggle={toggleMobileMenu} 
          title={activeProjectTitle}
          members={members}
          onAddMember={handleAddMember}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <main className="flex-1 overflow-x-auto overflow-y-hidden">
          <Board 
            key={activeProjectId}
            {...boardProps} 
            activeFilters={activeFilters} 
            searchQuery={searchQuery}
            onAddMember={(taskId) => {
              const randomMember = members[Math.floor(Math.random() * members.length)];
              boardProps.handleAddTaskMember(taskId, randomMember);
            }}
          />
        </main>
      </div>

      <SettingsModal 
        isOpen={settingsModal.isOpen} 
        activeTab={settingsModal.activeTab}
        onClose={() => setSettingsModal({ ...settingsModal, isOpen: false })}
      />
    </div>
  );
}

export default App;
