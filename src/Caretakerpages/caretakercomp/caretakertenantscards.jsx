import { useState } from "react";
import TenantsBg from "../../assets/tenantsoverviewbg.png";

export default function caretakertenantscard() {
  const [search, setSearch] = useState("");

  const tenants = [
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
      due: "September 01, 2025",
      electricityWater: "₱3,000",
      rent: "₱9,500",
    },
    {
      unit: "103",
      name: "Aldjon De Lacruz",
      phone: "09111222333",
      due: "September 20, 2025",
      electricityWater: "₱1,800",
      rent: "₱7,200",
    },
  ];

  const filteredTenants = tenants.filter(
    (tenant) =>
      tenant.name.toLowerCase().includes(search.toLowerCase()) ||
      tenant.unit.includes(search)
  );

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
              </tr>
            </thead>
            <tbody>
              {filteredTenants.map((tenant, index) => (
                <tr key={index} className="bg-white ">
                  <td className="py-3 px-4">{tenant.unit}</td>
                  <td className="py-3 px-4">{tenant.name}</td>
                  <td className="py-3 px-4">{tenant.phone}</td>
                  <td className="py-3 px-4">{tenant.due}</td>
                  <td className="py-3 px-4">{tenant.electricityWater}</td>
                  <td className="py-3 px-4">{tenant.rent}</td>
                </tr>
              ))}
              {filteredTenants.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-[#4b150d]">
                    No tenants found.
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
