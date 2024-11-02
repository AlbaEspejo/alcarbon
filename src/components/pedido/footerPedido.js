
import CartIcon from './carrito';
import PrincipalButton from '../inicio/principalButton';
import { useNavigate } from 'react-router-dom';

const FooterPedido = ({ totalItems, onOpenCartModal }) => {
   
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem('formData')) || [];
    const userInfo = Array.isArray(userData) && userData.length > 0 ? userData[userData.length - 1] : null;


    return (
      <div className='footer-pedido d-flex justify-content-between'>
        
          {/* Renderizar solo si existen datos en userData */}
        <div className='d-flex flex-column justify-content-center align-items-center'>
          {userInfo && (userInfo.name || userInfo.address || userInfo.phone) ? (
            <>
              {userInfo.name && (
                <p className='datos-usuario-pedido-footer'>
                  Hola <strong>{userInfo.name.toUpperCase()}</strong>
                </p>
              )}
              {userInfo.address && userInfo.addressNumber && userInfo.addressPortal && (
                <p className='datos-usuario-pedido-footer'>
                  Dirección de entrega: <strong>{userInfo.address.toUpperCase()} Nº {userInfo.addressNumber.toUpperCase()} - {userInfo.addressPortal.toUpperCase()}</strong>
                </p>
              )}
              {userInfo.phone && (
                <p className='datos-usuario-pedido-footer'>
                  Teléfono: <strong>{userInfo.phone.toUpperCase()}</strong>
                </p>
              )}
            </>
          ) : (
            <PrincipalButton 
              onClick={() => navigate('/registro')} 
              buttonText="Iniciar Sesión" 
              containerClass="no-margin" 
              className="btn-inicia-sesion-pedido" 
            />
          )}
        </div>
        
        <div onClick={onOpenCartModal} className='d-flex mt-auto'>
          <CartIcon itemCount={totalItems} />
        </div>
      </div>
    );
  };
  
  export default FooterPedido;
  
