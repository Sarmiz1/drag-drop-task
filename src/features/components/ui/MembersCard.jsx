import { Plus } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

const MembersCard = ({ members = [], onAdd }) => {
  const { avatarGradients, iconSizes } = useTheme();

  return (
    <div className="flex items-center -space-x-2.5">
      {members.map((member, index) => {
        const bgClass = avatarGradients[index % avatarGradients.length];

        return (
          <div
            key={member.id}
            // Z-index ensures the left-most avatar sits on top, typical for overlapping avatar groups.
            style={{ zIndex: index * 10 }}
            className={`relative w-10 h-10 rounded-full border-[2.5px] border-white shadow-sm 
              ${bgClass} cursor-pointer overflow-hidden transition-all duration-300 ease-out 
              hover:-translate-y-1.5 hover:scale-110 hover:shadow-lg hover:!z-[100]`}
          >
            <img
              src={member.img}
              alt="Team Member"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        );
      })}

      {/* Add New Member Button */}
      <button
        onClick={onAdd}
        style={{ zIndex: 10000 }}
        className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white cursor-pointer
        border-[2px] border-dashed border-gray-300 text-gray-400 
        hover:text-blue-600 hover:border-blue-400 hover:border-solid hover:bg-blue-50 
        transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:!z-[100]"
      >
        <Plus size={iconSizes.lg} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default MembersCard;
