import React from 'react';
import { X, Send, User } from 'lucide-react';

const CommentsModal = ({ isOpen, onClose, taskTitle }) => {
  if (!isOpen) return null;

  const mockComments = [
    { id: 1, user: "Felix A.", text: "This looks great! Should we add more padding?", time: "2h ago", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix" },
    { id: 2, user: "Aneka J.", text: "I've updated the color palette in the Figma file.", time: "1h ago", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Aneka" },
    { id: 3, user: "Jasper K.", text: "Let's discuss the implementation details tomorrow.", time: "30m ago", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Jasper" },
  ];

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-300 ease-out transform ${
          isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-12 scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-[500px]">
          {/* Header */}
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Comments</h2>
              <p className="text-xs text-gray-400 font-medium truncate max-w-[250px]">{taskTitle}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
              <X size={20} />
            </button>
          </div>

          {/* Comments List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {mockComments.map((comment) => (
              <div key={comment.id} className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 overflow-hidden flex-shrink-0">
                  <img src={comment.avatar} alt={comment.user} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-800">{comment.user}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{comment.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-2xl group-hover:bg-gray-100 transition-colors">
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Input */}
          <div className="p-6 border-t border-gray-50 bg-gray-50/50">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Write a comment..." 
                className="w-full bg-white border-none rounded-2xl px-5 py-4 text-sm text-gray-800 font-medium focus:ring-2 focus:ring-blue-500 outline-none shadow-sm pr-14"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsModal;
