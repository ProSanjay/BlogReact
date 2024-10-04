import React from "react";
import "./Logo.css"
import img from "../../assets/logo.png"
 

function Logo({width = '100px'}){
    return (
        <>
        <div className="logo">
           <img src={img} alt=""   />
        </div>
        </>
    )
}

export default Logo