import React from "react";

import Header from "./Header/Header";
import HeaderDescription from "../HeaderDescription/HeaderDescription";
const Hero = () => {
    return(
        <div className="py-10 px-5 md:px-10 w-full flex flex-col gap-14 bg-header_background pb-0 md:h-fit hero">
        <Header />
        <HeaderDescription />
        </div>
    )
}

export default Hero



