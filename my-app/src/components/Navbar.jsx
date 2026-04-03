import React, { useEffect } from 'react'
import menu from '../assets/menu.svg'
import {X} from "lucide-react";
import {useState} from "react";
import logoMobile from '../assets/logoMobile.svg'
import { navItems } from "../Constant";
import { Link } from 'react-router-dom';
import GetStartedBtn from './UI/GetStartedBtn';
import LoginBtn from './UI/LoginBtn';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";




const Navbar = ({ user }) => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    useEffect(() => {
    const handleScroll = () => {
      setMobileDrawerOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav className=' bg-neutral-900 py-5 px-4 lg:py-3.5 lg:px-20  2xl:max-w-380 2xl:mx-auto 4xl:max-w-7xl 4xl:mx-auto'>
        <div className='flex justify-between items-center'>
            <div className='flex '>
                <img src={logoMobile} alt="company logo" className='w-20 lg:w-30' />
               
            </div>

            <ul className='hidden lg:flex ml-14 space-x-12'>
                {navItems.map((item, index)=> (
                    <li  key={index} className="hover:bg-black py-3.5 px-5 rounded-md hover:border border-neutral-700 ">
                         <Link to={item.to}>{item.label}</Link>
                    </li>

                ))}
            </ul>

           <div className="hidden lg:flex gap-1.5">
                {user ? (
                    <button
                    onClick={() => signOut(auth)}
                    className="rounded-md border border-neutral-700 bg-black py-3.5 px-5 hover:bg-neutral-800"
                    >
                    Log out
                    </button>
                ) : (
                    <>
                    <LoginBtn />
                    <GetStartedBtn />
                    </>
                )}
            </div>


            <div className='lg:hidden'>
                <button onClick={toggleNavbar} className='sticky top-6 right-6 z-30'> 
                    {mobileDrawerOpen ?<X/> : <img src={menu} alt='menu'/>}
                </button>
                
            </div>

             {mobileDrawerOpen &&  (
                    <div className=" fixed bg-black/60 top-0 right-0 z-20  backdrop-blur-sm p-12 w-full  flex flex-col justify-center items-center lg:hidden">
                       <ul>
                         {navItems.map((item, index) => (
                            <li key={index} className="py-4 list-none">
                                <Link to={item.to}  onClick={() => setMobileDrawerOpen(false)}>
                                {item.label}
                                </Link>
                            </li>
                            ))}
                       </ul>
                       <div className="">
                          <div className="flex gap-1.5">
                            {user ? (
                                <button
                                onClick={() => signOut(auth)}
                                className="rounded-md border border-neutral-700 bg-black py-3.5 px-5 hover:bg-neutral-800"
                                >
                                Log out
                                </button>
                            ) : (
                                <>
                                <LoginBtn />
                                <GetStartedBtn />
                                </>
                            )}
                        </div>


                    
                       </div>
                    </div>
                )}


        </div>
    </nav>
   
  )
}

export default Navbar;