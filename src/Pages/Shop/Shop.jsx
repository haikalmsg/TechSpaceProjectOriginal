import React, {useEffect} from "react";
import './Shop.css'
import Product from "../../Components/Product/Product";
import DB from "../../Product"
import AOS from 'aos';
import 'aos/dist/aos.css';


function Shop(){
    useEffect(() => {
        AOS.init();
    }, [])
    const [cards, setCards] = React.useState(DB)
    console.log(cards)
    const kartu = cards.map(card =>(
        <Product 
        data = {card}/>
    ))

    return(
        <div className="ShopWrapper">
            <div className="BannerContainer">
                <h1 className="shopText" data-aos = "fade-up" data-aos-duration = "750">Our Products</h1>
            </div>
            <div className="ProductWrapper" data-aos = "fade-up" data-aos-duration = "750" data-aos-delay = "0">
                {kartu}
                
            </div>
        </div>
    )
}

export default Shop