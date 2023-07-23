import React from "react"
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import contactImg from "../img/contact.jpg"
const dataContact = [
    {
        icon: <FontAwesomeIcon icon = {faPhone}/>,
        h1: "Call",
        numberPhone: "02112314514",
    },
    {
        icon: <FontAwesomeIcon icon={faCommentDots}/>,
        h1: "Chat",
        numberPhone: "02112314514",
    },
    {
        icon: <FontAwesomeIcon icon={faCommentDots}/>,
        h1: "Video Call",
        numberPhone: "02112314514",
    },
    {
        icon: <FontAwesomeIcon icon={faMessage}/>,
        h1: "Message",
        numberPhone: "02112314514",
    }
]

const Contact = ()=>{
    return(
        <div className="contact" id="contact">
            <div className="container flexBetween">
                <div className="content">
                    <h2 className="orangeText">Our Contact Us</h2>
                    <h1 className="blueText">Easy to contact us</h1>
                    <p className="parg">always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>
                    <div className="gridDiv">
                        {
                            dataContact.map((item) =>{
                                return(
                                    <div className="contChat"> 
                                        <div className="chatFlex">
                                            <div className="icon">
                                            {item.icon}
                                            </div>    
                                            <div className="phone">
                                                <h4>{item.h1}</h4>
                                                <p className="parg">{item.numberPhone}</p>
                                            </div>
                                        </div>
                                        <button>{item.h1} now</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mainImg">
                    <img src={contactImg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Contact