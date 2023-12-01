import "./FavList.css"
import "../favAnimation/FavAnimation.css"
import "../favAnimation/Animation.json"

const FavList = ({ product }) => {

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

    const removeItemFav = (id) => {
        const favList = JSON.parse(localStorage.getItem("favList"));

        const newfavList = favList.filter((item) => item.id !== id)

        localStorage.setItem("favList", JSON.stringify(newfavList));
    }

    return (

        <div className="container-product-fav-list">
            <div className="container-img-fav-list">
                <img className="product-img-fav-list" src={product.img} alt="" />
            </div>
            <div className="product-infos-container-fav-list">
                <div className="product-name-fav-list">
                    <h4 className="product-name-title-fav-list">{product.name}</h4>
                </div>
                <div className="product-infos-fav-list">
                    <small>R$ {product.price}</small>
                    <small>Tamanho: {product.size}</small>
                </div>
            </div>
            <div className="add-in-cart-button-container-fav-list">
                <button className="remove-fav-list-button" onClick={() => removeItemFav(product.id)}>Remover</button>
                <button className="add-in-cart-button-fav-list" onClick={() => {
                    addItemCart(product.id, product.img, product.name, product.price, product.size)
                }}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default FavList;