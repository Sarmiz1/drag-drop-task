import { Plus } from "lucide-react";

const BoardColumn = ({ title, count = 0, children }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Column Header */}
      <div className="flex items-center mb-1">
        <h2 className="text-base font-semibold flex items-center gap-2 text-gray-800">
          {title}
          <span
            className="bg-gray-100 w-6 h-6 flex items-center justify-center 
            rounded-full text-gray-500 text-sm font-medium"
          >
            {count}
          </span>
        </h2>
        
        {/* Add Task Button */}
        <button
          className="bg-gray-100 hover:bg-blue-50 w-10 h-6 flex items-center justify-center 
          rounded-full text-gray-400 hover:text-blue-600 transition-colors cursor-pointer ml-auto"
        >
          <Plus size={16} strokeWidth={2.5} />
        </button>
      </div>

      {/* Column Content Area (Droppable Zone) */}
      <div className="flex flex-col h-full rounded-2xl bg-transparent transition-colors pb-10">
        {children}
      </div>
    </div>
  );
};

export default BoardColumn;
