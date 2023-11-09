import React from "react";
import './Cartitem.css'
import { ShopContext } from "../../Context/ShopContext";
import { Trash } from "phosphor-react";


function Cartitem(props){
    const {id, name, price, productImage} = props.data
    const {addCart, cart, removeCart, delAll, addFive, minFive} = React.useContext(ShopContext)
    let ammount = cart[id]
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return(
        <div className="cartItemWrapper">
            <div className="firstBox">
                <img className="cartImg" src={productImage}></img>
                <div className="cartText">
                    <h1 className="productNameCart">{name}</h1>
                    <h4 className="productPrice">Rp. {numberWithCommas(price)}</h4>
                </div>
            </div>
            <div className="controlsWrapper">
                <div className="substract del control" onClick={() => delAll(id)}><Trash color={"red"} size={20}/></div>
                <div className="add minFive control" onClick={()=>minFive(id)}>-5</div>
                <div className="substract control" onClick={() => removeCart(id)}>-</div>
                <div className="counter control">{ammount}</div>
                <div className="add control" onClick={()=>addCart(id)}>+</div>
                <div className="add addFive control" onClick={()=>addFive(id)}>+5</div>
                
            </div>
            
        </div>
    )
}

export default Cartitem