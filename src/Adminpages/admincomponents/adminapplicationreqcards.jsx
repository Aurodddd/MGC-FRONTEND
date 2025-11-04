import { useState } from "react";
import applicationreqbg from '../../assets/applicationreqbg.png'

const adminapplicationreqcards = () => {
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

  const handleDelete = (id) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl h-full px-6 py-10 flex flex-col gap-6">
      {/* Header */}
      <div
        className="bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl text-white py-6 px-6 md:px-20"
        style={{ backgroundImage: `url(${applicationreqbg})` }}
      >
        <h1 className="font-[BoldMilk] tracking-[7px] md:tracking-[15px] text-[20px] md:text-[30px] text-white uppercase">
          Application Requests
        </h1>
      </div>

      {/* Main Card */}
      <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] rounded-2xl shadow-[15px_13px_0px_#330101] p-6 overflow-x-auto h-full">
        <table className="w-full border-separate border-spacing-y-2 text-[#4b150d] text-sm">
          <thead>
            <tr className="uppercase bg-[#4b150d] text-[#efd4c4] font-['LEMON MILK'] text-sm">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Contact No</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr
                key={req.id}
                onClick={() => setSelectedRequest(req)}
                className="bg-white hover:bg-orange-100 transition cursor-pointer"
              >
                <td className="py-3 px-4">{req.name}</td>
                <td className="py-3 px-4">{req.email}</td>
                <td className="py-3 px-4">{req.phone}</td>
                <td className="py-3 px-4 max-w-[250px] truncate">{req.message}</td>
                <td className="py-3 px-4">
                 <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setConfirmDeleteId(req.id);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded shadow"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-bold mb-4 text-[#4b150d]">Application Details</h2>
            <p><span className="font-semibold">Name:</span> {selectedRequest.name}</p>
            <p><span className="font-semibold">Email:</span> {selectedRequest.email}</p>
            <p><span className="font-semibold">Contact:</span> {selectedRequest.phone}</p>
            <p className="mt-2"><span className="font-semibold">Message:</span> {selectedRequest.message}</p>
            <button
              onClick={() => setSelectedRequest(null)}
              className="absolute top-2 right-2 text-sm text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      {confirmDeleteId !== null && (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg relative text-center">
            <h2 className="text-lg font-bold text-[#4b150d] mb-4">
              Are you sure you want to delete this application request?
            </h2>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => {
                  handleDelete(confirmDeleteId);
                  setConfirmDeleteId(null);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="bg-gray-300 hover:bg-gray-400 text-[#4b150d] px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
      </div>
      )}

    </div>
  );
};

export default adminapplicationreqcards;
