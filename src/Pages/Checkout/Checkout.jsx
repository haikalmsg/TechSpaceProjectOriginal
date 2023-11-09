import React from "react";
import './Checkout.css'
import { ShopContext } from "../../Context/ShopContext";
import PRODUCTS from "../../Product";
import Checkoutitem from "../../Components/CheckoutItem/CheckoutItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Checkout(){
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }
    function useWindowDimensions() {
      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
      useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      return windowDimensions;
    }
    const {height, width} = useWindowDimensions()
    let pot = true
    const {cart, getTotalAmmount, forget} = React.useContext(ShopContext)
    const navigate = useNavigate()
    let tot = getTotalAmmount()
    let disp = true
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    if(tot === 0){
        disp = false
    }
    if(width < 1090){
        pot = false
    }

    const notify = () => toast.success('Success!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    function submitted(event){
        event.preventDefault()
        notify()
        forget()
    }
    return(
        <div className="CObody">
            {disp && <div className="checkoutWrapperReal">
                <form className="formWrapper" onSubmit={submitted} id = "myform">
                    <h1 className="contactWrapper">Contact Information</h1>
                    <div className="nameWrapper">
                        <input className="formsnametext checkout" placeholder="First Name" required></input>
                        <input className="formsnametext checkout" placeholder="Last Name" required></input>
                    </div>
                    <input className="formsAddress checkout fwForms" placeholder="address" required></input>
                    <div className="nameWrapper">
                        <input className="formsnametext checkout" placeholder="City" required></input>
                        <input className="formsnametext checkout" placeholder="Postal Code" required type="number"></input>
                    </div>
                    <div className="nameWrapper">
                        <input className="formsCardNumber checkout" placeholder="Card Number" required type="number"></input>
                        <input className="formsCVV checkout" placeholder="CVV" required type="number"></input>
                    </div>
                    {pot && <button className="ChekoutNowButton fwForms">Checkout</button>}
                    <ToastContainer />



                </form>
                <div className="checkoutItemWrapper">
                    <h1 className="itemsListText">Items</h1>
                    <div className="itemsList">
                        {PRODUCTS.map((product)=>{
                            if (cart[product.id] > 0 ){
                                return <Checkoutitem data = {product}/>
                            }
                        })}
                    </div>
                    <h4 className="totPurchase pd">Total Purchase : </h4>
                    <div className="totalCheckout pd">Rp. {numberWithCommas(tot)}</div>
                   {!pot && <button className="ChekoutNowButton" type="submit" form="myform">Checkout</button> }

                </div>
                

            </div>}
            {!disp && <div className="succesWrapper">
                <h1 className="successAlert">Payment Success</h1>
                <h3 className="successSubtitle">Click this <Link to = '/TechSpaceProject/'>link</Link> to return home</h3>
            </div>}
        </div>
    )
}

export default Checkout