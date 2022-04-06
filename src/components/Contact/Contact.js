import React from "react";


const Contact = () => {
    return (
        <div className="pt-20">
            <div className="w-fit mx-auto">
           <h1 className="text-3xl font-bold text-brand_secondary after:block after:content-[''] after:bg-black after:h-1 after:mx-auto after:w-10 after:mt-1 mb-5">Contact</h1>
           </div>  
            <h1 className="mx-auto mb-10 text-brand_secondary text-4xl  w-fit font-extrabold">Where You Can Reach Us</h1>

            <div className="flex">
                <div>
                    <h3>Federal University Of Technology Akure(FUTA),
                         Botanical Garden Obanla, Akure Ondo State Nigeria.</h3>
                         <h3>+234-901-234-5678</h3>
                         <h3>info@matacare.com</h3>
                         <div><div>image 1</div><div>image 2</div><div>image 3</div></div>
                </div>
                <div>
                    <div>
                    <input type="userame" placeholder="Your Full Name"/> 
                    <input type="Email" placeholder="Your Email Address"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Your Message"/>
                    </div>
                    <button>
                    Join The Waiting List
                    </button>
                </div>
            </div>
        </div>
    )
}   


export default Contact