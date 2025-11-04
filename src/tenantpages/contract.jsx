import { useState } from "react";
import Sidebar from './tenantcomponents/sidebar.jsx'
import Contractcards from './tenantcomponents/contractcards.jsx'
import Announcements from './tenantcomponents/announcementscards.jsx'

function contract () {
    const [open, setOpen] = useState(false);
    return(
        <div className={`flex flex-col md:flex-row min-h-screen ${open ? "overflow-hidden md:overflow-auto" : ""}`}>
            <Sidebar  open={open} setOpen={setOpen}/>
            <div className={`flex flex-col flex-1 p-7 gap-y-3 ${open ? "hidden md:flex" : "flex"}`}>
                <Announcements open={open}/>
                <Contractcards open={open}/>
            </div>
        </div>
    )
}

export default contract