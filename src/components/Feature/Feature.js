import React from "react";
import Female from "./../../Assets/Female.svg"
import community from "./../../Assets/community.svg"
import Cycle from "./../../Assets/Cycle.svg"
import pregnant from "./../../Assets/pregnant.svg"


const Feature = (props) => {
    return (
        <div className="w-full py-10 px-5 md:px-10 relative pb-20 " ref={props.pass} id ="Feature">
            <div className=" mx-auto  flex justify-center w-full  h-fit lg:justify-end lg:right-0 z-50 ">
             <div className="flex flex-col w-4/5 items-center h-fit relative -mt-24  rounded-lg p-5 bg-white shadow-md lg:flex-row lg:w-fit py-6" style={{"fontFamily": "inter-Black"}}>
                <div className="md:mr-12">
                    <h1 className="text-4xl text-waiting_list font-bold text-center" >10</h1>
                    <p className="text-center text-xl text-brand_secondary" style={{"fontFamily": "inter-Medium"}}>Family Members</p>
                </div>
                <div className="md:mr-12">
                <h1 className="text-waiting_list text-4xl font-bold text-center">3000+</h1>
                    <p className="text-center text-xl text-brand_secondary" style={{"fontFamily": "inter-Medium"}}>Users</p>
                </div>
                <div className="md:mr-12">
                <h1 className="text-waiting_list text-4xl font-bold text-center">2021</h1>
                    <p className="text-center text-xl text-brand_secondary" style={{"fontFamily": "inter-Medium"}}>Year Founded</p>
                </div>
                <div className="md:mr-12">
                <h1 className="text-waiting_list text-4xl font-bold text-center">1</h1>
                    <p className="text-center text-xl text-brand_secondary" style={{"fontFamily": "inter-Medium"}}>Product(s)</p>
                </div>
                </div>
                </div>
                <div className="flex flex-col mt-20">
                    <div className="w-fit mx-auto">
                <h1 className="text-3xl font-bold text-brand_secondary after:block after:content-[''] after:bg-black after:h-1 after:mx-auto after:w-10 after:mt-1 mb-20" style={{"fontFamily": "inter-Black"}}>Features</h1>
                </div>
                <div className="flex flex-col mx-auto w-full max-w-3xl" style={{"fontFamily": "inter-Regular"}}>
                    <div className="flex w-full justify-evenly mb-8 flex-col sm:flex-row">
                        <div className="bg-white shadow-sm shadow-slate-300 flex items-center px-5 py-0 mb-8 sm:mb-0 w-4/5 sm:w-fit features">
                    <div className="w-10 h-20 flex center mr-5"><img src={Female} className = "w-full"/></div> 
                    <p className="text-left text-brand_secondary font-semibold">Africa Women</p> 
                    </div>
                    
                        <div className="bg-white shadow-sm shadow-slate-300 flex items-center px-5 py-0 features w-4/5 sm:w-fit">
                    <div className="w-10 h-20 flex center  mr-5"><img src={pregnant} className = "w-full"/></div>
                     <p className="text-left text-brand_secondary font-semibold">Pregnant & Nursing Mothers</p>
                    </div>
                    </div>

                    <div className="flex w-full justify-evenly flex-col sm:flex-row">
                        <div className="bg-white shadow-sm shadow-slate-300 flex items-center px-3 py-0 mb-8 sm:mb-0 features w-4/5 sm:w-fit">
                    <div className="w-14 h-20 flex center mr-5"><img src={community} className = "w-full"/></div>
                      <p className="text-left text-brand_secondary font-semibold">Community </p> 
                    </div>
                   
                        <div className="bg-white shadow-sm shadow-slate-300  flex items-center px-4 py-0 features w-4/5 sm:w-fit">
                    <div className="w-12 h-20 flex center mr-5"><img src={Cycle} className = "w-full"/></div>
                    <p className="text-left text-brand_secondary font-semibold">Menstrual Cycle</p> 
                    </div>
                    
                    </div> 

                </div>
                </div>
                
        </div>
    )
}

export default Feature