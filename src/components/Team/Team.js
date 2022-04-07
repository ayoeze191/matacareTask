import React from "react";
import jacob from "./../../Assets/jacob.png"
import amusan from "./../../Assets/amusan.png"
import banjo from "./../../Assets/banjo.png"
import boluwatife from "./../../Assets/boluwatife.png"
import shoyemi from "./../../Assets/shoyemi.png"
import ikuejawa from "./../../Assets/ikuejawa.png"
import okpe from "./../../Assets/okpe.png"
import moranti from "./../../Assets/moranti.png"
import gbogo from "./../../Assets/gbogo.png"


const Team = (props) => {
    return(
    <div className="pt-20 px-5 md:px-10" ref={props.pass}>
        <div className="w-fit mx-auto">
           <h1 className="text-3xl font-bold text-brand_secondary after:block after:content-[''] after:bg-black after:h-1 after:mx-auto after:w-10 after:mt-1 mb-5" style={{"fontFamily": "inter-ExtraBold"}}>Team</h1>
           </div>  
           <h1 className="mx-auto mb-10 text-brand_secondary text-4xl  w-fit font-extrabold" style={{"fontFamily": "inter-Black"}}>Meet The Family</h1>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-48">
               <div className="flex flex-col items-center">
                   <img src={jacob}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4" style={{"fontFamily": "inter-ExtraBold"}}>Kehinde Jacob</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4" style={{"fontFamily": "inter-Medium"}}>Co-founder & CEO</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={amusan}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4" style={{"fontFamily": "inter-ExtraBold"}}>Amusan Toluwanimi</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4" style={{"fontFamily": "inter-Medium"}}>Engineering Lead</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={banjo}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4" style={{"fontFamily": "inter-ExtraBold"}}>Banjo Ogunleye Sh..</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4" style={{"fontFamily": "inter-Medium"}}>Content developer Lead</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={boluwatife} className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4" style={{"fontFamily": "inter-ExtraBold"}}>Boluwatife Akinade</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4" style={{"fontFamily": "inter-Medium"}}>Product Design  Lead</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={shoyemi}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4 " style={{"fontFamily": "inter-ExtraBold"}}>Shoyemi Samuel</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4" style={{"fontFamily": "inter-Medium"}}>Engineering</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={gbogo}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4" style={{"fontFamily": "inter-ExtraBold"}}>Babalola Gbogo</h2>
                   <h3  className="text-xl font-semibold w-full text-left pl-4" style={{"fontFamily": "inter-Medium"}}>Engineering</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={moranti}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4" style={{"fontFamily": "inter-ExtraBold"}}>Moranti Success</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4 " style={{"fontFamily": "inter-Medium"}}>Content developer</h3>
               </div>
               <div>
                   <img src={okpe}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4" style={{"fontFamily": "inter-ExtraBold"}}>Okpe Destiny </h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4" style={{"fontFamily": "inter-Medium"}}>Designer</h3>
               </div>
               <div className="flex flex-col items-center">
                   <img src={ikuejawa}  className = "w-full mb-4"/>
                   <h2 className="text-3xl font-bold text-brand_secondary w-full text-left mb-4 pl-4" style={{"fontFamily": "inter-ExtraBold"}}>Ikuejawa Gabriel</h2>
                   <h3 className="text-xl font-semibold w-full text-left pl-4" style={{"fontFamily": "inter-Medium"}}>Engineering</h3>
               </div>
           </div>
    </div>
    )
}


export default Team