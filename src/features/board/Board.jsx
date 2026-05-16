import BoardColumn from "./BoardColumn";
import TaskCard from "../components/ui/TaskCard";

const Board = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 p-6 gap-6 lg:gap-8 h-full min-h-[calc(100vh-100px)] overflow-x-auto">
      {/* Todo Column */}
      <BoardColumn title="To do" count={3}>
        <TaskCard
          title="Design new landing page"
          tag="UI Design"
          priority="High"
        />
        <TaskCard title="Create user flows" tag="Research" priority="Medium" />
        <TaskCard title="Update design system" tag="UI Design" priority="Low" />
      </BoardColumn>

      {/* In Progress Column */}
      <BoardColumn title="In progress" count={1}>
        <TaskCard
          title="Implement board layout"
          tag="Development"
          priority="High"
        />
      </BoardColumn>

      {/* Done Column */}
      <BoardColumn title="Done" count={2}>
        <TaskCard
          title="Setup React project"
          tag="Development"
          priority="Low"
        />
        <TaskCard
          title="Configure Tailwind CSS"
          tag="Development"
          priority="Low"
        />
      </BoardColumn>
    </section>
  );
};

export default Board;
