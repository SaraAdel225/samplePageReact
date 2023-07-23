import React from "react";
import "./Value.css"
import valueImg from "../img/value.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel , AccordionItemState} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import {motion} from "framer-motion"

const contAccordion =[
    {
        icon: <FontAwesomeIcon icon={faCircleXmark}/>,
        heading:"Best interest rates on the market",
        detail:  "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
        icon: <FontAwesomeIcon icon= {faChartSimple} />,
        heading: "Prevent unstable prices",
        detail:
            "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
        icon: <FontAwesomeIcon icon={faShieldHeart} />,
        heading: "Best price on the market",
        detail:
            "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
]

const Value = ()=> {
    return(
        <div className = "value" id="value">
            <div className="container flexBetween">
            <motion.div
                    initial={{x:"8rem" ,opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:2, type:"spring"}} className="mainImg">
                <img src={valueImg} alt=""/>
                </motion.div>
                <div className="Content">
                    <h2 className="orangeText">Our Value</h2>
                    <h1 className="blueText">Value We Give to You</h1>
                    <p className="parg">We always ready to help by providijng the best services for you. 
                        <br/>We beleive a good blace to live can make your life better
                    </p>
                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            contAccordion.map((data,i)=>{
                                return(
                                    <AccordionItem key={i} uuid={i} className= {`accordionItem`}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="accordionButton">
                                                <div className="icon">{data.icon}</div>
                                                    <h4>{data.heading}</h4>
                                                    <div className="icon">
                                                    <FontAwesomeIcon  icon={faCaretDown} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="accordionItemPanel">
                                            <p className="parg">{data.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Value