import { useState, useCallback } from 'react';
import { sidebarTabs as initialSidebarTabs } from '../data/initialBoard';

export const useSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarTabs, setSidebarTabs] = useState(initialSidebarTabs);

  const handleAddProject = useCallback((tabId) => {
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
  }, []);

  const handleSelectProject = useCallback((itemId) => {
    const clickedItem = sidebarTabs
      .flatMap(tab => tab.tabContent)
      .flatMap(group => group.contents)
      .find(item => item.id === itemId);

    // If it's a settings item (in tab 3), we might want to handle it differently
    // but for now we'll just mark it active like others.
    
    setSidebarTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        tabContent: tab.tabContent.map((group) => ({
          ...group,
          contents: group.contents.map((item) => {
            if (item.id === itemId) {
              if (tab.id === 1) { // Filters tab toggles
                return { ...item, active: !item.active };
              }
              return { ...item, active: true };
            }
            if (tab.id !== 1 && tab.id === prev.find(t => t.tabContent.some(g => g.contents.some(i => i.id === itemId)))?.id) {
               return { ...item, active: false };
            }
            return item;
          }),
        })),
      }))
    );

    return clickedItem; // Return the clicked item so the caller can decide what to do
  }, [sidebarTabs]);

  const activeProject = sidebarTabs
    .find(tab => tab.id === 0)
    ?.tabContent.flatMap(group => group.contents)
    .find(item => item.active);

  const activeFilters = sidebarTabs
    .find(tab => tab.id === 1)
    ?.tabContent.flatMap(group => group.contents)
    .filter(item => item.active)
    .map(item => item.title);

  const activeProjectTitle = activeProject?.title || "Dashboard";
  const activeProjectId = activeProject?.id || 101;

  return {
    activeIndex,
    setActiveIndex,
    sidebarTabs,
    activeProjectTitle,
    activeProjectId,
    activeFilters,
    handleAddProject,
    handleSelectProject,
  };
};
