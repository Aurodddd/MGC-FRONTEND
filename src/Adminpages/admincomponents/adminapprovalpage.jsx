import { useState } from "react";
import { MdCheckCircle, MdCancel, MdVisibility, MdDelete, MdCheck } from "react-icons/md"; 
import approvalbg from "../../assets/applicationreqbg.png";

const AdminApprovalPage = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Lance Atendidas",
      email: "lance@gmail.com",
      phone: "09123456789",
      role: "Tenant",
      unit: "101",
      date: "June 10, 2025",
      status: "Pending",
    },
    {
      id: 2,
      name: "Maria Cruz",
      email: "maria@gmail.com",
      phone: "09987654321",
      role: "Tenant",
      unit: "102",
      date: "June 11, 2025",
      status: "Pending",
    },
  ]);

  const [selectedAccount, setSelectedAccount] = useState(null);
  const [confirmRejectId, setConfirmRejectId] = useState(null);

  const handleApprove = (id) => {
    setAccounts((prev) =>
      prev.map((acc) => (acc.id === id ? { ...acc, status: "Approved" } : acc))
    );
    setSelectedAccount(null);
  };

  const handleReject = (id) => {
    setAccounts((prev) =>
      prev.map((acc) => (acc.id === id ? { ...acc, status: "Rejected" } : acc))
    );
    setConfirmRejectId(null);
    setSelectedAccount(null);
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-4 sm:px-8 py-7 flex flex-col gap-3 md:gap-4">
      
      {/* Header */}
      <div
        className="flex flex-col bg-cover bg-center items-center text-center sm:text-start sm:items-start text-white px-8 py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-3xl w-full"
        style={{ backgroundImage: `url(${approvalbg})` }}
      >
        <h1 className="font-BoldMilk tracking-[3px] md:tracking-[12px] text-xl md:text-2xl uppercase">
          Account Approval Requests
        </h1>
      </div>

      {/* Table Section */}
      <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] rounded-2xl shadow-[5px_5px_0px_#330101] sm:shadow-[10px_8px_0px_#330101] md:shadow-[15px_13px_0px_#330101] p-6 overflow-x-auto h-full">
        <table className="w-full border-separate border-spacing-y-2 text-[#4b150d] text-sm">
          <thead>
            <tr className="bg-[#4b150d] text-[#efd4c4] uppercase tracking-[2px] text-[10px] font-RegularMilk">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Unit</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc) => (
              <tr
                key={acc.id}
                className="bg-white text-black text-xs border-b-2 border-[#330101]/10 hover:bg-orange-50 transition-colors"
              >
                <td className="py-3 px-4 font-semibold text-[#330101]">{acc.name}</td>
                <td className="py-3 px-4 text-gray-500">{acc.email}</td>
                <td className="py-3 px-4 font-medium">{acc.role}</td>
                <td className="py-3 px-4 font-bold">{acc.unit}</td>
                <td className="py-3 px-4 text-gray-500">{acc.date}</td>
                
                {/* Static Pill Status */}
                <td className="py-3 px-4 text-center">
                  <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase border-2 min-w-[90px]
                    ${acc.status === "Approved" ? "border-green-500 text-green-600 bg-green-50" : ""}
                    ${acc.status === "Rejected" ? "border-red-500 text-red-600 bg-red-50" : ""}
                    ${acc.status === "Pending" ? "border-yellow-500 text-yellow-600 bg-yellow-50" : ""}
                  `}>
                    {acc.status}
                  </span>
                </td>

                {/* Updated Action Icons */}
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {/* View Details Icon */}
                    <button
                      onClick={() => setSelectedAccount(acc)}
                      className="p-2 text-[#4b150d] hover:bg-[#4b150d]/10 rounded-lg transition-all active:scale-90"
                      title="View Details"
                    >
                      <MdVisibility size={18} />
                    </button>

                    {/* Approve Icon - Only shown if not already approved */}
                    {acc.status !== "Approved" && (
                      <button
                        onClick={() => handleApprove(acc.id)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-all active:scale-90"
                        title="Approve Account"
                      >
                        <MdCheckCircle size={18} />
                      </button>
                    )}

                    {/* Reject Icon - Only shown if not already rejected */}
                    {acc.status !== "Rejected" && (
                      <button
                        onClick={() => setConfirmRejectId(acc.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all active:scale-90"
                        title="Reject Account"
                      >
                        <MdCancel size={18} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Simple View Details Modal */}
      {selectedAccount && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative border border-[#4b150d]/10">
            <h2 className="text-xl font-BoldMilk mb-4 text-[#4b150d]">Account Details</h2>
            <button
              onClick={() => setSelectedAccount(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >✕</button>
            <div className="flex flex-col gap-2 text-sm">
              <div className="border-b pb-2"><span className="font-bold text-[#7A2E1E] uppercase text-[10px]">Name:</span> <p className="text-lg font-semibold">{selectedAccount.name}</p></div>
              <div><span className="font-bold text-[#7A2E1E] uppercase text-[10px]">Email:</span> <p>{selectedAccount.email}</p></div>
              <div><span className="font-bold text-[#7A2E1E] uppercase text-[10px]">Phone:</span> <p>{selectedAccount.phone}</p></div>
              <div><span className="font-bold text-[#7A2E1E] uppercase text-[10px]">Unit Assigned:</span> <p>{selectedAccount.unit}</p></div>
              <div><span className="font-bold text-[#7A2E1E] uppercase text-[10px]">Registration Date:</span> <p>{selectedAccount.date}</p></div>
            </div>
            <button 
              onClick={() => setSelectedAccount(null)}
              className="w-full bg-[#4b150d] text-white py-2 rounded-md mt-6 font-bold uppercase text-xs tracking-widest"
            > Close Details </button>
          </div>
        </div>
      )}

      {/* Simple Confirm Reject Modal */}
      {confirmRejectId && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg relative text-center">
            <h2 className="text-xl font-BoldMilk text-[#4b150d] mb-2">Confirm Reject</h2>
            <p className="text-gray-600 text-sm mb-6">Are you sure you want to reject this account request? This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmRejectId(null)}
                className="flex-1 border border-[#4b150d] text-[#4b150d] py-2 rounded-md font-bold uppercase text-xs"
              >Cancel</button>
              <button
                onClick={() => handleReject(confirmRejectId)}
                className="flex-1 bg-red-500 text-white py-2 rounded-md font-bold uppercase text-xs shadow-md hover:bg-red-600 transition-colors"
              >Yes, Reject</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminApprovalPage;