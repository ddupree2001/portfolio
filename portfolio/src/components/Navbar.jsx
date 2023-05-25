import React, {useState} from 'react'
import {IoRocket} from 'react-icons/io5'

const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-between items-center text-white">
        <a href="/"><h1 className="font-black text-[1.5rem] sm:text-[2.25rem]">DDUPREE2001</h1></a>
        <div className="hidden lg:flex justify-between items-center w-[528px]">
            <a href="#about">
                <p className="text-[1.25rem]">About</p>
            </a>
            <a href="#skills">
                <p className="text-[1.25rem]">Skills</p>
            </a>
            <a href="#projects">
                <p className="text-[1.25rem]">Projects</p>
            </a>
            <button className="bg-transparent border-2 px-[15px] py-[10px] rounded-[10px] text-[1.125rem] shadow-[0_4px_4px_#ffffff]" href="/">
                <a href="#contact">Let's Connect</a>
            </button>
        </div>
        <div className="block lg:hidden relative">
            <IoRocket className="text-[1.5rem] sm:text-[2.25rem] lg:hidden cursor-pointer" onClick={() => setOpen(!open)}/>
            {open && (
                <div className="absolute top-[50px] right-0 bg-[#1F1F1F] w-[200px] h-[200px] rounded-[10px] shadow-[0_4px_4px_#ffffff]">
                    <div className="flex flex-col justify-between px-[20px] py-[15px] h-full">
                        <a href="#about" onClick={() => setOpen(false)}>
                            <p className="text-[1rem]">About</p>
                        </a>
                        <a href="#skills" onClick={() => setOpen(false)}>
                            <p className="text-[1rem]">Skills</p>
                        </a>
                        <a href="#projects" onClick={() => setOpen(false)}>
                            <p className="text-[1rem]">Projects</p>
                        </a>
                        <button className="bg-transparent border-2 px-[15px] py-[10px] rounded-[10px] text-[0.875rem] shadow-[0_4px_4px_#ffffff]">
                            <a href="#contact" onClick={() => setOpen(false)}>Let's Connect</a>
                        </button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar