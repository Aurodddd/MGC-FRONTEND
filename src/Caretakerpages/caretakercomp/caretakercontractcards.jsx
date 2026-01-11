import { useState, useEffect } from "react";
import contractBgOne from "../../assets/contractbgone.png";


export default function caretakercontractcards() {
  // Example lease dates (replace with dynamic data from DB later if needed)
  const leaseStart = new Date("2024-06-01"); 
  const leaseEnd = new Date("2025-06-01");

  const [monthsLeft, setMonthsLeft] = useState(0);

  useEffect(() => {
    const today = new Date();
    let months =
      (leaseEnd.getFullYear() - today.getFullYear()) * 12 +
      (leaseEnd.getMonth() - today.getMonth());

    // If today is past leaseEnd → set 0
    if (months < 0) months = 0;

    setMonthsLeft(months);
  }, [leaseEnd]);

  return (
    <div className="w-full max-w-[108.1rem] mx-auto bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl mt-5 mb-8 px-12 py-8 flex flex-col gap-4 overflow-visible">
      {/* Header */}
      <div
        className="bg-cover bg-center rounded-2xl shadow-[15px_13px_0px_#330101] h-24 flex justify-center items-center md:justify-start md:pl-20"
        style={{ backgroundImage: `url(${contractBgOne})` }}
      >
        <h1 className="font-[MDMilk] md:font-[BoldMilk] tracking-[3px] md:tracking-[15px] text-[25px] md:text-[30px] text-[#dd7255]">
          CONTRACT
        </h1>
      </div>

      {/* Contract Duration & Countdown */}
      <div
        className="bg-cover bg-center rounded-2xl shadow-[15px_13px_0px_#330101] h-40 flex flex-col justify-center pl-5 md:pl-20 text-white"
        style={{ backgroundImage: `url(${contractBgTwo})` }}
      >
        <h2 className="text-lg md:text-xl font-LightMilk md:font-RegularMilk tracking-[1px]">
          Contract Duration: 12 Months
        </h2>
        <p className="text-md md:text-lg mt-2">
          Months Left:{" "}
          <span className="font-bold">{monthsLeft}</span>
        </p>
      </div>

      {/* Tenancy Rules and Terms */}
      <div className="bg-gradient-to-r from-[#fefefe] to-[#faefe8] rounded-2xl shadow-[15px_13px_0px_#330101] h-auto min-h-[10rem] pl-10 md:pl-20 pr-10 py-6 text-black">
        <h3 className="text-lg font-RegularMilk mb-2">Tenancy Rules</h3>
        <ul className="list-disc ml-6 mb-4 text-sm md:text-base">
          <li>No pets allowed inside the premises.</li>
          <li>Quiet hours are enforced from 10PM to 6AM.</li>
          <li>Tenants are responsible for maintaining cleanliness.</li>
        </ul>

        <h3 className="text-lg font-RegularMilk mb-2">Termination & Renewal Conditions</h3>
        <ul className="list-disc ml-6 text-sm md:text-base mb-6">
          <li>Early termination requires a 30-day notice.</li>
          <li>Contract renewals are subject to landlord approval.</li>
          <li>Deposit will be refunded within 15 days after move-out.</li>
        </ul>
      </div>
      {/* View Contract Button */}
        <button
          className="bg-gradient-to-r from-[#db6848] to-[#c24831] 
             rounded-2xl shadow-[15px_13px_0px_#330101] 
             min-h-[3rem] text-white font-RegularMilk 
             px-6 py-4 tracking-[3px] cursor-pointer "
          onClick={() => alert("Open full contract here (PDF/Modal).")}
        >
          View Contract Paper
        </button>
    </div>
  );
}
