import { useState } from "react";
import "./Header.css";

// Import para navegção entre as paginas do site
import { Link } from "react-router-dom";

const Header = ({ setModalOpen }) => {

    const [user, setUser] = useState("");
    const [active, setActive] = useState(false);

    const toggleMode = () => {
        setActive(!active);
    }

    const handleCardUserChange = (e) => {
        setUser(e.target.value);
    };

    return (
        <div>

            {/* Tag semântica HEADER indica o CABEÇALHO do site  */}
            <header className="header">

                <p className="header-message">Enviamos para todo o Brasil - Faça já seu pedido - Frete grátis para Norte e Nodeste</p>

                {/* Div para agrupar os elementos do Header */}
                <div className="header-content">

                    <div className="search-content">

                        <img className="header-img" src="/src/assets/shopping-bag.svg" alt="Logo"></img>

                        <input type="search" name="" className="search" placeholder="Faça sua busca!"></input>

                    </div>

                    {/* Tag semântica para navegação do site */}
                    <nav className="header-menu-item-nav">

                        {/* ao logar, o usuario vai ter seu nome aqui */}
                        {/* <h4>Seja bem vindo {user}!</h4> */}
                        <Link onClick={setModalOpen} href=""><img src="/src/assets/user.svg" alt=""></img></Link >

                        <Link to="fav" href=""><img src="/src/assets/heart.svg" alt="itens salvos"></img></Link>

                        <Link to="cart"><img src="/src/assets/shopping-cart.svg" alt="carrinho"></img></Link>

                    </nav>
                </div>

                {/* Tag semântica para Lista, nesse caso, uma lista não ordenada */}
                {/* O certo seria usar a tag NAV pois seriam links de navegação, mas como não vamos implementar isso
                resolvemos usar lista para usar a tag */}
                <div className="header-category">
                    <div className={active ? "icon icon-active" : "icon"}>
                        <img className="menu-side-bar menu-icon" src="/src/assets/menu.svg" alt="" />
                    </div>
                    {/* <div className={active ? "menu menuOpen" : "menu menuClose"}>
                        <div className="header-list-container">
                            <ul className="header-category-list-modal">
                                <li className="header-category-item-modal">Ofertas</li>
                                <li className="header-category-item-modal">Feminino</li>
                                <li className="header-category-item-modal">Masculino</li>
                                <li className="header-category-item-modal">Conjuntos</li>
                                <li className="header-category-item-modal">Acessórios</li>
                                <li className="header-category-item-modal">Kits</li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="header-menu-item-nav-querry">
                    <Link onClick={setModalOpen} href=""><img src="/src/assets/user-white.svg" alt=""></img></Link >

                    <Link to="fav" href=""><img src="/src/assets/heart-white.svg" alt="itens salvos"></img></Link>

                    <Link to="cart"><img src="/src/assets/shopping-cart-white.svg" alt="carrinho"></img></Link>
                    </div>
                    <ul className={"header-category-list"}>
                        <li className="header-category-item">Ofertas</li>
                        <li className="header-category-item">Feminino</li>
                        <li className="header-category-item">Masculino</li>
                        <li className="header-category-item">Conjuntos</li>
                        <li className="header-category-item">Acessórios</li>
                        <li className="header-category-item">Kits</li>
                    </ul>
                </div>
            </header>

        </div>

    )
}

export default Header;