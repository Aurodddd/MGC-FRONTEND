import { useState } from "react";
import ContractBg from "../../assets/admincontractbg.png";

export default function AdminContractCards() {
  const [rules, setRules] = useState(
    `    • 2500/month for single person
    • 3000/month for 2 person
    • 1 month depost
    • 1 month advance
    • Only 2 wheeled vehicles are allowed
    • No pets allowed`
  );

  const [conditions, setConditions] = useState(
    `    • Termination : Termination of the contract must be communicated at least 30 days in advance
    • Renewal : Renewal of the contract must be communicated at least 30 days in advance`
  );

  const [isEditingRules, setIsEditingRules] = useState(false);
  const [isEditingConditions, setIsEditingConditions] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl px-6 py-10 flex flex-col gap-6 w-full h-full">
      {/* Header */}
      <div
        className="bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl  py-6 px-6 md:px-20"
        style={{ backgroundImage: `url(${ContractBg})` }}
      >
        <h1 className="font-[BoldMilk] tracking-[7px] md:tracking-[15px] text-[#db6646] text-[20px] md:text-[30px] uppercase">
          Contract Details
        </h1>
      </div>

      {/* Main Card */}
      <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] shadow-[15px_13px_0px_#330101] rounded-2xl p-6 flex flex-col gap-8 h-full">
        {/* Tenancy Rules */}
        <div>
          <h2 className=" bg-[#db6646] w-full p-2 px-10 text-xl font-RegularMilk text-[#4b150d] mb-2">
            Tenancy Rules
          </h2>
          {isEditingRules ? (
            <textarea
              value={rules}
              onChange={(e) => setRules(e.target.value)}
              className="w-full border border-[#4b150d] p-4 rounded-md text-[#4b150d] bg-white focus:outline-none focus:ring-2 focus:ring-[#db6646]"
              rows={6}
            />
          ) : (
            <pre className=" bg-white p-4 rounded-md whitespace-pre-wrap">
              {rules}
            </pre>
          )}

          <div className="flex justify-end mt-2">
            {isEditingRules ? (
              <button
                onClick={() => setIsEditingRules(false)}
                className="bg-[#db6646] text-white px-4 py-2 rounded hover:bg-[#2f0e07] transition "
              >
                SAVE
              </button>
            ) : (
              <button
                onClick={() => setIsEditingRules(true)}
                className="bg-[#4b150d] text-[#efd4c4] px-4 py-2 rounded hover:bg-[#b9492c] transition w-full"
              >
                EDIT
              </button>
            )}
          </div>
        </div>

        {/* Termination & Renewal Conditions */}
        <div>
          <h2 className="bg-[#db6646] w-full p-2 px-10 text-xl font-RegularMilk text-[#4b150d] mb-2">
            Termination & Renewal Conditions
          </h2>
          {isEditingConditions ? (
            <textarea
              value={conditions}
              onChange={(e) => setConditions(e.target.value)}
              className="w-full border border-[#4b150d] p-4 rounded-md text-[#4b150d] bg-white focus:outline-none focus:ring-2 focus:ring-[#db6646]"
              rows={6}
            />
          ) : (
            <pre className=" bg-white p-4 rounded-md whitespace-pre-wrap">
              {conditions}
            </pre>
          )}

          <div className="flex justify-end mt-2">
            {isEditingConditions ? (
              <button
                onClick={() => setIsEditingConditions(false)}
                className="bg-[#db6646] text-white px-4 py-2 rounded hover:bg-[#2f0e07] transition"
              >
                SAVE
              </button>
            ) : (
              <button
                onClick={() => setIsEditingConditions(true)}
                className="bg-[#4b150d] text-[#efd4c4] px-4 py-2 rounded hover:bg-[#b9492c] transition w-full"
              >
                EDIT
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button className="bg-[#db6646] text-white px-4 py-2 rounded hover:bg-[#b9492c] transition">
            View Contract Paper
          </button>
          <button className="bg-[#4b150d] text-[#efd4c4] px-4 py-2 rounded hover:bg-[#2f0e07] transition">
            Upload New Contract Paper
          </button>
          <button className="bg-[#4b150d] text-[#efd4c4] px-4 py-2 rounded hover:bg-[#2f0e07] transition">
            Print Contract Paper
          </button>
        </div>
      </div>
    </div>
  );
}
