import React from "react";


const Eager = () => {
    return (
        <div className="flex py-10 md:px-16 w-full bg-header_description justify-between lg:pr-64  mt-24 flex-col md:flex-row items-center">
            <h3 className="text-3xl font-bold text-white mb-6 md:mb-0 text-center" style={{"fontFamily": "inter-Regular"}}>Eager  to see the product</h3>
            <button className="bg-waiting_list py-4 px-6 rounded-md order-2 text-white" style={{"fontFamily": "inter-Medium"}}>Join the waiting list</button>
        </div>
    )
}

export default Eager