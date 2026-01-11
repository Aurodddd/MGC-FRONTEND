/* FULL HEIGHT-RESPONSIVE DASHBOARD (OPTION B) */

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import unitBg from "../../assets/unitbg.png.jpg";
import tenantdbbg from "../../assets/tenantsdbbg.png.jpg";
import dashboardBg from "../../assets/dashboardbackground.png";

export default function DashboardCards() {
  const announcementData = {
    electrical: [
      { id: 1, message: "Power will be off from 2PM to 5PM ", date: "11/20/25" },
      { id: 2, message: "Generator testing scheduled at 8AM.", date: "11/22/25" },
      
    ],
    water: [
      { id: 1, message: "Low water pressure expected tomorrow morning. ", date: "11/21/25" },
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
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-6 sm:px-8 md:px-9 lg:px-13 py-8 lg:py-13 ">
      <div className="h-full  flex flex-col gap-4 md:gap-6 ">
        {/* HEADER */}
      <div
        className="flex flex-col bg-cover bg-center items-center sm:items-start  text-white px-6 sm:px-9 md:px-15 py-5 sm:py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-2xl w-full"
        style={{ backgroundImage: `url(${dashboardBg})` }}
      >
        <h2 className="font-LightMilk md:text-xl ">
          WELCOME TENANT 101!
        </h2>
        <h1 className="font-BoldMilk text-2xl md:text-3xl tracking-[7px] md:tracking-[10px] ">
          DASHBOARD
        </h1>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4  md:gap-5 w-full h-full">

        {/* LEFT SECTION */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap:4 md:gap-5 w-full lg:w-[66%] ">

          {/* UNIT CARD */}
          <div
            className="bg-cover bg-center shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-2xl p-6 lg:p-9
            min-h-[200px] sm:min-h-[240px] lg:min-h-[300px] flex flex-col justify-start"
            style={{ backgroundImage: `url(${unitBg})` }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-MDMilk ">
              101
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-LightMilk   md:mt-2">
              Unit Number
            </p>
          </div>

          {/* TENANTS CARD */}
          <div
            className="bg-cover bg-center shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-2xl p-6 lg:p-9 
            min-h-[200px] sm:min-h-[240px] lg:min-h-[300px] flex flex-col justify-start"
            style={{ backgroundImage: `url(${tenantdbbg})` }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-MDMilk ">
              2
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-LightMilk  md:mt-2">
              Tenants
            </p>
          </div>

          {/* RENT BILL */}
          <div className="bg-[#ffede1] shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-2xl 
          p-6 sm:p-7   flex flex-col justify-between gap-y-5 
          min-h-[220px] sm:min-h-[240px] lg:min-h-[300px]">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-MDMilk tracking-[2px] overflow-hidden mt-3">₱500.00</h2>
              <p className="text-xs sm:text-sm md:text-base  font-LightMilk text-[#330101]/70 ">RENT BILL</p>
              <span className="bg-[#c20b0a] text-white w-max px-3 py-2 rounded-full  text-[10px]  font-RegularMilk tracking-[1px]">UNPAID</span>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 text-center">
              <label className="font-RegularMilk bg-[#330101] text-[#ffede1] px-5 py-1 md:py-2 rounded-2xl cursor-pointer hover:bg-[#4d0707] transition text-xs  w-full md:flex-1">
                View Billing
                <input type="file" className="hidden" />
              </label>

              <label className="font-RegularMilk bg-[#330101] text-[#ffede1] px-5 py-1 md:py-2 rounded-2xl cursor-pointer hover:bg-[#4d0707] transition text-xs  w-full md:flex-1">
                Upload Receipt
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>

          {/* ELECTRIC + WATER */}
          <div className="bg-[#ffede1] shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-2xl 
         p-6 sm:p-7  flex flex-col justify-between  gap-y-5  
          min-h-[220px] sm:min-h-[240px] lg:min-h-[300px]">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-MDMilk tracking-[2px] overflow-hidden mt-3">₱400.00</h2>
              <p className="text-xs sm:text-sm md:text-base  font-LightMilk text-[#330101]/70  ">ELECTRICITY AND WATER BILL</p>
              <span className="bg-green-600 text-white w-max px-3 py-2 rounded-full  text-[10px]  font-RegularMilk tracking-[1px]">PAID</span>

            </div>

            <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 text-center">
              <label className="font-RegularMilk bg-[#330101] text-[#ffede1] px-5 py-1 md:py-2 rounded-2xl cursor-pointer hover:bg-[#4d0707] transition text-xs  w-full md:flex-1">
                View Billing
                <input type="file" className="hidden" />
              </label>

              <label className="font-RegularMilk bg-[#330101] text-[#ffede1] px-5 py-1 md:py-2 rounded-2xl cursor-pointer hover:bg-[#4d0707] transition text-xs   w-full md:flex-1">
                Upload Receipt
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-[37%] flex flex-col justify-between 
        bg-gradient-to-r from-[#4d0707] to-[#160000] shadow-[5px_5px_0px_#ffede1] md:shadow-[10px_8px_0px_#ffede1] rounded-2xl 
        p-6 sm:p-8 min-h-[300px] lg:min-h-[450px]">

          <div className="flex flex-col ">
            <h2 className="text-center font-MDMilk sm:tracking-[3px] text-[#ffede1] text-base sm:text-lg mb-6 uppercase border-b border-[#ffede1]/20 pb-2 md:pb-4 ">
            ANNOUNCEMENTS
          </h2>

          {/* LIST */}
          <div className="flex flex-col gap-2 md:gap-4 
          overflow-y-auto pr-1 
          max-h-[300px] sm:max-h-[350px] lg:max-h-[500px]">
            {currentMessages.map((item) => (
              <div
                key={item.id}
                className="bg-[#ffede1] text-[#330101] text-xs sm:text-sm rounded-lg w-full py-3 px-4  shadow relative "
              >
                <p className="text-[#330101] text-sm leading-relaxed pr-4 mb-2">{item.message}</p>
                <span className="absolute bottom-1 right-2 text-gray-500 text-[10px] sm:text-xs">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
          </div>

          {/* CATEGORY SWITCH */}
          <div className="flex justify-between items-center mt-6 bg-black/30 p-2 rounded-2xl border border-white/5">
            <button
              onClick={() => handleCategorySwitch("prev")}
              className="p-3 text-[#ffede1] hover:bg-white/10 rounded-xl transition-all active:scale-75"
            >
              <FaChevronLeft />
            </button>

            <span className="uppercase  text-[#ffede1] font-RegularMilk text-xs sm:text-sm">
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
      
    </div>
  );
}
