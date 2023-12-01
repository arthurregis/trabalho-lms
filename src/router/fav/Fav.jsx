import { useState } from "react";
import { Link } from "react-router-dom";

import "./Fav.css";

import FavList from "../../components/favList/FavList.jsx";

const Fav = () => {

    const [favList, setFavList] = useState(JSON.parse(localStorage.getItem("favList")));

    return (
        <div className="fav-container">
            <div className="fav-container-text">
                <h1>Itens Favoritados</h1>
            </div>
            <div className="fav-container-itens">
                {favList.map((productFav, index) => (
                    <FavList fav={setFavList} key={index} product={productFav} />
                ))}

                <div className="fav-button-container">
                    <Link to="/" className="fav-button-link"><button className="fav-button">Continuar Comprando</button></Link>
                    <Link to="/cart" className="fav-button-link"><button className="fav-button">Ir para Carrinho</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Fav;