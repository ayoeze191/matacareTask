import React from 'react'
import Logomatacare from './../../../Assets/Logomatacare.svg'
import navBar from './../../../Assets/navBar.svg'



const Header = (props) => {
 
    return(
    <div className="flex justify-between mb-14">
        <div className='flex items-center w-24 lg:w-44'><img src={Logomatacare} className = "w-full"/></div>
        <div className='hidden lg:block'>
            <ul className=' text-center items-center h-full flex' style={{"fontFamily": "inter-Medium"}}>
                <li className={props.home?"mr-4 sm:mr-8 lg:mr-12 after:block after:content-[''] after:bg-black after:h-2 after:mx-auto after:w-2 after:rounded-full hover:cursor-pointer":"mr-4 sm:mr-8 lg:mr-12 hover:cursor-pointer"}><a href = "#Hero">Home</a></li>
                <li className='mr-4 sm:mr-8 lg:mr-12 hover:cursor-pointer'><a href = "#Feature" >Features</a></li>
                <li className='mr-4 sm:mr-8 lg:mr-12 hover:cursor-pointer'><a href='#About'>About Us</a></li>
                <li className='mr-4 sm:mr-8 lg:mr-12 hover:cursor-pointer'><a href="#Team">Team</a></li>
                <li className='mr-4 sm:mr-8 lg:mr-12 hover:cursor-pointer'><a href = "#Contact">Contacts</a></li>
            </ul>
           </div>
        
        <div className='flex items-center'>
        <button className="bg-waiting_list py-2 px-6 rounded-md order-2 text-xs sm:text-sm text-white" style={{"fontFamily": "inter-Medium"}}>Waiting List</button>
        <img src={navBar}  className = "h-4 w-5 lg:hidden mr-2 sm:mr-4"/>
        </div>
    </div>
    )
}

export default Header