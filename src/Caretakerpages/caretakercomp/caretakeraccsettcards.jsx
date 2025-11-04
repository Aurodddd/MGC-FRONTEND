import { useState } from "react";
import Accsettbg from "../../assets/accsettbg.png";

export default function caretakeraccsettcards() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "Stephano",
    email: "Stephano@example.com",
    password: "",
    phone: "09123456789",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-full w-full bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl px-6 md:px-12 py-8 flex flex-col gap-4  overflow-visible">
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
      <div className="h-full  bg-gradient-to-r from-[#fff3ec] to-[#f1c4aa] shadow-[15px_13px_0px_#330101] rounded-2xl px-6 md:px-16 py-8 flex flex-col gap-6">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="font-LightMilk px-6 py-2 bg-[#db6747] text-white rounded-lg shadow hover:bg-[#c55a3f] transition"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
