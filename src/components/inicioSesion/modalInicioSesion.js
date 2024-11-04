

import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrincipalButton from "../inicio/principalButton"

import CustomAlert from "../global/customAlert";

const ModalInicioSesion = ({ onClose, message, className,showCloseButton = true }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const navigate = useNavigate();

    const [modalClass, setModalClass] = useState('');
    const [customClass, setCustomClass] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        const foundUser = storedData.find(
            (user) => user.email === email.trim() && user.password === password.trim()
        );
   
        if (foundUser) {
            setErrorMessage('');
            // Guardar el nombre del usuario en sesionStorage
            sessionStorage.setItem('formData', JSON.stringify(storedData));

            // Redirigir a la página principal y cerrar el modal
            onClose();
            navigate('/hacer-pedido');
        } else {
            setErrorMessage('El email o la contraseña no coinciden');
        }
    };

    const handleResetPasswordClick = (inputEmail) => {
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        

        // Buscar el usuario que coincide con el email ingresado
        const userData = storedData.find(user => user.email === inputEmail);
        if (userData) {
            setAlertMessage(
                <>
                <p><strong>EMAIL:</strong> {userData.email}</p>
                <p><strong>CONTRASEÑA:</strong> {userData.password}</p>
            </>
            );
            setModalClass("div-modal-user-password")
            setCustomClass("alertaUserPassword")
            setShowAlert(true);
        } else {
            setAlertMessage('No se encontró ninguna cuenta con ese Email');
            setCustomClass("mensaje-alerta")
            setShowAlert(true);
        }
    };
    const closeAlert = () => setShowAlert(false);
    const handleRegistroClick = () => {
        onClose();
        navigate('/registro'); 
    };

    return (
        <>
            <div className={`modal fade show d-block ${className}`} style={{ backgroundColor: "rgba(0,0,0,0.5)" }} tabIndex="1" role="dialog">
                <div className="modal-dialog modal-dialog-centered m-auto">
                    <div className="modal-content m-auto">
                        <div className='d-flex'>
                            <div className="modal-header d-flex m-auto">
                                <h5 className="modal-title-inicio-sesion">{message}</h5>
                            </div>
                            <div>
                                {showCloseButton && (
                                    <button type="button" className="btn-close btn-inicio-sesion-close" onClick={onClose} aria-label="Close"></button>
                                )}
                            </div>
                        </div>
                        <div className="modal-body">
                            
                                <div className="col-12">
                                    <label htmlFor="emailModal" className="form-label email-modal">Email*</label>
                                    <input 
                                        type="email" 
                                        className="form-control input-registro input-email-modal" 
                                        id="emailModal" 
                                        value={email}  // Valor controlado
                                        onChange={handleEmailChange}  // Actualización del valor
                                        required
                                    />
                                </div>
                                <label htmlFor="passwordModal" className="form-label password-modal mt-4">Contraseña*</label>
                                <div className="input-group div-password-modal">
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        className="form-control input-password-modal" 
                                        id="passwordModal" 
                                        value={password}  // Valor controlado
                                        onChange={handlePasswordChange}  // Actualización del valor
                                        required
                                    />
                                    <button 
                                        type="button" 
                                        className="btn-ojo btn-ojo-modal"
                                        onClick={toggleShowPassword} 
                                        style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)" }}
                                    >
                                        {showPassword ? <EyeFill size={24} /> : <EyeSlashFill size={24} />} 
                                    </button>
                                </div>
                                {errorMessage && <p style={{ color: 'red', marginTop: '10px',fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight:'700' }}>{errorMessage}</p>}
                                
                                <div className="col-12 mt-3 d-flex justify-content-center">
                                    <button type="button" className="button-reset-password" onClick={() => handleResetPasswordClick(email)}>
                                        <p className="forgot-password">¿Olvidaste tu contraseña?</p>
                                    </button>
                                </div>

                                <div className="modal-footer d-flex justify-content-center">
                                    <PrincipalButton type='submit' buttonText="INICIAR SESION" onClick={handleLogin} className="btn-iniciar-sesion-modal" containerClass="m-0"/>
                                </div>
                            
                        </div>
                        <div className="div-btn-registro-modal d-flex justify-content-end">
                            <button className="btn btn-registro-modal" onClick={handleRegistroClick}>REGISTRARME</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal de alerta personalizado */}
            <CustomAlert
                show={showAlert}
                handleClose={closeAlert}
                message={alertMessage}
                customClass={customClass}
                modalClass={modalClass}
            />
        </>
    );
};

export default ModalInicioSesion;

