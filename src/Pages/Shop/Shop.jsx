import React from "react";
import './Shop.css'
import Product from "../../Components/Product/Product";
import DB from "../../Product"


function Shop(){
    const [cards, setCards] = React.useState(DB)
    console.log(cards)
    const kartu = cards.map(card =>(
        <Product 
        data = {card}/>
    ))

    return(
        <div className="ShopWrapper">
            <div className="BannerContainer">
                <h1 className="shopText">Our Products</h1>
            </div>
            <div className="ProductWrapper">
                {kartu}
                
            </div>
        </div>
    )
}

export default Shop