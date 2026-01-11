import { useState } from "react";
import ContractBg from "../../assets/admincontractbg.png";
import logo from '../../assets/logo.png'; // Integrated logo for official header
import { MdEdit, MdSave, MdSearch, MdFileDownload, MdCloudUpload, MdClose, MdWarning, MdPrint } from "react-icons/md"; 

export default function AdminContractCards() {
  const [rules, setRules] = useState(
    `• 2500/month for single person
• 3000/month for 2 person
• 1 month deposit
• 1 month advance
• Only 2 wheeled vehicles are allowed
• No pets allowed`
  );

  const [conditions, setConditions] = useState(
    `• Termination: Must be communicated at least 30 days in advance
• Renewal: Must be communicated at least 30 days in advance`
  );

  const [isEditingRules, setIsEditingRules] = useState(false);
  const [isEditingConditions, setIsEditingConditions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [contracts, setContracts] = useState([
    { id: 1, unit: "101", tenant: "Juan Dela Cruz", signed: "2024-01-01", expires: "2024-12-31", status: "Active", file: null },
    { id: 2, unit: "102", tenant: "Maria Santos", signed: "2023-10-15", expires: "2024-10-14", status: "Expiring", file: null },
    { id: 3, unit: "103", tenant: "Pedro Reyes", signed: "2023-01-01", expires: "2023-12-31", status: "Expired", file: null },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [activeContract, setActiveContract] = useState(null);

  const [newContract, setNewContract] = useState({ unit: "", tenant: "", signed: "", expires: "", file: null });
  const [editFormData, setEditFormData] = useState({ unit: "", tenant: "", signed: "", expires: "" });

  // PRINT FUNCTION
  const handlePrint = () => {
    window.print();
  };

  const handleAction = (action, contract, e) => {
    setActiveContract(contract);
    if (action === "edit") {
      setEditFormData({ unit: contract.unit, tenant: contract.tenant, signed: contract.signed, expires: contract.expires });
      setIsEditModalOpen(true);
    } else if (action === "view") {
      alert(`Viewing PDF for Unit ${contract.unit}...`);
    } else if (action === "change") {
      setIsUploadModalOpen(true);
    } else if (action === "delete") {
      setIsDeleteModalOpen(true);
    }
    if (e) e.target.value = ""; 
  };

  const handleAddContract = (e) => {
    e.preventDefault();
    const addedContract = { ...newContract, id: Date.now(), status: "Active" };
    setContracts([...contracts, addedContract]);
    setIsModalOpen(false);
    setNewContract({ unit: "", tenant: "", signed: "", expires: "", file: null });
  };

  const handleUpdateContract = (e) => {
    e.preventDefault();
    setContracts(contracts.map(c => c.id === activeContract.id ? { ...c, ...editFormData } : c));
    setIsEditModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    setContracts(contracts.filter(c => c.id !== activeContract.id));
    setIsDeleteModalOpen(false);
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setContracts(contracts.map(c => c.id === activeContract.id ? { ...c, file: file } : c));
      setIsUploadModalOpen(false);
      alert("Contract file updated!");
    }
  };

  const filteredContracts = contracts.filter((c) => {
    const matchesSearch = c.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.tenant.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl h-full w-full px-4 sm:px-8 py-7 flex flex-col gap-3 md:gap-4 printable-area">
      
      {/* INTEGRATED PRINT STYLES */}
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
          table { color: black !important; border-collapse: collapse !important; width: 100% !important; margin-top: 10px; }
          th, td { 
            border: 1px solid #000 !important; 
            padding: 8px !important; 
            color: black !important; 
            text-decoration: none !important;
          }
          thead tr { background-color: #f2f2f2 !important; -webkit-print-color-adjust: exact; }
          .print-header-visible { display: flex !important; visibility: visible !important; }
        }
      `}</style>

      {/* 01. HEADER - Added no-print */}
      <div
        className="flex flex-col bg-cover bg-center items-center text-center sm:text-start sm:items-start px-8 py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-3xl w-full no-print"
        style={{ backgroundImage: `url(${ContractBg})` }}
      >
        <h1 className="font-BoldMilk tracking-[3px] md:tracking-[12px] text-xl md:text-2xl uppercase text-[#db6646]">
          Contract Overview
        </h1>
      </div>

      {/* 02. GLOBAL RULES - Added no-print */}
      <div className="bg-[#4b150d] shadow-[5px_5px_0px_#fee8da] md:shadow-[10px_8px_0px_#fee8da] rounded-2xl p-6 no-print">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-[#efd4c4]/20 pb-2">
              <h2 className="font-BoldMilk text-[#efd4c4] text-base uppercase tracking-wider">Tenancy Rules</h2>
              <button onClick={() => setIsEditingRules(!isEditingRules)} className="text-[#d45f41] hover:text-white transition-colors cursor-pointer">
                {isEditingRules ? <MdSave size={24}/> : <MdEdit size={24}/>}
              </button>
            </div>
            {isEditingRules ? (
              <textarea value={rules} onChange={(e) => setRules(e.target.value)} className="w-full p-4 rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#d45f41] text-sm " rows={5} />
            ) : (
              <div className="bg-[#fee8da] p-4 rounded-xl text-black text-sm whitespace-pre-wrap min-h-[140px] font-medium leading-relaxed">
                {rules}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-[#efd4c4]/20 pb-2">
              <h2 className="font-BoldMilk text-[#efd4c4] text-base uppercase tracking-wider">Termination and Renewal Conditions</h2>
              <button onClick={() => setIsEditingConditions(!isEditingConditions)} className="text-[#d45f41] hover:text-white transition-colors cursor-pointer">
                {isEditingConditions ? <MdSave size={24}/> : <MdEdit size={24}/>}
              </button>
            </div>
            {isEditingConditions ? (
              <textarea value={conditions} onChange={(e) => setConditions(e.target.value)} className="w-full p-4 rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#d45f41] text-sm" rows={5} />
            ) : (
              <div className="bg-[#fee8da] p-4 rounded-xl text-black text-sm whitespace-pre-wrap min-h-[140px] font-medium leading-relaxed">
                {conditions}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 03. CONTRACTS OVERVIEW SECTION */}
      <div className="h-full bg-gradient-to-r from-[#fee8da] to-[#efd4c4] shadow-[5px_5px_0px_#330101] sm:shadow-[10px_8px_0px_#330101] md:shadow-[15px_13px_0px_#330101] rounded-2xl p-6 flex flex-col gap-3 ">
        <div className="flex flex-row text-center md:text-start justify-center md:justify-start ">

          <h2 className="font-MDMilk md:font-BoldMilk text-[#7A2E1E] text-lg  tracking-[2px] ">

            CONTRACT TABLE

          </h2>

        </div>
        {/* Actions Bar - Added no-print */}
        <div className="flex flex-col gap-1 md:gap-2 no-print">
           <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MdSearch className="h-5 w-5 text-black" />
            </span>
            <input
              type="text"
              placeholder="Search Unit or Tenant..."
              className="w-full bg-white text-sm pl-10 pr-4 py-2 border border-[#330101] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4b150d]/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-row flex-wrap justify-center sm:justify-between items-center gap-y-2">
            <div className="flex flex-wrap items-center gap-y-1 gap-x-2">
              <h1 className="font-LightMilk text-[#7A2E1E] text-xs">Filter by status</h1>
              {["All", "Active", "Expiring", "Expired"].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status === "All" ? "" : status)}
                  className={`px-4 py-1 rounded-lg text-sm font-RegularMilk transition shadow-sm
                    ${(status === "All" && statusFilter === "") || statusFilter === status
                      ? "bg-[#D86A51] text-white"
                      : "bg-white text-[#D86A51] border border-[#D86A51]"
                    }`}
                >
                  {status}
                </button>
              ))}
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex-1 md:flex-none text-xs md:text-sm font-RegularMilk bg-[#D86A51] text-white px-6 md:px-10 py-1 md:py-2 rounded-md hover:bg-[#b84a2f] transition cursor-pointer"
              >
                + Add Contract
              </button>

              <button 
                onClick={handlePrint}
                className="flex items-center justify-center gap-2 text-xs md:text-sm font-RegularMilk bg-[#4b150d] text-[#efd4c4] px-4 md:px-6 py-1 md:py-2 rounded-md hover:opacity-90 transition cursor-pointer"
              >
                <MdPrint size={18}/> 
              </button>
            </div>
          </div>
        </div>

        {/* Printable Section */}
        <div className="overflow-x-auto rounded-xl printable-content">
          
          {/* MGC BUILDING PRINT HEADER (Visible only on print) */}
          <div className="hidden print-header-visible items-center justify-between border-b-2 border-black pb-4 mb-6 text-black">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
              <div className="text-left">
                <h1 className="text-2xl font-bold tracking-tight">MGC BUILDING</h1>
                <p className="text-xs uppercase tracking-widest text-gray-600">Contract Master List Report</p>
              </div>
            </div>
            <div className="text-right text-xs text-black">
              <p>Date Generated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#4b150d] text-[#efd4c4] uppercase tracking-[2px] text-[10px] font-RegularMilk">
                <th className="py-3 px-4 text-left">Unit No.</th>
                <th className="py-3 px-4 text-left">Tenant Name</th>
                <th className="py-3 px-4 text-left">Date Signed</th>
                <th className="py-3 px-4 text-left">Expiration</th>
                <th className="py-3 px-4 text-center no-print">Status</th> 
                <th className="py-3 px-4 text-center no-print">Actions</th>
                <th className="py-3 px-4 text-right no-print"></th>
              </tr>
            </thead>
            <tbody>
              {filteredContracts.length > 0 ? (
                filteredContracts.map((c, i) => (
                  <tr key={i} className="bg-white text-[#4b150d] text-sm border-b border-gray-200 last:border-b-0 hover:bg-orange-50 transition-colors">
                    <td className="py-3 px-4 font-bold">{c.unit}</td>
                    <td className="py-3 px-4 font-semibold">{c.tenant}</td>
                    <td className="py-3 px-4">{c.signed}</td>
                    <td className="py-3 px-4">{c.expires}</td>
                    <td className="py-3 px-4 no-print">
                      <div className="flex justify-center items-center">
                        <span className={`inline-block px-6 py-1 rounded-full text-[10px] font-bold uppercase border-2 text-center min-w-[100px]
                          ${c.status === "Active" ? "border-green-500 text-green-600 bg-green-50" : ""}
                          ${c.status === "Expiring" ? "border-yellow-500 text-yellow-600 bg-yellow-50" : ""}
                          ${c.status === "Expired" ? "border-red-500 text-red-600 bg-red-50" : ""}
                        `}>
                          {c.status}
                        </span>
                        
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center no-print">
                      {/* Container must be relative so the icon stays inside */}
                      <div className="relative inline-block">
                        <select 
                          className="w-auto bg-[#d45f41] text-white text-xs font-medium rounded-lg px-4 py-2 pr-10 cursor-pointer appearance-none outline-none focus:ring-0"
                          defaultValue=""
                          onChange={(e) => handleAction(e.target.value, c, e)}
                        >
                          <option value="" disabled hidden>Actions</option>
                          <option value="edit" className="text-black bg-white">Edit Contract</option>
                          <option value="view" className="text-black bg-white">View Contract Paper</option>
                          <option value="change" className="text-black bg-white">Change Contract Paper</option>
                          <option value="delete" className="text-black bg-white text-red-600 font-bold">Delete Contract</option>
                        </select>

                        {/* YOUR SVG ICON HERE */}
                        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-white">
                          <svg 
                            className="h-3 w-3" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="3" 
                              d="M19 9l-7 7-7-7" 
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right no-print">
                      <button 
                        onClick={() => alert(`Downloading contract for Unit ${c.unit}`)}
                        className="p-2 text-[#d45f41] hover:bg-orange-100 rounded-full transition-colors cursor-pointer"
                      >
                        <MdFileDownload size={22} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-10 text-center bg-white rounded-b-xl">
                    <p className="text-[#4b150d] font-BoldMilk uppercase tracking-widest text-lg opacity-60">
                      No records found.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL: ADD CONTRACT */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative">
            <h2 className="text-xl font-BoldMilk mb-4 text-[#4b150d]">Add New Contract</h2>
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">✕</button>
            <form onSubmit={handleAddContract} className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input required type="text" placeholder="Unit No" className="w-full border border-[#4b150d] rounded-md px-3 py-2 text-sm" onChange={(e) => setNewContract({ ...newContract, unit: e.target.value })} />
                <input required type="text" placeholder="Tenant Name" className="w-full border border-[#4b150d] rounded-md px-3 py-2 text-sm" onChange={(e) => setNewContract({ ...newContract, tenant: e.target.value })} />
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold text-[#7A2E1E] ml-1">Date Signed</label>
                <input required type="date" className="w-full border border-[#4b150d] rounded-md px-3 py-2 text-sm" onChange={(e) => setNewContract({ ...newContract, signed: e.target.value })} />
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold text-[#7A2E1E] ml-1">Expiration Date</label>
                <input required type="date" className="w-full border border-[#4b150d] rounded-md px-3 py-2 text-sm" onChange={(e) => setNewContract({ ...newContract, expires: e.target.value })} />
              </div>
              <button type="submit" className="bg-[#D86A51] text-white py-2 rounded-md mt-2 font-bold uppercase text-xs tracking-widest hover:bg-[#b84a2f] transition-all">Save Contract</button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: EDIT CONTRACT */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative">
            <h2 className="text-xl font-BoldMilk mb-4 text-[#4b150d]">Edit Contract Details</h2>
            <button onClick={() => setIsEditModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">✕</button>
            <form onSubmit={handleUpdateContract} className="flex flex-col gap-3">
              <input value={editFormData.unit} required type="text" placeholder="Unit No" className="w-full border border-[#4b150d] rounded-md px-3 py-2 text-sm" onChange={(e) => setEditFormData({ ...editFormData, unit: e.target.value })} />
              <input value={editFormData.tenant} required type="text" placeholder="Tenant Name" className="w-full border border-[#4b150d] rounded-md px-3 py-2 text-sm" onChange={(e) => setEditFormData({ ...editFormData, tenant: e.target.value })} />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-[#7A2E1E]">Signed</label>
                  <input value={editFormData.signed} required type="date" className="w-full border border-[#4b150d] rounded-md px-3 py-2 text-sm" onChange={(e) => setEditFormData({ ...editFormData, signed: e.target.value })} />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-[#7A2E1E]">Expires</label>
                  <input value={editFormData.expires} required type="date" className="w-full border border-[#4b150d] rounded-md px-3 py-2 text-sm" onChange={(e) => setEditFormData({ ...editFormData, expires: e.target.value })} />
                </div>
              </div>
              <button type="submit" className="bg-[#D86A51] text-white py-2 rounded-md mt-2 font-bold uppercase text-xs tracking-widest">Update Record</button>
            </form>
          </div>
        </div>
      )}

      {/* UPDATED DELETE MODAL */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4 text-[#4b150d]">
              Are you sure you want to delete this contract?
            </h2>
            <p className="text-[#4b150d] mb-6">
              It will clear the contract's details for Unit <span className="font-bold">{activeContract?.unit}</span> and remove the record permanently.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
              >
                No
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-[#4b150d] text-[#efd4c4] px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: CHANGE CONTRACT PAPER */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center shadow-lg relative">
            <MdCloudUpload className="text-[#d45f41] mx-auto mb-3" size={40} />
            <h2 className="text-lg font-BoldMilk text-[#4b150d] mb-4 uppercase">Update Contract Paper</h2>
            <p className="text-xs text-gray-500 mb-4">Uploading for: {activeContract?.tenant}</p>
            <input type="file" onChange={handleChangeFile} className="w-full border border-[#4b150d] rounded-md px-3 py-2 text-xs mb-4" />
            <button onClick={() => setIsUploadModalOpen(false)} className="text-xs text-gray-400 font-bold uppercase hover:underline">Close</button>
          </div>
        </div>
      )}

    </div>
  );
}