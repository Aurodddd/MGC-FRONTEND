import { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaCalendar, FaEdit, FaArrowLeft, FaVenusMars, FaUsers, FaPlus, FaTrash } from "react-icons/fa";
import unitprofbg from "../../assets/unitprofbg.png";
import tenantprofbg from "../../assets/tenantprofbg.png";

export default function AdminProfileCards() {
  const [isEditing, setIsEditing] = useState(false);
  const [tenantList, setTenantList] = useState(["Lance Atendidas"]); // Array for list
  const [formData, setFormData] = useState({
    fullname: "Lance Atendidas",
    email: "LanceAtendidas@gmail.com",
    phone: "57984598735493",
    gender: "Male",
    nextduedate: "November 11, 2025",
    contractduration: "September 25, 2025 - September 25, 2026",
    numtenants: "1", // Now used for dropdown
  });

  const rentAmount = 5000;
  const utilityAmount = 5000;
  const totalBill = rentAmount + utilityAmount;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Logic to handle adding a new tenant name
  const handleAddTenant = () => {
    setTenantList([...tenantList, "New Tenant"]);
  };

  // Logic to handle deleting a tenant name
  const handleDeleteTenant = (index) => {
    const newList = tenantList.filter((_, i) => i !== index);
    setTenantList(newList);
  };

  // Logic to update a specific name in the list
  const handleTenantNameChange = (index, value) => {
    const newList = [...tenantList];
    newList[index] = value;
    setTenantList(newList);
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-6 md:px-12 pt-8 pb-8 flex flex-col gap-3 md:gap-4">
      
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => window.history.back()}
          className="bg-[#4b150d] text-white p-3 rounded-lg hover:bg-[#6b1f11] transition-colors cursor-pointer"
        >
          <FaArrowLeft size={20} />
        </button>
        <div
          className="bg-cover bg-center shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-2xl text-white px-8 py-7 flex flex-1"
          style={{ backgroundImage: `url(${unitprofbg})` }}
        >
          <h1 className="text-[24px] md:text-[34px] font-BoldMilk tracking-[10px] md:tracking-[13px]">
            UNIT 1
          </h1>
        </div>
      </div>

      {/* Unit Info Summary */}
      <div className="bg-white/90 rounded-xl p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] p-4 rounded-lg">
            <p className="text-sm text-[#4b150d] font-semibold">Total Bill</p>
            <p className="text-2xl font-bold text-[#8b2d1a]">₱ {totalBill.toLocaleString()}</p>
          </div>
          <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] p-4 rounded-lg">
            <p className="text-sm text-[#4b150d] font-semibold">Status</p>
            <p className="text-2xl font-bold text-red-600 tracking-wider">OCCUPIED</p>
          </div>
          <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] p-4 rounded-lg">
            <p className="text-sm text-[#4b150d] font-semibold">Capacity</p>
            <p className="text-2xl font-bold text-[#8b2d1a]">{tenantList.length} / 2</p>
          </div>
          <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] p-4 rounded-lg">
            <p className="text-sm text-[#4b150d] font-semibold">Due Date</p>
            <p className="text-xl font-bold text-[#8b2d1a]">{formData.nextduedate}</p>
          </div>
        </div>
      </div>

      {/* Tenant Profile Card */}
      <div
        className="bg-cover bg-center shadow-[5px_5px_0px_#fee8da] md:shadow-[10px_8px_0px_#fee8da] rounded-2xl text-white px-6 md:px-12 py-8 flex flex-col gap-6"
        style={{ backgroundImage: `url(${tenantprofbg})` }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] md:text-[24px] font-MDMilk tracking-[5px]">
            TENANT PROFILE
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-[#db6646] hover:bg-[#b9492c] text-white p-3 rounded-lg transition-colors flex items-center gap-2 font-RegularMilk cursor-pointer"
          >
            <FaEdit size={18} />
            {isEditing ? "SAVE" : ""}
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Full Name", name: "fullname", icon: <FaUser />, val: formData.fullname },
            { label: "Email", name: "email", icon: <FaEnvelope />, val: formData.email },
            { label: "Phone Number", name: "phone", icon: <FaPhone />, val: formData.phone },
            { label: "Gender", name: "gender", icon: <FaVenusMars />, val: formData.gender },
            { label: "Contract Duration", name: "contractduration", icon: <FaCalendar />, val: formData.contractduration },
            { label: "Number of Tenants", name: "numtenants", icon: <FaUsers />, val: formData.numtenants },
          ].map((field) => (
            <div key={field.name} className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-[#fee8da] text-xl">{field.icon}</span>
                <div className="flex-1">
                  <p className="text-xs font-LightMilk opacity-80 uppercase tracking-widest">{field.label}</p>
                  {isEditing ? (
                    field.name === "numtenants" ? (
                      <select
                        name="numtenants"
                        value={formData.numtenants}
                        onChange={handleChange}
                        className="w-full bg-white text-sm text-[#4b150d] px-2 py-1 rounded mt-1 focus:outline-none cursor-pointer"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    ) : (
                      <input
                        name={field.name}
                        value={field.val}
                        onChange={handleChange}
                        className="w-full bg-white text-sm text-[#4b150d] px-2 py-1 rounded mt-1 focus:outline-none"
                      />
                    )
                  ) : (
                    <p className="text-xs sm:text-sm md:text-base font-LightMilk">
                      {field.name === "numtenants" ? `${field.val} Tenant(s)` : field.val}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* List of Tenants Card */}
          <div className="md:col-span-2 bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/10">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs font-LightMilk opacity-80 uppercase tracking-widest">List of Tenants</p>
              {isEditing && (
                <button 
                  onClick={handleAddTenant}
                  className="bg-[#fee8da] text-[#4b150d] p-1 rounded-full text-xs hover:bg-white cursor-pointer"
                >
                  <FaPlus />
                </button>
              )}
            </div>
            
            <div className="space-y-2">
              {tenantList.map((tenant, index) => (
                <div key={index} className="flex items-center gap-2">
                  {isEditing ? (
                    <>
                      <input
                        value={tenant}
                        onChange={(e) => handleTenantNameChange(index, e.target.value)}
                        className="flex-1 bg-white text-sm text-[#4b150d] px-2 py-1 rounded focus:outline-none"
                      />
                      <button 
                        onClick={() => handleDeleteTenant(index)}
                        className="text-red-400 hover:text-red-600 p-1 cursor-pointer"
                      >
                        <FaTrash size={14} />
                      </button>
                    </>
                  ) : (
                    <p className="text-sm font-RegularMilk">• {tenant}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] text-[#4b150d] p-6 rounded-xl shadow-inner">
            <p className="text-sm font-LightMilk opacity-70 mb-2">Rent Bill</p>
            <h3 className="text-3xl font-bold">₱ {rentAmount.toLocaleString()}</h3>
            <button className="w-full mt-4 bg-[#4b150d] text-[#fee8da] text-xs py-3 rounded hover:bg-[#5c1a12] transition cursor-pointer font-bold tracking-[1px] font-RegularMilk">
              VIEW PAYMENT PROOF
            </button>
          </div>

          <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] text-[#4b150d] p-6 rounded-xl shadow-inner">
            <p className="text-sm font-LightMilk opacity-70 mb-2">Electricity and Water Bill</p>
            <h3 className="text-3xl font-bold">₱ {utilityAmount.toLocaleString()}</h3>
            <button className="w-full mt-4 bg-[#4b150d] text-[#fee8da] text-xs py-3 rounded hover:bg-[#5c1a12] transition cursor-pointer font-bold tracking-[1px] font-RegularMilk">
              VIEW PAYMENT PROOF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}