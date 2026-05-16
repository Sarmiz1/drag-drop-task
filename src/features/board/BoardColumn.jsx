import { Plus } from "lucide-react";
import { useDroppable } from "@dnd-kit/core";

const BoardColumn = ({ id, title, count = 0, onAddTask, children }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  return (
    <div className="flex flex-col h-full group/col">
      {/* Column Header */}
      <div className="flex items-center mb-1 animate-in fade-in slide-in-from-left-4 duration-500">
        <h2 className="text-base font-semibold flex items-center gap-2 text-gray-800">
          {title}
          <span
            key={count}
            className="bg-gray-100 w-6 h-6 flex items-center justify-center 
            rounded-full text-gray-500 text-sm font-medium animate-in zoom-in duration-300"
          >
            {count}
          </span>
        </h2>
        
        {/* Add Task Button */}
        <button
          onClick={() => onAddTask(id)}
          className="bg-gray-100 hover:bg-blue-600 w-10 h-6 flex items-center justify-center 
          rounded-full text-gray-400 hover:text-white transition-all cursor-pointer ml-auto hover:shadow-lg hover:shadow-blue-200"
        >
          <Plus size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* Column Content Area (Droppable Zone) */}
      <div 
        ref={setNodeRef}
        className={`flex flex-col h-full rounded-2xl transition-all duration-300 pb-10 min-h-[200px] flex-1 ${
          isOver ? "bg-blue-50/50 ring-2 ring-blue-200 ring-dashed" : "bg-transparent"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default BoardColumn;
