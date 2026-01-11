import { useState } from "react";
import applicationreqbg from '../../assets/applicationreqbg.png'
import { MdDeleteForever } from "react-icons/md";

const AdminApplicationReqCards = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Sean Disongbo",
      email: "SeanDisongboe@gmail.com",
      phone: "09123456789",
      message: "Hi, I'm interested in applying for a unit. Can you send me more details?",
    },
    {
      id: 2,
      name: "Ludvig Coqlhoun",
      email: "LudvigCoqlhoun@gmail.com",
      phone: "09987654321",
      message: "I'd like to ask about room availability for August onwards.",
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const handleDelete = (id) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
    setConfirmDeleteId(null);
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-4 sm:px-8 py-7 flex flex-col gap-3 md:gap-4">
      {/* Header */}
      <div
        className="flex flex-col bg-cover bg-center items-center text-center sm:text-start sm:items-start text-white px-8 py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-3xl w-full"
        style={{ backgroundImage: `url(${applicationreqbg})` }}
      >
        <h1 className="font-BoldMilk tracking-[3px] md:tracking-[12px] text-xl md:text-2xl uppercase">
          Application Requests
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] rounded-2xl shadow-[5px_5px_0px_#330101] sm:shadow-[10px_8px_0px_#330101] md:shadow-[15px_13px_0px_#330101] p-6 overflow-x-auto h-full">
        <table className="w-full border-separate border-spacing-y-2 text-[#4b150d] text-sm">
          <thead>
            <tr className="bg-[#4b150d] text-[#efd4c4] uppercase tracking-[2px] text-[10px] font-RegularMilk">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Contact No</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr
                key={req.id}
                onClick={() => setSelectedRequest(req)}
                className="bg-white text-black text-xs border-b-2 border-[#330101]/10 hover:bg-orange-50 transition-colors"
              >
                <td className="py-3 px-4 font-semibold text-[#330101]">{req.name}</td>
                <td className="py-3 px-4 text-gray-500">{req.email}</td>
                <td className="py-3 px-4 font-medium">{req.phone}</td>
                <td className="py-3 px-4 max-w-[250px] truncate italic text-gray-600">
                  "{req.message}"
                </td>
                <td className="py-4 px-4 text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setConfirmDeleteId(req.id);
                    }}
                    className=" text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 active:scale-90 group"
                    title="Delete Request"
                  >
                    <MdDeleteForever 
                      size={22} 
                      className="group-hover:text-red-700" 
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {requests.length === 0 && (
          <div className="text-center py-10 text-[#330101] font-bold opacity-50">
            No new application requests.
          </div>
        )}
      </div>

      {/* DETAILS MODAL - Styled like your Add Payment Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg relative border border-[#4b150d]/10">
            <h2 className="text-xl font-BoldMilk mb-4 text-[#4b150d]">Inquiry Details</h2>
            
            <button
              onClick={() => setSelectedRequest(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-lg"
            >✕</button>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase text-[#7A2E1E] block mb-1">Applicant Name</label>
                  <p className="border border-[#4b150d]/20 rounded-md px-3 py-2 bg-gray-50 font-semibold">{selectedRequest.name}</p>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-[#7A2E1E] block mb-1">Contact No</label>
                  <p className="border border-[#4b150d]/20 rounded-md px-3 py-2 bg-gray-50">{selectedRequest.phone}</p>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-[#7A2E1E] block mb-1">Email Address</label>
                <p className="border border-[#4b150d]/20 rounded-md px-3 py-2 bg-gray-50">{selectedRequest.email}</p>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-[#7A2E1E] block mb-1">Message</label>
                <p className="border border-[#4b150d]/20 rounded-md px-3 py-2 bg-gray-50 min-h-[100px] whitespace-pre-wrap italic">
                  "{selectedRequest.message}"
                </p>
              </div>

              <button 
                onClick={() => setSelectedRequest(null)}
                className="bg-[#D86A51] text-white py-2 rounded-md mt-2 font-bold uppercase text-xs tracking-widest hover:bg-[#b84a2f] transition-all"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {confirmDeleteId !== null && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg relative text-center">
            <h2 className="text-xl font-BoldMilk text-[#4b150d] mb-2">Delete Request?</h2>
            <p className="text-gray-600 text-sm mb-6">Are you sure you want to remove this inquiry? This cannot be undone.</p>
            
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="flex-1 border border-[#4b150d] text-[#4b150d] py-2 rounded-md font-bold uppercase text-xs"
              >Cancel</button>
              <button
                onClick={() => handleDelete(confirmDeleteId)}
                className="flex-1 bg-red-500 text-white py-2 rounded-md font-bold uppercase text-xs shadow-md hover:bg-red-600"
              >Yes, Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminApplicationReqCards;