import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
const NAvBar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard', private: true },
      ];
      
    return (
        <nav className="text-black bg-lime-200 p-5">
           <div onClick={()=> setOpen(!open)} className="md:hidden text-3xl ">
            {
                open === true? 
                <IoClose></IoClose> 
                : <AiOutlineMenu ></AiOutlineMenu>
            }
           
           </div>
           <ul className={`md:flex absolute
           duration-1000 md:static
           ${ open? 'top-12' :'-top-60'}
           
           
           bg-lime-200 px-5`}>
           {
                routes.map(route=><Link key={route.id}route={route}></Link> )
            }
           </ul>
        </nav>
    );
};

export default NAvBar;