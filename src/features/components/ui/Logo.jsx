export const Logo = () => {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 mb-2 cursor-pointer group">
      {/* Ambient background glow to make it pop without a solid box */}
      <div className="absolute inset-2 bg-gradient-to-tr from-blue-500 to-pink-500 rounded-full blur-[10px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
      
      {/* Modern Abstract Brand Mark */}
      <svg
        className="w-9 h-9 relative z-10 transform transition-transform group-hover:scale-110 group-hover:-rotate-3 duration-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bottom Layer Diamond */}
        <path
          d="M20 14L34 27L20 40L6 27L20 14Z"
          fill="url(#grad_bottom)"
        />
        {/* Top Layer Diamond */}
        <path
          d="M20 0L34 13L20 26L6 13L20 0Z"
          fill="url(#grad_top)"
        />
        {/* Inner white glow dot */}
        <circle cx="20" cy="13" r="3" fill="white" className="animate-pulse shadow-xl" />

        <defs>
          <linearGradient id="grad_bottom" x1="6" y1="14" x2="34" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8B5CF6" /> {/* Purple */}
            <stop offset="1" stopColor="#EC4899" /> {/* Pink */}
          </linearGradient>
          <linearGradient id="grad_top" x1="6" y1="0" x2="34" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" /> {/* Sky Blue */}
            <stop offset="1" stopColor="#8B5CF6" /> {/* Purple */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
