import { useState } from "react";
import Sidebar from './tenantcomponents/sidebar.jsx'
import Maintenance from './tenantcomponents/maintenancecards.jsx'
import Announcements from './tenantcomponents/announcementscards.jsx'

function maintenance () {
    const [open, setOpen] = useState(false);
    return(
        <div className={`flex flex-col md:flex-row min-h-screen ${open ? "overflow-hidden md:overflow-auto" : ""}`}>
            <Sidebar  open={open} setOpen={setOpen}/>
            <div className={`flex flex-col flex-1 p-7 gap-y-2 ${open ? "hidden md:flex" : "flex"}`}>
                <Announcements open={open}/>
                <Maintenance open={open}/>
            </div>
        </div>
    )
}

export default maintenance