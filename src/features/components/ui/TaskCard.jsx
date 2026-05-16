import { Ellipsis, MessageSquare, Paperclip } from "lucide-react";
import MembersCard from "./MembersCard";
import { useTheme } from "../../../context/ThemeContext";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task: taskData, onEdit, onAddMember, onMoreOptions }) {
  const { id, title, description, tag, priority, comments, attachments, assignees } = taskData;
  const { task, iconSizes } = useTheme();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? 'grabbing' : 'pointer',
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onEdit();
    }
  };

  const currentTagStyle = task.tags[tag] || task.defaultTag;
  const priorityColor = task.priorities[priority] || task.defaultPriority;

  return (
    <article
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onEdit}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="group w-full bg-white rounded-2xl p-4 mt-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 
      hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out relative overflow-hidden touch-none
      focus:ring-2 focus:ring-blue-400 outline-none"
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
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onMoreOptions?.();
            }}
            className="text-gray-400 hover:text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-50 hover:bg-gray-100 p-1.5 rounded-md focus:opacity-100"
          >
            <Ellipsis size={16} />
          </button>
        </div>

        {/* Task Title */}
        <h3 className="text-gray-800 font-semibold text-[15px] leading-snug mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Optional Description Snippet */}
        {description && (
          <p className="text-gray-400 text-xs line-clamp-2 mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {/* Subtle Divider */}
        <div className="w-full h-[1px] bg-gray-50 mb-3"></div>

        {/* Footer: Meta counts & Assignees */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="flex items-center gap-1.5 hover:text-gray-600 transition-colors cursor-pointer">
              <MessageSquare size={iconSizes.sm} />
              <span className="text-xs font-medium">{comments}</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-gray-600 transition-colors cursor-pointer">
              <Paperclip size={iconSizes.sm} />
              <span className="text-xs font-medium">{attachments}</span>
            </div>
          </div>

          <div 
            className="scale-90 origin-right"
            onClick={(e) => e.stopPropagation()}
          >
            <MembersCard 
              members={assignees} 
              onAdd={() => onAddMember?.(id)}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
