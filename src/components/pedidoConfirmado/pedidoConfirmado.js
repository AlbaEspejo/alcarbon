
import "./pedidoConfirmado.css"
import { useState } from "react";
import Contador from "./contador";
import EstadoPedido from "./estadoPedido";
import gifChef from "../../MEDIA/ICON/ChefFilmora-3.gif";

const PedidoConfirmado = () => {
    const [lineas, setLineas] = useState({ linea1Fija: false, linea2Activa: false, linea2Fija: false });

    return (
        <>
           <div className="div-title-pedido-confirmado d-flex justify-content-center">
                <svg
                    viewBox="0 0 800 200"
                    preserveAspectRatio="xMidYMid meet"
                    className="svg-responsive"
                > 
                    <path
                        id="curva"
                        d="M 10 150 C 200 50, 600 50, 790 150"
                        fill="transparent"
                        stroke="none"
                    />
                    <text className="texto-pedido-confirmado">
                        <textPath href="#curva" startOffset="50%" textAnchor="middle">
                            ESTAMOS PREPARANDO TU PEDIDO
                        </textPath>
                    </text>
                </svg>
            </div>

            <div className="d-flex justify-content-center">
                <img src={gifChef} className="gif-chef" alt="chef" />
            </div>
            <EstadoPedido 
                linea1Fija={lineas.linea1Fija} 
                linea2Activa={lineas.linea2Activa} 
                linea2Fija={lineas.linea2Fija} />
            <Contador setLineas={setLineas} />
        </>
    );
};

export default PedidoConfirmado;


