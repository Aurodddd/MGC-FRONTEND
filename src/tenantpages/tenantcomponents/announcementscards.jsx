import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import modalBg from "../../assets/modalbg.png";

function Announcement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  const announcements = [
    { title: "Electrical Maintenance", description: "Power will be off from 2PM to 5PM." },
    { title: "Water Maintenance", description: "Water will be unavailable from 10AM to 12PM." },
    { title: "Floor Renovation", description: "Floor 3 is going through renovation." },
  ];

  const handleCardClick = (announcement) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
  };

  return (
    <div className="bg-gradient-to-r from-[#4d0707] to-[#160000] text-white p-3 rounded-xl flex flex-col lg:flex-row gap-y-2 items-start lg:items-center lg:justify-between">
      <h2 className="text-sm font-BoldMilk tracking-[7px] ml-5 whitespace-nowrap">ANNOUNCEMENTS</h2>

      {/* Desktop Buttons */}
      <div className="hidden   lg:flex gap-4 justify-center lg:ml-5">
        {announcements.map((item, index) => (
          <button
            key={index}
            className="bg-[#fceee5] text-black p-4  rounded-md  hover:shadow-[0_0px_10px_rgba(255,255,255,1)] transition-all"
            onClick={() => handleCardClick(item)}
          >
            <h3 className="font-bold tracking-[1px] text-sm mb-1">{item.title}</h3>
            <p className="text-xs text-gray-700 tracking-[1px]">View Details</p>
          </button>
        ))}
        <button
          onClick={() => setIsViewAllOpen(true)}
          className="bg-[#fceee5] text-black p-5 md:w-30 lg:w-40 rounded-md hover:shadow-[0_0px_10px_rgba(255,255,255,1)] transition-all"
        >
          <h3 className="text-sm font-bold tracking-wider tracking-[1px]">View All</h3>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className="block lg:hidden w-full px-4 mt-2">
        <select
          className="w-full bg-[#fceee5] text-black p-3 rounded-md shadow-md"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "view_all") {
              setIsViewAllOpen(true);
            } else {
              const announcement = announcements.find((a) => a.title === value);
              if (announcement) handleCardClick(announcement);
            }
          }}
        >
          <option value="" disabled selected>View Announcement</option>
          {announcements.map((item) => (
            <option key={item.title} value={item.title}>{item.title}</option>
          ))}
          <option value="view_all">View All</option>
        </select>
      </div>

      {/* Single Modal */}
      {isModalOpen && selectedAnnouncement && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div
            className="relative max-h-[80vh] overflow-y-auto w-[90%] max-w-8xl h-[50rem] rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${modalBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center pt-14 px-10 md:px-20">
              <h1 className="text-base font-RegularMilk tracking-[5px] text-white text-xs md:text-base lg:text-xl ">ANNOUNCEMENTS</h1>
              <button
                className="ml-auto text-sm sm:text-base md:text-lg w-8 h-8 flex items-center justify-center bg-[#ffece0] text-[#330503] rounded hover:scale-110 hover:shadow-white transition-all"
                onClick={toggleModal}
              >
                <IoClose />
              </button>
            </div>
            <div className="p-7">
              <div className="bg-[#ffece0] text-black p-6 rounded-md w-full">
                <h2 className="font-bold tracking-[1px] text-lg mb-2">{selectedAnnouncement.title}</h2>
                <p className="text-sm">{selectedAnnouncement.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View All Modal */}
      {isViewAllOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsViewAllOpen(false)}
        >
          <div
            className="relative max-h-[80vh] overflow-y-auto w-[90%] max-w-8xl h-[50rem] rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${modalBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center pt-14 px-10 md:px-20">
              <h1 className="text-base font-RegularMilk tracking-[5px] text-white text-xs md:text-xl font-bold tracking-[.3em]">ALL ANNOUNCEMENTS</h1>
              <button
                className="ml-auto text-sm sm:text-base md:text-lg w-8 h-8 flex items-center justify-center bg-[#ffece0] text-[#330503] rounded hover:scale-110 hover:shadow-white transition-all"
                onClick={() => setIsViewAllOpen(false)}
              >
                <IoClose />
              </button>
            </div>
            <div className="p-10 space-y-4">
              {announcements.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#ffece0] text-black p-6 rounded-md w-full"
                >
                  <h2 className="font-bold tracking-[1px] text-lg mb-2">{item.title}</h2>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Announcement;