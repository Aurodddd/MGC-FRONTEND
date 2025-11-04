import { useState } from "react";
import Caretakersidebar from './caretakercomp/caretakersidebar.jsx'
import Caretakeraccsettcards from './caretakercomp/caretakeraccsettcards.jsx'


function caretakeraccsett() {
    const [open, setOpen] = useState(false);
        return(
            <div className={`flex flex-col md:flex-row min-h-screen ${open ? "overflow-hidden md:overflow-auto" : ""}`}>
                <Caretakersidebar  open={open} setOpen={setOpen}/>
                <div className={`flex flex-col flex-1 p-7 gap-y-3 ${open ? "hidden md:flex" : "flex"}`}>
                    <Caretakeraccsettcards/>
                </div>
            </div>
        )
}

export default caretakeraccsett