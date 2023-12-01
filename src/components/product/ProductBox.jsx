import "./ProductBox.css"

import FavAnimation from "../favAnimation/FavAnimation";

const ProductBox = ({ product }) => {

    const alreadyExist = (id, idLocal) =>{
        const listItens = JSON.parse(localStorage.getItem(idLocal));

        return (listItens.some((listItens) => listItens.id === id))
    }

    const addItemCart = (id, img, name, price, size) => {

        let newCart = [{
            id,
            img,
            name,
            price,
            size,
        }];

        const cartList = JSON.parse(localStorage.getItem("cartList"));

        if(cartList){
            if(alreadyExist(product.id, "cartList")){
                return;
            } else if (cartList) {
                newCart = [...cartList, ...newCart]
            }
        }

        localStorage.setItem("cartList", JSON.stringify(newCart));
    }

    const addItemFav = (id, img, name, price, size) => {

        let newFav = [{
            id,
            img,
            name,
            price,
            size,
        }];

        const favList = JSON.parse(localStorage.getItem("favList"));


        if(favList){
            if(alreadyExist(product.id, "favList")){
                return;
            } else if (favList) {
                newFav = [...favList, ...newFav]
            }
        }
        
        localStorage.setItem("favList", JSON.stringify(newFav));
    }

    return (
        <div className="container-product">
            <div className="container-img">
                <img className="product-img" src={product.img} alt="" />
            </div>
            <div className="product-infos-container">
                <div className="product-name">
                    <h4 className="product-name-title">{product.name}</h4>
                </div>
                <div className="product-infos">
                    <small>R$ {product.price}</small>
                    <small>Tamanho: {product.size}</small>
                </div>
            </div>
            <div className="add-in-cart-button-container">
                <FavAnimation addItemFav={addItemFav} product={product}></FavAnimation>
                <button className="add-in-cart-button" onClick={() => {
                    addItemCart(product.id, product.img, product.name, product.price, product.size)
                }}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default ProductBox;