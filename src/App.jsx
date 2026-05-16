import "./App.css";
import TopBar from "./features/components/TopBar";
import ProjectSidebar from "./features/components/ProjectSidebar";
import IconSidebar from "./features/components/IconSidebar";
import Board from "./features/board/Board";

function App() {
  return (
    <div className="flex h-screen bg-gray-50/50 overflow-hidden text-gray-800">
      {/* Primary Sidebar (Icon Menu) */}
      <IconSidebar />

      {/* Secondary Sidebar (Project Menus) */}
      <ProjectSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-x-auto overflow-y-hidden">
          <Board />
        </main>
      </div>
    </div>
  );
}

export default App;
