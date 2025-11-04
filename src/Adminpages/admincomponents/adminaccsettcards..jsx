import { useState } from "react";
import Accsettbg from "../../assets/accsettbg.png";

export default function AdminAccsettCards() {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    username: "LanceAtendidas",
    email: "LanceAtendidase@example.com",
    password: "",
    phone: "09123456789",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password successfully changed!"); // replace this with API call later
    setIsModalOpen(false);
    setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="h-full w-full bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl px-6 md:px-12 py-8 flex flex-col gap-4 overflow-visible">
      {/* Header */}
      <div
        className="bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl text-white py-5 px-5 md:px-20 flex justify-center sm:justify-start text-center"
        style={{ backgroundImage: `url(${Accsettbg})` }}
      >
        <h1 className="font-[MDMilk] md:font-[BoldMilk] tracking-[3px] md:tracking-[15px] text-[20px] md:text-[30px] text-white">
          ACCOUNT SETTINGS
        </h1>
      </div>

      {/* Form Card */}
      <div className="h-full bg-gradient-to-r from-[#fff3ec] to-[#f1c4aa] shadow-[15px_13px_0px_#330101] rounded-2xl px-6 md:px-16 py-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Username */}
          <div>
            <label className="block text-[#4b150d] font-bold mb-1">Username</label>
            <input
              name="username"
              disabled={!isEditing}
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-[#4b150d] bg-white text-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#4b150d] font-bold mb-1">Email</label>
            <input
              name="email"
              disabled={!isEditing}
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-[#4b150d] bg-white text-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[#4b150d] font-bold mb-1">Password</label>
            <input
              name="password"
              type="password"
              disabled={!isEditing}
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-[#4b150d] bg-white text-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-[#4b150d] font-bold mb-1">Phone Number</label>
            <input
              name="phone"
              disabled={!isEditing}
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-[#4b150d] bg-white text-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          <div className="flex flex-col md:flex-row justify-start gap-5">
            <button
            onClick={() => setIsEditing(!isEditing)}
            className="font-LightMilk px-6 py-2 bg-[#4b150d] text-white rounded-lg shadow hover:bg-[#5c1e15] transition"
          >
            {isEditing ? "Save" : "Edit"}
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="font-LightMilk px-6 py-2 bg-[#db6747] text-white rounded-lg shadow hover:bg-[#c55a3f] transition"
          >
            Change Password
          </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-bold text-[#4b150d] mb-4">Change Password</h2>
            <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[#4b150d] font-semibold mb-1">Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={passwordData.oldPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 rounded-lg border border-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
                />
              </div>
              <div>
                <label className="block text-[#4b150d] font-semibold mb-1">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 rounded-lg border border-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
                />
              </div>
              <div>
                <label className="block text-[#4b150d] font-semibold mb-1">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 rounded-lg border border-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
                />
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#db6747] text-white hover:bg-[#c55a3f] transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
