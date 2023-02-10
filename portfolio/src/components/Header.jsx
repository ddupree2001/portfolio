import React, {useState, useEffect} from 'react'
import astro from '../assets/astro+stars.png'
import {AiOutlineInstagram, AiOutlineGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Header = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Student Athlete", "Full Stack Developer", "UI/UX Designer" ];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(150);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(1500);
        } else if (isDeleting && updatedText === '') {
          setDelta(150);
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
    }
     

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-[40px] gap-x-10">
        <div className="w-full md:w-1/2">
            <div className="flex items-center gap-x-4">
                <div className="bg-white w-[98px] h-[2px]"></div>
                <a href="https://www.instagram.com/devon_dupree01/" target="_blank"><AiOutlineInstagram size={27} /></a>
                <a href="https://www.linkedin.com/in/devon-dupree-973471168/" target="_blank"><FaLinkedinIn size={27} /></a>
                <a href="https://github.com/ddupree2001" target="_blank"><AiOutlineGithub size={27} /></a>
            </div>
            <div className="h-[10rem]">
                <h1 className="text-[2.25rem] sm:text-[3rem] font-bold mt-[80px] h-max">{`Hi! I'm DeVon - `} <span className="txt-rotate" data-rotate='[ "Student Athlete", "Full Stack Developer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
            </div>
        </div>
        <img src={astro} alt="" className="w-2/3 md:w-1/2 place-self-center mt-0 sm:mt-[-30px] md:mt-0"/>
    </div>
  )
}

export default Header