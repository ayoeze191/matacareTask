import React from "react";
import Location from "./../../Assets/Location.png";
import Email from "./../../Assets/Email.png";
import phone from "./../../Assets/phone.png";
import Twitter from "./../../Assets/Twitter.png";
import Facebook from "./../../Assets/Facebook.png";
import Instagram from "./../../Assets/Instagram.png";

const Contact = (props) => {
  return (
    <div className="pt-20 px-5 lg:px-10 pb-5" ref={props.pass} id = "Contact">
      <div className="w-fit mx-auto">
        <h1 className="text-3xl font-bold text-brand_secondary after:block after:content-[''] after:bg-black after:h-1 after:mx-auto after:w-10 after:mt-1 mb-5 text-center" style={{"fontFamily": "inter-ExtraBold"}}>
          Contact
        </h1>
      </div>
      <h1 className="mx-auto mb-16 text-brand_secondary text-4xl  w-fit font-extrabold text-center" style={{"fontFamily": "inter-Black"}}>
        Where You Can Reach Us
      </h1>

      <div className="flex justify-between mb-16 flex-col lg:flex-row">
        <div className="flex flex-col flex-0.4">
          <h3 className="flex mb-10 flex-col lg:flex-row items-center text-center md:text-left">
            <div className="mr-4 h-full flex items-start">
              {" "}
              <img src={Location} />
            </div>
            Federal University Of Technology Akure(FUTA),
            <br />
            Botanical Garden Obanla, Akure Ondo State Nigeria.
          </h3>
          <h3 className="flex mb-10 flex-col lg:flex-row items-center text-center">
            {" "}
            <div className="mr-4">
              {" "}
              <img src={phone} />
            </div>
            +234-901-234-5678
          </h3>
          <h3 className="flex mb-10  flex-col lg:flex-row items-center text-center">
            {" "}
            <div className="mr-4">
              {" "}
              <img src={Email} />
            </div>
            info@matacare.com
          </h3>
          <div className="flex justify-evenly w-1/3 lg:justify-between mx-auto lg:mx-0">
            <div className="mr-4">
              <img src={Twitter} />
            </div>
            <div>
              <img src={Facebook} />
            </div>
            <div>
              <img src={Instagram} />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-10 flex-col lg:flex-row mt-20 lg:mt-0">
            <div className="flex-1 lg:mr-5 flex justify-center lg:justify-start pb-8 lg:pb-0">
              <input
                type="userame"
                placeholder="Your Full Name"
                className="bg-area w-4/5 py-2 pl-4 border-none outline-none rounded-md"
              />
            </div>
            <div className="flex-1 flex lg:justify-end justify-center">
              <input
                type="Email"
                placeholder="Your Email Address"
                className="bg-area w-4/5 py-2 pl-4 border-none outline-none rounded-md"
              />
            </div>
          </div>
          <div className="flex-1 mb-10">
            <textarea
              name="message"
              cols="20"
              rows="10"
              className="bg-area w-full pt-4 pl-4 text-base border-none outline-none"
            >
              Your Message
            </textarea>
          </div>
          <button className="bg-waiting_list w-full py-3 text-white font-semibold text-sm">
            Join The Waiting List
          </button>
        </div>
      </div>
      <h3 className="text-xl w-full text-center" style={{"fontFamily": "inter-Medium"}}>
        © Copyright <span className="font-bold">MataCare 2021</span>. All Rights Reserved
      </h3>
    </div>
  );
};

export default Contact;
