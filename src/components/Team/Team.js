import React from "react";
import jacob from "./../../Assets/jacob.png"
import amusan from "./../../Assets/amusan.png"
import banjo from "./../../Assets/banjo.png"
import boluwatife from "./../../Assets/boluwatife.png"
import shoyemi from "./../../Assets/shoyemi.png"
import babalola from "./../../Assets/babalola.png"
// import jacob from "./../../Assets/jacob.png"

const Team = () => {
    return(
    <div className="pt-20 px-5 md:px-10">
        <div className="w-fit mx-auto">
           <h1 className="text-3xl font-bold text-brand_secondary after:block after:content-[''] after:bg-black after:h-1 after:mx-auto after:w-10 after:mt-1 mb-5">Team</h1>
           </div>  
           <h1 className="mx-auto mb-10 text-brand_secondary text-4xl  w-fit font-extrabold">Meet The Family</h1>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-48">
               <div className="flex flex-col items-center">
                   <img src={jacob}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4">Kehinde Jacob</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4">Co-founder & CEO</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={amusan}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4">Amusan Toluwanimi</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4">Engineering Lead</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={banjo}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4">Banjo Ogunleye Sh..</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4">Content developer Lead</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={boluwatife} className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4">Boluwatife Akinade</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4">Product Design  Lead</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={shoyemi}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4">Shoyemi Samuel</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4">Engineering</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={babalola}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4">Babalola Gbogo</h2>
                   <h3  className="text-xl font-semibold w-full text-left pl-4">Engineering</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={babalola}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4">Moranti Success</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4">Content developer</h3>
               </div>
               <div>
                   <img src={babalola}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4">Ope Destiny </h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4">Designer</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={babalola}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4">Ikuejawa Gabriel</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4">Engineering</h3>
               </div>
           </div>
    </div>
    )
}


export default Team