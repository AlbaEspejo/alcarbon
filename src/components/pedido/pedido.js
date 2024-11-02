
// import CardPedido from "./cardPedido";
import { useEffect, useState } from "react";
import FoodCardPedido from "./foodCardPedido";
import FooterPedido from "./footerPedido";
import HorizontalMenu from "./horizontalMenu"
import PrincipalButton from "../inicio/principalButton"
import ModalResumenPedido from "./modalResumenPedido";

import { useCart } from '../../context/CartContext';

const Pedido = () => {
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);
    const [userName, setUserName] = useState('');
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const { cartItems, updateQuantity, removeFromCart } = useCart(); // Obtén los artículos del carrito y las funciones

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        // Lógica para manejar el modal de bienvenida
        const storedData = JSON.parse(sessionStorage.getItem('formData')) || [];
        const currentEmail = sessionStorage.getItem('currentEmail');

        const foundUser = storedData.find(user => user.email === currentEmail);

        if (foundUser) {
            setUserName(foundUser.name);
            setShowWelcomeModal(true);
        }

        window.scrollTo(0, 0);
    }, []);

    const handleWelcomeClose = () => {
        setShowWelcomeModal(false);
        sessionStorage.removeItem('currentEmail');
    };

    const handleOpenCartModal = () => setIsCartModalOpen(true);
    const handleCloseCartModal = () => setIsCartModalOpen(false);

    return (
        <>
            <HorizontalMenu />
            <FoodCardPedido />
            <FooterPedido totalItems={totalItems} onOpenCartModal={handleOpenCartModal} />
            
            {/* Modal de bienvenida */}
            {showWelcomeModal && (
                <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered m-auto">
                        <div className="modal-content m-auto">
                            <div className="modal-header d-flex m-auto">
                                <h5 className="modal-title-registrado">HOLA {userName}!</h5>
                            </div>
                            <div className="modal-body text-center">
                                <p className="text-registrado">¡Ya puedes hacer tu pedido!</p>
                            </div>
                            <PrincipalButton onClick={handleWelcomeClose} buttonText="cerrar" containerClass="no-margin" className="btn-registro-exitoso d-flex justify-content-center text-center" />
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de resumen del carrito */}
            {isCartModalOpen && (
                <ModalResumenPedido 
                    cartItems={cartItems} 
                    onClose={handleCloseCartModal} 
                    onUpdateQuantity={updateQuantity} 
                    onRemoveItem={removeFromCart} 
                />
            )}
        </>
    );
};

export default Pedido;

