import unitBg from "../../assets/unitbg.png";
import tenantdbbg from "../../assets/tenantsdbbg.png";
import dashboardBg from "../../assets/dashboardbackground.png";
import totaltenantbg from "../../assets/totaltenantsbg.png";
import totalunits from "../../assets/totalunitsbg.png";
import duetoday from "../../assets/duetodaybg.png";
import maintreq from "../../assets/maintreqbg.png";
import appointreq from "../../assets/appointreqbg.png";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CaretakerDashboardCards() {
  const announcementData = {
    electrical: [
      { id: 1, message: "Power will be off from 2PM to 5PM ", date: "11/20/25" },
      { id: 2, message: "Generator testing scheduled at 8AM.", date: "11/22/25" },
    ],
    water: [
      { id: 1, message: "Low water pressure expected tomorrow morning.", date: "11/21/25" },
      { id: 2, message: "Maintenance flushing scheduled.", date: "11/25/25" },
    ],
    renovation: [
      { id: 1, message: "Floor renovation on Level 3 from Nov 26–30.", date: "11/23/25" },
      { id: 2, message: "Lobby repainting will begin next week.", date: "11/24/25" },
    ],
  };

  const categories = Object.keys(announcementData);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const currentCategory = categories[categoryIndex];
  const currentMessages = announcementData[currentCategory];

  const handleCategorySwitch = (direction) => {
    setCategoryIndex((prev) =>
      direction === "next"
        ? (prev + 1) % categories.length
        : (prev - 1 + categories.length) % categories.length
    );
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-6 sm:px-8 md:px-9  py-8  flex flex-col gap-3 md:gap-5 ">

      {/* HEADER */}
      <div
        className="flex flex-col bg-cover bg-center items-center sm:items-start  text-white px-6 sm:px-9 md:px-15 py-5 sm:py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-2xl w-full gap-1"
        style={{ backgroundImage: `url(${dashboardBg})` }}
      >
        <h2 className="font-LightMilk md:text-xl ">
          WELCOME CARETAKER!
        </h2>
        <h1 className="font-BoldMilk text-2xl md:text-3xl tracking-[3px] md:tracking-[8px] ">
          DASHBOARD
        </h1>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-5 w-full h-full">

        {/* LEFT COLUMN WITH THREE CARDS */}
        <div className="flex flex-col gap-1 md:gap-3 w-full lg:w-[66%] h-full">

          {/* Total Tenants */}
          <div
            className="bg-cover bg-center shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] w-full rounded-2xl flex flex-col justify-center py-18 px-10 md:px-17 font-RegularMilk"
            style={{ backgroundImage: `url(${totaltenantbg})` }}
          >
            <p className="text-base md:text-xl tracking-[1px]">Total Tenants</p>
            <h2 className="text-xl md:text-2xl lg:text-4xl mt-2">15</h2>
          </div>

          {/* Total Units */}
          <div
            className="bg-cover bg-center shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] w-full rounded-2xl py-15 px-10 md:px-17 flex flex-row flex-wrap sm:flex-nowrap justify-between items-center py-18 gap-y-5 font-RegularMilk"
            style={{ backgroundImage: `url(${totalunits})` }}
          >
            <div className="flex flex-col">
                <p className="text-base md:text-xl tracking-[1px] mb-2 ">Total Units</p>
                <h2 className="text-xl md:text-2xl lg:text-4xl">35</h2>
            </div>
             <div className="flex flex-row gap-x-4 md:gap-x-8 lg:pr-8 text-center ">
                {/* Occupied Pill */}
                <div className="flex flex-col items-center group">
                  <p className="text-[10px] md:text-xs mb-2  uppercase tracking-widest font-BoldMilk  text-[#4b150d]">Occupied</p>
                  <div className=" bg-white/60 backdrop-blur-md border border-white/30 px-5 sm:px-8 md:px-13 lg:px-16 py-3 rounded-2xl shadow-sm transition-all group-hover:bg-white/30">
                    <p className="text-xl md:text-2xl font-BoldMilk text-[#4b150d]">15</p>
                  </div>
                </div>

                {/* Vacant Pill */}
                <div className="flex flex-col items-center group">
                  <p className="text-[10px] md:text-xs mb-2 uppercase tracking-widest font-BoldMilk  text-[#4b150d]">Vacant</p>
                  <div className="bg-white/60 backdrop-blur-md border border-white/30 px-5 sm:px-8 md:px-13 lg:px-16 py-3 rounded-2xl shadow-sm transition-all group-hover:bg-black/20">
                    <p className="text-xl md:text-2xl font-BoldMilk text-[#4b150d]">20</p>
                  </div>
                </div>
              </div>

          </div>
          {/* REQUESTS */}
          <div className="bg-gradient-to-r from-[#da6646] to-[#aa2f1e] shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] w-full h-full  rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-8 py-7 px-6 md:px-8 text-black">
            {/* Maintenance */}
            <div
              className="flex flex-col justify-between  gap-1 sm:gap-3  bg-cover bg-center rounded-2xl h-auto w-full sm:w-1/2 p-10"
              style={{ backgroundImage: `url(${maintreq})` }}
            >
              <h1 className="text-base tracking-[1px] font-RegularMilk">Maintenance Requests</h1>
              <div className="flex flex-row justify-between">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-LightMilk pl-3">5</h1>
                <button onClick={() => navigate('/adminmaintenance')} className="bg-[#4b150d] text-sm text-[#ffede1] tracking-[1px] font-MDMilk px-4 rounded-2xl w-max shadow hover:bg-white hover:text-[#aa2f1e] transition cursor-pointer">
                  View
                </button>
              </div>
            </div>

            {/* Appointment */}
            <div
              className="bg-cover bg-center flex flex-col justify-between  gap-1 sm:gap-3  rounded-2xl h-auto w-full sm:w-1/2 p-10"
              style={{ backgroundImage: `url(${duetoday})` }}
            >
              <h1 className="text-base tracking-[1px] font-RegularMilk text-[#ffede1]">Due Today</h1>
              <div className="flex flex-row justify-between">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-LightMilk pl-3 text-[#ffede1]">4</h1>
                <button onClick={() => navigate('/adminapplicationrequest')} className="bg-[#ffede1] text-sm text-[#aa2f1e] font-MDMilk px-6  tracking-[1px] rounded-2xl w-max shadow hover:bg-[#4b150d] hover:text-[#ffede1] transition cursor-pointer">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT ANNOUNCEMENTS SECTION */}
        <div className="w-full lg:w-[34%] flex flex-col justify-between bg-gradient-to-r from-[#4d0707] to-[#160000] shadow-[13px_10px_0px_#ffede1] rounded-2xl p-6 sm:p-8 min-h-[300px] lg:min-h-[450px]">

          <div className="flex flex-col gap-y-6">
            <h2 className="text-center font-MDMilk sm:tracking-[3px] text-[#ffede1] text-base sm:text-xl mb-4">
              ANNOUNCEMENTS
            </h2>

            {/* LIST */}
            <div className="flex flex-col gap-4 overflow-y-auto pr-1 max-h-[300px] sm:max-h-[350px] lg:max-h-[500px]">
              {currentMessages.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#ffede1] text-[#330101] text-xs sm:text-sm rounded-lg w-full py-5 px-4 font-LightMilk shadow relative"
                >
                  <p>{item.message}</p>
                  <span className="absolute bottom-1 right-2 text-gray-500 text-[10px] sm:text-xs">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORY SWITCH */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => handleCategorySwitch("prev")}
              className="p-2 text-[#ffede1] hover:bg-[#4d0707] rounded-full"
            >
              <FaChevronLeft />
            </button>

            <span className="uppercase text-[#ffede1] font-LightMilk text-xs sm:text-sm">
              {currentCategory} maintenance
            </span>

            <button
              onClick={() => handleCategorySwitch("next")}
              className="p-2 text-[#ffede1] hover:bg-[#4d0707] rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
