import { useState } from "react";
import Adminsidebar from './admincomponents/adminsidebar.jsx'
import Adminpayhis from './admincomponents/adminpaymenthiscards.jsx'

function adminpaymenthis() {
    const [open, setOpen] = useState(false);
    return(
        <div className={`flex flex-col md:flex-row min-h-screen ${open ? "overflow-hidden md:overflow-auto" : ""}`}>
            <Adminsidebar  open={open} setOpen={setOpen}/>
            <div className={`flex flex-col flex-1 p-7 gap-y-3 ${open ? "hidden md:flex" : "flex"}`}>
                <Adminpayhis/>
            </div>
        </div>
    )
}

export default adminpaymenthis