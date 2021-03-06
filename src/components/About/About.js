import React from "react";

const About = (props) => {
    return (
        <div className="pt-20 w-4/5 mx-auto md:w-full md:px-8" ref={props.pass}>      
              <div className="w-fit mx-auto">
           <h1 className="text-3xl font-bold text-brand_secondary after:block after:content-[''] after:bg-black after:h-1 after:mx-auto after:w-10 after:mt-1 mb-5" style={{"fontFamily": "inter-ExtraBold"}} id = "About">About Us</h1>
           </div>  
            <h1 className="mx-auto mb-10 text-brand_secondary text-4xl  w-fit font-extrabold text-center" style={{"fontFamily": "inter-Black"}}>Who We are at MataCare</h1>

            <div className="text-center max-w-4xl mx-auto text-header_text" style={{"fontFamily": "inter-Medium"}}>
                Matacare is a healthtech company that serves as a abridge between a community of medical experts, consultants,
                nutritionist and pregnanat women/early mothers. At MataCare, we believe that child care starts right from conseption, we care for the child even before  it's born.
                we are a group of young, tech-savvy and intellectual minds whose passion for the fetal an pregnant women community has driven us to create an outstanding product that will help grow healthy,
                wel nourished and all-round happy pregnant women with comfort.
            </div>
        </div>
    )
}


export default About