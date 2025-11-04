import { useState } from "react";
import Sidebar from './tenantcomponents/sidebar.jsx'
import Contractcards from './tenantcomponents/contractcards.jsx'
import Announcements from './tenantcomponents/announcementscards.jsx'
import Accsett from './tenantcomponents/accsettcards.jsx'

function accsettings () {
    const [open, setOpen] = useState(false);
    return(
        <div className={`flex flex-col md:flex-row min-h-screen ${open ? "overflow-hidden md:overflow-auto" : ""}`}>
            <Sidebar  open={open} setOpen={setOpen}/>
            <div className={`flex flex-col flex-1 p-7 gap-y-3 ${open ? "hidden md:flex" : "flex"}`}>
                <Announcements open={open}/>
                <Accsett open={open}/>
            </div>
        </div>
    )
}

export default accsettings