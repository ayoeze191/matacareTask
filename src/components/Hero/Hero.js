import React from "react";

import Header from "./Header/Header";
import HeaderDescription from "../HeaderDescription/HeaderDescription";
const Hero = (props) => {
    console.log(props.home)
    return(
        <div className="py-10 px-5 md:px-10 w-full flex flex-col bg-header_background pb-0 md:h-fit hero" ref={props.pass}>
        <Header {...props}/>
        <HeaderDescription />
        </div>
    )
}

export default Hero



