import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPrint } from "react-icons/fa"; // Added for the print button
import PayHisBg from "../../assets/adminpayhis.png";
import logo from '../../assets/logo.png'; // Imported logo for print header

export default function caretakerpaymenthiscards() {
  const [searchTerm, setSearchTerm] = useState("");

  const [history] = useState([
    {
      unit: "101",
      name: "Lance Atendidas",
      phone: "09123456789",
      date: "September 10, 2025",
      payment: "Rent Bill",
      amount: "₱10,000",
      status: "Paid",
    },
    {
      unit: "102",
      name: "Matthew Karl Batista",
      phone: "09198765432",
      date: "September 8, 2025",
      payment: "Electricity & Water Bill",
      amount: "₱2,500",
      status: "Unpaid",
    },
    {
      unit: "103",
      name: "Aldjon De Lacruz",
      phone: "09111222333",
      date: "September 1, 2025",
      payment: "Advance",
      amount: "₱5,000",
      status: "Late",
    },
  ]);

  // Handle Print Function
  const handlePrint = () => {
    window.print();
  };

  const getStatusStyle = (status) => {
    const base = "inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase border-2 tracking-wider ";
    switch (status) {
      case "Paid":
        return base + "border-green-500 text-green-600 bg-green-50";
      case "Unpaid":
        return base + "border-yellow-500 text-yellow-600 bg-yellow-50";
      case "Late":
        return base + "border-red-500 text-red-600 bg-red-50";
      default:
        return base + "border-gray-400 text-gray-500 bg-gray-50";
    }
  };

  const filteredHistory = history.filter(
    (entry) =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.payment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-4 sm:px-8 py-7 flex flex-col gap-3 md:gap-4 printable-area">
      
      {/* Integrated Print Styles from Maintenance Page */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .printable-content, .printable-content * { visibility: visible; }
          .printable-content { 
            position: absolute; 
            left: 0; 
            top: 0; 
            width: 100%; 
            background: white !important;
            padding: 20px;
          }
          .no-print { display: none !important; }
          table { 
            color: black !important; 
            border-collapse: collapse !important; 
            width: 100% !important; 
            margin-top: 10px;
          }
          th, td { 
            border: 1px solid #000 !important; 
            padding: 8px !important; 
            color: black !important; 
          }
          thead tr { background-color: #f2f2f2 !important; -webkit-print-color-adjust: exact; }
          .print-header-visible { display: flex !important; visibility: visible !important; }
        }
      `}</style>

      {/* Header - Added no-print */}
      <div
        className="flex flex-col bg-cover bg-center items-center text-center sm:text-start sm:items-start text-white px-8 py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-3xl w-full no-print"
        style={{ backgroundImage: `url(${PayHisBg})` }}
      >
        <h1 className="font-BoldMilk tracking-[3px] md:tracking-[12px] text-xl md:text-2xl uppercase">
          Payment History Overview
        </h1>
      </div>

      <div className="h-full bg-gradient-to-r from-[#ffebdf] to-[#f2c9b1] shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] flex flex-col gap-1 rounded-2xl px-4 md:px-8 py-5">
        
        {/* Search Bar & Print Button - Added no-print */}
        <div className="flex flex-col sm:flex-row items-stretch gap-y-2 md:gap-4 mb-1 no-print">
          <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="h-5 w-5 text-black opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by name, unit, or payment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-sm pl-10 pr-4 py-2 border border-[#330101] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4b150d]/20 transition-all"
            />
          </div>

          {/* Print Button Added */}
          <button
            onClick={handlePrint}
            className="flex items-center justify-center p-3 bg-[#4b150d] text-[#efd4c4] rounded-lg shadow hover:bg-[#5c1a12] transition cursor-pointer active:scale-95"
            title="Print Table"
          >
            <FaPrint size={18} />
          </button>
        </div>

        <div className="overflow-x-auto printable-content">
          {/* MGC BUILDING PRINT HEADER (Visible only on print) */}
          <div className="hidden print-header-visible items-center justify-between border-b-2 border-black pb-4 mb-6 text-black">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
              <div className="text-left">
                <h1 className="text-2xl font-bold tracking-tight">MGC BUILDING</h1>
                <p className="text-xs uppercase tracking-widest text-gray-600">Payment History Report</p>
              </div>
            </div>
            <div className="text-right text-xs">
              <p>Date Generated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <table className="w-full border-separate border-spacing-y-1">
            <thead>
              <tr className="bg-[#4b150d] text-[#efd4c4] uppercase tracking-[2px] text-[10px] font-RegularMilk">
                <th className="py-3 px-4 text-left">Unit No.</th>
                <th className="py-3 px-4 text-left">Full Name</th>
                <th className="py-3 px-4 text-left">Phone No.</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Payment</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left no-print">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map((entry, index) => (
                <tr key={index} className="bg-white text-black text-sm">
                  <td className="py-3 px-4 font-bold">{entry.unit}</td>
                  <td className="py-3 px-4">{entry.name}</td>
                  <td className="py-3 px-4 text-gray-600">{entry.phone}</td>
                  <td className="py-3 px-4">{entry.date}</td>
                  <td className="py-3 px-4">{entry.payment}</td>
                  <td className="py-3 px-4 font-semibold">{entry.amount}</td>
                  <td className="py-3 px-4 no-print">
                    <span className={getStatusStyle(entry.status)}>
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredHistory.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-600">
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}