import React from "react";
import FamilyPicx from "./../../Assets/FamilyPicx.png"
import familyCircle from "./../../Assets/familyCircle.svg"
const Family = () => {
    return (
        <div className="w-full mt-24 md:mt-auto">
            <div className="w-4/5 mx-auto">
               
                <img src={familyCircle} className = "relative w-fit float-right hidden md:flex" style={{top: "70px"}}/>
               
            <div className="w-full h-full">
                <img src={FamilyPicx} className = "w-full h-full" />
            </div>
            </div>
        </div>
    )
}
export default Family