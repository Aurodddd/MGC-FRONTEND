import { useState } from "react";
import { Link } from "react-router-dom";
import UnitsOverviewBG from "../../assets/unitsoverviewbg.png";
import Roombg from "../../assets/Roombg.png";

export default function AdminUnitsCards() {
  const [search, setSearch] = useState("");
  const [units, setUnits] = useState([
    { number: "101", floor: "Ground Floor", occupied: true },
    { number: "102", floor: "Ground Floor", occupied: false },
    { number: "103", floor: "Ground Floor", occupied: true },
    { number: "104", floor: "Ground Floor", occupied: false },
    { number: "105", floor: "Ground Floor", occupied: true },
    { number: "106", floor: "Ground Floor", occupied: false },
    { number: "107", floor: "Ground Floor", occupied: false },
    { number: "201", floor: "Second Floor", occupied: true },
    { number: "202", floor: "Second Floor", occupied: true },
    { number: "203", floor: "Second Floor", occupied: false },
    { number: "204", floor: "Second Floor", occupied: true },
    { number: "205", floor: "Second Floor", occupied: true },
    { number: "206", floor: "Second Floor", occupied: false },
    { number: "301", floor: "Third Floor", occupied: true },
    { number: "302", floor: "Third Floor", occupied: true },
    { number: "303", floor: "Third Floor", occupied: true },
    { number: "304", floor: "Third Floor", occupied: false },
    { number: "305", floor: "Third Floor", occupied: true },
    { number: "306", floor: "Third Floor", occupied: false },
    { number: "307", floor: "Third Floor", occupied: true },
    { number: "308", floor: "Third Floor", occupied: false },
    { number: "309", floor: "Third Floor", occupied: true },
    { number: "310", floor: "Third Floor", occupied: true },
    { number: "311", floor: "Third Floor", occupied: false },
    { number: "312", floor: "Third Floor", occupied: false },
    { number: "313", floor: "Third Floor", occupied: false },
    { number: "314", floor: "Third Floor", occupied: false },
    { number: "315", floor: "Third Floor", occupied: false },
    { number: "316", floor: "Third Floor", occupied: false },
    { number: "401", floor: "Fourth Floor", occupied: false },
    { number: "402", floor: "Fourth Floor", occupied: false },
    { number: "403", floor: "Fourth Floor", occupied: true },
    { number: "404", floor: "Fourth Floor", occupied: false },
    { number: "405", floor: "Fourth Floor", occupied: false },
    { number: "406", floor: "Fourth Floor", occupied: false },
    { number: "407", floor: "Fourth Floor", occupied: true },
    { number: "408", floor: "Fourth Floor", occupied: true },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteMode, setShowDeleteMode] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [newUnit, setNewUnit] = useState({ number: "", floor: "Ground Floor" });

  const handleAddUnit = () => {
    setShowAddModal(true);
  };

  const confirmAddUnit = () => {
    if (newUnit.number && newUnit.floor) {
      setUnits([...units, { ...newUnit, occupied: false }]);
      setNewUnit({ number: "", floor: "Ground Floor" });
      setShowAddModal(false);
    }
  };

  const handleDeleteUnit = () => {
    setShowDeleteMode(true);
  };

  const deleteUnit = (unitNumber) => {
    setConfirmDelete(unitNumber);
  };

  const confirmDeleteUnit = () => {
    setUnits(units.filter((unit) => unit.number !== confirmDelete));
    setConfirmDelete(null);
    setShowDeleteMode(false); // 👈 ADDED: Hide delete buttons after confirming
  };

  const filteredUnits = units.filter((unit) =>
    unit.number.toLowerCase().includes(search.toLowerCase())
  );

  const groupByFloor = (floor) => filteredUnits.filter((u) => u.floor === floor);

 const FloorBlock = ({ label, color, units }) => {
  const handleStatusChange = (unitNumber, newStatus) => {
    setUnits((prevUnits) =>
      prevUnits.map((unit) =>
        unit.number === unitNumber
          ? { ...unit, occupied: newStatus === "Occupied" }
          : unit
      )
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className={`text-white text-xl font-bold px-4 py-2 rounded-md ${color}`}>
        {label}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {units.map((unit) => (
          <div
            key={unit.number}
            className="relative bg-cover bg-center text-[#4b150d] border border-[#4b150d] rounded-lg flex flex-col gap-y-3 p-4 py-8 shadow hover:shadow-lg transition"
            style={{ backgroundImage: `url(${Roombg})` }}
          >
            {/* Only this text is clickable */}
            <Link
              to={`/admintenantprof`}
              className="font-RegularMilk text-lg no-underline hover:text-[#8b2d1a] w-fit"
            >
              Unit {unit.number}
            </Link>

            {/* Dropdown for occupancy status */}
            <select
              className={`text-sm p-2 text-white rounded-md w-fit cursor-pointer ${
                unit.occupied ? "bg-red-400" : "bg-green-400"
              }`}
              value={unit.occupied ? "Occupied" : "Vacant"}
              onChange={(e) => handleStatusChange(unit.number, e.target.value)}
            >
              <option>Occupied</option>
              <option>Vacant</option>
            </select>

            {/* Delete button (only visible in delete mode) */}
            {showDeleteMode && (
              <button
                className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 text-sm rounded-md hover:bg-red-700"
                onClick={() => deleteUnit(unit.number)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl px-6 md:px-12 py-10 flex flex-col gap-6 w-full h-full overflow-visible">
      {/* Header */}
      <div
        className="bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl text-white py-6 px-20"
        style={{ backgroundImage: `url(${UnitsOverviewBG})` }}
      >
        <h1 className="font-[BoldMilk] tracking-[10px] md:tracking-[15px] text-[24px] md:text-[30px] text-white uppercase">
          Units Overview
        </h1>
      </div>

      {/* Main Card */}
      <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] shadow-[15px_13px_0px_#330101] rounded-2xl p-6 md:p-10 w-full h-full overflow-auto flex flex-col gap-y-5">
        {/* Search & Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Search unit number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-auto flex-grow px-4 py-2 rounded-lg border border-[#4b150d] bg-white text-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAddUnit}
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
            >
              Add Unit
            </button>
            <button
              onClick={() => setShowDeleteMode((prev) => !prev)}
              className={`${
                showDeleteMode ? "bg-gray-500 hover:bg-gray-600" : "bg-red-600 hover:bg-red-700"
              } text-white px-4 py-2 rounded-lg shadow transition`}
            >
              {showDeleteMode ? "Cancel Delete" : "Delete Unit"}
            </button>
          </div>
        </div>

        {/* Floor Blocks */}
        <div className="flex flex-col gap-6">
          <FloorBlock label="Ground Floor" color="font-RegularMilk text-[18px] tracking-[3px] bg-[#3f0d0a]" units={groupByFloor("Ground Floor")} />
          <FloorBlock label="Second Floor" color="font-RegularMilk text-[18px] tracking-[3px] bg-[#3f0d0a]" units={groupByFloor("Second Floor")} />
          <FloorBlock label="Third Floor" color="font-RegularMilk text-[18px] tracking-[3px] bg-[#3f0d0a]" units={groupByFloor("Third Floor")} />
          <FloorBlock label="Fourth Floor" color="font-RegularMilk text-[18px] tracking-[3px] bg-[#3f0d0a]" units={groupByFloor("Fourth Floor")} />
        </div>
      </div>

      {/* Add Unit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New Unit</h2>
            <input
              type="text"
              placeholder="Unit Number"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
              value={newUnit.number}
              onChange={(e) => setNewUnit({ ...newUnit, number: e.target.value })}
            />
            <select
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
              value={newUnit.floor}
              onChange={(e) => setNewUnit({ ...newUnit, floor: e.target.value })}
            >
              <option>Ground Floor</option>
              <option>Second Floor</option>
              <option>Third Floor</option>
              <option>Fourth Floor</option>
            </select>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowAddModal(false)} className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
              <button onClick={confirmAddUnit} className="bg-green-600 text-white px-4 py-2 rounded-md">Add</button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Delete Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-6">When you delete this unit, all existing information within it will also be deleted. Are you sure you want to delete it?</p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setConfirmDelete(null)} className="bg-gray-300 px-4 py-2 rounded-md">No</button>
              <button onClick={confirmDeleteUnit} className="bg-red-600 text-white px-4 py-2 rounded-md">Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}