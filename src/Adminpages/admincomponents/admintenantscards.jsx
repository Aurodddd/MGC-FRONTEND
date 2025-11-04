import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TenantsBg from "../../assets/tenantsoverviewbg.png";

export default function AdminTenantsCard() {
  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tenantToDelete, setTenantToDelete] = useState(null);
  const navigate = useNavigate();

  const [tenants, setTenants] = useState([
    {
      unit: "101",
      name: "Lance Atendidas",
      phone: "09123456789",
      due: "September 15, 2025",
      electricityWater: "₱2,500",
      rent: "₱7,500",
    },
    {
      unit: "102",
      name: "Matthew Karl Batista",
      phone: "09198765432",
      due: "September 1, 2025",
      electricityWater: "₱3,000",
      rent: "₱9,500",
    },
    {
      unit: "103",
      name: "Aldjon Dela Cruz",
      phone: "09111222333",
      due: "September 20, 2025",
      electricityWater: "₱1,800",
      rent: "₱7,200",
    },
  ]);

  const filteredTenants = tenants.filter(
    (tenant) =>
      tenant.name.toLowerCase().includes(search.toLowerCase()) ||
      tenant.unit.includes(search)
  );

  const handleAction = (action, tenant) => {
    if (action === "view") {
      navigate("/admintenantprof"); // ✅ redirect when 'View' is chosen
    } else if (action === "delete") {
      setTenantToDelete(tenant);
      setShowDeleteModal(true); // ✅ show confirmation modal
    }
  };

  const confirmDelete = () => {
    if (tenantToDelete) {
      setTenants((prev) =>
        prev.filter((t) => t.unit !== tenantToDelete.unit)
      );
      setTenantToDelete(null);
      setShowDeleteModal(false);
    }
  };

  const cancelDelete = () => {
    setTenantToDelete(null);
    setShowDeleteModal(false);
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl px-6 md:px-12 py-10 flex flex-col gap-6 w-full h-full overflow-visible">
      {/* Header */}
      <div
        className="bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl text-white py-6 px-6 md:px-20"
        style={{ backgroundImage: `url(${TenantsBg})` }}
      >
        <h1 className="font-[BoldMilk] tracking-[10px] md:tracking-[15px] text-[24px] md:text-[30px] text-white uppercase">
          Tenants Overview
        </h1>
      </div>

      {/* Search & Log Table */}
      <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] shadow-[15px_13px_0px_#330101] rounded-2xl p-6 md:p-10 w-full h-full overflow-auto">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or unit number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded-lg border border-[#4b150d] bg-white text-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
        />

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-[#4b150d] text-[#efd4c4] uppercase text-sm font-LightMilk">
                <th className="py-3 px-4 text-left">Unit No.</th>
                <th className="py-3 px-4 text-left">Full Name</th>
                <th className="py-3 px-4 text-left">Phone No.</th>
                <th className="py-3 px-4 text-left">Bills Due Date</th>
                <th className="py-3 px-4 text-left">Electricity & Water Bill</th>
                <th className="py-3 px-4 text-left">Rent Bill</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTenants.map((tenant, index) => (
                <tr key={index} className="bg-white">
                  <td className="py-3 px-4">{tenant.unit}</td>
                  <td className="py-3 px-4">{tenant.name}</td>
                  <td className="py-3 px-4">{tenant.phone}</td>
                  <td className="py-3 px-4">{tenant.due}</td>
                  <td className="py-3 px-4">{tenant.electricityWater}</td>
                  <td className="py-3 px-4">{tenant.rent}</td>
                  <td className="py-3 px-4">
                    <select
                      className="bg-[#d45f41] text-white rounded px-2 py-1 cursor-pointer"
                      onChange={(e) => handleAction(e.target.value, tenant)}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Actions
                      </option>
                      <option value="view">View</option>
                      <option value="delete">Delete</option>
                    </select>
                  </td>
                </tr>
              ))}
              {filteredTenants.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-[#4b150d]">
                    No tenants found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Delete Confirmation Modal */}
      {showDeleteModal && tenantToDelete && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4 text-[#4b150d]">
              Are you sure you want to delete this tenant?
            </h2>
            <p className="text-[#4b150d] mb-6">
              It will clear the tenant's details in their profile and remove them
              from their unit.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={cancelDelete}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                No
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
