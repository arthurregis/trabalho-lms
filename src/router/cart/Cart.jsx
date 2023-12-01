import "./Cart.css";

import { useState } from "react";
import { Link } from "react-router-dom";


import CartListItem from "../../components/cartListItem/CartListItem.jsx";

const Cart = () => {

    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem("cartList")));

    return (
        <div className="cart-container">
            <div className="cart-container-text">
                <h1>Carrinho de compras</h1>
            </div>
            {cartList.map((productCart, index) => (
                <CartListItem cart={setCartList} key={index} product={productCart} />
            ))}

            <div className="cart-button-container">
            <Link to="/" className="cart-button-link"><button className="cart-button">Continuar Comprando</button></Link>
            <Link to="/buyform" className="cart-button-link"><button className="cart-button">Finalizar Compra</button></Link>
            </div>
        </div>
    )
}

export default Cart;