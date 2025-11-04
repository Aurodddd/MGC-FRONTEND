import { useState } from "react";
import AnnouncementBg from "../../assets/announcementbg.png";
import ModalBg from "../../assets/modalbg.png";

export default function AdminAnnounceCards() {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // NEW

  const handleSend = () => {
    if (!title.trim() || !message.trim()) return;

    const newAnnouncement = { title, message };

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

    // Cancel editing if you delete the one being edited
    if (index === editingIndex) {
      setTitle("");
      setMessage("");
      setEditingIndex(null);
    }
  };

  const handleEdit = (index) => {
    const { title, message } = announcements[index];
    setTitle(title);
    setMessage(message);
    setEditingIndex(index);
  };

  return (
    <div className="bg-gradient-to-r from-[#f7b094] to-[#dd7255] rounded-2xl w-full h-full px-6 md:px-12 py-10 flex flex-col gap-8">

      {/* Header */}
      <div
        className="bg-cover bg-center shadow-[15px_13px_0px_#330101] rounded-2xl text-white py-6 px-6 md:px-20"
        style={{ backgroundImage: `url(${AnnouncementBg})` }}
      >
        <h1 className="font-[BoldMilk] tracking-[7px] md:tracking-[15px] text-[20px] md:text-[30px] text-white uppercase">
          Announcements
        </h1>
      </div>

      {/* Announcements Cards */}
      <div
        className="bg-cover bg-center border shadow-[15px_13px_0px_#fee8da] rounded-2xl p-6 flex flex-col gap-4 h-[20rem] max-h-[20rem] overflow-y-auto"
        style={{ backgroundImage: `url(${ModalBg})` }}
      >
        {announcements.length === 0 ? (
          <p className="text-white text-lg">No announcements yet.</p>
        ) : (
          announcements.map((a, i) => (
            <div
              key={i}
              className="bg-[#fee8da] bg-opacity-70 rounded-xl p-4 flex flex-col gap-2 shadow-md"
            >
              <h2 className="font-semibold text-[#4b150d] text-lg">{a.title}</h2>
              <p className="text-[#4b150d] text-sm">{a.message}</p>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleDelete(i)}
                  className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(i)} // CONNECT TO LOGIC
                  className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sender Form */}
      <div className="bg-gradient-to-r from-[#fee8da] to-[#efd4c4] shadow-[15px_13px_0px_#330101] rounded-2xl p-6 flex flex-col gap-4">
        <h2 className="text-[#4b150d] font-RegularMilk text-lg">
          {editingIndex !== null ? "Edit Announcement" : "Send New Announcement"}
        </h2>
        <input
          type="text"
          placeholder="Announcement Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 rounded bg-white border border-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747]"
        />
        <textarea
          placeholder="Announcement Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-4 py-2 rounded bg-white border border-[#4b150d] focus:outline-none focus:ring-2 focus:ring-[#db6747] resize-none"
          rows={4}
        />
        <div className="flex gap-2">
          <button
            onClick={handleSend}
            className="bg-[#d45f41] text-white px-6 py-2 rounded hover:bg-[#b94e36]"
          >
            {editingIndex !== null ? "Save Changes" : "Send"}
          </button>
          {editingIndex !== null && (
            <button
              onClick={() => {
                setEditingIndex(null);
                setTitle("");
                setMessage("");
              }}
              className="bg-gray-300 text-[#4b150d] px-6 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
