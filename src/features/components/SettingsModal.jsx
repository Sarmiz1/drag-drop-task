import React from 'react';
import { X, User, CreditCard, Bell, Shield, LogOut } from 'lucide-react';

const SettingsModal = ({ isOpen, onClose, activeTab = "Profile" }) => {
  if (!isOpen) return null;

  const menuItems = [
    { id: "Profile", icon: <User size={18} />, label: "Profile" },
    { id: "Billing", icon: <CreditCard size={18} />, label: "Billing" },
    { id: "Notifications", icon: <Bell size={18} />, label: "Notifications" },
    { id: "Security", icon: <Shield size={18} />, label: "Security" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl h-[600px] rounded-[2.5rem] shadow-2xl overflow-hidden flex animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r border-gray-100 p-8 flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 mb-8">Settings</h2>
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === item.id 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-red-500 hover:bg-red-50 transition-all mt-auto">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-8 flex items-center justify-between border-b border-gray-50">
            <h3 className="text-lg font-bold text-gray-800">{activeTab} Settings</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-10 flex-1 overflow-y-auto">
            {activeTab === "Profile" ? (
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-3xl bg-blue-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="Profile" />
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-bold text-gray-700 transition-colors">
                      Change Avatar
                    </button>
                    <p className="text-xs text-gray-400 mt-2">JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                    <input type="text" defaultValue="Felix Antigravity" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-800 font-medium focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input type="email" defaultValue="felix@example.com" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-800 font-medium focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bio</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="Tell us about yourself..." />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="p-4 bg-gray-50 rounded-full text-gray-300">
                  <CreditCard size={48} />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Coming Soon</h4>
                <p className="text-gray-400 max-w-xs">We're working hard to bring you {activeTab.toLowerCase()} settings as soon as possible.</p>
              </div>
            )}
          </div>

          <div className="p-8 border-t border-gray-50 flex justify-end gap-3">
            <button onClick={onClose} className="px-6 py-3 rounded-xl text-gray-500 hover:bg-gray-100 font-semibold transition-all">Cancel</button>
            <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
