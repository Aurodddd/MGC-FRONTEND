import { useState } from "react";
import Adminsidebar from './admincomponents/adminsidebar.jsx'
import Adminapprov from './admincomponents/adminapprovalpage.jsx'

function adminpaymenthis() {
    const [open, setOpen] = useState(false);
    return(
        <div className={`flex flex-col md:flex-row min-h-screen ${open ? "overflow-hidden md:overflow-auto" : ""}`}>
            <Adminsidebar  open={open} setOpen={setOpen}/>
            <div className={`flex flex-col flex-1 p-2 md:p-5 gap-y-3 ${open ? "hidden md:flex" : "flex"}`}>
                <Adminapprov/>
            </div>
        </div>
    )
}

export default adminpaymenthis