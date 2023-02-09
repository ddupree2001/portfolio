import React, {useState, useEffect} from 'react'
import astro from '../assets/astro+stars.png'
import {AiOutlineInstagram, AiOutlineGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Header = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Full Stack Developer", "UI/UX Designer" ];
    const period = 1500;

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
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
    }
     

  return (
    <div className="flex justify-between items-center mt-[40px] gap-x-10">
        <div className="">
            <div className="flex items-center gap-x-4">
                <div className="bg-white w-[98px] h-[2px]"></div>
                <AiOutlineInstagram size={27} />
                <FaLinkedinIn size={27} />
                <AiOutlineGithub size={27} />
            </div>
            <div className="h-[10rem]">
                <h1 className="text-[3rem] font-bold mt-[80px] h-max">{`Hi! I'm DeVon - `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
            </div>
            {/* <button className="bg-transparent border-2 px-[15px] py-[10px] rounded-[10px] text-[1.125rem] shadow-[0_4px_4px_#ffffff]">
                <a href="/">Contact Me</a>
            </button> */}
        </div>
        <img src={astro} alt="" />
    </div>
  )
}

export default Header