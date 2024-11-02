import { useState } from "react";
import PrincipalButton from "../inicio/principalButton";


const ModalPedido = ({ cardData, onClose, onConfirm }) => {
    const [quantity, setQuantity] = useState(1);
  
    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
  
    const renderOptions = () => {
        switch (cardData.category) {
            case 'entrantes':
                return (
                    <>
                        <div className="form-check d-flex justify-content-start">
                            <input className="form-check-input" type="checkbox" value="ensalada" id="flexCheckEnsalada" />
                            <label className="form-check-label" htmlFor="flexCheckEnsalada">
                                Barbacoa
                            </label>
                        </div>
                        <div className="form-check d-flex justify-content-start">
                            <input className="form-check-input" type="checkbox" value="patatas fritas" id="flexCheckPatatasFritas" />
                            <label className="form-check-label" htmlFor="flexCheckPatatasFritas">
                                Ketchup
                            </label>
                        </div>
                        <div className="form-check d-flex justify-content-start">
                            <input className="form-check-input" type="checkbox" value="patatas gajo" id="flexCheckPatatasGajo" />
                            <label className="form-check-label" htmlFor="flexCheckPatatasGajo">
                                Salsa Picante
                            </label>
                        </div>
                    </>
                );
            case 'burger':
                return (
                    <>
                        <div className="form-check d-flex justify-content-start">
                            <input className="form-check-input" type="checkbox" value="ensalada" id="flexCheckEnsalada" />
                            <label className="form-check-label" htmlFor="flexCheckEnsalada">
                                Ensalada
                            </label>
                        </div>
                        <div className="form-check d-flex justify-content-start">
                            <input className="form-check-input" type="checkbox" value="patatas fritas" id="flexCheckPatatasFritas" />
                            <label className="form-check-label" htmlFor="flexCheckPatatasFritas">
                                Patatas Fritas
                            </label>
                        </div>
                        <div className="form-check d-flex justify-content-start">
                            <input className="form-check-input" type="checkbox" value="patatas gajo" id="flexCheckPatatasGajo" />
                            <label className="form-check-label" htmlFor="flexCheckPatatasGajo">
                                Patatas Gajo
                            </label>
                        </div>
                    </>
                );
            case 'pizzas':
                return (
                    <>
                        <div className="form-check d-flex justify-content-start">
                            <input className="form-check-input" type="checkbox" value="extra queso" id="flexCheckQueso" />
                            <label className="form-check-label" htmlFor="flexCheckQueso">
                                Extra Queso
                            </label>
                        </div>
                        <div className="form-check d-flex justify-content-start">
                            <input className="form-check-input" type="checkbox" value="piña" id="flexCheckPina" />
                            <label className="form-check-label" htmlFor="flexCheckPina">
                                Masa Clásica
                            </label>
                        </div>
                        <div className="form-check d-flex justify-content-start">
                            <input className="form-check-input" type="checkbox" value="piña" id="flexCheckPina" />
                            <label className="form-check-label" htmlFor="flexCheckPina">
                                Masa Fina
                            </label>
                        </div>
                    </>
                );
            // Agregar más casos según sea necesario para otras categorías
            default:
                return null;
        }
    };
  
    return (
      <div className="modal-overlay">
        <div className="modal-content modal-pedido-añadir-carrito">
            <button onClick={onClose} className="close-button">X</button>
            <img src={cardData.image} alt={cardData.title} className="modal-image-pedido" />
            <h2 className="title-card-modal-pedido">{cardData.title}</h2>

            {/* Mostrar acordeón solo si la categoría es burger, pizza o entrantes */}
            {(cardData.category === 'burger' || cardData.category === 'pizzas' || cardData.category === 'entrantes') && (
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button 
                                    className="accordion-button collapsed" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseOne" 
                                    aria-expanded="false" 
                                    aria-controls="collapseOne">
                                    {cardData.category === 'burger' ? 'Elige tu acompañante' : 
                                     cardData.category === 'pizzas' ? 'Personalízala' : 
                                     cardData.category === 'entrantes' ? 'Elige tu salsa' : 
                                     'Elige tu salsa'}
                                </button>
                                <hr />
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex flex-column">
                                    {renderOptions()}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

          {/* Quantity Selector */}
            <div className="quantity-selector">
                <button onClick={decreaseQuantity} className="btn-cantidad restar">-</button>
                <span className="cantidad">{quantity}</span>
                <button onClick={increaseQuantity} className="btn-cantidad sumar">+</button>
            </div>
            <PrincipalButton onClick={() => onConfirm(quantity)} buttonText="AÑADIR" containerClass="no-margin" className="confirmar-cantidad-modal"/>
        </div>
      </div>
    );
  };

  export default ModalPedido;
  