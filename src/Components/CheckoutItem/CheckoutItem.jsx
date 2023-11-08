import React from "react";
import './CheckoutItem.css'
import { ShopContext } from "../../Context/ShopContext";



function Checkoutitem(props){
    const {id, name, price, productImage} = props.data
    const {cart} = React.useContext(ShopContext)
    let ammount = cart[id]
    return(
        <div className="chekOutItem">
            <div className="checkoutItemBlockOne">
                <img className="checkoutItemImg" src = {productImage}></img>
                <h3 className="checkoutName">{name}</h3>
            </div>
            <div className="checkoutItemBlocktwo">
                <h4 className="qty">{ammount} Pcs</h4>
            </div>

        </div>
    )
}

export default Checkoutitem