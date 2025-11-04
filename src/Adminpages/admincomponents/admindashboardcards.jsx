import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
  Legend
);

export default function AdminDashboardCards() {
  const navigate = useNavigate();

  const monthNames = useMemo(() => [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ], []);

  const monthlyEarnings = [
    4000, 2000, 3000, 4500, 7000, 10000, 9500, 6000, 7500, 8500, 9000, 8200
  ];

  const currentMonthIndex = new Date().getMonth();
  const currentMonthName = monthNames[currentMonthIndex];
  const currentMonthEarnings = monthlyEarnings[currentMonthIndex];

  const earningsData = {
    labels: monthNames,
    datasets: [
      {
        label: 'Monthly Earnings',
        data: monthlyEarnings,
        borderColor: '#ffede1',
        backgroundColor: 'rgba(255,237,225,0.2)',
        tension: 0.5,
        pointBackgroundColor: '#ffede1'
      }
    ]
  };

  const earningsOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
        color: '#ffede1' },
        grid: { display: false }
      },
      y: {
        ticks:
         { color: '#ffede1',
        stepSize: 2000,
        font: {
          size: 14,
        },
        },
        grid: { color: 'rgba(255, 237, 225, 0.1)' }
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-auto overflow-visible  px-6 md:px-12 pt-15 pb-15 flex flex-col gap-6">

      {/* Header */}
      <div
        className="bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl text-white px-4 md:px-28 py-5 flex flex-col justify-center text-center md:text-justify"
        style={{ backgroundImage: `url(${dashboardBg})` }}
      >
        <h2 className="text-[10px] md:text-[22px] font-LightMilk tracking-[2px] md:pl-[81px]">
          WELCOME ADMIN!
        </h2>
        <h1 className="text-[24px] md:text-[40px] font-BoldMilk tracking-[10px] md:tracking-[15px]">
          DASHBOARD
        </h1>
      </div>

      {/* Grid Container */}
      <div className="flex flex-col lg:flex-row gap-5 w-full">

        {/* Left Section */}
        <div className="flex flex-col gap-8 w-full lg:w-[66%]">

          {/* Total Tenants */}
          <div
            className="bg-cover bg-center shadow-[15px_13px_0px_#330101] w-full min-h-45 rounded-2xl flex flex-col justify-center pl-10 md:pl-17 font-RegularMilk"
            style={{ backgroundImage: `url(${totaltenantbg})` }}
          >
            <h1 className="text-xl md:text-2xl tracking-[1px]">TOTAL TENANTS</h1>
            <p className="text-4xl md:text-[3rem] mt-2">20</p>
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

          {/* Requests */}
          <div className="bg-gradient-to-r from-[#da6646] to-[#aa2f1e] shadow-[15px_13px_0px_#330101] w-full rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-8 px-6 md:px-20 py-7 text-black">
            {/* Maintenance Requests */}
            <div
              className="bg-cover bg-center rounded-2xl w-full sm:w-1/2 p-5"
              style={{ backgroundImage: `url(${maintreq})` }}
            >
              <h1 className="text-lg font-RegularMilk">Maintenance Requests</h1>
              <h1 className="text-[40px] md:text-[30px] font-LightMilk pl-3">5</h1>
              <button onClick={() => navigate('/adminmaintenance')} className="bg-[#ffede1] text-[#aa2f1e] font-MDMilk px-4 py-1 tracking-[1px] rounded-lg w-max shadow hover:bg-white transition">
                View
              </button>
            </div>

            {/* Appointment Requests */}
            <div
              className="bg-cover bg-center rounded-2xl w-full sm:w-1/2 p-5"
              style={{ backgroundImage: `url(${appointreq})` }}
            >
              <h1 className="text-lg font-RegularMilk">Appointment Requests</h1>
              <h1 className="text-[40px] md:text-[30px] font-LightMilk pl-3">2</h1>
              <button onClick={() => navigate('/adminapplicationrequest')} className="bg-[#ffede1] text-[#aa2f1e] font-MDMilk px-4 py-1 tracking-[1px] rounded-lg w-max shadow hover:bg-white transition">
                View
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-5 w-full lg:w-[37%] justify-center items-center text-center">

          {/* Rent Collected */}
          <div
            className="bg-cover bg-center shadow-[15px_13px_0px_#ffede1] w-full h-full text-[#ffede1] rounded-2xl p-6 flex flex-col justify-center "
            style={{ backgroundImage: `url(${rentcollected})` }}
          >
            <div>
              <div className="h-60 mb-10">
                <Line data={earningsData} options={earningsOptions} />
              </div>
              <h1 className="text-base md:text-md font-RegularMilk tracking-[2px]">
                Rent Collected this Month ({currentMonthName}):
              </h1>
              <p className="text-lg md:text-xl mt-2 font-[LEMON MILK]">
                ₱{currentMonthEarnings.toLocaleString()} / ₱10,000
              </p>
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
    </div>
  );
}