import React, { createContext } from "react";
import DB from "../Product"


export const ShopContext = createContext(null)

const getProducts = () => {
    let cart = {}
    for(let i = 1; i < DB.length + 1 ; i++){
        cart[i] = 0
        for(let i = 1; i < DB.length + 1 ; i++){
            cart[i] = 0
        }
    }
    return cart
}

export const ShopContextProvider = (props) =>{
    const [cart, setCart] = React.useState(getProducts())

    function getTotalAmmount(){
        let tot = 0
        for(const item in cart){
            if (cart[item] > 0){
                let hasil = DB.find((product) => product.id === Number(item))
                tot = tot + hasil.price*Number(cart[item])
            }
        }
        return tot
    }

    function addCart(itemID){
        return(
            setCart((prev) => ({...prev, [itemID] : prev[itemID] + 1 }))
        )
    }
    function removeCart(itemID){
        return(
            setCart((prev) => ({...prev, [itemID] : prev[itemID] - 1}))
        )
    }
    function delAll(itemID){
        return(
            setCart((prev) => ({...prev, [itemID] : 0}))
        )
    }
    function addFive(itemID){
        return(
            setCart((prev) => ({...prev, [itemID] : prev[itemID] + 5}))
        )
    }
    function minFive(itemID){
        return(
            setCart((prev) => ({...prev, [itemID] : prev[itemID] - 5}))
        )
    }
    function forget(){
        for(const item in cart){
            delAll(item)
        }
    }
    console.log(cart)

    const contextValue = {cart, addCart, removeCart, getTotalAmmount, delAll, addFive, minFive, forget}

    return <ShopContext.Provider value = {contextValue}>{props.children}</ShopContext.Provider>
}