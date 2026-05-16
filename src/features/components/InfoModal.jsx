import React from 'react';
import { X, Calendar, User, Tag, Activity } from 'lucide-react';

const InfoModal = ({ isOpen, onClose, projectTitle }) => {
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
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Project Information</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Active Project</label>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-100">
                  {projectTitle.charAt(0)}
                </div>
                <span className="text-lg font-bold text-blue-900">{projectTitle}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-2xl space-y-1">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Created</span>
                </div>
                <p className="text-sm font-bold text-gray-700">Oct 12, 2023</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl space-y-1">
                <div className="flex items-center gap-2 text-gray-400">
                  <User size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Owner</span>
                </div>
                <p className="text-sm font-bold text-gray-700">Felix A.</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-semibold flex items-center gap-2">
                  <Activity size={16} className="text-blue-500" />
                  Project Progress
                </span>
                <span className="text-blue-600 font-bold">65%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full w-[65%] shadow-[0_0_8px_rgba(37,99,235,0.4)]"></div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold">#SaaS</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold">#Development</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold">#Q4-Goals</span>
            </div>
          </div>

          <div className="mt-10">
            <button 
              onClick={onClose}
              className="w-full py-4 bg-gray-800 text-white font-bold rounded-2xl hover:bg-gray-900 transition-all active:scale-[0.98] shadow-xl shadow-gray-200"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
