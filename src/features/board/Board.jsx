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
  handleDragEnd,
  activeFilters = [],
  searchQuery = "",
  onAddMember
}) => {
  // Use a unique key to trigger animations when the board data changes significantly (like project switch)
  // We can't easily get the project ID here unless we pass it, so let's just use the columns as a proxy 
  // or expect it in props.
  
  // Filter the data based on active filters and search query
  const filteredBoardData = boardData.map(column => ({
    ...column,
    tasks: column.tasks.filter(task => {
      // 1. Filter by Search Query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = task.title.toLowerCase().includes(query);
        const matchesDesc = task.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc) return false;
      }

      // 2. Filter by Active Filters (Priority)
      if (activeFilters.length > 0) {
        const priorityMatch = activeFilters.some(filter => 
          filter.toLowerCase().includes(task.priority.toLowerCase())
        );
        if (!priorityMatch) return false;
      }
      
      return true;
    })
  }));
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
        {filteredBoardData.map((column) => (
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
