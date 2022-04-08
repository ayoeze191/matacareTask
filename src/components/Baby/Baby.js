import React from "react";
import Quotebg from "./../../Assets/Quotebg.svg"

const Baby = () => {
    return(
        <div className="bg-group2  w-full bg-cover mx-auto relative h-60 " style={{"fontFamily": "inter-Regular"}}>
        <div className="w-full h-full before:bg-black before:opacity-50 before:h-full before:w-full  before:block before:content-[''] before:absolute before:mx-auto flex flex-col items-center justify-center p-4">
            <p className="text-white text-center z-10 mb-11 ">Loving a baby is a acircular business, a kind of feedback
                <br/>
        loop the more you give the more you get and the mor you get the more you feel like giving </p>
        <p className="text-white z-10" style={{"fontFamily": "inter-light"}}>-Penelope Leach</p>
        </div>
        </div>
    )
}

export default Baby