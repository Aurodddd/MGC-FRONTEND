import { useState } from "react";
import { Link } from "react-router-dom";
import unitprofbg from "../../assets/unitprofbg.png";
import tenantprofbg from "../../assets/tenantprofbg.png.jpg";
import payhisbg from '../../assets/payhisbg.png'

export default function AdminProfileCards() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "Lance Atendidas",
    email: "LanceAtendidas@gmail.com",
    phone: "57984598735493",
    nextduedate: "November 11, 2025",
    contractduration: "September 25, 2025 - September 25, 2026",
  });

   // --- Rent & Utility States ---
  const [rentAmount, setRentAmount] = useState(5000);
  const [isEditingRent, setIsEditingRent] = useState(false);
  const [rentProofImage, setRentProofImage] = useState(null);
  const [rentBillImage, setRentBillImage] = useState(null);

  const [utilityProofImage, setUtilityProofImage] = useState(null);
  const [utilityBillImage, setUtilityBillImage] = useState(null);

  // --- Modal States ---
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState("");


  // --- Bill Computation States ---
  const [billData, setBillData] = useState({
    billingPeriod: "",
    prevReading: "",
    presentReading: "",
    totalKwh: "",
    totalCum: "",
    multiplier: "",
    totalAmount: "",
  });

  const [isComputed, setIsComputed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBillChange = (e) => {
    setBillData({ ...billData, [e.target.name]: e.target.value });
    setIsComputed(false); // reset if inputs are changed
  };

  const computeBill = () => {
    // Example computation logic (replace with your actual formula)
    const kwh = billData.presentReading - billData.prevReading;
    const total = kwh * (billData.multiplier || 1);

    setBillData({
      ...billData,
      totalKwh: kwh,
      totalAmount: total,
    });
    setIsComputed(true);
  };

  const [history, setHistory] = useState([
    {
      unit: "101",
      name: "Lance Atendidas",
      phone: "09123456789",
      date: "June 10, 2025",
      payment: "Rent Bill",
      amount: "₱10,000",
      status: "Paid",
    },
    {
      unit: "101",
      name: "Lance Atendidas",
      phone: "09198765432",
      date: "June, 8, 2025",
      payment: "Electricity & Water Bill",
      amount: "₱2,500",
      status: "Unpaid",
    },
    {
      unit: "101",
      name: "Lance Atendidas",
      phone: "09111222333",
      date: "June 1, 2025",
      payment: "Advance",
      amount: "₱5,000",
      status: "Late",
    },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-400 text-white";
      case "Unpaid":
        return "bg-yellow-500 text-white";
      case "Late":
        return "bg-red-500 text-white";
      default:
        return "bg-white text-black";
    }
  };

  const handleStatusChange = (index, newStatus) => {
    const updated = [...history];
    updated[index].status = newStatus;
    setHistory(updated);
  };

  // --- Modal Handlers ---
  const openModal = (title, image) => {
    setModalTitle(title);
    setModalImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalImage(null);
  };

  const handleImageUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setter(imageURL);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-6 md:px-12 pt-8 pb-8 flex flex-col gap-9">
      {/* Header */}
      <div
        className="bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl text-white px-6 md:px-28 py-7 flex"
        style={{ backgroundImage: `url(${unitprofbg})` }}
      >
        <h1 className="text-[24px] md:text-[34px] font-BoldMilk tracking-[10px] md:tracking-[13px]">
          UNIT 1
        </h1>
      </div>

      {/* Tenant Profile */}
      <div
        className="bg-cover bg-center shadow-[15px_13px_0px_#efd4c4] rounded-2xl text-white px-6 md:px-12 py-8 flex flex-col gap-6"
        style={{ backgroundImage: `url(${tenantprofbg})` }}
      >
        <h1 className="text-[18px] md:text-[24px] font-MDMilk tracking-[5px]">
          TENANT PROFILE
        </h1>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-RegularMilk mb-1">Full Name</label>
              <input
                name="fullname"
                disabled={!isEditing}
                value={formData.fullname}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-[#4b150d] bg-white text-[#4b150d] focus:ring-2 focus:ring-[#db6747] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-RegularMilk mb-1">Email</label>
              <input
                name="email"
                disabled={!isEditing}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-[#4b150d] bg-white text-[#4b150d] focus:ring-2 focus:ring-[#db6747] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-RegularMilk mb-1">Phone Number</label>
              <input
                name="phone"
                disabled={!isEditing}
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-[#4b150d] bg-white text-[#4b150d] focus:ring-2 focus:ring-[#db6747] focus:outline-none"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-RegularMilk mb-1">Next Due Date</label>
              <input
                name="nextduedate"
                disabled={!isEditing}
                value={formData.nextduedate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#4b150d] bg-white text-[#4b150d] text-center focus:ring-2 focus:ring-[#db6747] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-RegularMilk mb-1">Contract Duration</label>
              <input
                name="contractduration"
                disabled={!isEditing}
                value={formData.contractduration}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#4b150d] bg-white text-[#4b150d] text-center focus:ring-2 focus:ring-[#db6747] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="flex justify-start md:justify-end ">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className=" px-10 md:px-20 py-3 bg-[#db6646] text-white rounded-lg shadow hover:bg-[#b9492c] transition cursor-pointer font-RegularMilk tracking-[2px]"
          >
            {isEditing ? "Save" : "Edit Profile"}
          </button>
        </div>

        {/* Bills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 mb-2">
          <div className="bg-[#fefefe] text-[#4b150d] p-6 rounded-lg shadow">
            {isEditingRent ? (
              <input
                type="number"
                value={rentAmount}
                onChange={(e) => setRentAmount(e.target.value)}
                className="text-2xl md:text-4xl font-RegularMilk tracking-[2px] border px-2 py-1 rounded text-center w-full"
              />
            ) : (
              <h2 className="text-2xl md:text-4xl tracking-[2px] font-RegularMilk">₱ {rentAmount}</h2>
            )}
            <p className="text-base md:text-lg font-LightMilk tracking-[1px] md:mt-2">
              Rent Bill
            </p>
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-5 font-LightMilk text-sm">
              <button className="mt-4 px-4 py-2 bg-[#4b150d] text-white rounded hover:bg-[#2f0e07] transition cursor-pointer">
                View Proof of Payment
              </button>
              <button className="mt-4 px-4 py-2 bg-[#4b150d] text-white rounded hover:bg-[#2f0e07] transition cursor-pointer">
                View Bill
              </button>
              <button className="mt-4 px-4 py-2 bg-[#4b150d] text-white rounded hover:bg-[#2f0e07] transition cursor-pointer">
                Edit
              </button>
            </div>
          </div>

          <div className="bg-[#fefefe] text-[#4b150d] p-6 rounded-lg shadow">
            <h2 className="text-2xl md:text-4xl tracking-[2px] font-RegularMilk ">
              ₱ 5,000
            </h2>
            <p className="text-base md:text-lg font-LightMilk tracking-[1px] md:mt-2">
              Electricity and Water Bill
            </p>
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-5 font-LightMilk tracking-[2px] text-sm">
              <button className="mt-4 px-4 py-2 bg-[#4b150d] text-white rounded hover:bg-[#2f0e07] transition cursor-pointer">
                View Proof of Payment
              </button>
              <button className="mt-4 px-4 py-2 bg-[#4b150d] text-white rounded hover:bg-[#2f0e07] transition cursor-pointer">
                View Bill
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bill Computation Section */}
        <div className=" bg-gradient-to-r from-[#fee8da] to-[#efd4c4] shadow-[15px_13px_0px_#330101]  p-6 rounded-lg shadow flex flex-col gap-3">
          <div className=" px-5 mb-4">
            <h2 className=" items-center lg:items-start  font-BoldMilk tracking-[1px] md:tracking-[4px] text-[15px] md:text-[25px] text-[#4b150d]">Bill Computation</h2>
            <h3 className=" items-center lg:items-start font-MDMilk tracking-[1px] md:tracking-[4px] text-[#4b150d]">For Electricity and Water Bill</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="billingPeriod"
              placeholder="Billing Period"
              value={billData.billingPeriod}
              onChange={handleBillChange}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#db6646] focus:outline-none bg-white"
            />
            <input
              name="prevReading"
              placeholder="Previous Reading"
              type="number"
              value={billData.prevReading}
              onChange={handleBillChange}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#db6646] focus:outline-none bg-white"
            />
            <input
              name="presentReading"
              placeholder="Present Reading"
              type="number"
              value={billData.presentReading}
              onChange={handleBillChange}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#db6646] focus:outline-none bg-white"
            />
            <input
              name="totalKwh"
              placeholder="Total KWH Consumed"
              value={billData.totalKwh}
              readOnly
              className="w-full px-4 py-2 border rounded bg-gray-100 cursor-not-allowed bg-white"
            />
            <input
              name="totalCum"
              placeholder="Total CUM Consumed"
              value={billData.totalCum}
              onChange={handleBillChange}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#db6646] focus:outline-none bg-white"
            />
            <input
              name="multiplier"
              placeholder="Multiplier"
              type="number"
              value={billData.multiplier}
              onChange={handleBillChange}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-[#db6646] focus:outline-none bg-white"
            />
            
          </div>
          <div className="w-full h-[1px] bg-[#4b150d] my-6"></div>
          <input
              name="totalAmount"
              placeholder="Total Amount"
              value={billData.totalAmount}
              readOnly
              className="w-[49%] px-4 py-2 border rounded bg-gray-100 cursor-not-allowed bg-white"
            />

          {/* Action Buttons */}
          <div className="flex  md:justify-end flex-wrap  gap-4 mt-6 font-LightMilk tracking-[2px]">
            <button
              onClick={computeBill}
              className="px-6 py-2 bg-[#db6646] text-white rounded hover:bg-[#b9492c] transition"
            >
              Compute Bill
            </button>
            <button
              disabled={!isComputed}
              className={`px-6 py-2 rounded transition ${
                isComputed
                  ? "bg-[#4b150d] text-white hover:bg-[#2f0e07] cursor-pointer"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              Send Bill
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
        
              {/* payhis*/}
            <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] shadow-[15px_13px_0px_#330101] rounded-2xl px-4 py-6 overflow-x-auto flex flex-col gap-5">
                <div
                  className="bg-cover bg-center  rounded-2xl text-white py-5 px-3 md:px-15 flex justify-center sm:justify-start text-center"
                  style={{ backgroundImage: `url(${payhisbg})` }}
                >
                <h1 className="font-[LightMilk] md:font-[MDMilk] tracking-[1px] md:tracking-[6px] text-[15px] md:text-[25px] text-white">
                  PAYMENT HISTORY
                </h1>
              </div>
              <table className="w-full border-separate border-spacing-y-3">
                <thead>
                  <tr className="bg-[#4b150d] text-[#efd4c4] uppercase text-sm font-medium">
                    <th className="py-3 px-4 text-left">Unit No.</th>
                    <th className="py-3 px-4 text-left">Full Name</th>
                    <th className="py-3 px-4 text-left">Phone No.</th>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Payment</th>
                    <th className="py-3 px-4 text-left">Amount</th>
                    <th className="py-3 px-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((entry, index) => (
                    <tr
                      key={index}
                      className="bg-white text-[#4b150d] text-sm rounded-xl shadow"
                    >
                      <td className="py-3 px-4">{entry.unit}</td>
                      <td className="py-3 px-4">
                          {entry.name}
                      </td>
                      <td className="py-3 px-4">{entry.phone}</td>
                      <td className="py-3 px-4">{entry.date}</td>
                      <td className="py-3 px-4">{entry.payment}</td>
                      <td className="py-3 px-4">{entry.amount}</td>
                      <td className="py-3 px-4">
                        <select
                          value={entry.status}
                          onChange={(e) => handleStatusChange(index, e.target.value)}
                          className={`rounded px-3 py-1 ${getStatusStyle(
                            entry.status
                          )}`}
                        >
                          <option value="Paid">Paid</option>
                          <option value="Unpaid">Unpaid</option>
                          <option value="Late">Late</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* View & Print Buttons */}
          <div className="flex flex-wrap  gap-4 justify-between mt-5 bg-[#330101] rounded-2xl py-5 px-10">
            <div className="flex flex-row flex-wrap gap-5">
              <button
              className="bg-gradient-to-r from-[#db6848] to-[#c24831] 
                rounded-2xl  
                min-h-[3rem] text-white font-RegularMilk 
                px-6 py-4 tracking-[3px] cursor-pointer"
              onClick={() => alert("Open full contract here (PDF/Modal).")}
              >
                Upload Contract Paper
              </button>
              <button
                className="bg-gradient-to-r from-[#db6848] to-[#c24831] 
                  rounded-2xl  
                  min-h-[3rem] text-white font-RegularMilk 
                  px-6 py-4 tracking-[3px] cursor-pointer"
                onClick={() => alert("Open full contract here (PDF/Modal).")}
              >
                View Contract Paper
              </button>
              </div>

            <button
              className="bg-gradient-to-r from-[#db6848] to-[#c24831]
                rounded-2xl  
                min-h-[3rem] text-white font-RegularMilk 
                px-6 py-4 tracking-[3px] cursor-pointer"
              onClick={() => window.print()}
            >
              Print Contract
            </button>
          </div>
        </div>
    </div>
  );
}