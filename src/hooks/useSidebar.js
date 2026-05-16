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

  return {
    activeIndex,
    setActiveIndex,
    sidebarTabs,
    handleAddProject,
  };
};
