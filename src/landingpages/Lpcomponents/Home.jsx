import { Link } from 'react-router-dom';

function Home () {
    return(
        <div className=" mt-15 sm:mt-17 md:mt-20 lg:mt-20 ">
            <div id="home" className="bg-[url('./assets/landingpagebg.png')] bg-cover bg-center w-full border border-white bg-gray-100  ">
                <div 
                className="p-6 mx-3 sm:mx-15 lg:mx-25 mt-100 sm:mt-114 lg:mt-110 mb-60 sm:mb-80 lg:mb-30 flex flex-col gap-y-6" 
                >
                    <h1 className="font-MDMilk tracking-[1px] lg:tracking-[7px] text-lg lg:text-3xl w-50 lg:w-100 p-5 flex items-center justify-center bg-[#db6747] text-white rounded-xl  ">MGC BUILDING</h1>
                    <h1 className="font-sora text-base lg:text-lg p-5 w:30 lg:w-150  items-center justify-center bg-[#0d0000e1] text-white rounded-xl">Offering affordable rooms Designed to meet the needs of urban living, located in sta rosa, laguna.</h1>
                </div>
            </div>
            <div  id="about" className=" flex flex-row justify-center flex-wrap items-center gap-y-20 sm:gap-y-25 md:gap-x-20 lg:gap-x-40  pt-20 sm:pt-30 md:pt-40 lg:pt-55 pb-20 sm:pb-30 md:pb-40 lg:pb-60">
                <div className="   flex flex-col flex-wrap gap-y-8 p-3 lg:p-12 ">
                    <div className="  flex flex-row flex-wrap justify-center  gap-y-7 sm:gap-x-4 md:gap-x-4 lg:gap-x-5">
                        <h1 className=" w-55 sm:w-70 h-55 bg-[url('./assets/galleryimage1.png')] bg-cover bg-center rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)]" ></h1>
                        <h1 className=" w-55 h-55 bg-[url('./assets/galleryimage2.png')] bg-cover bg-center rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)]"></h1>
                    </div>
                    <div className=" flex flex-row flex-wrap justify-center  gap-y-7 sm:gap-x-4 md:gap-x-4 lg:gap-x-5">
                        <h1 className=" w-55 h-55 bg-[url('./assets/galleryimage3.png')] bg-cover bg-center rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)]"></h1>
                        <h1 className=" w-55 sm:w-70 h-55 bg-[url('./assets/galleryimage4.png')] bg-cover bg-center rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)]"></h1>
                    </div>
                </div>
                <div className=" max-w-xl flex flex-col gap-y-10 p-12  ">
                    <h1 className="font-sora text-base md:text-xl">We offer straightforward, no-fuss apartmentrentals designed for individuals or pairs looking for a clean, secure, and budget-friendly place to call home.</h1>
                    <h1 className="font-sora text-base md:text-xl">Our units are ideal for working professionals or couples seeking a private space with essential amenities. with a setup that support simple, low maintenance living.</h1>
                </div>
            </div>
            <div id="apply" className="bg-[url('./assets/applynowbg.png')] bg-cover bg-center w-full flex justify-center items-center text-center">
                <div className=" flex flex-col gap-y-6 mt-60 mb-60 ">
                    <h1 className="font-RegularMilk tracking-[2px] text-white text-base sm:text-lg lg:text-2xl ">Looking for a unit?</h1>
                    <Link to="/applynowpage" className="font-MDMilk tracking-[5px] bg bg-white text-[#db6747] hover:text-white hover:bg-[#db6747] hover:shadow-[0_0px_10px_rgba(255,255,255,1)] hover:scale-110 transform transition duration-300 rounded-xl text-2xl sm:text-3xl lg:text-5xl   px-10 sm:px-20 lg:px-30  p-8">  APPLY NOW!</Link>
                </div>
            </div>
            <div className=" flex justify-center items-center text-center">
                <div className=" flex flex-col flex-wrap items-center text-center gap-y-5 lg:gap-y-7 pt-45 pb-53 px-7   ">
                    <h1 className="font-MDMilk tracking-[5px] text-2xl sm:text-3xl lg:text-4xl mb-10">RENT CONDITIONS</h1>
                    <div className="font-LightMilk flex flex-row flex-wrap md:flex-nowrap justify-center gap-y-5 sm:gap-x-15 lg:gap-x-20 w-full  ">
                        <h1 className="tracking-[1px] bg-[#db6747] rounded-xl text-sm sm:text-lg lg:text-xl text-white px-5 sm:px-7 lg:px-17 p-3 sm:p-5 lg:p-8 w-full">₱3,000 Monthly Rent Rate.</h1>
                        <h1 className="tracking-[1px] bg-[#db6747] rounded-xl text-sm sm:text-lg lg:text-xl text-white px-5 sm:px-7 lg:px-17 p-3 sm:p-5 lg:p-8 w-full">Each unit is limited to 2 occupants.</h1>
                    </div>
                    <div className="font-LightMilk flex flex-row flex-wrap md:flex-nowrap justify-center gap-y-5 sm:gap-x-15 lg:gap-x-20 w-full  " >
                        <h1 className=" bg-[#420708] rounded-xl text-xs sm:text-sm lg:text-lg text-white px-3 sm:px-7 lg:px-9 p-3 sm:p-5 lg:p-8 w-full">One-month Deposit and one-month Advance required.</h1>
                        <h1 className=" bg-[#420708] rounded-xl text-xs sm:text-sm lg:text-lg text-white px-3 sm:px-7 lg:px-9 p-3 sm:p-5 lg:p-8 w-full">Utility charges: ₱20 per unit for electricity and water.</h1>
                    </div>
                    <div className="font-LightMilk flex flex-row flex-wrap md:flex-nowrap justify-center gap-y-5 sm:gap-x-15 lg:gap-x-20 w-full">
                        <h1 className="tracking-[1px] bg-[#db6747] rounded-xl text-sm sm:text-lg lg:text-xl text-white px-5 sm:px-7 lg:px-14 p-3 sm:p-5 lg:p-8 w-full">Only 2-wheeled vehicles allowed.</h1>
                        <h1 className="tracking-[1px] bg-[#db6747] rounded-xl text-sm sm:text-lg lg:text-xl text-white px-5 sm:px-7 lg:px-14 p-3 sm:p-5 lg:p-8 w-full">No Pets Allowed.</h1>
                    </div>
                </div>
            </div>
            <div className=" bg-[url('./assets/modalbg.png')] bg-cover bg-center w-full flex flex-col justify-between items-center pt-20 pb-50">
                <div className="border border-red-500 flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap justify-center items-center text-center  md:text-justify gap-y-20 md:gap-x-30 lg:gap-x-100 px-10 md:px-15 lg:px-15">
                    <div className=" flex flex-col gap-y-5 max-w-130 ">
                        <h1 className="font-RegularMilk text-white text-lg md:text-2xl">MGC BUILDING</h1>
                        <h2 className="text-white text-sm md:text-base">Offering affordable apartment rooms designed to meet the needs of urban living, Located in Sta Rosa, Laguna.</h2>
                        <h2 className="text-white text-sm md:text-base">MGCBuilding@gmail.com</h2>
                    </div>
                    <div className="flex flex-row gap-x-10 md:gap-x-20">
                        <div className="flex flex-col gap-y-5">
                            <h1 className="font-RegularMilk text-white text-lg md:text-2xl">CARETAKERS</h1>
                            <h2 className="text-white text-sm md:text-base">Julie Pastrana Canete</h2>
                            <h2 className="text-white text-sm md:text-base">Kenneth Selencio</h2>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <h1 className="font-RegularMilk text-white text-lg md:text-2xl">CONTACTS</h1>
                            <h2 className="text-white text-sm md:text-base">09676635250</h2>
                            <h2 className="text-white text-sm md:text-base">09213092286</h2>
                            <h2 className="text-white text-sm md:text-base">09914262113</h2>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Home