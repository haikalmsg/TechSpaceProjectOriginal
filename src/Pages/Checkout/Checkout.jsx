import React from "react";
import './Checkout.css'
import { ShopContext } from "../../Context/ShopContext";
import PRODUCTS from "../../Product";
import Checkoutitem from "../../Components/CheckoutItem/CheckoutItem";


function Checkout(){
    const {cart, getTotalAmmount} = React.useContext(ShopContext)
    let tot = getTotalAmmount()
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return(
        <div className="checkoutWrapperReal">
            <form className="formWrapper">
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
                <button className="ChekoutNowButton fwForms">Checkout</button>




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

            </div>

        </div>
    )
}

export default Checkout