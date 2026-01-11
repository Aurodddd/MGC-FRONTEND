import { useState } from "react";
import Adminsidebar from './admincomponents/adminsidebar.jsx'
import Adminaccsett from './admincomponents/adminaccsettcards..jsx'

function adminaccsettings() {
    const [open, setOpen] = useState(false);
    return(
        <div className={`flex flex-col md:flex-row min-h-screen ${open ? "overflow-hidden md:overflow-auto" : ""}`}>
            <Adminsidebar  open={open} setOpen={setOpen}/>
            <div className={`flex flex-col flex-1 p-2 md:p-5 gap-y-3 ${open ? "hidden md:flex" : "flex"}`}>
                <Adminaccsett/>
            </div>
        </div>
    )
}

export default adminaccsettings