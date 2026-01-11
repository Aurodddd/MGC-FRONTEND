import { useState } from "react";
import Accsettbg from "../../assets/accsettbg.png";
import { MdModeEdit, MdLock } from "react-icons/md";

export default function CaretakerAccSettCards() {
  const [editMode, setEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Profile State
  const [username, setUsername] = useState("Caretaker_Lance");
  const [fullName, setFullName] = useState("Lance Atendidas");
  const [email, setEmail] = useState("lance.caretaker@example.com");
  const [phone, setPhone] = useState("09123456789");
  const [gender, setGender] = useState("Male");

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  /* --------- HELPERS --------- */
  const lettersOnly = (v) => v.replace(/[^a-zA-Z\s]/g, "");
  const numbersOnly = (v) => v.replace(/\D/g, "");

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Success Logic
    setIsModalOpen(false);
    setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-4 sm:px-8 py-7 flex flex-col gap-3 md:gap-4">
      
      {/* Header */}
      <div
        className="flex flex-col bg-cover bg-center items-center text-center sm:text-start sm:items-start text-white px-10 py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-3xl w-full"
        style={{ backgroundImage: `url(${Accsettbg})` }}
      >
        <h1 className="font-BoldMilk tracking-[3px] md:tracking-[12px] text-xl md:text-2xl text-white uppercase">
          Account Settings
        </h1>
      </div>

      {/* Main Form Card */}
      <div className="h-full bg-gradient-to-r from-[#ffebdf] to-[#f2c9b1] shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] flex flex-col gap-2 rounded-2xl px-4 md:px-8 py-5">
        
        {/* Title + Edit Toggle */}
        <div className="flex w-full gap-3">
          <div className="flex-1 bg-[#4b150d] p-4 rounded-lg">
            <h1 className="font-[RegularMilk] md:text-base text-[#fff3ec] uppercase tracking-wider">
              Personal Information
            </h1>
          </div>
          <div
            onClick={() => setEditMode(!editMode)}
            className="flex items-center justify-center bg-[#db6949] px-6 rounded-lg cursor-pointer hover:bg-[#c44d30] transition-all"
          >
            {editMode ? (
              <span className="text-white md:text-sm font-[RegularMilk] tracking-wider">SAVE</span>
            ) : (
              <MdModeEdit className="text-white text-xl" />
            )}
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          
          {/* Username */}
          <div className="border border-[#e39b7c] bg-white/80 p-4 rounded-lg">
            <label className="text-xs md:text-sm block text-[#4b150d] font-RegularMilk mb-1">Username</label>
            <input
              value={username}
              readOnly={!editMode}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent text-xs md:text-sm text-[#4b150d] focus:outline-none"
            />
          </div>

          {/* Full Name */}
          <div className="border border-[#e39b7c] bg-white/80 p-4 rounded-lg">
            <label className="text-xs md:text-sm block text-[#4b150d] font-RegularMilk mb-1">Full Name</label>
            <input
              value={fullName}
              readOnly={!editMode}
              onChange={(e) => setFullName(lettersOnly(e.target.value))}
              className="w-full bg-transparent text-xs md:text-sm text-[#4b150d] focus:outline-none"
            />
          </div>

          {/* Password Display (Matches Tenant Style) */}
          <div className="border border-[#e39b7c] bg-white/80 p-4 rounded-lg">
            <label className="text-xs md:text-sm block text-[#4b150d] font-RegularMilk mb-1">Password</label>
            <div className="flex items-center justify-between">
              <input value="*******" readOnly className="w-full bg-transparent text-xs md:text-sm text-[#4b150d]" />
              {editMode && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#db6747] ml-4 text-[10px] md:text-xs font-RegularMilk text-white p-2 rounded-lg whitespace-nowrap"
                >
                  Change Password
                </button>
              )}
            </div>
          </div>

          {/* Gender */}
          <div className="border border-[#e39b7c] bg-white/80 p-4 rounded-lg">
            <label className="text-xs md:text-sm block text-[#4b150d] font-RegularMilk mb-1">Gender</label>
            {editMode ? (
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full bg-transparent text-xs md:text-sm text-[#4b150d] outline-none"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            ) : (
              <input value={gender} readOnly className="w-full bg-transparent text-xs md:text-sm text-[#4b150d]" />
            )}
          </div>

          {/* Email */}
          <div className="border border-[#e39b7c] bg-white/80 p-4 rounded-lg">
            <label className="text-xs md:text-sm block text-[#4b150d] font-RegularMilk mb-1">Email</label>
            <input
              value={email}
              readOnly={!editMode}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-xs md:text-sm text-[#4b150d] focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="border border-[#e39b7c] bg-white/80 p-4 rounded-lg">
            <label className="text-xs md:text-sm block text-[#4b150d] font-RegularMilk mb-1">Phone Number</label>
            <input
              value={phone}
              readOnly={!editMode}
              onChange={(e) => setPhone(numbersOnly(e.target.value))}
              className="w-full bg-transparent text-xs md:text-sm text-[#4b150d] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Password Modal (Identical to Tenant Settings Style) */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-bold text-[#4b150d] mb-4">
              Change Password
            </h2>

            <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[#4b150d] font-semibold mb-1">
                  Old Password
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  value={passwordData.oldPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 rounded-lg border border-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
                />
              </div>

              <div>
                <label className="block text-[#4b150d] font-semibold mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-2 rounded-lg border border-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
                />
              </div>

              <div>
                <label className="block text-[#4b150d] font-semibold mb-1">
                  Confirm New Password
                </label>
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