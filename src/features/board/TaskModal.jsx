import React, { useState, useEffect } from 'react';
import { X, Trash2, Check } from 'lucide-react';

const TaskModal = ({ task, onSave, onDelete, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tag: 'Development',
    priority: 'Medium'
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        description: task.description || '',
        tag: task.tag || 'Development',
        priority: task.priority || 'Medium'
      });
    }
  }, [task]);

  if (!task) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...task, ...formData });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Edit Task</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Title</label>
            <input
              autoFocus
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-800 font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="What needs to be done?"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Description</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              placeholder="Add more details..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Tag */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Tag</label>
              <select
                value={formData.tag}
                onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="UI Design">UI Design</option>
                <option value="Development">Development</option>
                <option value="Research">Research</option>
                <option value="Planning">Planning</option>
              </select>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onDelete(task.id)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 font-semibold transition-all"
            >
              <Trash2 size={18} />
              <span>Delete</span>
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-xl text-gray-500 hover:bg-gray-100 font-semibold transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
              >
                <Check size={18} />
                <span>Save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
