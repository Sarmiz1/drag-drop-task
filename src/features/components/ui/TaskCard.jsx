import { Ellipsis, MessageSquare, Paperclip } from "lucide-react";
import MembersCard from "./MembersCard";

function TaskCard({
  title = "Design new landing page",
  tag = "UI Design",
  priority = "High",
}) {
  const iconSize = 14;

  // Dynamic tag colors
  const tagStyles = {
    "UI Design": "bg-purple-100 text-purple-700",
    Development: "bg-blue-100 text-blue-700",
    Research: "bg-orange-100 text-orange-700",
  };

  // Dynamic priority edge colors
  const priorityColors = {
    High: "bg-red-400",
    Medium: "bg-yellow-400",
    Low: "bg-green-400",
  };

  const currentTagStyle = tagStyles[tag] || "bg-gray-100 text-gray-700";
  const priorityColor = priorityColors[priority] || "bg-gray-300";

  return (
    <article
      className="group w-full bg-white rounded-2xl p-4 mt-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 
      hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-grab active:cursor-grabbing relative overflow-hidden"
    >
      {/* Priority Indicator Line on Left Edge */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 ${priorityColor} opacity-80`}
      ></div>

      <div className="pl-1">
        {/* Header: Tag & Options Menu */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase ${currentTagStyle}`}
          >
            {tag}
          </span>
          <button className="text-gray-400 hover:text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-50 hover:bg-gray-100 p-1.5 rounded-md">
            <Ellipsis size={16} />
          </button>
        </div>

        {/* Task Title */}
        <h3 className="text-gray-800 font-semibold text-[15px] leading-snug mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Optional Description Snippet */}
        <p className="text-gray-400 text-xs line-clamp-2 mb-4 leading-relaxed">
          Create wireframes and high-fidelity mockups for the new marketing
          website...
        </p>

        {/* Subtle Divider */}
        <div className="w-full h-[1px] bg-gray-50 mb-3"></div>

        {/* Footer: Meta counts & Assignees */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="flex items-center gap-1.5 hover:text-gray-600 transition-colors cursor-pointer">
              <MessageSquare size={iconSize} />
              <span className="text-xs font-medium">3</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-gray-600 transition-colors cursor-pointer">
              <Paperclip size={iconSize} />
              <span className="text-xs font-medium">1</span>
            </div>
          </div>

          <div className="flex -space-x-2">
            <MembersCard />
          </div>
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
