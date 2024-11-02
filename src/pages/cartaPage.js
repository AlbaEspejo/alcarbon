import "../components/carta/carta.css"

import Menu from "../components/global/menu.js";
import Footer from "../components/global/footer.js";
import Carta from '../components/carta/carta.js';
import imgPrincipalCarta from "../MEDIA/IMG/IMG_CARTA_BANNER.png"
import PrincipalButton from "../components/inicio/principalButton.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CartaPage = () => {
    const navigate = useNavigate();

    const handlePedidoClick = () => {
        navigate('/hacer-pedido');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
           <Menu />
           <div className="container-fluid img_intro img_intro_carta d-flex position-relative">
                <img
                    src={imgPrincipalCarta}
                    className="img_principal img-principal-carta"
                    alt="Imagen Hamburguesa"
                />
                <h1 className="text-centered position-absolute"><span>¿EMPEZAMOS?</span></h1>
                <PrincipalButton
                    onClick={handlePedidoClick}
                    buttonText="HACER PEDIDO"
                    className="button-pedido-centered position-absolute"
                    containerClass="container-button-pedido"
                />
            </div>
            <Carta />
            <Footer />
        </>
    )
}

export default CartaPage;