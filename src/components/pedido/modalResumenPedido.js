import { useEffect, useState } from "react";
import PrincipalButton from "../inicio/principalButton";
import { useNavigate } from "react-router-dom";


const ModalResumenPedido = ({ cartItems, onClose, onUpdateQuantity, onRemoveItem }) => {

    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('Confirmar Pedido');

    useEffect(() => {
        // Cuando el modal se abre, añade la clase "no-scroll" al body
        document.body.classList.add('no-scroll');
        
        // Cuando el modal se cierra, elimina la clase "no-scroll" del body
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleConfirmarPedido = () => {
      const storedData = JSON.parse(sessionStorage.getItem('formData'));
      if (!storedData || storedData.length === 0) {
        setMessage('Es necesario registrarse para confirmar el pedido.');
        setButtonText('Ir a registrarse');
        // Opcionalmente, puedes hacer scroll hacia el mensaje
        return;
    }
      navigate('/pedido-confirmado');
    };

    const handleGoToRegister = () => {
      navigate('/registro'); // Redirige a la página de registro
    };

    return (
      
        <div className="modal-overlay">
        <div className="modal-content resumen-pedido-content">
          <button onClick={onClose} className="close-button">X</button>
          
          {cartItems.length > 0 ? (
            <>
              {/* Mostrar "Resumen de tu Pedido" solo si el carrito tiene elementos */}
              <h2 className="resumen-pedido-modal">Resumen de tu Pedido</h2>
              
              <ul className="lista-pedido">
                {cartItems.map((item, index) => (
                  <li key={index} className="pedido-item d-flex justify-content-between align-items-center">
                    <div className="pedido-item-left d-flex align-items-center">
                      <img src={item.image} alt={item.title} className="pedido-item-img" />
                      <div className="pedido-item-info">
                        <span className="pedido-item-title">{item.title}</span>
                        <span className="pedido-item-quantity">Cantidad: {item.quantity}</span>
                        <span className="pedido-item-price">Precio: ${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                    
                    {/* Botones para actualizar cantidad y eliminar */}
                    <div className="botones-cantidad d-flex flex-column align-items-center gap-2">
                      <div className="cantidad-buttons d-flex gap-2">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="restar-button-carrito">-</button>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="sumar-button-carrito">+</button>
                      </div>
                      <button onClick={() => onRemoveItem(item.id)} className="eliminar-item-btn">Eliminar</button>
                    </div>
                  </li>
                ))}
              </ul>
      
              {/* Mostrar el total y el botón Confirmar Pedido si hay items en el carrito */}
              <h3 className="total-price">Total: {totalPrice.toFixed(2)}€</h3>
              {message && <p className="alert alert-warning mb-3">{message}</p>} {/* Mostrar mensaje si es necesario */}
              <PrincipalButton 
                onClick={buttonText === 'Ir a registrarse' ? handleGoToRegister : handleConfirmarPedido}
                buttonText={buttonText} 
                containerClass="no-margin" 
                className="btn-confirmar-pedido-modal" />
            </>
          ) : (
            // Mensaje si el carrito está vacío
            <p className="carrito-vacio mb-0">Tu carrito está vacío.</p>
          )}
        </div>
      </div>
      
    );
  };
  
export default ModalResumenPedido;


  

