import "./ResumeList.css"

import { useState } from "react";

const ResumeList = ({ product }) => {

    return (
        <div className="resume-shop-itens">
            <div className="resume-shop-img">
                <img className="resume-shop-card-img" src={product.img} alt="" />
            </div>
            <div className="resume-shop-card-infos">
                <p className="resume-card-title">{product.name}</p>
                <div className="resume-card-info">
                    <p>R$ {product.price}</p>
                    <p>Tamanho: {product.size}</p>
                </div>
            </div>
        </div>
    )
}

export default ResumeList;