import React from "react";
import './Product.css'
import { ShopContext } from "../../Context/ShopContext";
function Product(props){
    const {id, name, price, productImage} = props.data
    const {addCart, cart, removeCart} = React.useContext(ShopContext)
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    let amount = cart[id]
    return(
        <div className="productCard">
            <img className="prodImg" src={productImage}></img>
            <br></br>
            <h3 className="prodName"><strong>{name}</strong></h3>
            <br></br>
            <h3 className="prodPrice">Rp. {numberWithCommas(price)}</h3>
            <br></br>
            {amount == 0 && <div className="addbtn" onClick={() => addCart(id)}>
                <h3 className="addtxt">add to cart</h3>
            </div>}
            {amount > 0 &&<div className="controlWrapper">
                <div className="substract" onClick={() => removeCart(id)}>-</div>
                <div className="counter">{amount}</div>
                <div className="add" onClick={()=>addCart(id)}>+</div>
            </div>}
        </div>
    )
}

export default Product