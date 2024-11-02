

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import '../global/global.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
        <footer className="footer mb-3 flex-md-row justify-content-between align-items-center p-3">
            <div className="footer-left">
                <Link
                    to="https://web.whatsapp.com/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    id="whatsapp-icon"
                    className="footer-icon whatssap"
                    data-tooltip-content="RESERVA YA!!"
                >
                    <FaWhatsapp />
                </Link>
                <Tooltip anchorId="whatsapp-icon" place="top" />
            </div>

            <div className="footer-center flex-md-row align-items-center my-2 my-md-0">
                <Link to="/aviso-legal" className="footer-link">AVISO LEGAL</Link>
                <span className="divider"> | </span>
                <Link to="/politica-cookies" className="footer-link">POLÍTICA DE COOKIES</Link>
                <span className="divider"> | </span>
                <Link to="/politica-privacidad" className="footer-link">POLÍTICA DE PRIVACIDAD</Link>
            </div>

            <div className="footer-right d-flex my-2 my-md-0">
            <Link  to="https://www.facebook.com/" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </Link>
            <Link  to="https://x.com/" className="social-icon twitter" target="_blank" rel="noopener noreferrer" >
                <FaTwitter />
            </Link>
            <Link to="https://www.instagram.com/" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </Link>
            <Link to="https://www.linkedin.com/" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </Link>
        </div>
        </footer>
        <div className="copyright d-flex justify-content-center">
            <p>&copy; {new Date().getFullYear()} Alba Espejo Crespo . Todos los derechos reservados.</p>
        </div>
    </>
    );
};

export default Footer;