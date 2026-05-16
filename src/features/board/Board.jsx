import { Plus } from "lucide-react";
import TaskCard from "../components/ui/TaskCard";

const Board = () => {
  const iconSize = 16;
  const contentCount = 3;
  return (
    <section className="grid grid-cols-3 p-5 gap-12">
      {/*       BoardColumn.jsx  */}
      {/* Todo */}
      <div>
        <div className="flex items-center">
          <h2 className="text-base font-semibold flex items-center gap-2">
            To do{" "}
            <span
              className="bg-gray-100 w-5 h-5 flex items-center justify-center 
        rounded-full text-black/50 text-sm"
            >
              {contentCount}
            </span>
          </h2>
          <span
            className="bg-gray-100 w-10 h-6 flex items-center justify-center 
        rounded-full text-black/50 ml-auto"
          >
            <Plus size={iconSize} />
          </span>
        </div>

        <TaskCard />
      </div>

      {/* In progress */}
      <div className="flex items-center">
        <h2 className="text-base font-semibold flex items-center gap-2">
          In progress{" "}
          <span
            className="bg-gray-100 w-5 h-5 flex items-center justify-center 
        rounded-full text-black/50 text-sm"
          >
            {contentCount}
          </span>
        </h2>
        <span
          className="bg-gray-100 w-10 h-6 flex items-center justify-center 
        rounded-full text-black/50 ml-auto"
        >
          <Plus size={iconSize} />
        </span>
      </div>

      {/* Done */}
      <div className="flex items-center">
        <h2 className="text-base font-semibold flex items-center gap-2">
          Done{" "}
          <span
            className="bg-gray-100 w-5 h-5 flex items-center justify-center 
        rounded-full text-black/50 text-sm"
          >
            {contentCount}
          </span>
        </h2>
        <span
          className="bg-gray-100 w-10 h-6 flex items-center justify-center 
        rounded-full text-black/50 ml-auto"
        >
          <Plus size={iconSize} />
        </span>
      </div>
    </section>
  );
};

export default Board;
