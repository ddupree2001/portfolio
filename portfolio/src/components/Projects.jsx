import React from 'react'
import {Carousel} from '../components'

const Projects = () => {
    return (
        <div className="relative flex flex-col items-center mt-[150px]" id="projects">
            <h1 className="font-bold text-[1.5rem] sm:text-[2.25rem] text-center mb-[10px] sm:mb-[50px]">Projects</h1>
            <Carousel />
        </div>
    )
}

export default Projects