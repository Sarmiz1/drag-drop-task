import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCorners,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import BoardColumn from "./BoardColumn";
import TaskCard from "../components/ui/TaskCard";
import TaskModal from "./TaskModal";

const Board = ({ 
  boardData, 
  activeTask, 
  editingTask,
  setEditingTask,
  handleAddTask, 
  handleUpdateTask,
  handleDeleteTask,
  handleDragStart, 
  handleDragOver, 
  handleDragEnd 
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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
              onAddTask={handleAddTask}
            >
              <SortableContext
                items={column.tasks.map((t) => t.id)}
                strategy={verticalListSortingStrategy}
              >
                {column.tasks.map((task) => (
                  <TaskCard 
                    key={task.id} 
                    task={task} 
                    onEdit={() => setEditingTask(task)}
                  />
                ))}
              </SortableContext>
            </BoardColumn>
          </div>
        ))}
      </section>

      {/* Task Edit Modal */}
      <TaskModal 
        task={editingTask}
        onSave={handleUpdateTask}
        onDelete={handleDeleteTask}
        onClose={() => setEditingTask(null)}
      />

      <DragOverlay dropAnimation={dropAnimation}>
        {activeTask ? <TaskCard task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Board;
