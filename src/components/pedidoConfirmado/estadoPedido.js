

import { GiCook } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { BsHouseCheckFill } from "react-icons/bs";

const EstadoPedido = ({ linea1Fija, linea2Activa, linea2Fija }) => {
    return (
        <div className="estado-pedido d-flex justify-content-between align-items-center">
            <div className="estado-item div-chef">
                <GiCook size={50} className={`icon-cocinero ${linea2Activa ? '' : 'zoom-icon'}`} />
                <p className='mt-3'>Preparando tu pedido</p>
            </div>
            <div className="line-container">
                <div className={`line ${linea1Fija ? 'linea-fija' : 'linea-animada-1'}`}></div>
            </div>
            <div className="estado-item div-repartidor">
                <MdDeliveryDining size={50} className={`icon-repartidor ${linea2Activa && !linea2Fija ? 'zoom-icon' : ''} `}  />
                <p className='mt-3'>Repartidor en camino</p>
            </div>
            <div className="line-container line-2">
                {/* Solo se mostrará si linea2Activa es true */}
                {linea2Activa && (
                    <div className={`line ${linea2Fija ? 'linea-fija' : 'linea-animada-2'}`}></div>
                )}
            </div>
            <div className="estado-item div-casa">
                <BsHouseCheckFill size={50} className={`icon-casa ${linea2Fija ? 'zoom-icon' : ''}`} />
                <p className='mt-3'>Pedido recibido</p>
            </div>
        </div>
    );
};

export default EstadoPedido;





