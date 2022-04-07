import React from "react";

import Header from "./Header/Header";
import HeaderDescription from "../HeaderDescription/HeaderDescription";
import Ellipse from "../../Assets/Ellipse.png"
import Ellipse2 from "../../Assets/Ellipse2.png"


const Hero = (props) => {
    console.log(props.home)
    return(
        <div className="py-10 px-5 md:px-10 w-full flex flex-col bg-header_background pb-0 md:h-fit hero overflow-hidden " ref={props.pass} id = "Hero">
            {/* <div className="absolute -z-50"><img src={Ellipse} /></div> */}
            {/* <div className="absolute -z-50"><img src={Ellipse2} /></div> */}
        <Header {...props}/>
        <HeaderDescription />
        </div>
    )
}

export default Hero



