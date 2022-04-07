import React from "react";
import PregnantWoman from "./../../Assets/PregnantWoman.svg"
import nonPregNantWoman from "./../../Assets/nonPregNantWoman.svg" 
import Group1 from "./../../Assets/Group1.svg" 
import Group2 from "./../../Assets/Group2.svg"
import doctor from "./../../Assets/doctor.png"
import healthGurantee from "./../../Assets/healthGurantee.png"
import appointment from "./../../Assets/appointment.png"
import spread from "./../../Assets/spread.png"
import FABs from "./../../Assets/FABs.png"
import FABs1 from "./../../Assets/FABs1.png"









const HeaderDescription = () => {
    return(
        <div className="flex flex-col md:flex-row  box-border overflow-visible md:h-fit justify-between  gap-10 relative items-end mb-32  lg:mb-10 pb-6">
   
            <div className="flex flex-col h-full my-auto shrink oh">
                
                <div className="flex  flex-col mb-5">
                <p className="font-semibold text-xs line text-header_text" style={{"fontFamily": "inter-Medium"}}>CONNECT TO MEDICAL PRACTITIONER EASILY ON YOUR PALM</p>
                <h1 className="text-header_description  text-4xl font-extrabold font-inter" style={{"fontFamily": "inter-Black"}}>Health Care System For WOMEN In Africa.</h1>
                </div>
                <div className="grid lg:grid-cols-2 ">
                    <p className="flex mb-12 mr-16">
                        <div  className="pt-2 mr-2">
                            <img src={appointment} />
                        </div>
                        <p><h3 className="font-bold mb-0" style={{"fontFamily": "inter-Black"}}>Book An Apointment</h3>
                        <h3 style={{"fontFamily": "inter-Regular"}} className = "text-header_text">schedule with Your Favourite Consultant anytime.</h3></p>
                        
                    </p>
                    <p className="flex mb-12 ">
                        
                            <div  className="pt-2 mr-2">
                                <img src={healthGurantee} />
                            </div>
                            <p>
                        <h3 className="font-bold mb-0" style={{"fontFamily": "inter-Black"}}>Health Guarantee Forever</h3>
                        <h3 style={{"fontFamily": "inter-Regular"}} className = "text-header_text">We always provide the best warranty for you</h3>
                        </p>
                        
                    </p>
                    <p className="flex mr-16">
                     
                            <div className="pt-2 mr-2">
                            <img src={doctor} />
                            </div>
                            <p>
                        <h3 className="font-bold mb-0" style={{"fontFamily": "inter-Black"}}>Find Your Best Doctor</h3>
                        <h3 style={{"fontFamily": "inter-Regular"}} className = "text-header_text">We always provide the best service for you  anytime</h3>
                        </p>
                    </p>
                    <p className="flex mr-16">
                       
                            <div  className="pt-2 mr-2">
                        <img src={spread} />
                        </div>
                        <p>
                        <h3 className="font-bold mb-0" style={{"fontFamily": "inter-Black"}}>Spread In Various Location</h3>
                        <p style={{"fontFamily": "inter-Regular"}} className = "text-header_text">Client are now available in various places</p>
                        </p>
                    </p>
                    <div className="mt-4">
                    <button className=" py-2 px-6 bg-waiting_list rounded-md">
                        Join The Waiting List
                    </button>
                    </div>
                </div>
            </div>

            <div className=" women lg:flex hidden relative items-end">
            <div className="hidden lg:absolute lg:flex top-1/4 justify-between w-full right-0">
                    <img src={Group2} className="w-auto md:w-16 h-full bottom-2 left-14  relative"/>
                    <img src={Group1} className="w-auto  md:w-16 h-full relative bottom-8 right-2"/>
                </div>
                <div className="-mr-24 relative top-6">
                <img src = {nonPregNantWoman}  className = ""/>
                </div>
                <div className = "relative top-6" >
                    <div className="w-full h-full absolute flex flex-col justify-between">
                 
                        <img src={FABs}  className = "relative right-0 bottom-0 w-16 h-16"/>
                      
                        
                        <img src={FABs} className = "relative left-0 top-0 w-16"/>
                       
                       
                    </div>
                <img src = {PregnantWoman} cla />
                </div>
                {/* <div>
               
                <div className="hidden   w-full justify-end top-0 womens">
                <img src = {nonPregNantWoman}  className = "md:w-96 absolute left-0 bottom-10 -z-3"/>
                <img src = {PregnantWoman} className = "md:w-60 relative " />
                </div>
                </div> */}
               
            </div>
          
        </div>
    )
}


export default HeaderDescription