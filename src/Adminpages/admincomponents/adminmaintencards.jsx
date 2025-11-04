import { useState } from "react";
import MaintenanceBg from "../../assets/maintenancebg.png";

const AdminMaintenanceCards = () => {
  const [requests, setRequests] = useState([
    {
      unit: "101",
      name: "Lance Atendidas",
      messagetitle: "Lights Flickering",
      category: "Electrical Maintenance",
      requestDate: "June 5, 2025",
      startDate: "---",
      endDate: "---",
      status: "Pending",
      message: "The lights in the hallway are flickering.",
      followUp: true,
    },
    {
      unit: "102",
      name: "Matthew Karl Batista",
      messagetitle: "Kitchen Sink Leak",
      category: "Water Maintenance",
      requestDate: "June 8, 2025",
      startDate: "June 9, 2025",
      endDate: "Ongoing",
      status: "In Progress",
      message: "There is a leak under the kitchen sink.",
      followUp: false,
    },
    {
      unit: "103",
      name: "Aldjon De lacruz",
      messagetitle: "Bathroom Tiles Replacement",
      category: "Floor Renovations",
      requestDate: "June 4, 2025",
      startDate: "June 12, 2025",
      endDate: "June 15, 2025",
      status: "Done",
      message: "The tiles in the bathroom need to be replaced.",
      followUp: false,
    },
    {
      unit: "104",
      name: "Zachary Johann",
      messagetitle: "Aircon Not Cooling",
      category: "Others",
      requestDate: "June 14, 2025",
      startDate: "---",
      endDate: "---",
      status: "Approved",
      message: "The air conditioning in the living room is not cooling properly.",
      followUp: false,
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState(null);

  // ✅ When status changes, auto-update follow-up badge color
  const handleStatusChange = (index, newStatus) => {
    const updated = [...requests];
    updated[index].status = newStatus;

    // If status is In Progress or Done → mark follow-up as "resolved" (turn gray)
    if (newStatus === "In Progress" || newStatus === "Done") {
      updated[index].followUpResolved = true;
    } else {
      updated[index].followUpResolved = false;
    }

    setRequests(updated);
  };

  const handleDelete = (index) => {
    const updated = [...requests];
    updated.splice(index, 1);
    setRequests(updated);
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl px-6 md:px-12 py-8 w-full h-full flex flex-col gap-6 overflow-visible">
      {/* Header */}
      <div
        className="bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl text-white py-6 px-6 md:px-20"
        style={{ backgroundImage: `url(${MaintenanceBg})` }}
      >
        <h1 className="font-[BoldMilk] tracking-[10px] md:tracking-[15px] text-[24px] md:text-[30px] text-white uppercase">
          Maintenance Requests
        </h1>
      </div>

      {/* Table */}
      <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] shadow-[15px_13px_0px_#330101] h-full rounded-2xl px-4 py-6 gap-5 overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2 text-left">
          <thead>
            <tr className="bg-[#4b150d] text-[#efd4c4] uppercase text-sm font-LightMilk">
              <th className="py-3 px-4">Unit No.</th>
              <th className="py-3 px-4">Full Name</th>
              <th className="py-3 px-4">Message</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Request Date</th>
              <th className="py-3 px-4">Start Date</th>
              <th className="py-3 px-4">End Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
              <th className="py-3 px-4 text-center">Follow-Ups</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr
                key={index}
                className={`text-[#4b150d] text-sm bg-white ${
                  req.followUp ? "border-l-4 border-red-500 bg-red-50" : ""
                }`}
              >
                <td className="py-3 px-4">{req.unit}</td>
                <td className="py-3 px-4">{req.name}</td>
                <td className="py-3 px-4">{req.messagetitle}</td>
                <td className="py-3 px-4">{req.category}</td>
                <td className="py-3 px-4">{req.requestDate}</td>
                <td className="py-3 px-4">{req.startDate}</td>
                <td className="py-3 px-4">{req.endDate}</td>

                {/* Status Dropdown */}
                <td className="py-3 px-4">
                  <select
                    value={req.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    className={`text-white rounded px-2 py-1 cursor-pointer
                      ${req.status === "Pending" ? "bg-yellow-500" : ""}
                      ${req.status === "Approved" ? "bg-teal-500" : ""}
                      ${req.status === "In Progress" ? "bg-blue-400" : ""}
                      ${req.status === "Done" ? "bg-green-400" : ""}
                    `}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </td>

                {/* Actions */}
                <td className="py-3 px-4">
                  <select
                    onChange={(e) => {
                      if (e.target.value === "View") setSelectedRequest(req);
                      else if (e.target.value === "Delete")
                        setConfirmDeleteIndex(index);
                      e.target.value = "";
                    }}
                    className="bg-[#d45f41] text-white rounded px-2 py-1 cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Actions
                    </option>
                    <option value="View">View</option>
                    <option value="Delete">Delete</option>
                  </select>
                </td>

                {/* Follow-Up Notification */}
                <td className="py-3 px-4 text-center">
                  {req.followUp && (
                    <span
                      className={`${
                        req.followUpResolved
                          ? "bg-gray-400 text-gray-100"
                          : "bg-red-600 text-white"
                      } text-sm md:text-base font-bold px-3 py-1.5 rounded-lg shadow`}
                    >
                      REQUESTED
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl shadow-lg relative mx-5">
            <h2 className="text-xl font-bold mb-2">Maintenance Details</h2>
            <p>
              <strong>Category:</strong> {selectedRequest.category}
            </p>
            <p>
              <strong>Message:</strong> {selectedRequest.message}
            </p>
            <p>
              <strong>Request Date:</strong> {selectedRequest.requestDate}
            </p>
            <p>
              <strong>Start Date:</strong> {selectedRequest.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {selectedRequest.endDate}
            </p>
            {selectedRequest.followUp && (
              <p
                className={`mt-2 font-semibold ${
                  selectedRequest.followUpResolved
                    ? "text-gray-500"
                    : "text-red-600"
                }`}
              >
                ⚠️ Tenant sent a follow-up reminder
              </p>
            )}
            <button
              onClick={() => setSelectedRequest(null)}
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-900"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDeleteIndex !== null && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg relative text-center">
            <h2 className="text-lg font-bold text-[#4b150d] mb-4">
              Are you sure you want to delete this request?
            </h2>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => {
                  handleDelete(confirmDeleteIndex);
                  setConfirmDeleteIndex(null);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setConfirmDeleteIndex(null)}
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

export default AdminMaintenanceCards;
