import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Btn1 from './button/Btn1'
import notsignin from "./../assets/icons/notsignin.png"
const Navbar = () => {

    const [isSliderMenu , setSliderMenu] =  useState(false)
    const location = window.location

    useEffect(() => {
        const handleScroll = () => {
          const nav = document.getElementById("navbar-inner-section");

          if (!nav) return; // Prevents error if element not found

          if (window.scrollY > 0 || location.pathname !== "/" || window.innerWidth <= 800) {
            nav.classList.add("scrolled");
          } else {
            nav.classList.remove("scrolled");
          }
        };

        window.addEventListener("scroll", handleScroll);

        // Initial check in case user loads mid-scroll
        handleScroll();

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


  return (

    <nav className='w-[100%] transition-all duration-400  font-[var(--fw-semibold)]'> 
        <section id='navbar-inner-section' className=' '>
             <div  className='  transition-all  max-w-[1380px] w-[100%] p-1 md:p-4  mx-auto flex items-center   justify-between text-[var(--text-btn-color)] '>
              <div className="logo-container">
                      <img className='h-[50px]' src="https://i.pinimg.com/736x/24/a9/a2/24a9a23b35abe862d872638b5ed65a94.jpg" alt="logo" />
              </div>

              <div className="navlinks hidden  md:flex " >
                  <Link  id='home' className='p-2'>Home</Link>
                  <Link id='rental' className='p-2'>Rentals</Link>
                  <Link   id='about' className='p-2'>About Us</Link>
                  <Link id='location' className='p-2'>Locations</Link>
                  <Link id='blog' className='p-2'>Blogs</Link>
              </div>

              <div className="call-to-action-btns  flex gap-x-4 w-fit">
                  <Btn1><img title='sign-In' className='h-5 inline' src={notsignin} alt="signIn"  /> <span >!</span></Btn1>
                  {/* <button className='py-2 px-5 rounded-[var(--button-radius)] bg-[var(--bg-btn-color)]'>Sign In</button> */}
                  <button className='p-2 ' onClick={()=>setSliderMenu((prev)=> !prev)}>Menu</button>
              </div>
          </div>
        </section>

        {/* slider menu with z-index this one has to be set as an overlay//bg-[var(--bg-secondary-color)] */}
        {isSliderMenu && 
            <nav className='h-dvh w-full inset-0  bg-black/30 absolute z-[5] overflow-x-hidden'>  
                        <div className={`relative z-[6] w-[300px] bg-[var(--bg-secondary-color)] p-5 h-full left-full flex flex-col duration-500 ${isSliderMenu ? "-translate-x-full transition-all " : "translate-x-0"}`}>
                                <button onClick={()=>setSliderMenu((prev)=> !prev)} className='self-end hover:cursor-pointer'm>X</button>
                                <Link  onClick={()=>setSliderMenu((prev)=> !prev)} className='p-2'>Home</Link>
                                <Link  onClick={()=>setSliderMenu((prev)=> !prev)} className='p-2'>Rentals</Link>
                                <Link onClick={()=>setSliderMenu((prev)=> !prev)}  className='p-2'>About Us</Link> 
                                <Link onClick={()=>setSliderMenu((prev)=> !prev)}  className='p-2'>Locations</Link>
                                <Link  onClick={()=>setSliderMenu((prev)=> !prev)} className='p-2'>Blogs</Link>
                                <Btn1>Sign-in now</Btn1>
                        </div>

                       
            </nav>
        }

    </nav>

  )
}

export default Navbar
