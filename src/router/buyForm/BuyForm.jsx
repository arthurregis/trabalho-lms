import "./BuyForm.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import ResumeList from "../../components/resumeList/ResumeList";

const BuyForm = () => {

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [resumeList, setResumeList] = useState(JSON.parse(localStorage.getItem("cartList")));

    const totalResumePrice = (list) => {
        const totalPrices = resumeList.reduce((total, list) => total + parseFloat(list.price.replace(',', '.')), 0);

        return totalPrices.toFixed(2);
    }

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    };

    const handleCvvChange = (e) => {
        setCvv(e.target.value);
    };

    const handleSubmit = (e) => {

        e.preventDefault();

    };

    return (
        <div className="container-buy-pay">
            <div className="form-title-container">
                <h1 className="form-title">Formulario de Pagamento</h1>
            </div>
            <form className="container-form-buy" onSubmit={handleSubmit}>
                <div className="container-form-of-payment">
                    <h1 className="form-of-payment-text">Informações de Pagamento</h1>
                    <div className="form-container">
                        <div className="group-container">
                            <div className="infos-container">
                                <label className="label-form" htmlFor="name">Número do Cartão: </label>
                                <input
                                    className="input-form"
                                    type="text"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                    maxLength="16"
                                    placeholder="XXXX XXXX XXXX XXXX"
                                    required></input>
                            </div>

                            <div className="infos-container">
                                <label className="label-form" htmlFor="email">Data de Validade:</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    value={expiryDate}
                                    onChange={handleExpiryDateChange}
                                    maxLength="5"
                                    placeholder="MM/AA"
                                    required></input>
                            </div>

                            <div className="infos-container">
                                <label className="label-form" htmlFor="password">CVV:</label>
                                <input
                                    className="input-form"
                                    type="text"
                                    value={cvv}
                                    onChange={handleCvvChange}
                                    maxLength="3"
                                    placeholder="XXX"
                                    required></input>
                            </div>
                            <div className="container-buttons-buy">
                                <Link to="/cart"><button className="button-form-buy button-return">Voltar</button></Link>
                                <Link to="/confirm"><button className="button-form-buy button-buy" type="submit">Pagar</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-shop-resume">
                    <h1 className="resume-shop-text">Resumo da compra</h1>
                    <h3>Total: {totalResumePrice(resumeList)}</h3>
                    {resumeList.map((productCart, index) => (
                        <ResumeList key={index} product={productCart} />
                    ))}
                </div>
            </form>


        </div>
    );
};

export default BuyForm;