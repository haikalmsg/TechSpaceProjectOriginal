import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import logoheader from '../../assets/Touch.png'

function Footer(){
    return(
        <div className="footerWrapper">
            <div className="blockone blocks">
                <img className="logo logfoot" src={logoheader}></img>
                <div className="footerInfo justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id justo eget elit consequat ultrices id quis velit. Fusce eget cursus nulla. Praesent ac turpis vitae ipsum sagittis ullamcorper. Sed fermentum, nisl vel sagittis facilisis, elit elit tristique mauris, in luctus lacus purus non nisi </div>
            </div>
            <div className="blockTwo blocks">
                <div className="infoText" >Information</div>
                <ul className="infoList">
                    <Link to = "/TechSpaceProject/aboutus" className="link linklist"><li className="linkList">About Us</li></Link>
                    <Link to = "/TechSpaceProject/FAQ" className="link linklist"><li className="linkList">FAQ</li></Link>
                    <Link to = "/TechSpaceProject/privacy" className="link linklist"><li className="linkList">Privacy</li></Link>
                </ul>
            </div>
            <div className="servicesWrapper">

            </div>
        </div>
    )
}

export default Footer