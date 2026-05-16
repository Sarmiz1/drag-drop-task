import BoardColumn from "./BoardColumn";
import TaskCard from "../components/ui/TaskCard";
import { initialBoardData } from "../../data/initialBoard";

const Board = () => {
  return (
    <section
      className="flex lg:grid lg:grid-cols-3 p-4 lg:p-6 gap-6 lg:gap-8
     h-full min-h-[calc(100vh-100px)] overflow-x-auto items-start"
    >
      {initialBoardData.map((column) => (
        <div key={column.id} className="min-w-[320px] lg:min-w-0 w-full h-full">
          <BoardColumn title={column.title} count={column.tasks.length}>
            {column.tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </BoardColumn>
        </div>
      ))}
    </section>
  );
};

export default Board;
