import "./Modal.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Modal = ({ isOpen, setModalOpen }) => {

    // const url = "http://localhost:5500/api";

    // const navigate = useNavigate();

    // const [dataApi, setDataApi] = useState(null);
    // const [inputEmailValue, setInputEmailValue] = useState('');
    // const [inputPasswordValue, setInputPasswordValue] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(url);
    //             setDataApi(response.data);
    //         } catch (error) {
    //             console.error('Erro ao buscar dados da API:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // const handleComparison = () => {
    //     // Comparar o valor do input com o valor da API
    //     if (inputEmailValue === dataApi.email) {
    //         console.log(inputEmailValue)
    //     } if (inputPasswordValue === dataApi.password) {
    //         setModalOpen(!isOpen);
    //     } else{
    //         alert("Usuario não encontrado");
    //         return;
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

if (isOpen) {
    return (
        <div className="modal-container">
            <div className="modal-overlay">

                <div className="modal-user">

                    <div className="user-form">

                        <form onSubmit={handleSubmit} className="user-form">
                            <div className="login-form">
                                <label className="label-modal" htmlFor="email">Login</label>
                                <input
                                    className="input-modal"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email..."
                                    onChange={(e) => setInputEmailValue(e.target.value)}
                                ></input>
                            </div>

                            <div className="login-form">
                                <label className="label-modal" htmlFor="password">Senha</label>
                                <input
                                    className="input-modal"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Senha..."
                                    onChange={(e) => setInputPasswordValue(e.target.value)}
                                ></input>
                            </div>

                            <div className="btn-form">
                                <button type="submit" id="btn-login">Entrar</button>
                            </div>
                            <small className="modal-forgot-pass"><Link>Esqueceu a senha?</Link></small>
                            <small className="modal-register">Ainda não tem uma conta?<Link to="form">
                                Cadastrar-se</Link></small>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

return null;
}

export default Modal;