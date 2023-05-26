import React, { useState, useEffect } from 'react'
import gpt3 from '../assets/projects/gpt3.png'
import gericht from '../assets/projects/gericht.png'
import hoobank from '../assets/projects/hoobank.png'
import shoplift from '../assets/projects/shoplift.png'
import mginvestments from '../assets/projects/mginvestments.png'
import inthemaking from '../assets/projects/inthemaking.png'
import ecommerce from '../assets/projects/ecommerce.png'
import dalle from '../assets/projects/dalle.png'

const Carousel = () => {

    const [data, setData] = useState([
        {
            id: 1,
            pos: 1,
            active: true,
            image: gpt3,
            link: "https://gpt3-eosin.vercel.app/"
        },
        {
            
            id: 2,
            pos: 2,
            active: true,
            image: gericht,
            link: "https://gericho-restaurant.vercel.app/" 
        },
        {
            
            id: 3,
            pos: 3,
            active: false,
            image: hoobank,
            link: "https://hoobank-steel.vercel.app/" 
        },
        {
            
            id: 4,
            pos: 4,
            active: false,
            image: shoplift,
            link: "https://shoplift.vercel.app/" 
        },
        {
            
            id: 5,
            pos: 5,
            active: false,
            image: mginvestments,
            link: "https://mginvestments.vercel.app/" 
        },
        {
            
            id: 6,
            pos: 6,
            active: false,
            image: inthemaking,
            link: "https://inthemaking.vercel.app/" 
        },
        {
            
            id: 7,
            pos: 7,
            active: false,
            image: ecommerce,
            link: "https://ecommerce-two-nu-36.vercel.app/" 
        },
        {
            
            id: 8,
            pos: 8,
            active: false,
            image: dalle,
            link: "https://dalle-clone-livid.vercel.app/" 
        },
    ])

    return (
        <div className="section grid place-items-center">
            <div className="slider">
                <div className="slide-track">
                    {data.map((item, index) => (
                        <a href={item.link} target="_blank" className="slide text-[#F3F3F3] cursor-pointer" key={index}>
                            <img src={item.image} className="h-[100px] sm:h-[275px]" />
                            {/* <p className="text-[1.125rem] sm:text-[2rem] font-light font-roboto mt-5 sm:mt-10">{item.title}</p>
                            <p className="flex items-center gap-x-2 text-[0.875rem] font-medium font-roboto cursor-pointer">Read more <span><img src={rightArrow} /></span></p> */}
                        </a>
                    ))}
                    {data.map((item, index) => (
                        <a href={item.link} target="_blank" className="slide text-[#F3F3F3] cursor-pointer" key={index}>
                            <img src={item.image} className="h-[100px] sm:h-[275px]" />
                            {/* <p className="text-[1.125rem] sm:text-[2rem] font-light font-roboto mt-5 sm:mt-10">{item.title}</p>
                            <p className="flex items-center gap-x-2 text-[0.875rem] font-medium font-roboto cursor-pointer">Read more <span><img src={rightArrow} /></span></p> */}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel