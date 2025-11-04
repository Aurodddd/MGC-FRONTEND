import React from "react";
import unitBg from "../../assets/unitbg.png";
import tenantdbbg from "../../assets/tenantsdbbg.png"
import dashboardBg from "../../assets/dashboardbackground.png";

function DashboardCards() {
  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl  w-full max-w-[108.1rem] mx-auto px-8 py-6 md:px-15 md:py-15">
      {/* Header Card */}
      <div
        className="bg-cover bg-center text-white px-10 py-8 shadow-[15px_13px_0px_#330101] rounded-2xl w-full max-w-[103rem] mx-auto"
        style={{ backgroundImage: `url(${dashboardBg})` }}
      >
        <h2 className="font-LightMilk text-xs sm:sm md:text-lg lg:text-lg ml-3 md:ml-16">WELCOME TENANT 25!</h2>
        <h1 className="font-RegularMilk text-xl sm:text-2xl md:text-3xl tracking-widest md:tracking-[15px] ml-2 md:ml-8 font-semibold">
          DASHBOARD
        </h1>
      </div>

      {/* Cards Section */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-[103rem] mx-auto">
        {/* Unit Card */}
        <div
          className="h-55 bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl p-2 md:p-6"
          style={{ backgroundImage: `url(${unitBg})` }}
        >
          <h2 className="text-4xl md:text-5xl font-RegularMilk pt-6 pl-4">25</h2>
          <p className="text-xl md:text-xl tracking-[1px] font-LightMilk pl-4 mt-2">Unit Number</p>
        </div>

        {/* Tenants Card */}
        <div
          className="h-55 bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl p-2 md:p-6"
          style={{ backgroundImage: `url(${tenantdbbg})` }}
        >
          <h2 className="text-4xl md:text-5xl font-RegularMilk pt-6 pl-4">2</h2>
          <p className="text-xl md:text-xl tracking-[1px] font-LightMilk pl-4 mt-2">Tenants</p>
        </div>

        {/* Rent Bill Card */}
        <div className="h-55 bg-[#ffede1] shadow-[15px_13px_0px_#330101] rounded-2xl gap-y-2 p-2 md:p-6 flex flex-col justify-between">
          <div className="flex flex-col  gap-y-1">
            <h2 className="text-2xl md:text-4xl tracking-[2px] font-RegularMilk pt-6 pl-4">₱500.00</h2>
            <p className="text-base md:text-lg font-LightMilk tracking-[1px] pl-4 md:mt-2">Rent Bill</p>
          </div>
          <div className="text-sm md:text-base flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-4 pb-4">
            <span className="text-white bg-[#c20b0a] font-RegularMilk tracking-[2px]  py-1 md:py-2 px-3 md:px-4 rounded-lg"> Unpaid</span>
            <div className=" text-sm md:text-base flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-7 sm:px-4">
              <label className="bg-[#330101] text-[#ffede1] font-RegularMilk tracking-[1px] py-2 md:py-2 px-3 md:px-4 rounded-lg cursor-pointer hover:bg-[#4d0707] transition text-sm">
              View billings
              <input type="file" className="hidden" />
            </label>
            <label className="bg-[#330101] text-[#ffede1] font-RegularMilk tracking-[1px] py-2 md:py-2 px-3 md:px-4 rounded-lg cursor-pointer hover:bg-[#4d0707] transition text-sm">
              Upload Receipt
              <input type="file" className="hidden" />
            </label>
            </div>
          </div>
        </div>
        

        {/* Electric & Water Bill Card */}
        <div className="h-55 bg-[#ffede1] shadow-[15px_13px_0px_#330101] rounded-2xl gap-y-2 p-2 md:p-6 flex flex-col justify-between">
          <div className="flex flex-col  gap-y-1">
            <h2 className="text-2xl md:text-4xl tracking-[2px] font-RegularMilk pt-6 pl-4">₱400.00</h2>
            <p className="text-base md:text-lg font-LightMilk tracking-[1px] pl-4 md:mt-2">Electricity and Water Bill</p>
          </div>
          <div className="text-sm md:text-base flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-4 pb-4">
            <span className="text-white bg-green-600 font-RegularMilk tracking-[2px] py-1 md:py-2 px-3 md:px-4 rounded-lg"> Paid</span>
            <div className=" text-sm md:text-base flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-7 sm:px-4">
              <label className="bg-[#330101] text-[#ffede1] font-RegularMilk tracking-[1px] py-2 md:py-2 px-3 md:px-4 rounded-lg cursor-pointer hover:bg-[#4d0707] transition text-sm">
              View billings
              <input type="file" className="hidden" />
            </label>
            <label className="bg-[#330101] text-[#ffede1] font-RegularMilk tracking-[1px] py-2 md:py-2 px-3 md:px-4 rounded-lg cursor-pointer hover:bg-[#4d0707] transition text-sm">
              Upload Receipt
              <input type="file" className="hidden" />
            </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
