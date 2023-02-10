import React, {useState} from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import react_icon from '../assets/react.png'
import stack from '../assets/stack.png'
import server from '../assets/server.png'
import design from '../assets/design.png'
import git from '../assets/git.png'
import management from '../assets/management.png'
import languages from '../assets/languages.png'
import medal from '../assets/medal.png'


const Skills = () => {

    const [curr, setCurr] = useState(0)
    const [menu, setMenu] = useState(false)

    const prev = () => {
        if(window.innerWidth < 640) {
            setCurr((curr) => (curr === 0 ? categories.length - 1 : curr - 1))
        } else if(window.innerWidth < 1024) {
            setCurr((curr) => (curr === 0 ? categories.length - 2 : curr - 1))
        } else {
            setCurr((curr) => (curr === 0 ? categories.length - 3 : curr - 1))
        }
    }
    const next = () => {
        if(window.innerWidth < 640) {
            setCurr((curr) => (curr === categories.length - 1 ? 0 : curr + 1))
        } else if(window.innerWidth < 1024) {
            setCurr((curr) => (curr === categories.length - 2 ? 0 : curr + 1))
        } else {
            setCurr((curr) => (curr === categories.length - 3 ? 0 : curr + 1))
        }
    }

    const categories = [
        {
            icon: react_icon,
            name: "Front-End",
            description: "Experience with HTML, CSS, Javascript, React JS, Next JS, Tailwind CSS, Bootstrap 5, Typescript, Dart, and Flutter",
        },
        {
            icon: stack,
            name: "Back-End",
            description: "Experience with SQL, MySQL, Node.js, MongoDB, Sanity, and Firebase"
        },
        {
            icon: server,
            name: "Server-Side",
            description: "Experience with SQL, MySQL, Node.js, MongoDB, Sanity, and Firebase"
        },
        {
            icon: design,
            name: "UI/UX",
            description: "Experience with SQL, MySQL, Node.js, MongoDB, Sanity, and Firebase"
        },
        {
            icon: git,
            name: "Version Control",
            description: "Experience with SQL, MySQL, Node.js, MongoDB, Sanity, and Firebase"
        },
        {
            icon: management,
            name: "Project Management",
            description: "Experience with SQL, MySQL, Node.js, MongoDB, Sanity, and Firebase"
        },
        {
            icon: languages,
            name: "Languages",
            description: "Experience with SQL, MySQL, Node.js, MongoDB, Sanity, and Firebase"
        },
        {
            icon: medal,
            name: "Other Skills",
            description: "Experience with SQL, MySQL, Node.js, MongoDB, Sanity, and Firebase"
        }
    ]


  return (
    <div className="relative flex justify-center mt-[150px]" id="skills">
        <div className="relative rounded-[50px] w-[80vw] md:w-[70vw] max-w-[1200px] flex overflow-x-hidden overflow-y-auto bg-gradient-to-b from-[#32C4D8] to-transparent">
            {categories.map((category, index) => (
                <div className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%]  py-10 px-16 transition-transform ease-out duration-500" style={{transform: `translateX(-${curr*100}%)`}} key={index}>
                    <img src={category.icon} />
                    <p className="text-[1.25rem] sm:text-[1.5rem] font-bold mb-[2vh]">{category.name}</p>
                    <p className="text-[1.125rem] sm:text-[1rem] pb-8">{category.description}</p>
                </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-between">
            <button onClick={prev}>
                <AiOutlineLeft size={40} color="white" />
            </button>
            <button onClick={next}>
                <AiOutlineRight size={40} color="white"/>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Skills