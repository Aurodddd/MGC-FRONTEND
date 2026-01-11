import React from "react";
import { FaFileDownload, FaEye } from "react-icons/fa";
import contractBgOne from "../../assets/contractbgone.png";
import contractBgTwo from "../../assets/contractbgtwo.jpg.png"


export default function ContractCards() {
  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-4 sm:px-8 py-7 flex flex-col gap-6">
      
      {/* 1. HEADER */}
      <div
        className="flex flex-col bg-cover bg-center items-center text-center sm:text-start sm:items-start text-white px-10 py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-3xl w-full"
        style={{ backgroundImage: `url(${contractBgTwo})` }}
      >
        <h1 className="font-BoldMilk tracking-[3px] md:tracking-[12px] text-xl md:text-2xl text-white">
          CONTRACT DETAILS
        </h1>
      </div>

      {/* 2. INFO TILES (TOP) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#ffede1] p-6 rounded-2xl shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] flex flex-col gap-y-2">
          <p className="text-[10px] font-RegularMilk text-[#330101]/60 uppercase tracking-widest mb-1">Start Date</p>
          <p className="font-BoldMilk text-[#330101] text-sm md:text-base">September 25, 2025</p>
        </div>
        
        <div className="bg-[#ffede1] p-6 rounded-2xl shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] flex flex-col gap-y-2">
          <p className="text-[10px] font-RegularMilk text-[#330101]/60 uppercase tracking-widest mb-1">End Date</p>
          <p className="font-BoldMilk text-[#330101] text-sm md:text-base">September 25, 2026</p>
        </div>

        <div className="bg-[#4b150d] p-6 rounded-2xl shadow-[5px_5px_0px_#faefe8] md:shadow-[10px_8px_0px_#faefe8] flex flex-col sm:col-span-2 lg:col-span-1 gap-y-2">
          <p className="text-[10px] font-RegularMilk text-[#ffebdf]/60 uppercase tracking-widest mb-1">Status</p>
          <p className="font-BoldMilk bg-green-600 px-5 py-1 rounded-xl w-fit text-white text-sm md:text-base tracking-[2px]">
            ACTIVE
          </p>
        </div>
      </div>

      {/* 3. BUTTONS ROW (CENTERED) */}
      <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
        <button
          className="flex-1 bg-[#4b150d] text-[#ffebdf] text-sm rounded-2xl shadow-[5px_5px_0px_#faefe8] md:shadow-[8px_8px_0px_#faefe8] font-RegularMilk px-4 py-5 tracking-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#faefe8] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-3"
          onClick={() => alert("Open full contract")}
        >
          <FaEye size={18} /> VIEW FULL CONTRACT
        </button>

        <button
          className="flex-1 bg-[#4b150d] text-[#ffebdf] text-sm rounded-2xl shadow-[5px_5px_0px_#faefe8] md:shadow-[8px_8px_0px_#faefe8] font-RegularMilk px-4 py-5 tracking-[1px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#faefe8] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-3"
          onClick={() => window.print()}
        >
          <FaFileDownload size={18} /> DOWNLOAD COPY
        </button>
      </div>

      {/* 4. RULES & CONDITIONS (BOTTOM) */}
      <div className="bg-gradient-to-r from-[#fefefe] to-[#ffede1] rounded-2xl shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Section A */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-BoldMilk text-[#330101] border-b-2 border-[#330101]/10 pb-2">
              Tenancy Rules
            </h3>
            <ul className="list-disc ml-5 space-y-3 text-sm md:text-base text-black/80">
              <li>No pets allowed inside the premises.</li>
              <li>Quiet hours are enforced from 10PM to 6AM.</li>
              <li>Tenants are responsible for maintaining cleanliness.</li>
            </ul>
          </div>

          {/* Section B */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-BoldMilk text-[#330101] border-b-2 border-[#330101]/10 pb-2">
              Conditions & Renewal
            </h3>
            <ul className="list-disc ml-5 space-y-3 text-sm md:text-base text-black/80">
              <li>Early termination requires a 30-day notice.</li>
              <li>Contract renewals are subject to landlord approval.</li>
              <li>Deposit will be refunded within 15 days after move-out.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}