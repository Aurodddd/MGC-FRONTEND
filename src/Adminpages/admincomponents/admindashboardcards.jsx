import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 🔹 Added for gradient fill
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

import dashboardBg from "../../assets/dashboardbackground.png";
import totaltenantbg from "../../assets/totaltenantsbg.png";
import totalunits from "../../assets/totalunitsbg.png";
import rentcollected from "../../assets/rentcollectedbg.png";
import duetoday from "../../assets/duetodaybg.png";
import maintreq from "../../assets/maintreqbg.png";
import appointreq from "../../assets/appointreqbg.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 🔹 Registered Filler
);

export default function AdminDashboardCards() {
  const navigate = useNavigate();

  const monthNames = useMemo(() => [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ], []);

  const monthlyEarnings = [
    4000, 2000, 3000, 4500, 7000, 10000, 9500, 6000, 7500, 8500, 9000, 8200
  ];

  const currentMonthIndex = new Date().getMonth();
  const currentMonthName = monthNames[currentMonthIndex];
  const currentMonthEarnings = monthlyEarnings[currentMonthIndex];

  // 🔹 UPDATED GRAPH DATA ONLY
  const earningsData = {
    labels: monthNames,
    datasets: [
      {
        label: 'Monthly Earnings',
        data: monthlyEarnings,
        borderColor: '#ffede1',
        // This creates the smooth fade effect
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, 'rgba(255, 237, 225, 0.4)');
          gradient.addColorStop(1, 'rgba(255, 237, 225, 0)');
          return gradient;
        },
        fill: true, // 🔹 Enables area fill
        tension: 0.4, // 🔹 Smoother line curve
        pointBackgroundColor: '#ffede1',
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2
      }
    ]
  };

  const earningsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { left: 5, right: 10, top: 10 }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#ffede1',
          autoSkip: true,
          maxTicksLimit: 6,
          maxRotation: 0,
          minRotation: 0,
          font: { size: 10 }
        },
        grid: { display: false }
      },
      y: {
        ticks: {
          color: '#ffede1',
          stepSize: 2000,
          font: { size: 12 }
        },
        grid: { color: 'rgba(255, 237, 225, 0.1)' }
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-6 sm:px-8 md:px-9  py-8  flex flex-col gap-3 md:gap-5 ">

      {/* Header */}
      <div
        className="flex flex-col bg-cover bg-center items-center sm:items-start  text-white px-6 sm:px-9 md:px-15 py-5 sm:py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-2xl w-full gap-1"
        style={{ backgroundImage: `url(${dashboardBg})` }}
      >
        <h2 className="font-LightMilk md:text-xl ">
          WELCOME ADMIN!
        </h2>
        <h1 className="font-BoldMilk text-2xl md:text-3xl tracking-[3px] md:tracking-[8px] ">
          DASHBOARD
        </h1>
      </div>

      {/* Grid Container */}
      <div className="flex flex-col lg:flex-row gap-5 w-full h-full">

        {/* Left Section */}
        <div className="flex flex-col gap-1 md:gap-3 w-full lg:w-[66%] h-full">
          {/* TOTAL TENANTS */}
          <div
            className="bg-cover bg-center shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] w-full rounded-2xl flex flex-col justify-center py-18 px-10 md:px-17 font-RegularMilk"
            style={{ backgroundImage: `url(${totaltenantbg})` }}
          >
            <h1 className="text-base md:text-xl tracking-[1px]">TOTAL TENANTS</h1>
            <p className="text-xl md:text-2xl lg:text-4xl mt-2">20</p>
          </div>

          {/* TOTAL UNITS */}
          <div
            className="bg-cover bg-center shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] w-full rounded-2xl py-15 px-10 md:px-17 flex flex-row flex-wrap sm:flex-nowrap justify-between items-center py-18 gap-y-5 font-RegularMilk"
            style={{ backgroundImage: `url(${totalunits})` }}
          >
            <div className="flex flex-col ">
              <h1 className="text-base md:text-xl tracking-[1px] mb-2 ">TOTAL UNITS</h1>
              <h1 className="text-xl md:text-2xl lg:text-4xl ">35</h1>
            </div>
            <div className="flex flex-row gap-x-4 md:gap-x-8 lg:pr-5 text-center ">
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
              style={{ backgroundImage: `url(${appointreq})` }}
            >
              <h1 className="text-base tracking-[1px] font-RegularMilk">Appointment Requests</h1>
              <div className="flex flex-row justify-between">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-LightMilk pl-3">2</h1>
                <button onClick={() => navigate('/adminapplicationrequest')} className="bg-[#4b150d] text-sm text-[#ffede1] tracking-[1px] font-MDMilk px-4 rounded-2xl w-max shadow hover:bg-white hover:text-[#aa2f1e] transition cursor-pointer">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-1 md:gap-3 w-full lg:w-[37%] h-full">

          {/* RENT COLLECTED */}
          <div
            className="bg-cover bg-center shadow-[5px_5px_0px_#ffede1] shadow-[5px_5px_0px_#ffede1] md:shadow-[10px_8px_0px_#ffede1] w-full h-full text-[#ffede1] rounded-2xl p-8 flex flex-col justify-center text-center"
            style={{ backgroundImage: `url(${rentcollected})` }}
          >
            <div className="flex flex-col gap-1">
              <div className="h-56 sm:h-64 md:h-72 lg:h-80 mb-4">
                <Line data={earningsData} options={earningsOptions} />
              </div>

              <h1 className="text-xs md:text-sm font-LightMilk border-t border-[#ffede1]/20 pt-2 md:pt-4 tracking-[2px]">
                Rent Collected this Month ({currentMonthName}):
              </h1>
              <p className="text-xl md:text-2xl font-MDMilk">
                ₱{currentMonthEarnings.toLocaleString()} / ₱10,000
              </p>
            </div>
          </div>

          {/* DUE TODAY */}
          <div
            className="bg-cover bg-center shadow-[5px_5px_0px_#330101] shadow-[5px_5px_0px_#ffede1] md:shadow-[10px_8px_0px_#ffede1] flex flex-col justify-center w-full h-[30%] rounded-2xl p-8 px-12 gap-3"
            style={{ backgroundImage: `url(${duetoday})` }}
          >
            <h1 className="text-base md:text-xl font-RegularMilk tracking-[2px ] text-[#ffede1]">DUE RENT TODAY</h1>
            <div className="flex flex-row justify-between">
              <p className="text-xl md:text-2xl lg:text-4xl font-LightMilk text-[#ffede1]">4</p>
              <button onClick={() => navigate('/adminpayments')} className="bg-[#ffede1] text-sm text-[#aa2f1e] font-MDMilk px-6  tracking-[1px] rounded-2xl w-max shadow hover:bg-[#4b150d] hover:text-[#ffede1] transition cursor-pointer">
                View
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}