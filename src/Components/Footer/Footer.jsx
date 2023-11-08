import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footerWrapper">
            <div className="blockone blocks">
                <img className="logo logfoot" src="../Touch.png"></img>
                <div className="footerInfo justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id justo eget elit consequat ultrices id quis velit. Fusce eget cursus nulla. Praesent ac turpis vitae ipsum sagittis ullamcorper. Sed fermentum, nisl vel sagittis facilisis, elit elit tristique mauris, in luctus lacus purus non nisi </div>
            </div>
            <div className="blockTwo blocks">
                <div className="infoText" >Information</div>
                <ul className="infoList">
                    <Link to = "/aboutus" className="link linklist"><li className="linkList">About Us</li></Link>
                    <Link to = "/FAQ" className="link linklist"><li className="linkList">FAQ</li></Link>
                    <Link to = "/privacy" className="link linklist"><li className="linkList">Privacy</li></Link>
                </ul>
            </div>
            <div className="servicesWrapper">

            </div>
        </div>
    )
}

export default Footer