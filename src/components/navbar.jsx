import { useState } from "react";
import  { vshojo } from "../assets/svg/index"
import '@fontsource-variable/montserrat';
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "../styles"

const Navbar = () => {
    
    return(
        <nav className="w-full flex justify-between items-center text-Vpink m-0 mx-auto mb-20 font-mont z-10">
            <div className={`${styles.margin}`}></div>
            <img src={vshojo} className="h-[3.5rem]"/>
            <div className={`${styles.spacer}`}></div>
            <div className={`${styles.padding}`}></div>
            <div className="hidden sm:block">
                <a href="">Home</a>
            </div>
            <div className={`${styles.padding}`}></div>
            <div className="hidden sm:block">
                <a href="">About</a>
            </div>
            <div className={`${styles.padding}`}></div>
            <div className="hidden sm:block">
                <a href="">Talent</a>
            </div>
            <div className={`${styles.padding}`}></div>
            <div className="hidden sm:block">
                <a href="">Merch</a>
            </div>
            <div className={`${styles.padding}`}></div>
            <div className="relative font-semibold py-[.25rem] px-[.35rem] border border-solid border-Vpink rounded-[.25rem] uppercase group hidden sm:block">
                <span>en <IoMdArrowDropdown className="inline-block transform transition-transform duration-300 ease group-hover:rotate-180 ml-[.5rem] mb-[.1rem]"/></span>
                <div className={`absolute text-center rounded-b-[.25rem] -left-[1px] -right-[1px] bg-Vpink ${styles.langSelectdrop} group-hover:scale-y-[1]`}>
                    <span className="block m-[.5rem] text-white"><a href="" className="hover:underline">en</a></span>
                    <span className="block m-[.5rem] text-white"><a href="" className="hover:underline">jp</a></span>
                </div>
            </div>
            <div class="group">
                <a href="" class="drop-btn ml-[3px] mr-[3px] inline-block text-[1.125rem] font-bold drop-shadow-custom group-hover:drop-shadow-custom-x1">
                    <div class="inline-block overflow-hidden rounded-[.25rem] border border-solid border-black bg-[#F50F75]">
                        <div class="grid h-[3rem] w-[3rem] place-items-center">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="undefined astro-XNOXSESQ" width="30" height="30" viewBox="0 0 24 24" role="img">
                            <title>menu</title>
                            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" class="astro-XNOXSESQ"></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
            <div className={`${styles.margin}`}></div>
        </nav>
    )
}

export default Navbar;