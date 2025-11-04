import payhisbg from '../../assets/payhisbg.png'

function paymenthisCards() {
  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl mt-1 px-6 md:px-12 py-8 flex flex-col gap-4 w-full overflow-visible">
      
      {/* Header */}
      <div
        className="bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl text-white py-5 px-5 md:px-20 flex justify-center sm:justify-start text-center"
        style={{ backgroundImage: `url(${payhisbg})` }}
      >
        <h1 className="font-[MDMilk] md:font-[BoldMilk] tracking-[3px] md:tracking-[15px] text-[20px] md:text-[30px] text-white">
          PAYMENT HISTORY
        </h1>
      </div>

      {/* Table */}
      <div className="h-[35rem] bg-gradient-to-r from-[#ffebdf] to-[#f2c9b1] shadow-[15px_13px_0px_#330101] rounded-2xl relative px-4 md:px-16 py-8 overflow-auto">
        <table className="w-full text-left text-[#4b150d] border-separate border-spacing-y-3">
          <thead>
            <tr className="bg-[#4b150d] text-[#ffebdf] text-[14px] md:text-[18px] font-RegularMilk tracking-[1px]">
              <th className="py-3 px-4 rounded-l-xl">PAYMENT</th>
              <th className="py-3 px-4">AMOUNT</th>
              <th className="py-3 px-4">DATE</th>
              <th className="py-3 px-4 rounded-r-xl">STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-[16px] md:text-[18px] font-semibold text-[#4b150d]">
              <td className="py-3 px-4 rounded-l-xl">Rent Bill</td>
              <td className="py-3 px-4">₱8,000</td>
              <td className="py-3 px-4">June 6, 2025</td>
              <td className="py-3 px-4 text-green-600 font-bold rounded-r-xl">Paid</td>
            </tr>
            <tr className="bg-white text-[16px] md:text-[18px] font-semibold text-[#4b150d]">
              <td className="py-3 px-4 rounded-l-xl">Electricity and Water Bill</td>
              <td className="py-3 px-4">₱8,000</td>
              <td className="py-3 px-4">June 20, 2025</td>
              <td className="py-3 px-4 text-red-500 font-bold rounded-r-xl">Late</td>
            </tr>
            <tr className="bg-white text-[16px] md:text-[18px] font-semibold text-[#4b150d]">
              <td className="py-3 px-4 rounded-l-xl">Advance</td>
              <td className="py-3 px-4">₱8,000</td>
              <td className="py-3 px-4">June 29, 2025</td>
              <td className="py-3 px-4 text-orange-500 font-bold rounded-r-xl">Unpaid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default paymenthisCards;
