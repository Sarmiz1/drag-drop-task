import { Plus } from "lucide-react";

// Premium gradients for avatar backgrounds (looks amazing with transparent SVG avatars)
const cardColors = [
  "bg-gradient-to-tr from-blue-300 to-indigo-400",
  "bg-gradient-to-tr from-emerald-300 to-teal-400",
  "bg-gradient-to-tr from-rose-300 to-pink-400",
  "bg-gradient-to-tr from-amber-300 to-orange-400",
  "bg-gradient-to-tr from-purple-300 to-fuchsia-400",
];

const MembersCard = ({ members = [] }) => {
  const IconSize = 18;

  // Provide mock data if members array is empty for visual testing
  const displayMembers =
    members?.length > 0
      ? members
      : [
          {
            id: 0,
            img: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent",
          },
          {
            id: 1,
            img: "https://api.dicebear.com/7.x/notionists/svg?seed=Aneka&backgroundColor=transparent",
          },
          {
            id: 2,
            img: "https://api.dicebear.com/7.x/notionists/svg?seed=Jasper&backgroundColor=transparent",
          },
        ];

  return (
    <div className="flex items-center -space-x-2.5">
      {displayMembers.map((member, index) => {
        const bgClass = cardColors[index % cardColors.length];

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
        style={{ zIndex: 10000 }}
        className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white cursor-pointer
        border-[2px] border-dashed border-gray-300 text-gray-400 
        hover:text-blue-600 hover:border-blue-400 hover:border-solid hover:bg-blue-50 
        transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:!z-[100]"
      >
        <Plus size={IconSize} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default MembersCard;
