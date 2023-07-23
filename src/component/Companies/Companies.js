import React from "react";
import"./Companies.css";
import equinix from "../img/equinix.png";
import prologis from "../img/prologis.png";
import tower from "../img/tower.png";
import realty from "../img/realty.png";

const Companies = ()=>{
    return(
        <div className="companies flexBetween">
            <div className="container">
                <img  src = {equinix}  alt=""/>
                <img  src = {prologis} alt=""/>
                <img  src = {tower} alt=""/>
                <img  src = {realty} alt=""/>
            </div>
        </div>
    )
}

export default Companies;