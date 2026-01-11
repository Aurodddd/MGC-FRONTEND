import { useState } from "react";
import { Link } from "react-router-dom";
import PayHisBg from "../../assets/adminpayhis.png";
import logo from "../../assets/logo.png"; // Using your logo for the print header
import { MdPrint } from "react-icons/md"; 

export default function AdminPaymentHisCards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [rowToDelete, setRowToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPayment, setEditingPayment] = useState(null);

  const [newPayment, setNewPayment] = useState({
    unit: "", name: "", phone: "", date: "", payment: "Rent Bill", amount: "", status: "Paid",
  });

  const [history, setHistory] = useState([
    { id: 1, unit: "101", name: "Lance Atendidas", phone: "09123456789", date: "2025-06-10", payment: "Rent Bill", amount: 10000, status: "Paid" },
    { id: 2, unit: "102", name: "Matthew Karl Batista", phone: "09198765432", date: "2025-06-08", payment: "Electricity & Water Bill", amount: 2500, status: "Unpaid" },
    { id: 3, unit: "103", name: "Aldjon de Lacruz", phone: "09111222333", date: "2025-06-01", payment: "Advance", amount: 5000, status: "Late" },
  ]);

  const handlePrint = () => { window.print(); };

  const deleteRow = () => {
    setHistory(history.filter((item) => item.id !== rowToDelete));
    setShowDeleteModal(false);
  };

  const today = new Date().toISOString().split("T")[0];
  const dueToday = history.filter((h) => h.date === today && h.status !== "Paid").length;
  const overdue = history.filter((h) => h.date < today && h.status !== "Paid").length;

  const formatAmount = (amt) => `₱${amt.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

  const filteredHistory = history.filter((entry) => {
    const matchesSearch = entry.name.toLowerCase().includes(searchTerm.toLowerCase()) || entry.unit.toLowerCase().includes(searchTerm.toLowerCase()) || entry.payment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || entry.status === statusFilter;
    const matchesDateRange = (!fromDate || new Date(entry.date) >= new Date(fromDate)) && (!toDate || new Date(entry.date) <= new Date(toDate));
    return matchesSearch && matchesStatus && matchesDateRange;
  });

  const handleStatusChange = (id, status) => {
    setHistory(history.map((item) => (item.id === id ? { ...item, status: status } : item)));
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl h-full w-full px-4 sm:px-8 py-7 flex flex-col gap-3 md:gap-4">
      
      {/* IMPROVED PRINT STYLES */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .printable-area, .printable-area * { visibility: visible; }
          .printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
          }
          .no-print { display: none !important; }
          table { width: 100% !important; border-collapse: collapse !important; color: black !important; margin-top: 20px;}
          th, td { border: 1px solid #000 !important; padding: 10px !important; text-align: left !important; }
          .bg-[#4b150d] { background-color: #f2f2f2 !important; color: black !important; }
          .print-only-header { display: flex !important; margin-bottom: 20px; border-bottom: 2px solid black; padding-bottom: 10px; }
        }
      `}</style>

      {/* Header */}
      <div className="flex flex-col bg-cover bg-center items-center text-center sm:text-start sm:items-start text-white px-8 py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-3xl w-full no-print" style={{ backgroundImage: `url(${PayHisBg})` }}>
        <h1 className="font-BoldMilk tracking-[3px] md:tracking-[12px] text-xl md:text-2xl">Payment History Overview</h1>
      </div>

      {/* Summary Cards */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 no-print">
        <div className="bg-[#4b150d] text-[#efd4c4] rounded-xl p-3 md:p-6 flex-1 flex flex-col md:gap-2 shadow-[5px_5px_0px_#fee8da] md:shadow-[10px_8px_0px_#fee8da]">
          <p className="text-xs md:text-base font-RegularMilk">Due Today</p>
          <p className="text-lg md:text-3xl font-RegularMilk">{dueToday}</p>
        </div>
        <div className="bg-[#4b150d] text-[#efd4c4] rounded-xl p-3 md:p-6 flex-1 flex flex-col md:gap-2 shadow-[5px_5px_0px_#fee8da] md:shadow-[10px_8px_0px_#fee8da]">
          <p className="text-xs md:text-base font-RegularMilk">Overdue</p>
          <p className="text-lg md:text-3xl font-RegularMilk">{overdue}</p>
        </div>
      </div>

      {/* Payment Records Section */}
      <div className="h-full bg-gradient-to-r from-[#fee8da] to-[#efd4c4] shadow-[5px_5px_0px_#330101] sm:shadow-[10px_8px_0px_#330101] md:shadow-[15px_13px_0px_#330101] rounded-2xl p-6 flex flex-col gap-3 printable-area">
        
        <div className="hidden print-only-header items-center justify-between text-black">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold">MGC BUILDING</h1>
              <p className="text-xs uppercase">Payment Ledger Report</p>
            </div>
          </div>
          <div className="text-right text-xs">
            <p>Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex flex-row text-center md:text-start justify-center md:justify-start no-print ">
          <h2 className="font-MDMilk md:font-BoldMilk text-[#7A2E1E] text-lg tracking-[2px] ">PAYMENT RECORDS</h2>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col gap-1 md:gap-3 no-print">
          <div className="flex flex-wrap relative w-full ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
              </svg>
            </span>
            <input type="text" placeholder="Search by name, unit, or payment..." className="w-full bg-white text-sm pl-10 pr-4 py-2 border border-[#330101] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4b150d]/20" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          
          <div className="flex flex-row flex-wrap justify-center sm:justify-between gap-y-1 gap-x-1">
            <div className="flex flex-wrap flex-row gap-5">
              
              {/* DATE FILTERS (Mobile vs Desktop) */}
              <div className="flex items-center gap-2">
                <div className="flex gap-2 md:hidden">
                  <button className="p-2 bg-white border border-[#4b150d] rounded-md shadow">
                    <svg className="h-5 w-5 text-[#4b150d]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <div className="hidden md:flex gap-2 items-center">
                  <h1 className="font-LightMilk text-[#7A2E1E] text-xs ">Filter by Date</h1>
                  <input type="date" className="border border-[#4b150d] rounded-md px-2 py-1 text-sm " value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                  <span>-</span>
                  <input type="date" className="border border-[#4b150d] rounded-md px-2 py-1 text-sm " value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </div>
              </div>

              {/* STATUS FILTERS (Mobile vs Desktop) */}
              <div className="flex items-center gap-2">
                <select
                  className="md:hidden border border-[#4b150d] rounded-md px-2 py-1 text-sm bg-white"
                  value={statusFilter || "All"}
                  onChange={(e) => {
                    const val = e.target.value;
                    setStatusFilter(val === "All" ? "" : val === "Overdue" ? "Late" : val);
                  }}
                >
                  <option value="All">All Status</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                  <option value="Overdue">Overdue</option>
                </select>

                <div className="hidden md:flex items-center flex-wrap gap-2">
                  <h1 className="font-LightMilk text-[#7A2E1E] text-xs">Filter by status</h1>
                  {["All", "Unpaid", "Overdue", "Paid"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status === "All" ? "" : status === "Overdue" ? "Late" : status)}
                      className={`px-3 py-1 rounded-lg text-sm font-LightMilk transition cursor-pointer tracking-[1px] 
                        ${(status === "All" && statusFilter === "") || (status === "Unpaid" && statusFilter === "Unpaid") || (status === "Overdue" && statusFilter === "Late") || (status === "Paid" && statusFilter === "Paid")
                          ? "bg-[#D86A51] text-white" : "bg-white text-[#D86A51]"
                        }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none font-LightMilk sm:font-RegularMilk bg-[#D86A51] text-sm tracking-[1px] text-white px-4 md:px-12 py-1 md:py-2 rounded-md hover:bg-[#b84a2f] transition" onClick={() => setIsAddModalOpen(true)}>
                + Add Payment Record
              </button>
              <button onClick={handlePrint} className="flex items-center justify-center gap-2 text-xs md:text-sm font-RegularMilk bg-[#4b150d] text-[#efd4c4] px-4 md:px-6 py-1 md:py-2 rounded-md hover:opacity-90 transition cursor-pointer">
                <MdPrint size={18}/>
              </button>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-auto rounded-xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#4b150d] text-[#efd4c4] uppercase tracking-[2px] text-[10px] font-RegularMilk">
                <th className="py-4 px-4 text-left">Unit No.</th>
                <th className="py-4 px-4 text-left">Full Name</th>
                <th className="py-4 px-4 text-left">Phone No.</th>
                <th className="py-4 px-4 text-left">Date</th>
                <th className="py-4 px-4 text-left">Payment</th>
                <th className="py-4 px-4 text-left">Amount</th>
                <th className="py-4 px-4 text-left no-print">Status</th>
                <th className="py-4 px-4 text-center no-print">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map((entry, index) => (
                <tr key={index} className="bg-white text-black text-sm border-b-2 border-[#330101]/10 last:border-b-0">
                  <td className="py-4 px-4 font-semibold text-[#330101]">{entry.unit}</td>
                  <td className="py-4 px-4">
                    <Link to="/admintenantprof" className="text-blue-500 underline hover:text-blue-900 font-medium no-print">{entry.name}</Link>
                    <span className="hidden print:inline">{entry.name}</span>
                  </td>
                  <td className="py-4 px-4 text-gray-500">{entry.phone}</td>
                  <td className="py-4 px-4 text-gray-500">{entry.date}</td>
                  <td className="py-4 px-4 font-semibold text-[#330101]">{entry.payment}</td>
                  <td className="py-4 px-4 font-bold text-[#330101]">{formatAmount(entry.amount)}</td>
                  <td className="py-4 px-4 no-print">
                    <div className="relative inline-block group">
                      <select
                        value={entry.status}
                        onChange={(e) => handleStatusChange(entry.id, e.target.value)}
                        className={`appearance-none cursor-pointer inline-block px-6 py-1 pr-10 rounded-full text-[10px] font-bold uppercase border-2 transition-all outline-none focus:ring-0
                          ${entry.status === "Paid" ? "border-green-500 text-green-600 bg-green-50" : ""}
                          ${entry.status === "Unpaid" ? "border-red-500 text-red-600 bg-red-50" : ""}
                          ${entry.status === "Late" ? "border-yellow-500 text-yellow-600 bg-yellow-50" : ""}
                        `}
                      >
                        <option value="Paid">Paid</option>
                        <option value="Unpaid">Unpaid</option>
                        <option value="Late">Late</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center no-print">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => { setEditingPayment(entry); setIsEditModalOpen(true); }} className="p-2 bg-[#d45f41] text-white rounded-lg cursor-pointer">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button onClick={() => { setRowToDelete(entry.id); setShowDeleteModal(true); }} className="p-2 bg-[#4b150d] text-[#efd4c4] rounded-lg cursor-pointer">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Payment Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative">
            <h2 className="text-xl font-BoldMilk mb-4 text-[#4b150d]">Add Payment</h2>
            <button onClick={() => setIsAddModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">✕</button>
            <div className="flex flex-col gap-3">
              <input type="text" placeholder="Unit No" className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={newPayment.unit} onChange={(e) => setNewPayment({ ...newPayment, unit: e.target.value })} />
              <input type="text" placeholder="Full Name" className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={newPayment.name} onChange={(e) => setNewPayment({ ...newPayment, name: e.target.value })} />
              <input type="text" placeholder="Phone No." className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={newPayment.phone} onChange={(e) => setNewPayment({ ...newPayment, phone: e.target.value })} />
              <input type="date" className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={newPayment.date} onChange={(e) => setNewPayment({ ...newPayment, date: e.target.value })} />
              <select className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={newPayment.payment} onChange={(e) => setNewPayment({ ...newPayment, payment: e.target.value })}>
                <option value="Rent Bill">Rent Bill</option>
                <option value="Electricity & Water Bill">Electricity & Water Bill</option>
                <option value="Advance">Advance</option>
              </select>
              <input type="number" placeholder="Amount" className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={newPayment.amount} onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })} />
              <select className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={newPayment.status} onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value })}>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
                <option value="Late">Late</option>
                <option value="Partial">Partial</option>
              </select>
              <button
                className="bg-[#D86A51] text-white py-2 rounded-md mt-2"
                onClick={() => {
                  setHistory([...history, { id: Date.now(), ...newPayment, amount: Number(newPayment.amount) }]);
                  setNewPayment({ unit: "", name: "", phone: "", date: "", payment: "Rent Bill", amount: "", status: "Paid" });
                  setIsAddModalOpen(false);
                }}
              >
                Add Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Payment Modal */}
      {isEditModalOpen && editingPayment && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative">
            <h2 className="text-xl font-BoldMilk mb-4 text-[#4b150d]">Edit Payment</h2>
            <button onClick={() => setIsEditModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">✕</button>
            <div className="flex flex-col gap-3">
              <input type="text" placeholder="Unit No" className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={editingPayment.unit} onChange={(e) => setEditingPayment({ ...editingPayment, unit: e.target.value })} />
              <input type="text" placeholder="Full Name" className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={editingPayment.name} onChange={(e) => setEditingPayment({ ...editingPayment, name: e.target.value })} />
              <input type="text" placeholder="Phone No." className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={editingPayment.phone} onChange={(e) => setEditingPayment({ ...editingPayment, phone: e.target.value })} />
              <input type="date" className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={editingPayment.date} onChange={(e) => setEditingPayment({ ...editingPayment, date: e.target.value })} />
              <select className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={editingPayment.payment} onChange={(e) => setEditingPayment({ ...editingPayment, payment: e.target.value })}>
                <option value="Rent Bill">Rent Bill</option>
                <option value="Electricity & Water Bill">Electricity & Water Bill</option>
                <option value="Advance">Advance</option>
              </select>
              <input type="number" placeholder="Amount" className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={editingPayment.amount} onChange={(e) => setEditingPayment({ ...editingPayment, amount: e.target.value })} />
              <select className="w-full border border-[#4b150d] rounded-md px-3 py-2" value={editingPayment.status} onChange={(e) => setEditingPayment({ ...editingPayment, status: e.target.value })}>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
                <option value="Late">Late</option>
                <option value="Partial">Partial</option>
              </select>
              <button
                className="bg-[#D86A51] text-white py-2 rounded-md mt-2 hover:bg-[#b84a2f] transition-colors font-bold"
                onClick={() => {
                  setHistory(history.map(item => item.id === editingPayment.id ? { ...editingPayment, amount: Number(editingPayment.amount) } : item));
                  setIsEditModalOpen(false);
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-80 text-center">
            <h2 className="text-lg font-bold mb-4">Delete Record</h2>
            <p className="mb-6">Are you sure you want to delete this record?</p>
            <div className="flex justify-around">
              <button onClick={() => setShowDeleteModal(false)} className="px-4 py-2 rounded border border-gray-300">Cancel</button>
              <button onClick={deleteRow} className="px-4 py-2 rounded bg-red-500 text-white">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}