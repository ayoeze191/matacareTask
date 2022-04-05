import React from 'react'
import Logomatacare from './../../../Assets/Logomatacare.svg'
import navBar from './../../../Assets/navBar.svg'



const Header = () => {
    return(
    <div className="flex justify-between">
        <div className='flex items-center'><img src={Logomatacare} /></div>
        <div className='hidden md:block'>
            <ul className='gap-12 text-center items-center h-full flex'>
                <li>Home</li>
                <li>Features</li>
                <li>About Us</li>
                <li>Team</li>
                <li>Contacts</li>
            </ul>
            
        </div>
        
        <div className='flex gap-4 items-center'>
        <button className="bg-waiting_list py-2 px-6 rounded-md order-2">Waiting List</button>
        <img src={navBar}  className = "h-4 w-5 md:hidden"/>
        </div>
    </div>
    )
}

export default Header