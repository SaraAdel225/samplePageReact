import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import CountUp from "react-countup"
import "./HomeP.css"
import heroImg from "../img/hero-image.png"
import {motion} from "framer-motion"
const  Home = () =>{
    return(
        <div className="home" id="home">
            <div className="container">
                <div className="content">
                    <motion.h1
                    initial={{y:"2rem" ,opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:2, type:"spring"}}
                    >Discover <br/> Most Suitable <br/>Property</motion.h1>
                    <p className="parg">Find a variety of properties that suit you very easilty <br/>
                    Forget all difficulties in finding a residence for you</p>
                    <div className="search flexBetween">
                        <div className="icon">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        </div>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="number flexBetween">
                        <div className="branch">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span  className="parg">Premium Products</span>
                        </div>
                        <div className="branch">
                            <span>
                                <CountUp start={1800} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span  className="parg">Happy Customer</span>
                        </div>
                        <div className="branch">
                            <span>
                                <CountUp start={0} end={28} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="parg">Awards Winning</span>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{x:"8rem" ,opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:2, type:"spring"}} className="mainImg">
                <img src={heroImg} alt=""/>
                </motion.div>
            </div>
        </div>
    )
    
}

export default Home;