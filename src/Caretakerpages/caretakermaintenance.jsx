import { useState } from "react";
import Caretakersidebar from './caretakercomp/caretakersidebar.jsx'
import Caretakermaintcards from './caretakercomp/caretakermaintenancecards.jsx'


function caretakermaintenance () {
    const [open, setOpen] = useState(false);
    return(
        <div className={`flex flex-col md:flex-row min-h-screen ${open ? "overflow-hidden md:overflow-auto" : ""}`}>
            <Caretakersidebar  open={open} setOpen={setOpen}/>
            <div className={`flex flex-col flex-1 p-2 md:p-5 gap-y-3 ${open ? "hidden md:flex" : "flex"}`}>
                <Caretakermaintcards open={open}/>
            </div>
        </div>
    )
}

export default caretakermaintenance