import React from 'react'
import me from '../assets/me.png'

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[100px] gap-10 mx-[50px]" id="about">
        <div className="w-1/2 md:w-1/3">
            <img src={me} alt="DeVon DuPree" className=""/>
        </div>
        <div className="w-full md:w-2/3">
            <h1 className="font-bold text-[1.5rem] sm:text-[2.25rem]">About Me</h1>
            <p className="text-[1.125rem] sm:text-[1.5rem] mt-[20px]">I am a full-stack web developer with a passion for creating amazing user experiences and bringing innovative ideas to life. Equipped with skills in multiple programming languages and a deep understanding of both front-end and back-end development, I am ready to tackle any web development challenge. I am experienced in agile methodologies and always seeking new opportunities to expand my skillset. I am eager to work with a dynamic and forward-thinking company where I can continue to grow and make a meaningful impact through my work. As a passionate developer, I am committed to bringing my expertise and attention to detail to every project I work on.</p>
        </div>
    </div>
  )
}

export default About