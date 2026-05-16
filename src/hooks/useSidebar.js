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

  const handleSelectProject = useCallback((projectId) => {
    setSidebarTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        tabContent: tab.tabContent.map((group) => ({
          ...group,
          contents: group.contents.map((item) => ({
            ...item,
            active: item.id === projectId,
          })),
        })),
      }))
    );
  }, []);

  const activeProjectTitle = sidebarTabs
    .flatMap(tab => tab.tabContent)
    .flatMap(group => group.contents)
    .find(item => item.active)?.title || "Dashboard";

  return {
    activeIndex,
    setActiveIndex,
    sidebarTabs,
    activeProjectTitle,
    handleAddProject,
    handleSelectProject,
  };
};
