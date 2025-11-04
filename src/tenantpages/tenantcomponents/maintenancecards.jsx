import { useState } from 'react';
import maintenancebg from '../../assets/maintenancebg.png';
import maintenanceprog from '../../assets/maintenanceprogressbg.png';

function maintenancecards() {
  const [selectedConcern, setSelectedConcern] = useState('Concern');
  const [messageTitle, setMessageTitle] = useState('');
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [followedUp, setFollowedUp] = useState([]);

  const categories = [
    {
      category: 'Electrical Maintenance',
      title: 'Fix wiring in Unit 101',
      requestDate: '2025-06-01',
      startDate: '2025-06-05',
      endDate: '2025-06-07',
      status: 'Completed',
    },
    {
      category: 'Water Interruptions',
      title: 'Leaking pipe in Unit 202',
      requestDate: '2025-06-03',
      startDate: '2025-06-06',
      endDate: 'Ongoing',
      status: 'In Progress',
    },
    {
      category: 'Floor Renovation',
      title: 'Bathroom Tiles',
      requestDate: '2025-06-04',
      startDate: '2025-06-08',
      endDate: '2025-06-12',
      status: 'Completed',
    },
    {
      category: 'Others',
      title: 'Aircon cleaning request - Unit 305',
      requestDate: '2025-06-07',
      startDate: '2025-06-10',
      endDate: 'Ongoing',
      status: 'Pending',
    },
  ];

  const formatDate = (date) => {
    if (date === 'Ongoing') return 'Ongoing';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleSubmit = () => {
    console.log(
      `Concern: ${selectedConcern}, Title: ${messageTitle}, Message: ${message}`
    );
    setMessageTitle('');
    setMessage('');
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl mt-1 w-full px-13 py-6 flex flex-col gap-4">
      {/* Header */}
      <div
        className="bg-cover bg-center shadow-[15px_10px_0px_#330101] rounded-2xl relative text-white px-6 md:px-15 lg:px-12 py-6 md:py-5 h-20"
        style={{ backgroundImage: `url(${maintenancebg})` }}
      >
        <h1 className="font-lemonmilk font-bold tracking-[0.03em] md:tracking-[10px] text-[22px] md:text-[25px]">
          MAINTENANCE
        </h1>
      </div>

      {/* Form Section */}
      <div className="bg-gradient-to-r from-[#ffebdf] to-[#f2c9b1] shadow-[15px_10px_0px_#330101] rounded-2xl p-6 flex flex-col gap-5">
        {/* Category Select */}
        <div className="flex flex-col md:flex-row md:gap-20 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-RegularMilk tracking-[1px] text-lg">
              MAINTENANCE CATEGORY
            </label>
            <select
              className="mt-1 max-w-64 px-3 py-2 border border-[#dd7255] rounded-md bg-white text-black text-base"
              value={selectedConcern}
              onChange={(e) => setSelectedConcern(e.target.value)}
            >
              {categories.map((c, i) => (
                <option key={i}>{c.category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message Title */}
        <div className="flex flex-col gap-2">
          <label className="font-RegularMilk tracking-[1px] text-lg">
            MESSAGE TITLE
          </label>
          <input
            type="text"
            className="bg-[#fffaf7] border border-[#e39b7c] rounded-md p-3 text-sm focus:outline-none focus:border-[#d17857]"
            placeholder="Enter a short title"
            value={messageTitle}
            onChange={(e) => setMessageTitle(e.target.value)}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="font-RegularMilk tracking-[1px] text-lg">
            MESSAGE
          </label>
          <textarea
            className="bg-[#fffaf7] border border-[#e39b7c] rounded-md p-3 text-sm resize-none focus:outline-none focus:border-[#d17857]"
            rows={4}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <button
              className="bg-[#db5833] text-white font-lemonmilk text-sm px-4 py-2 rounded-md hover:bg-[#c2472a]"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Maintenance Progress Section (as a table) */}
      <div
        className="bg-cover bg-center shadow-[15px_10px_0px_#330101] rounded-2xl p-6"
        style={{ backgroundImage: `url(${maintenanceprog})` }}
      >
        <h2 className="text-black text-xl font-semibold mb-4">
          UNIT MAINTENANCE PROGRESS
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border border-[#4e170f] rounded-lg overflow-hidden">
            <thead className="bg-[#e9ccba] text-[#4e170f] text-[16px]">
              <tr>
                <th className="border-b border-[#4e170f] py-3 px-4">
                  Message Title
                </th>
                <th className="border-b border-[#4e170f] py-3 px-4">Category</th>
                <th className="border-b border-[#4e170f] py-3 px-4">
                  Request Date
                </th>
                <th className="border-b border-[#4e170f] py-3 px-4">Start Date</th>
                <th className="border-b border-[#4e170f] py-3 px-4">End Date</th>
                <th className="border-b border-[#4e170f] py-3 px-4">Status</th>
                <th className="border-b border-[#4e170f] py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item, index) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-[#f9e8e3] text-black text-[15px]"
                >
                  <td className="py-3 px-4">{item.title}</td>
                  <td className="py-3 px-4">{item.category}</td>
                  <td className="py-3 px-4">{formatDate(item.requestDate)}</td>
                  <td className="py-3 px-4">{formatDate(item.startDate)}</td>
                  <td className="py-3 px-4">{formatDate(item.endDate)}</td>
                  <td className="py-3 px-4">{item.status}</td>
                  <td className="py-3 px-4">
                    <button
                      disabled={followedUp.includes(index)}
                      className={`px-3 py-1 rounded-md text-sm text-white transition 
                        ${
                          followedUp.includes(index)
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#db5833] hover:bg-[#c2472a]"
                        }`}
                      onClick={() => {
                        if (!followedUp.includes(index)) {
                          setModalOpen(true);
                          setFollowedUp((prev) => [...prev, index]);
                        }
                      }}
                    >
                      {followedUp.includes(index) ? "Followed Up" : "Follow Up"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold mb-4">
              Request has been followed up!
            </h3>
            <button
              className="bg-[#db5833] text-white px-4 py-2 rounded-md hover:bg-[#c2472a]"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default maintenancecards;
