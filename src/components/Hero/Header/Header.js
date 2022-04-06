import React from 'react'
import Logomatacare from './../../../Assets/Logomatacare.svg'
import navBar from './../../../Assets/navBar.svg'



const Header = () => {
    return(
    <div className="flex justify-between ">
        <div className='flex items-center'><img src={Logomatacare} /></div>
        <div className='hidden lg:block'>
            <ul className=' text-center items-center h-full flex'>
                <li className='mr-4 sm:mr-8 lg:mr-12'>Home</li>
                <li className='mr-4 sm:mr-8 lg:mr-12'>Features</li>
                <li className='mr-4 sm:mr-8 lg:mr-12'>About Us</li>
                <li className='mr-4 sm:mr-8 lg:mr-12'>Team</li>
                <li className='mr-4 sm:mr-8 lg:mr-12'>Contacts</li>
            </ul>
            
        </div>
        
        <div className='flex gap-4 items-center'>
        <button className="bg-waiting_list px-4 sm:py-2 sm:px-6 rounded-md order-2">Waiting List</button>
        <img src={navBar}  className = "h-4 w-5 md:hidden"/>
        </div>
    </div>
    )
}

export default Header