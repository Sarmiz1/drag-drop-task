import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import BoardColumn from "./BoardColumn";
import TaskCard from "../components/ui/TaskCard";
import { useState } from "react";

const Board = ({ boardData, setBoardData, onAddTask }) => {
  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const findColumn = (id) => {
    if (boardData.find((col) => col.id === id)) {
      return id;
    }

    return boardData.find((col) => col.tasks.find((task) => task.id === id))?.id;
  };

  const handleDragStart = (event) => {
    const { active } = event;
    const activeId = active.id;
    const task = boardData
      .flatMap((col) => col.tasks)
      .find((t) => t.id === activeId);
    setActiveTask(task);
  };

  const handleDragOver = (event) => {
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
  };

  const handleDragEnd = (event) => {
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
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <section className="flex lg:grid lg:grid-cols-3 p-4 lg:p-6 gap-6 lg:gap-8 h-full min-h-[calc(100vh-100px)] overflow-x-auto items-start">
        {boardData.map((column) => (
          <div key={column.id} className="min-w-[320px] lg:min-w-0 w-full h-full">
            <BoardColumn
              id={column.id}
              title={column.title}
              count={column.tasks.length}
              onAddTask={onAddTask}
            >
              <SortableContext
                items={column.tasks.map((t) => t.id)}
                strategy={verticalListSortingStrategy}
              >
                {column.tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </SortableContext>
            </BoardColumn>
          </div>
        ))}
      </section>

      <DragOverlay dropAnimation={dropAnimation}>
        {activeTask ? <TaskCard task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Board;
