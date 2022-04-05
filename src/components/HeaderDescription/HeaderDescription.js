import React from "react";
import PregnantWoman from "./../../Assets/PregnantWoman.svg"
import nonPregNantWoman from "./../../Assets/nonPregNantWoman.svg" 
import Group1 from "./../../Assets/Group1.svg" 
import Group2 from "./../../Assets/Group2.svg"
import doctor from "./../../Assets/doctor.png"
import healthGurantee from "./../../Assets/healthGurantee.png"
import appointment from "./../../Assets/appointment.png"
import spread from "./../../Assets/spread.png"






const HeaderDescription = () => {
    return(
        <div className="flex flex-col md:flex-row items-center box-border overflow-visible max-h-screen md:h-fit max-h-auto">
   
            <div className="flex flex-col gap-5">
                
                <div className="flex  flex-col ">
                <p className="font-semibold text-xs line">CONNECT TO MEDICAL PRACTITIONER EASILY ON YOUR PALM</p>
                <h1 className="text-header_description text-4xl font-extrabold font-inter">Health Care System For WOMEN In Africa.</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <p className="flex gap-3">
                        <div  className="pt-2">
                            <img src={appointment} />
                        </div>
                        <p><h3 className="font-bold">Book An Apointment</h3>
                        <h3>schedule with Your Favourite Consultant anytime.</h3></p>
                        
                    </p>
                    <p className="flex gap-3 ">
                        
                            <div  className="pt-2">
                                <img src={healthGurantee} />
                            </div>
                            <p>
                        <h3 className="font-bold">Health Guarantee Forever</h3>
                        <h3>We always provide the best warranty for you</h3>
                        </p>
                        
                    </p>
                    <p className="flex gap-3">
                     
                            <div className="pt-2">
                            <img src={doctor} />
                            </div>
                            <p>
                        <h3 className="font-bold">Find Your Best Doctor</h3>
                        <h3>We always provide the best service for you  anytime</h3>
                        </p>
                    </p>
                    <p className="flex gap-3">
                       
                            <div  className="pt-2">
                        <img src={spread} />
                        </div>
                        <p>
                        <h3 className="font-bold">Spread In Various Location</h3>
                        <h3>Client are now available in various places</h3>
                        </p>
                    </p>
                    <div>
                    <button className=" py-2 px-6 bg-waiting_list rounded-md">
                        Join The Waiting List
                    </button>
                    </div>
                </div>
            </div>

            <div className="flex p-0 box-border md:w-100 relative w-full">
                <div className="items-end relative  top-10   box-border h-full  md:flex hidden">
                    <img src={Group2} className="absolute top-16 w-16 left-16 "/>
                    <img src = {nonPregNantWoman} />
                </div>
                <div className="hidden  md:block md:relative md:z-10 md:h-full md:right-24" >
                <img src={Group1} className="absolute w-16 right-0 top-16"/>
                    <img src = {PregnantWoman} className = "" />
                </div>
                <div className="md:absolute bg-white -bottom-10 md:w-full z-10 flex justify-between  rounded-md  p-2 shadow-sm w-4/5 mx-auto flex-col md:flex-row ">
                <div>
                    <h1 className="text-3xl text-waiting_list font-bold">10</h1>
                    <p>Family Members</p>
                </div>
                <div>
                <h1 className="text-waiting_list text-3xl font-bold">3000+</h1>
                    <p>Users</p>
                </div>
                <div>
                <h1 className="text-waiting_list text-3xl font-bold">2021</h1>
                    <p>Year Founded</p>
                </div>
                <div>
                <h1 className="text-waiting_list text-3xl font-bold">1</h1>
                    <p>Product(s)</p>
                </div>
                </div>
                

            </div>
          
        </div>
    )
}


export default HeaderDescription