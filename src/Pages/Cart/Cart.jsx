import React from "react";
import PRODUCTS from "../../Product";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Cartitem from "../../Components/Cart-item/CartItem";
import './Cart.css'
import { Link } from "react-router-dom";



function Cart(){
    const {cart, getTotalAmmount} = React.useContext(ShopContext)

    let tot = getTotalAmmount()
    let disp = false
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    if (tot > 0){
        disp = true
    }
    console.log(disp)
    return(
        <div className="cartWrapper">
            {!disp && <div className="emptyWrapper">
                <h1 className="emptyText">Your Cart is Empty</h1>
                <br></br>
                <h5 className="emptyTextSmall">Click <Link to = "/">Here</Link> to Browse Our Collection</h5>
            </div>}
            {disp && <div className="TableWrapper">
                {PRODUCTS.map((product)=>{
                    if (cart[product.id] > 0 ){
                        return <Cartitem data = {product}/>
                    }
                })}
            </div>}
            {disp && <div className="checkoutWrapper">
                <div className="checkoutControlWrapper">
                    <h5 className="totpriceText left">Total Price :</h5>
                    <h2 className="priceWrapper left">Rp.{numberWithCommas(tot)}</h2>
                    <Link to = "checkout" className="checkoutButton">Checkout</Link>
        

                </div>
            </div>}

        </div>
    )
}

export default Cart