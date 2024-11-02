
import promo1 from "../../MEDIA/IMG/IMG_OFERTAS_2X1.jpg"
import promo2 from "../../MEDIA/IMG/IMG_OFERTAS_15_.png"
import promo3 from "../../MEDIA/IMG/IMG_OFERTAS_BEBIDA.png"

import "./promociones.css"
import PrincipalButton from "../inicio/principalButton"
import { useState } from "react"
import ModalMensajeEnviado from "../inicioSesion/modalMensajeEnviado"

const Promociones = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return(
        <div className="container-fluid">
            <div className="title-promo text-center">
                <h1 className="display-4">NO TE PIERDAS LAS MEJORES OFERTAS Y PROMOCIONES</h1>
            </div>

            {/* Cards container */}
            <div className="row justify-content-around mb-5">
                {/* Card 1 */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                    <div className="card card-promo h-100 d-flex flex-column">
                        <img src={promo1} className="card-img-top img-promo" alt="Descuento 15%" />
                        <div className="card-body d-flex flex-column m-auto">
                            <h5 className="card-title text-center card-title-promo">¡Disfruta de un 15% de descuento!</h5>
                            <p className="card-text text-center card-text-promo-socios">* Promoción válida exclusiva para nuevos socios *</p>
                            <p className="card-text text-center card-text-promo">*Limitado a una promoción por socio cada més</p>
                            <PrincipalButton buttonText="Añadir Promoción" 
                                             className="btn-card-promo" 
                                             containerClass="d-flex justify-content-center no-margin"
                                             onClick={openModal} />
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                    <div className="card card-promo h-100 d-flex flex-column">
                        <img src={promo2} className="card-img-top img-promo" alt="Rellenamos tu vaso gratis" />
                        <div className="card-body d-flex flex-column m-auto">
                            <h5 className="card-title text-center card-title-promo">¡2 X 1 en Cenas para toda la familia!</h5>
                            <p className="card-text text-center card-text-promo-socios">* Promoción válida exclusiva para nuevos socios *</p>
                            <p className="card-text text-center card-text-promo">*Por un consumo mínimo de 18€, de domingo a jueves a partir de las 18:00 horas.</p>
                            <PrincipalButton buttonText="Añadir Promoción" 
                                             className="btn-card-promo" 
                                             containerClass="d-flex justify-content-center no-margin"
                                             onClick={openModal} />
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-lg-4  col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                    <div className="card card-promo h-100 d-flex flex-column">
                        <img src={promo3} className="card-img-top img-promo" alt="Rellenamos tu vaso gratis" />
                        <div className="card-body d-flex flex-column m-auto">
                            <h5 className="card-title text-center card-title-promo">¡El vaso siempre lleno!</h5>
                            <p className="card-text text-center card-text-promo-socios">* Promoción válida exclusiva para nuevos socios *</p>
                            <p className="card-text text-center card-text-promo">*Rellenamos GRATIS tus refrescos todas las veces que quieras.</p>
                            <PrincipalButton buttonText="Añadir Promoción" 
                                             className="btn-card-promo" 
                                             containerClass="d-flex justify-content-center no-margin"
                                             onClick={openModal} />
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <ModalMensajeEnviado 
                onClose={closeModal} 
                message="Promoción añadida" 
                className="modal-promo d-flex justify-content-center align-items-center text-center m-auto"
                showCloseButton={false}/>}
        </div>
    )
}

export default Promociones;