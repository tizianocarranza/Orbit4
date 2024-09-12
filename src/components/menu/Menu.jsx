import React, { useState } from 'react'
import "./menu.css"
import { PiRocketLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";



function Menu() {
    const [ activeIndex, setActiveIndex ] = useState(0);

    const buttons = [<GoHome key="home"/>, <PiRocketLight key="rockets"/>, <IoBookOutline key="us"/>];

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    return (
        
        <div className="menu fade-in-out">
            {
                buttons.map((button, index) => (
                    <li 
                        key={index}
                        className={`menu__button ${activeIndex === index ? "active" : "inactive"}`}
                        onClick={() => handleClick(index)}
                    >
                        {button}
                    </li>
                ))
            }
        </div>
    )
}

export default Menu