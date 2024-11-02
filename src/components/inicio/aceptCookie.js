import { useEffect, useState } from "react";
import PrincipalButton from "./principalButton";


const CookieConsentModal = () => {
    const [isVisible, setIsVisible] = useState(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        return !cookiesAccepted;
    });

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            setIsVisible(true);
        }
    }, []);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('no-interaction');
        } else {
            document.body.style.overflow = 'auto';
            document.body.classList.remove('no-interaction');
        }
    }, [isVisible]);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
            <div className="overlay" /> {/* Este div sirve como fondo oscuro */}
            <div className="cookie-consent-modal">
                <div className="modal-content">
                    <h2>Uso de Cookies</h2>
                    <p>
                        Esta página utiliza cookies para mejorar su experiencia. Al continuar navegando, 
                        acepta el uso de cookies.
                    </p>
                    <PrincipalButton onClick={handleAccept} buttonText="ACEPTAR" className="btn-cookie" containerClass="div-btn-cookie" />
                </div>
            </div>
        </>
    );
};

export default CookieConsentModal;

