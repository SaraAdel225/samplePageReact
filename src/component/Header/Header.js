import React, { useState } from "react"
import logo from "../img/logo.png"
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import OutsideclickHandler from "react-outside-click-handler"
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyle = (menuOpened) =>{
        if(document.documentElement.clientWidth <= 980){
            return {right: !menuOpened && "-100%"}
        }
    }
    return(
        <div className="header flexBetween">
            <div className = "container">
                <img src={logo} alt="" />
                <OutsideclickHandler
                onOutsideClick={()=>{
                    setMenuOpened(false)
                }}>
                <ul className="HeaderList flexBetween"  style={getMenuStyle(menuOpened)}>
                    <li><a href="#residencies">Residencies</a></li>
                    <li><a href="#value">Our Value</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#get">Get Started</a></li>
                    <li><button className = "button">Contact</button></li>
                </ul>
                </OutsideclickHandler>
                <div className="list" onClick = {()=> setMenuOpened((prev) => !prev)}>
                <FontAwesomeIcon icon={faListCheck} />
                </div>
            </div>
        </div>
    )
}
export default Header;