import "./CartListItem.css"

const CartListItem = ({ product, cart }) => {

    const removeItemCart = (id) => {
        const cartList = JSON.parse(localStorage.getItem("cartList"));

        const newCartList = cartList.filter((item) => item.id !== id)
        localStorage.setItem("cartList", JSON.stringify(newCartList));
    }

    return (
        <div className="cart-card">
            <div className="card-img-container">
                <img className="card-img" src={product.img} alt="" />
            </div>
            <div className="card-infos-container">
                <h2 className="card-title">{product.name}</h2>
                <div className="card-info">
                    <p>R$ {product.price}</p>
                    <p>Tamanho: {product.size}</p>
                </div>
            </div>
            <div className="cart-card-button-container">
                <button onClick={() => removeItemCart(product.id)} className="card-button-remove">Remover</button>
            </div>
        </div>
    )
}

export default CartListItem;