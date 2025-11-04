
function Applypage () {
    return(
        <div className="bg-[url('./assets/applynowbg.png')] bg-cover bg-center flex justify-center w-full h-full pt-34 pb-12.5 px-10 md:px-30 lg:px-15  ">
            <div className=" bg-gray-100 rounded-md flex flex-wrap lg:flex-row justify-center gap-y-20 md:gap-x-10 lg:gap-x-20 min-w-30 max-w-300 p-8 md:p-20">
                <div className=" flex flex-col text-justify gap-y-20 max-w-140 pt-7">
                    <div className="flex flex-col  gap-y-2">
                        <h2 className="text-sm font-LightMilk tracking-[1px] md:tracking-[2px] md:text-base">LOOKING FOR A PLACE TO STAY?</h2>
                        <h1 className="text-xl font-RegularMilk tracking-[1px] md:font-MDMilk  md:tracking-[3px] md:text-2xl">SEND YOUR APPLICATION NOW!</h1>
                        <h2 className="text-sm md:text-base tracking-[1px] w-auto md:w-110">We encourage you to visit our location shown on the Google Map below and bring the required documents:</h2>
                        <div className="flex flex-col gap-y-1">
                            <h2 className="text-sm md:text-base tracking-[1px]">Company ID </h2>
                            <h2 className="text-sm md:text-base tracking-[1px]">Valid Government-issued ID</h2>
                        </div>
                    </div>
                    <div>
                        <h1 className="">LOCATION:</h1>
                        <div className="">maps</div>
                    </div>
                </div>
                <div className="bg-white  rounded-lg  flex flex-col  gap-y-5  w-100 md:w-110 lg:w-115 p-5 md:p-10 shadow-[0px_0px_5px_rgba(0,0,0,1)] ">
                    <div className="flex flex-col gap-y-3 ">
                        <label className="text-sm font-LightMilk tracking-[1px]">Full Name</label>
                        <div>
                            <input type="text" placeholder="Full name" id="first-name" autocomplete="given-name" className="text-sm placeholder:text-gray-400 bg bg-gray-100 border rounded w-full p-1 px-2"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3 ">
                        <label className="text-sm font-LightMilk tracking-[1px]">Email</label>
                        <div>
                            <input type="text" placeholder="Email" id="first-name" autocomplete="given-name" className="text-sm placeholder:text-gray-400 bg bg-gray-100 border rounded w-full p-1 px-2"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3 ">
                        <label className="text-sm font-LightMilk tracking-[1px]">Contact Number</label>
                        <div>
                            <input type="text" placeholder="Contact Number" id="first-name" autocomplete="given-name" className="text-sm placeholder:text-gray-400 bg bg-gray-100 border rounded w-full p-1 px-2"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3 ">
                        <label className="text-sm font-LightMilk tracking-[1px]">Message</label>
                        <div className="h-26 ">
                            <textarea type="text" placeholder="Enter your message here!" id="first-name" autocomplete="given-name" className="bg-white border rounded-md px-2 py-1 text-sm resize-none focus:outline-none w-full h-full"></textarea>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <a href="/" className="px-10 p-2 bg-[#db6747]  hover:scale-110 transform transition duration-300  rounded-xl text-white text-[15px] font-RegularMilk tracking-[2px]">SEND</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Applypage