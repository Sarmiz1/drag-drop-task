import BoardColumn from "./BoardColumn";
import TaskCard from "../components/ui/TaskCard";
import { initialBoardData } from "../../data/initialBoard";

const Board = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 p-6 gap-6 lg:gap-8 h-full min-h-[calc(100vh-100px)] overflow-x-auto">
      {initialBoardData.map((column) => (
        <BoardColumn key={column.id} title={column.title} count={column.tasks.length}>
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </BoardColumn>
      ))}
    </section>
  );
};

export default Board;
