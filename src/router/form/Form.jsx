import "./Form.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Form = () => {

    const url = "http://localhost:5500/api";

    const navigate = useNavigate();

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPass, setConfirmPass] = useState()

    const getPost = async() => {

        try {      
            const response = await axios.get(url)
            
            const data = response.data.users;
            
        } catch (error) {
            console.log("Erro: ", error)
        }
    }

    useEffect(() => {
        getPost();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPass){
            alert("Senhas não conferem!");
            return;
        }

        const register = {userId: Math.floor(Math.random() * 10000), name, email, password};

        await axios.post(url, {
            id: register.userId,
            name: register.name,
            email: register.email,
            password: register.password,
        })

        navigate("/");
    }

    return (
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-container">
                    <div className="form-title-container">
                        <h1 className="form-title">Formulario de cadastro</h1>
                    </div>
                    <div className="group-container">
                        <div className="infos-container">
                            <label className="label-form" htmlFor="name">Nome completo</label>
                            <input 
                                className="input-form" 
                                type="text" 
                                name="name" 
                                id="name" 
                                required
                                onChange={(e) => setName(e.target.value)}
                                ></input>
                        </div>

                        <div className="infos-container">
                            <label className="label-form" htmlFor="email">E-mail</label>
                            <input 
                                className="input-form" 
                                type="email" 
                                name="email" 
                                id="email" 
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                ></input>
                        </div>

                        <div className="infos-container">
                            <label className="label-form" htmlFor="password">Senha</label>
                            <input 
                                className="input-form" 
                                type="password" 
                                name="password" 
                                id="password" 
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                ></input>
                        </div>

                        <div className="infos-container">
                            <label className="label-form" htmlFor="password-confirmation">Confirmar Senha</label>
                            <input 
                                className="input-form" 
                                type="password" 
                                name="password-confirmation" 
                                id="password-confirmation" 
                                required
                                onChange={(e) => setConfirmPass(e.target.value)}
                                ></input>
                        </div>
                        <div className="form-button-container">
                        <Link to="/"><button className="form-button form-button-cancel">Cancelar</button></Link>
                        <button className="form-button form-button-register" type="submit">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </form>
    )
}

export default Form;