import { useState } from 'react';
import maintenancebg from '../../assets/maintenancebg.png';
import maintenanceprog from '../../assets/maintenanceprogressbg.png';

function MaintenanceCards() {
  const [selectedConcern, setSelectedConcern] = useState('Concern');
  const [messageTitle, setMessageTitle] = useState('');
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [followedUp, setFollowedUp] = useState([]);

  const categories = [
    { category: 'Electrical Maintenance', title: 'Fix wiring in Unit 101', requestDate: '2025-06-01', startDate: '2025-06-05', endDate: '2025-06-07', status: 'Completed' },
    { category: 'Water Interruptions', title: 'Leaking pipe in Unit 202', requestDate: '2025-06-03', startDate: '2025-06-06', endDate: 'Ongoing', status: 'In Progress' },
    { category: 'Floor Renovation', title: 'Bathroom Tiles', requestDate: '2025-06-04', startDate: '2025-06-08', endDate: '2025-06-12', status: 'Completed' },
    { category: 'Others', title: 'Aircon cleaning request', requestDate: '2025-06-07', startDate: '2025-06-10', endDate: 'Ongoing', status: 'Pending' },
  ];

  // Status Badge Helper
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'In Progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Pending': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDate = (date) => {
    if (date === 'Ongoing') return 'Ongoing';
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const handleSubmit = () => {
    setMessageTitle('');
    setMessage('');
    alert("Request Submitted!");
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-4 sm:px-8 py-7 flex flex-col gap-4 md:gap-6">
      
      {/* Header */}
      <div
        className="flex flex-col bg-cover bg-center items-center sm:items-start text-white px-8 py-8  shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-3xl w-full"
        style={{ backgroundImage: `url(${maintenancebg})` }}
      >
        <h1 className="font-BoldMilk tracking-[3px] md:tracking-[12px] text-xl md:text-2xl">
          MAINTENANCE
        </h1>
      </div>

      {/* Form Section */}
      <div className="bg-[#ffede1]  shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-3xl p-6 sm:p-8 flex flex-col gap-5">
        <h2 className="font-RegularMilk text-[#330101] text-lg">Report a Concern</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#4b150d] text-xs uppercase tracking-wider">Category</label>
            <select
              className="text-sm px-4 py-3 border border-[#e39b7c] rounded-xl bg-white focus:ring-2 focus:ring-[#db5833] outline-none transition"
              value={selectedConcern}
              onChange={(e) => setSelectedConcern(e.target.value)}
            >
              {categories.map((c, i) => <option key={i}>{c.category}</option>)}
            </select>
          </div>

          <div className="flex flex-col justify-center text-sm gap-2">
            <label className="font-bold text-[#4b150d] text-xs uppercase tracking-wider">Title</label>
            <input
              type="text"
              className="px-4 py-3 border border-[#e39b7c] rounded-xl bg-white focus:ring-2 focus:ring-[#db5833] outline-none transition"
              placeholder="What needs fixing?"
              value={messageTitle}
              onChange={(e) => setMessageTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col text-sm gap-2">
          <label className="font-bold text-[#4b150d] text-xs uppercase tracking-wider">Description</label>
          <textarea
            className="px-4 py-3 border border-[#e39b7c] rounded-xl bg-white focus:ring-2 focus:ring-[#db5833] outline-none transition resize-none"
            rows={3}
            placeholder="Describe the issue in detail..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-[#330101] text-sm text-[#ffede1] font-bold px-8 py-3 rounded-xl hover:bg-[#4d0707] active:scale-95 transition transform"
            onClick={handleSubmit}
          >
            SUBMIT REQUEST
          </button>
        </div>
      </div>

      {/* Maintenance Progress Section */}
      <div
        className="bg-cover bg-center  shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101]  rounded-3xl p-6 sm:p-8 flex flex-col gap-5 min-h-[400px]"
        style={{ backgroundImage: `url(${maintenanceprog})` }}
      >
        <h2 className="text-[#330101] text-lg font-BoldMilk tracking-wide">
          UNIT MAINTENANCE PROGRESS
        </h2>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-black/10">
          <table className="w-full text-left">
            <thead className="bg-[#4b150d] text-white font-LightMilk text-[11px] tracking-widest">
              <tr>
                <th className="py-4 px-4">Title</th>
                <th className="py-4 px-4">Category</th>
                <th className="py-4 px-4">Timeline</th>
                <th className="py-4 px-4 text-center">Status</th>
                <th className="py-4 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white/80 backdrop-blur-sm">
              {categories.map((item, index) => (
                <tr key={index} className="border-b border-black/5 hover:bg-white transition">
                  <td className="py-4 px-4 font-semibold text-[#330101]">{item.title}</td>
                  <td className="py-4 px-4 text-gray-600 text-sm">{item.category}</td>
                  <td className="py-4 px-4 text-xs text-gray-500">
                    <span className="block italic">Requested: {formatDate(item.requestDate)}</span>
                    <span className="block font-medium text-black">{formatDate(item.startDate)} → {formatDate(item.endDate)}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-RegularMilk border ${getStatusStyle(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      disabled={followedUp.includes(index)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                        followedUp.includes(index) ? "bg-gray-200 text-gray-400" : "bg-[#db5833] text-white hover:shadow-lg"
                      }`}
                      onClick={() => {
                        setModalOpen(true);
                        setFollowedUp((prev) => [...prev, index]);
                      }}
                    >
                      {followedUp.includes(index) ? "DONE" : "FOLLOW UP"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden flex flex-col gap-4">
          {categories.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-[#db5833]">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[#330101]">{item.title}</h3>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${getStatusStyle(item.status)}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-3">{item.category}</p>
              <div className="text-[10px] text-gray-400 mb-4 bg-gray-50 p-2 rounded-lg">
                <p>Start: {formatDate(item.startDate)}</p>
                <p>End: {formatDate(item.endDate)}</p>
              </div>
              <button
                disabled={followedUp.includes(index)}
                className={`w-full py-2 rounded-xl text-xs font-bold transition ${
                  followedUp.includes(index) ? "bg-gray-100 text-gray-400" : "bg-[#db5833] text-white"
                }`}
                onClick={() => {
                  setModalOpen(true);
                  setFollowedUp((prev) => [...prev, index]);
                }}
              >
                {followedUp.includes(index) ? "FOLLOWED UP" : "FOLLOW UP"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Improved Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-[#330101]/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full text-center border-t-8 border-[#db5833]">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
            <h3 className="text-xl font-bold text-[#330101] mb-2">Success!</h3>
            <p className="text-gray-500 text-sm mb-6">We've notified the admin that you are waiting for an update on this request.</p>
            <button
              className="w-full bg-[#330101] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#4d0707] transition"
              onClick={() => setModalOpen(false)}
            >
              GOT IT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MaintenanceCards;