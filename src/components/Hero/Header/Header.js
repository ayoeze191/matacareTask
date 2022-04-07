import React from 'react'
import Logomatacare from './../../../Assets/Logomatacare.svg'
import navBar from './../../../Assets/navBar.svg'



const Header = (props) => {
 
    return(
    <div className="flex justify-between mb-14">
        <div className='flex items-center'><img src={Logomatacare} /></div>
        <div className='hidden lg:block'>
            <ul className=' text-center items-center h-full flex' style={{"fontFamily": "inter-Medium"}}>
                <li className={props.home?"mr-4 sm:mr-8 lg:mr-12 bg-red-500 hover:cursor-pointer":"mr-4 sm:mr-8 lg:mr-12 hover:cursor-pointer"}>Home</li>
                <li className='mr-4 sm:mr-8 lg:mr-12 hover:cursor-pointer'>Features</li>
                <li className='mr-4 sm:mr-8 lg:mr-12 hover:cursor-pointer'>About Us</li>
                <li className='mr-4 sm:mr-8 lg:mr-12 hover:cursor-pointer'>Team</li>
                <li className='mr-4 sm:mr-8 lg:mr-12 hover:cursor-pointer'>Contacts</li>
            </ul>
            
        </div>
        
        <div className='flex gap-4 items-center'>
        <button className="bg-waiting_list px-4 sm:py-2 sm:px-6 rounded-md order-2" style={{"fontFamily": "inter-Medium"}}>Waiting List</button>
        <img src={navBar}  className = "h-4 w-5 md:hidden"/>
        </div>
    </div>
    )
}

export default Header