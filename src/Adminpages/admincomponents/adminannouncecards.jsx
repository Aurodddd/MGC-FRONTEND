import { useState } from "react";
import AnnouncementBg from "../../assets/announcementbg.png";
import ModalBg from "../../assets/modalbg.png";
import { MdDelete, MdEdit } from "react-icons/md"; // 🔹 Added Icons

// HELPER FUNCTION
const getLocalDateString = (dateInput) => {
  if (!dateInput) return ""; 
  const date = new Date(dateInput);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function AdminAnnounceCards() {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSend = () => {
    if (!title.trim() || !message.trim()) return;

    const newAnnouncement = { 
      title, 
      message, 
      createdAt: new Date().toISOString() 
    };

    if (editingIndex !== null) {
      const updated = [...announcements];
      updated[editingIndex] = newAnnouncement;
      setAnnouncements(updated);
      setEditingIndex(null);
    } else {
      setAnnouncements([newAnnouncement, ...announcements]);
    }

    setTitle("");
    setMessage("");
  };

  const handleDelete = (index) => {
    const updated = [...announcements];
    updated.splice(index, 1);
    setAnnouncements(updated);
    if (index === editingIndex) {
      setEditingIndex(null);
      setTitle("");
      setMessage("");
    }
  };

  const handleEdit = (index) => {
    const { title, message } = announcements[index];
    setTitle(title);
    setMessage(message);
    setEditingIndex(index);
  };

  const filteredAnnouncements = announcements.filter((a) => {
    const announceDate = getLocalDateString(a.createdAt);
    if (startDate && endDate) {
      return announceDate >= startDate && announceDate <= endDate;
    } else if (startDate) {
      return announceDate >= startDate;
    } else if (endDate) {
      return announceDate <= endDate;
    }
    return true; 
  });

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-4 sm:px-8 py-7 flex flex-col gap-3 md:gap-4 ">
      
      {/* Header */}
      <div
        className="flex flex-col bg-cover bg-center items-center text-center sm:text-start sm:items-start text-white px-8 py-8 shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-3xl w-full"
        style={{ backgroundImage: `url(${AnnouncementBg})` }}
      >
        <h1 className="font-BoldMilk tracking-[3px] md:tracking-[12px] text-xl md:text-2xl uppercase">
          Announcements
        </h1>
      </div>

      {/* Sender Form */}
      <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] shadow-[5px_5px_0px_#330101] md:shadow-[10px_8px_0px_#330101] rounded-2xl p-5 flex flex-col gap-4">
        <h2 className="text-[#4b150d] font-RegularMilk text-sm">
          {editingIndex !== null ? "Edit Announcement" : "Send New Announcement"}
        </h2>
        <input
          type="text"
          placeholder="Announcement Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-sm px-4 py-2 rounded bg-white border border-[#4b150d] focus:outline-none"
        />
        <textarea
          placeholder="Announcement Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="text-sm px-4 py-2 rounded bg-white border border-[#4b150d] focus:outline-none resize-none"
          rows={3}
        />
        <button onClick={handleSend} className="bg-[#d45f41] text-sm font-RegularMilk text-white px-4 py-2 rounded-xl self-start cursor-pointer hover:bg-[#4b150d] hover:text-[#efd4c4] transition">
          {editingIndex !== null ? "Save Changes" : "Send"}
        </button>
      </div>

      {/* Announcements Cards Container */}
      <div
        className="bg-cover bg-center border  shadow-[5px_5px_0px_#fee8da] md:shadow-[10px_8px_0px_#fee8da] rounded-2xl p-5 px-9 flex flex-col gap-3 h-full overflow-y-auto"
        style={{ backgroundImage: `url(${ModalBg})` }}
      >
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-y-2 sm:gap-x-4">
          <h1 className="font-MDMilk text-base sm:text-lg md:tracking-[2px] text-white">Announcements</h1>
          
          <div className="flex flex-wrap items-center gap-3 bg-black/20 p-3 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <label className="text-white font-LightMilk text-xs whitespace-nowrap">From:</label>
              <input 
                type="date" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="rounded px-2 py-1 text-xs bg-white border border-[#4b150d] outline-none"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-white font-LightMilk text-xs whitespace-nowrap">To:</label>
              <input 
                type="date" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="rounded px-2 py-1 text-xs bg-white border border-[#4b150d] outline-none"
              />
            </div>

            {(startDate || endDate) && (
              <button 
                onClick={() => { setStartDate(""); setEndDate(""); }}
                className="text-[10px] text-white underline"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {filteredAnnouncements.length === 0 ? (
          <p className="text-white text-xs sm:text-sm">No announcements found.</p>
        ) : (
          filteredAnnouncements.map((a, i) => (
            <div key={i} className="bg-[#fee8da] bg-opacity-95 rounded-xl p-4 flex flex-col gap-2 shadow-md w-full border border-[#4b150d]/10 relative group">
              
              {/* Card Header */}
              <div className="flex justify-between items-start gap-4">
                <h2 className="font-bold text-[#4b150d] text-base break-all">{a.title}</h2>
                
                {/* 🔹 Glassmorphic Date Badge */}
                <span className="text-[11px] font-bold text-[#4b150d] bg-white/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 shadow-sm whitespace-nowrap">
                  {a.createdAt ? new Date(a.createdAt).toLocaleDateString() : "No Date"}
                </span>
              </div>

              {/* Message */}
              <p className="text-[#4b150d] text-sm  break-all whitespace-pre-wrap leading-relaxed">
                {a.message}
              </p>

              {/* 🔹 Action Icons */}
              <div className="flex gap-2  justify-end">
                <button 
                  onClick={() => handleEdit(i)} 
                  className="p-2 bg-[#4b150d] text-white rounded-lg hover:bg-white hover:text-[#4b150d] transition-all shadow-sm"
                  title="Edit Announcement"
                >
                  <MdEdit size={15} />
                </button>
                <button 
                  onClick={() => handleDelete(i)} 
                  className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-sm"
                  title="Delete Announcement"
                >
                  <MdDelete size={15} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}