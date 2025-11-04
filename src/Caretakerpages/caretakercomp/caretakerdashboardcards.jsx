import React from "react";
import unitBg from "../../assets/unitbg.png";
import tenantdbbg from "../../assets/tenantsdbbg.png"
import dashboardBg from "../../assets/dashboardbackground.png";
import totaltenantbg from "../../assets/totaltenantsbg.png";
import totalunits from "../../assets/totalunitsbg.png";
import duetoday from "../../assets/duetodaybg.png";

function caretakerdashboardcards() {
  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl  w-full max-w-[108.1rem] mx-auto px-8 py-6 md:px-15 md:py-9">
        {/* Header Card */}
        <div
            className="bg-cover bg-center text-white px-5 py-6 shadow-[15px_13px_0px_#330101] rounded-2xl w-full max-w-[103rem] mx-auto"
            style={{ backgroundImage: `url(${dashboardBg})` }}
        >
            <h2 className="font-LightMilk text-xs sm:sm md:text-lg lg:text-lg ml-3 md:ml-16">WELCOME CARETAKER!</h2>
            <h1 className="font-RegularMilk text-xl sm:text-2xl md:text-3xl tracking-widest md:tracking-[15px] ml-2 md:ml-8 font-semibold">
            DASHBOARD
            </h1>
        </div>
        <div className="flex flex-col gap-7 mt-5 w-full">
                {/* Total Tenants */}
            <div
                className="bg-cover bg-center shadow-[15px_13px_0px_#330101] w-full min-h-45 rounded-2xl flex flex-col justify-center pl-10 md:pl-17 font-RegularMilk"
                style={{ backgroundImage: `url(${totaltenantbg})` }}
            >
                <h1 className="text-xl md:text-2xl tracking-[1px]">TOTAL TENANTS</h1>
                <p className="text-4xl md:text-[3rem] mt-2">15</p>
            </div>

            {/* Total Units */}
            <div
                className="bg-cover bg-center shadow-[15px_13px_0px_#330101] w-full min-h-45 rounded-2xl px-10 md:pl-17 flex flex-row flex-wrap sm:flex-nowrap justify-between items-center py-10 gap-y-5 font-RegularMilk"
                style={{ backgroundImage: `url(${totalunits})` }}
            >
                <div className="flex flex-col">
                <h1 className="text-md md:text-xl lg:text-2xl tracking-[1px]">TOTAL UNITS</h1>
                <h1 className="text-4xl md:text-[3rem] mt-2">35</h1>
                </div>
                <div className="flex flex-row flex-wrap sm:flex-nowrap gap-y-5 gap-x-5 md:gap-15 pr-10">
                <div className="flex flex-col items-center gap-y-2">
                    <p className="text-base md:text-lg bg-white px-13 py-4">17</p>
                    <p className="text-base md:text-md bg-white px-7 py-1">Occupied</p>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                    <p className="text-base md:text-lg bg-white px-13 py-4">20</p>
                    <p className="text-base md:text-md bg-white px-9 py-1">Vacant</p>
                </div>
                </div>
            </div>
            {/* Due Today */}
            <div
                className="bg-cover bg-center shadow-[15px_13px_0px_#ffede1] w-full h-[30%] text-[#ffede1] rounded-2xl p-6"
                style={{ backgroundImage: `url(${duetoday})` }}
            >
                <h1 className="text-md md:text-xl font-RegularMilk tracking-[2px]">Due Rent Today</h1>
                <p className="text-4xl md:text-5xl mt-4 font-[LEMON MILK]">4</p>
            </div>
        </div>
    </div>
  );
}

export default caretakerdashboardcards;
