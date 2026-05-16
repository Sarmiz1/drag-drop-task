import React from 'react';
import { X, File, Download, ExternalLink, Plus } from 'lucide-react';

const AttachmentsModal = ({ isOpen, onClose, taskTitle }) => {
  if (!isOpen) return null;

  const mockAttachments = [
    { id: 1, name: "Landing_Page_Wireframe.pdf", size: "2.4 MB", type: "PDF", date: "Oct 12, 2023" },
    { id: 2, name: "Style_Guide_v2.fig", size: "12.8 MB", type: "FIGMA", date: "Oct 14, 2023" },
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
              <h2 className="text-xl font-bold text-gray-800">Attachments</h2>
              <p className="text-xs text-gray-400 font-medium truncate max-w-[250px]">{taskTitle}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
              <X size={20} />
            </button>
          </div>

          {/* Attachments List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {mockAttachments.map((file) => (
              <div key={file.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl group hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                  <File size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-gray-800 truncate">{file.name}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{file.size} • {file.date}</p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white text-gray-400 hover:text-blue-600 rounded-lg shadow-sm transition-colors">
                    <Download size={16} />
                  </button>
                  <button className="p-2 bg-white text-gray-400 hover:text-blue-600 rounded-lg shadow-sm transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}

            {/* Upload Area */}
            <button className="w-full py-8 border-2 border-dashed border-gray-100 rounded-[2rem] flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-blue-500 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
              <div className="p-3 bg-gray-50 rounded-full group-hover:bg-blue-100 transition-colors">
                <Plus size={24} />
              </div>
              <span className="text-sm font-bold">Upload New File</span>
              <p className="text-[10px] font-medium opacity-60">Max size 25MB per file</p>
            </button>
          </div>

          <div className="p-6 border-t border-gray-50 flex justify-end">
            <button onClick={onClose} className="px-8 py-3 bg-gray-800 text-white font-bold rounded-2xl hover:bg-gray-900 transition-all active:scale-95 shadow-xl shadow-gray-200">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttachmentsModal;
