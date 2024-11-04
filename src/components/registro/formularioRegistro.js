import { useState } from "react";
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import PrincipalButton from "../inicio/principalButton"
import ModalMensajeEnviado from "../inicioSesion/modalMensajeEnviado";
import ModalInicioSesion from "../inicioSesion/modalInicioSesion";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';

import CustomAlert from "../global/customAlert";


const FormularioRegistro = () => {
    const navigate = useNavigate();
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        cumpleaños: '',
        address: '',
        addressNumber: '',
        addressPortal: '',
        ciudad: '',
        provincia: '',
        postalCode: '',
        password: '',
        repeatPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [policyAccepted, setPolicyAccepted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModalInicioSesion, setShowModalInicioSesion] = useState(false)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validación manual
        if (!formData.name) {
            newErrors.name = "El nombre es obligatorio";
        }
        if (!formData.email) {
            newErrors.email = "El email es obligatorio";
        }
        if (!formData.password) {
            newErrors.password = "La contraseña es obligatoria";
        }else if (!passwordValidation.test(formData.password)) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.";
        }
        if (formData.password !== formData.repeatPassword) {
            newErrors.repeatPassword = "Las contraseñas no coinciden";
        }
        if (!policyAccepted) {
            newErrors.policyAccepted = "Debes aceptar la Política de Privacidad.";
        }
        const existingData = JSON.parse(localStorage.getItem('formData')) || [];
        const emailExists = existingData.some(data => data.email === formData.email);
    
        if (emailExists) {
            newErrors.email = "Este email ya está registrado.";
        }
        if (Object.keys(newErrors).length === 0) {
            
            const updatedData = [...existingData, formData];
            sessionStorage.setItem('formData', JSON.stringify(updatedData));
            localStorage.setItem('formData', JSON.stringify(updatedData));

            const templateParams = {
                to_name: formData.name,
                to_email: formData.email,
                message: "Gracias por registrarte en AL CARBÓN, empieza a disfrutar con tus descuentos.",
            };
    
            // Envía el correo electrónico usando EmailJS
            emailjs.send('service_u9eg4vq', 'template_96zz4f8', templateParams, 'IC1h5EPPv7W-Fr7cd')
                .then((response) => {
                    setShowModal(true);
                }, (error) => {
                    setAlertMessage("Error al enviar el email.");
                    setShowAlert(true);
                });
            
            setFormData({
                name: '',
                email: '',
                phone: '',
                cumpleaños: '',
                address: '',
                addressNumber: '',
                addressPortal: '',
                ciudad: '',
                provincia: '',
                postalCode: '',
                password: '',
                repeatPassword: ''
            });
            setErrors({});
            setPolicyAccepted(true);
            setShowModal(true);
        } else {
            setErrors(newErrors);
        }
    };
    const closeAlert = () => setShowAlert(false);

    const handleCheckboxChange = (e) => {
        const { checked } = e.target;
        setPolicyAccepted(checked);
            if (checked) {
                setErrors(prevErrors => ({ ...prevErrors, policyAccepted: undefined }));
            }
        }
    
    const handleOpenModalInicioSesion = () => {
        setShowModalInicioSesion(true); // Abre el modal
    };
    
    const handleCloseModalInicioSesion = () => {
        setShowModalInicioSesion(false);
    };
    const toggleShowPassword = () =>  setShowPassword(!showPassword);
    const toggleShowRepeatPassword = () => setShowRepeatPassword(!showRepeatPassword);
    const handleClose = () => {
        setShowModal(false); // Cierra el modal
        navigate('/hacer-pedido'); // Navega a la página /hacer-pedido
      };

    return(
        <>
        <div className="d-flex justify-content-center m-auto p-4">
            <form className="row needs-validation container-fluid d-flex justify-content-center m-auto mb-5" onSubmit={handleSubmit} noValidate>
                <div className="col-12 d-flex formulario-div flex-column flex-md-row">
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center mb-3 mb-md-0">
                        <div className="col-12">
                            <label htmlFor="name" className="form-label">Nombre y Apellidos*</label>
                            <input 
                                type="text" 
                                className="form-control input-registro" 
                                id="name" 
                                value={formData.name}
                                onChange={handleChange} required
                            />
                            {errors.name && <span style={{ color: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight:'700' }}>{errors.name}</span>}
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input 
                                type="email" 
                                className="form-control input-registro" 
                                id="email" 
                                value={formData.email}
                                onChange={handleChange} required
                            />
                            {errors.email && <span style={{ color: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight:'700' }}>{errors.email}</span>}
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="cumpleaños" className="form-label">Cumpleaños</label>
                            <input type="date" className="form-control" id="cumpleaños" value={formData.cumpleaños} onChange={handleChange} />
                        </div>
                        
                    </div>
                    
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center mb-3 mb-md-0">
                        <div className="address d-flex flex-wrap">
                            <div className="col-12 col-md-6">
                                <label htmlFor="address" className="form-label">Dirección</label>
                                <input type="text" className="form-control" id="address" value={formData.address} onChange={handleChange} />
                            </div>
                            <div className="col-6 col-md-3 mt-3 mt-md-0">
                                <label htmlFor="addressNumber" className="form-label">Número</label>
                                <input type="text" className="form-control" id="addressNumber" value={formData.addressNumber} onChange={handleChange} />
                            </div>
                            <div className="col-6 col-md-3 mt-3 mt-md-0">
                                <label htmlFor="addressPortal" className="form-label">Portal</label>
                                <input type="text" className="form-control" id="addressPortal" value={formData.addressPortal} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="country d-flex flex-wrap mt-3">
                            <div className="col-12 col-md-6">
                                <label htmlFor="ciudad" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" id="ciudad" value={formData.ciudad} onChange={handleChange} />
                            </div>
                            <div className="col-6 col-md-3 mt-3 mt-md-0">
                                <label htmlFor="provincia" className="form-label">Provincia</label>
                                <input type="text" className="form-control" id="provincia" value={formData.provincia} onChange={handleChange} />
                            </div>
                            <div className="col-6 col-md-3 mt-3 mt-md-0">
                                <label htmlFor="postalCode" className="form-label">C.P</label>
                                <input type="text" className="form-control" id="postalCode" value={formData.postalCode} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="password" className="form-label">Contraseña*</label>
                            <div className="input-group">
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    className="form-control input-registro" 
                                    id="password" 
                                    value={formData.password}
                                    onChange={handleChange} required
                                    
                                />
                                <button 
                                    type="button" 
                                    className="btn-ojo" 
                                    onClick={toggleShowPassword} 
                                    style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}>
                                    {showPassword ? <EyeFill size={24} /> : <EyeSlashFill size={24} />}
                                </button>
                            </div>
                            {errors.password && <span style={{ color: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight:'700' }}>{errors.password}</span>}
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="repeatPassword" className="form-label">Repite la contraseña*</label>
                            <div className="input-group">
                                <input 
                                    type={showRepeatPassword ? "text" : "password"}
                                    className="form-control" 
                                    id="repeatPassword" 
                                    value={formData.repeatPassword}
                                    onChange={handleChange} 
                                    required 
                                />
                                <button 
                                    type="button" 
                                    className="btn-ojo" 
                                    onClick={toggleShowRepeatPassword}
                                    style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}>
                                    {showRepeatPassword ? <EyeFill size={24} /> : <EyeSlashFill size={24} />}
                                </button>
                            </div>
                            {errors.repeatPassword && <span style={{ color: 'red', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight:'700' }}>{errors.repeatPassword}</span>}
                        </div>
                        
                        
                    </div>
                    
                </div>
                <div className="col-12 politicas justify-content-center">

                        <div className="col-12 form-check mt-4">
                                <input className="form-check-input" type="checkbox" id="policyCheckbox" checked={policyAccepted} onChange={handleCheckboxChange} required />
                                <label className="form-check-label" htmlFor="policyCheckbox">
                                    He leído y acepto la Política de Privacidad.
                                </label>
                        </div>
                            {errors.policyAccepted && <span style={{ color: 'red',fontSize: '12px', fontFamily: 'Inter, sans-serif', marginBottom:'5px', fontWeight:'700' }}>{errors.policyAccepted}</span>}  
                        
                        <div className="col-12 form-check mt-2">
                            <input className="form-check-input" type="checkbox" id="comunicacionesCheckbox" value={formData.comunicacionesCheckbox} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="comunicacionesCheckbox">
                                ¡Que no se te escape ningún Descuento! Acepto recibir comunicaciones comerciales.
                            </label>
                        </div>
                    </div>
                    
                <div className="col-12 d-flex justify-content-center m-auto gap-5">
                    <PrincipalButton type="submit" buttonText="CREAR PERFIL" containerClass="m-0" className="mt-5 mb-2 btn-crear-perfil" />        
                    <PrincipalButton type="button" buttonText="YA TENGO UNA CUENTA" containerClass="m-0" className="mt-5 mb-2 btn-inicio-sesion" onClick={handleOpenModalInicioSesion} />     
                    {showModalInicioSesion && (
                    <ModalInicioSesion
                        message="TE HEMOS EXTRAÑADO"
                        className="modal-inicio-sesion"
                        onClose={handleCloseModalInicioSesion}
                    />
                )}   
                </div>
            </form>
            {showModal && <ModalMensajeEnviado 
                onClose={handleClose} 
                message="GRACIAS POR REGISTRARTE, TE HEMOS ENVIADO UN EMAIL. YA PUEDES EMPEZAR TU PEDIDO" 
                className="modal-registro-exito"
                showCloseButton={false} />}
            
            <CustomAlert
                    show={showAlert}
                    handleClose={closeAlert}
                    message={alertMessage}
                />
        </div>
        </>
    )
}

export default FormularioRegistro;