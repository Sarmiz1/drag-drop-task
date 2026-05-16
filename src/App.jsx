import "./App.css";
import TopBar from "./features/components/TopBar";
import Sidebar from "./features/components/Sidebar";
import IconSidebar from "./features/components/IconSidebar";
import Board from "./features/board/Board";

import { useBoard } from "./hooks/useBoard";
import { useSidebar } from "./hooks/useSidebar";
import { useLayout } from "./hooks/useLayout";

function App() {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useLayout();
  const { activeIndex, setActiveIndex, sidebarTabs, handleAddProject } = useSidebar();
  const boardProps = useBoard();

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
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden w-full">
        <TopBar onMenuToggle={toggleMobileMenu} />
        <main className="flex-1 overflow-x-auto overflow-y-hidden">
          <Board {...boardProps} />
        </main>
      </div>
    </div>
  );
}

export default App;
