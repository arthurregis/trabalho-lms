import { Link } from "react-router-dom";
import "./BuyConfirm.css"

const BuyConfirm = () => {
    return (
        <div className="container-buy-confirm">
            <h1>Pagamento em análise, verifique seu email para mais informações!</h1>
            <p>Agradecemos a preferência!</p>
            <p><Link to="/" className="link-return-home">Click aqui</Link> para retornar a página principal</p>
        </div>
    )
}

export default BuyConfirm;