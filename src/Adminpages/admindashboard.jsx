import { useState } from "react";
import Adminsidebar from './admincomponents/adminsidebar.jsx'
import Admindashboard from './admincomponents/admindashboardcards.jsx'


function dashboard () {
    const [open, setOpen] = useState(false);
    return(
        <div className={`flex flex-col md:flex-row min-h-screen ${open ? "overflow-hidden md:overflow-auto" : ""}`}>
            <Adminsidebar  open={open} setOpen={setOpen}/>
            <div className={`flex flex-col flex-1 p-2 md:p-5 gap-y-3 ${open ? "hidden md:flex" : "flex"}`}>
                <Admindashboard/>
            </div>
        </div>
    )
}

export default dashboard