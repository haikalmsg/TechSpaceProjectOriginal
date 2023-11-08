import React from "react";
import './Navbar.css';
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <div className="navbarWrapper">
                <div className="first">
                    <img className="logo" src = '../Touch.png'></img>
                    <Link className="link" to = "/">
                        <h2 className="products navtitle">Products</h2>
                    </Link>
                    <Link className="link" to ="/aboutus">
                        <h2 className="aboutUs navtitle">AboutUs</h2>
                    </Link>
                </div>
                <Link className="link" to = "/cart">
                    <ShoppingCart size={32}/>
                </Link>
            </div>
            
        </nav>
    )
}
export default Navbar