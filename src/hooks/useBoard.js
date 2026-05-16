import { useState, useCallback } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { initialBoardData } from '../data/initialBoard';

export const useBoard = (activeProjectId) => {
  // Store boards for each project ID
  const [allBoards, setAllBoards] = useState({
    101: initialBoardData, // Default project
  });
  
  const [activeTask, setActiveTask] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  // Get current board or create a default one if it doesn't exist
  const boardData = allBoards[activeProjectId] || initialBoardData.map(col => ({ ...col, tasks: [] }));

  const setBoardData = useCallback((updater) => {
    setAllBoards((prev) => {
      const currentBoard = prev[activeProjectId] || initialBoardData.map(col => ({ ...col, tasks: [] }));
      const nextBoard = typeof updater === 'function' ? updater(currentBoard) : updater;
      return {
        ...prev,
        [activeProjectId]: nextBoard,
      };
    });
  }, [activeProjectId]);

  const findColumn = useCallback((id) => {
    if (boardData.find((col) => col.id === id)) {
      return id;
    }
    return boardData.find((col) => col.tasks.find((task) => task.id === id))?.id;
  }, [boardData]);

  const handleAddTask = useCallback((columnId) => {
    const newTask = {
      id: `task-${Date.now()}`,
      title: "New Task",
      description: "",
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

    setEditingTask({ ...newTask, columnId });
  }, [setBoardData]);

  const handleUpdateTask = useCallback((updatedTask) => {
    setBoardData((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.map((task) =>
          task.id === updatedTask.id ? { ...task, ...updatedTask } : task
        ),
      }))
    );
    setEditingTask(null);
  }, [setBoardData]);

  const handleDeleteTask = useCallback((taskId) => {
    setBoardData((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.filter((task) => task.id !== taskId),
      }))
    );
    setEditingTask(null);
  }, [setBoardData]);

  const handleAddTaskMember = useCallback((taskId, member) => {
    setBoardData((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.map((task) =>
          task.id === taskId
            ? { 
                ...task, 
                assignees: [...(task.assignees || []), member] 
              }
            : task
        ),
      }))
    );
  }, [setBoardData]);

  const handleAddComment = useCallback((taskId, comment) => {
    setBoardData((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.map((task) =>
          task.id === taskId
            ? { ...task, comments: [...(task.comments || []), comment] }
            : task
        ),
      }))
    );
  }, [setBoardData]);

  const handleAddAttachment = useCallback((taskId, attachment) => {
    setBoardData((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.map((task) =>
          task.id === taskId
            ? { ...task, attachments: [...(task.attachments || []), attachment] }
            : task
        ),
      }))
    );
  }, [setBoardData]);

  const handleDragStart = useCallback((event) => {
    const { active } = event;
    const activeId = active.id;
    const task = boardData
      .flatMap((col) => col.tasks)
      .find((t) => t.id === activeId);
    setActiveTask(task);
  }, [boardData]);

  const handleDragOver = useCallback((event) => {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over?.id;

    if (!overId) return;

    const activeColumnId = findColumn(activeId);
    const overColumnId = findColumn(overId);

    if (!activeColumnId || !overColumnId || activeColumnId === overColumnId) {
      return;
    }

    setBoardData((prev) => {
      const activeItems = prev.find((col) => col.id === activeColumnId).tasks;
      const overItems = prev.find((col) => col.id === overColumnId).tasks;

      const activeIndex = activeItems.findIndex((t) => t.id === activeId);
      const overIndex = overItems.findIndex((t) => t.id === overId);

      let newIndex;
      if (prev.find((col) => col.id === overId)) {
        newIndex = overItems.length;
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          event.delta.y > 0;

        const modifier = isBelowLastItem ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length;
      }

      return prev.map((col) => {
        if (col.id === activeColumnId) {
          return {
            ...col,
            tasks: col.tasks.filter((t) => t.id !== activeId),
          };
        } else if (col.id === overColumnId) {
          return {
            ...col,
            tasks: [
              ...col.tasks.slice(0, newIndex),
              activeItems[activeIndex],
              ...col.tasks.slice(newIndex),
            ],
          };
        } else {
          return col;
        }
      });
    });
  }, [findColumn, setBoardData]);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over?.id;

    if (!overId) {
      setActiveTask(null);
      return;
    }

    const activeColumnId = findColumn(activeId);
    const overColumnId = findColumn(overId);

    if (activeColumnId && overColumnId && activeColumnId === overColumnId) {
      const activeIndex = boardData
        .find((col) => col.id === activeColumnId)
        .tasks.findIndex((t) => t.id === activeId);
      const overIndex = boardData
        .find((col) => col.id === overColumnId)
        .tasks.findIndex((t) => t.id === overId);

      if (activeIndex !== overIndex) {
        setBoardData((prev) =>
          prev.map((col) =>
            col.id === activeColumnId
              ? {
                  ...col,
                  tasks: arrayMove(col.tasks, activeIndex, overIndex),
                }
              : col
          )
        );
      }
    }

    setActiveTask(null);
  }, [boardData, findColumn, setBoardData]);

  return {
    boardData,
    activeTask,
    editingTask,
    setEditingTask,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
    handleAddTaskMember,
    handleAddComment,
    handleAddAttachment,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  };
};
