import { useState } from "react";
import Caretakersidebar from './caretakercomp/caretakersidebar.jsx'
import Caretakerdbcards from './caretakercomp/caretakerdashboardcards.jsx'
import Announcements from '../tenantpages/tenantcomponents/announcementscards.jsx'

function caretakerdashboard () {
    const [open, setOpen] = useState(false);
    return(
        <div className={`flex flex-col md:flex-row min-h-screen ${open ? "overflow-hidden md:overflow-auto" : ""}`}>
            <Caretakersidebar  open={open} setOpen={setOpen}/>
            <div className={`flex flex-col flex-1 p-7 gap-y-3 ${open ? "hidden md:flex" : "flex"}`}>
                <Announcements open={open}/>
                <Caretakerdbcards open={open}/>
            </div>
        </div>
    )
}

export default caretakerdashboard