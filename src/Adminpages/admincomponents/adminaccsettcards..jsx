import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import SettingsBg from "../../assets/accsettbg.png";

export default function SettingsContent() {
  const [activeTab, setActiveTab] = useState("users");
  const [showUserModal, setShowUserModal] = useState(false);
  
  const [systemInfo] = useState({
    systemName: "Dorm Management System",
    version: "1.0.0",
    contactEmail: "admin@dorm.com",
    contactPhone: "+63 123 456 7890",
    address: "123 Dormitory Street, City, Country"
  });

  const [users] = useState([
    { id: 1, username: "admin_user", fullName: "System Admin", email: "admin@dorm.com", role: "admin", status: "active" },
    { id: 2, username: "jdoe_staff", fullName: "John Doe", email: "john@dorm.com", role: "staff", status: "active" },
    { id: 3, username: "msmith_staff", fullName: "Mary Smith", email: "mary@dorm.com", role: "staff", status: "inactive" },
  ]);

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-4 sm:px-8 py-7 flex flex-col gap-3 md:gap-4">
      {/* Header */}
      <div
        className="flex flex-col bg-cover bg-center items-center text-center sm:text-start sm:items-start text-white px-8 py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-3xl w-full"
        style={{ backgroundImage: `url(${SettingsBg})` }}
      >
        <h1 className="font-BoldMilk tracking-[3px] md:tracking-[12px] text-xl md:text-2xl uppercase">
          Settings
        </h1>
      </div>

      {/* Tabs */}
      <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] rounded-2xl shadow-[5px_5px_0px_#330101] sm:shadow-[10px_8px_0px_#330101] md:shadow-[15px_13px_0px_#330101] p-6 overflow-x-auto h-full">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-6 py-2 text-xs sm:text-sm rounded-lg font-RegularMilk transition-all ${
              activeTab === "users" ? "bg-[#db6747] text-white shadow-md" : "bg-white text-[#4b150d] hover:bg-gray-100"
            }`}
          >
            User Management
          </button>
          
          <button
            onClick={() => setActiveTab("system")}
            className={`px-3 md:px-6 py-2 text-xs sm:text-sm rounded-lg font-RegularMilk ${
              activeTab === "system" ? "bg-[#db6747] text-white shadow-md" : "bg-white text-[#4b150d] hover:bg-gray-100"
            }`}
          >
            System Information
          </button>
        </div>

        {/* User Management View */}
        {activeTab === "users" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-[BoldMilk] text-[#4b150d] text-base uppercase tracking-wider">Staff Users</h2>
              <button
                onClick={() => setShowUserModal(true)}
                className="text-xs md:text-sm bg-[#db6747] text-white px-5 py-2 rounded-lg font-RegularMilk hover:bg-[#c44d30] transition-colors shadow-md uppercase tracking-tighter"
              >
                + Add User
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-0">
                <thead className="bg-[#4b150d] text-[#efd4c4] uppercase tracking-[2px] text-[10px] font-RegularMilk">
                  <tr>
                    <th className="py-4 px-4 text-left">Username</th>
                    <th className="py-4 px-4 text-left">Full Name</th>
                    <th className="py-4 px-4 text-left">Email</th>
                    <th className="py-4 px-4 text-center">Role</th>
                    <th className="py-4 px-4 text-center">Status</th>
                    <th className="py-4 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {users.map((user) => (
                    <tr key={user.id} className="text-sm hover:bg-orange-50/50 transition-colors ">
                      <td className="py-4 px-4 font-bold text-[#330101]">{user.username}</td>
                      <td className="py-4 px-4 text-gray-700">{user.fullName}</td>
                      <td className="py-4 px-4 text-gray-500 italic">{user.email}</td>
                      
                      {/* Updated ROLE Pill */}
                      <td className="py-4 px-4 text-center">
                        <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase border-2 min-w-[80px]
                          ${user.role === "admin" ? "border-red-500 text-red-600 bg-red-50" : "border-teal-500 text-teal-600 bg-teal-50"}
                        `}>
                          {user.role}
                        </span>
                      </td>

                      {/* Updated STATUS Pill */}
                      <td className="py-4 px-4 text-center">
                        <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase border-2 min-w-[80px]
                          ${user.status === "active" ? "border-green-500 text-green-600 bg-green-50" : "border-gray-400 text-gray-500 bg-gray-50"}
                        `}>
                          {user.status}
                        </span>
                      </td>

                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center gap-3">
                          <button className="text-blue-500 hover:text-blue-700 transition-transform active:scale-90"><FaEdit size={18} /></button>
                          <button className="text-red-500 hover:text-red-700 transition-transform active:scale-90"><FaTrash size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* System Information View remains unchanged as requested */}
        {activeTab === "system" && (
          <div>
            <h2 className="font-[BoldMilk] text-[#4b150d] text-xl mb-6 uppercase tracking-wider">System Configuration</h2>
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
              <div>
                <label className="block text-[#7A2E1E] font-bold uppercase text-[10px] mb-1">System Name</label>
                <input
                  type="text"
                  defaultValue={systemInfo.systemName}
                  className="w-full px-4 py-2 border border-[#4b150d]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#db6747]/20"
                />
              </div>
              <div>
                <label className="block text-[#7A2E1E] font-bold uppercase text-[10px] mb-1">Version</label>
                <input
                  type="text"
                  defaultValue={systemInfo.version}
                  className="w-full px-4 py-2 border border-[#4b150d]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#db6747]/20"
                />
              </div>
              <button className="bg-[#db6747] text-white px-6 py-2 rounded-lg font-[BoldMilk] hover:bg-[#c44d30] shadow-md transition-all active:scale-95">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>

      {/* User Modal - Simplified to match your Add Contract/Payment style */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <h3 className="font-BoldMilk text-[#4b150d] text-xl mb-4">Add New User</h3>
            <button onClick={() => setShowUserModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">✕</button>
            
            <div className="space-y-3">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-[#7A2E1E] ml-1">Username</label>
                <input placeholder="Enter username" className="w-full px-4 py-2 border border-[#4b150d]/30 rounded-md text-sm" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-[#7A2E1E] ml-1">Email</label>
                <input placeholder="Enter email address" type="email" className="w-full px-4 py-2 border border-[#4b150d]/30 rounded-md text-sm" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] uppercase font-bold text-[#7A2E1E] ml-1">Password</label>
                <input placeholder="••••••••" type="password" className="w-full px-4 py-2 border border-[#4b150d]/30 rounded-md text-sm" />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowUserModal(false)} className="flex-1 bg-[#db6747] text-white py-2 rounded-md font-bold uppercase text-xs tracking-widest hover:bg-[#c44d30] transition-all">
                  Create User
                </button>
                <button onClick={() => setShowUserModal(false)} className="flex-1 border border-[#4b150d] text-[#4b150d] py-2 rounded-md font-bold uppercase text-xs">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}