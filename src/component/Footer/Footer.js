import React from "react";
import "./Footer.css"
import logoImg from "../img/logo2.png"
const Footer = ()=>{
    return(
        <div className="footer">
            <div className="container flexBetween">
                <div className="leftDiv">
                    <img src={logoImg} alt=""/>
                    <p>Our vision is to make all people <br/>the best place to live for them.</p>
                </div>
                <div className="rightDiv">
                    <h2>information</h2>
                    <p>145 New York, Fl 5467, USA</p>
                    <ul>
                        <li>Property</li>
                        <li>Services</li>
                        <li>Product</li>
                        <li>About US</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer