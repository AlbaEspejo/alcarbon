
import oferta from "../../MEDIA/ICON/icons8-oferta-60.png"
import puntos from "../../MEDIA/ICON/icons8-monedas-64.png"
import money from "../../MEDIA/ICON/icons8-monedas-48.png"




import PrincipalButton from "../inicio/principalButton"
import "./inicioSesion.css";
import { useState } from "react";
import ModalMensajeEnviado from "./modalMensajeEnviado";
import { useNavigate } from "react-router-dom";
import ModalInicioSesion from "./modalInicioSesion";

const FormAndInfo = () => {

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        terms: false,
      });    
    const [showModalMensaje, setShowModalMensaje] = useState(false);
    const [showModalInicioSesion, setShowModalInicioSesion] = useState(false);
      
    // Función para manejar los cambios en los inputs
      const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [id]: type === "checkbox" ? checked : value,
        });
      };
    
    // Función para manejar el envío del formulario
      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
    
        // Validar si los campos están vacíos
        if (!formData.name) newErrors.name = "*El Nombre es obligatorio";
        if (!formData.email) newErrors.email = "*El Email es obligatorio";
        if (!formData.phone) newErrors.phone = "*El Teléfono es obligatorio";
        if (!formData.message) newErrors.message = "*Escribe tu mensaje";
        if (!formData.terms) newErrors.terms = "*Debes aceptar los términos y condiciones";
    
        setErrors(newErrors);
    
        // Enviar el formulario si no hay errores
        if (Object.keys(newErrors).length === 0) {
          setShowModalMensaje(true);
        }
      };
      
    // Función para cerrar el modal
      const handleCloseModalMensaje = () => {
        setShowModalMensaje(false);
        setShowModalInicioSesion(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            terms: false,
        });
        setErrors({});
    };

    const navigate = useNavigate();

    const handleRegistroClick = () => {
        navigate('/registro');
    };


  return (
    <>
    <div className="background-wrapper-friend">
        <div className="background-image-friend">
        </div>
            <h1 className="title-friend">SEAMOS AMIGOS CON BENEFICIOS</h1>
        <div className="container-friends container-fluid justify-content-around"></div>
        <div className="container-friends">
            {/* Primer Div - ¿Cómo Funciona? */}
            <div className="left-div">
                <h2 className="left-title">¿Cómo Funciona?</h2>
                <div className="info-container">
                <div className="info-box">
                    <img src={oferta} alt="Icon 1" className="info-icon" />
                    <div className="info-text">
                    <p className="info-heading">Accede a Promociones y Cupones con descuentos exclusivos</p>
                    <p className="info-description">Nuestros Amigos con beneficios tienen muchas ventajas y promociones exclusivas.</p>
                    </div>
                </div>

                <div className="info-box">
                    <img src={puntos} alt="Icon 2" className="info-icon" />
                    <div className="info-text">
                    <p className="info-heading">150 PUNTOS + Bebida Gratis</p>
                    <p className="info-description">Sólo por registrarte te regalamos 150 puntos y una bebida gratis.</p>
                    </div>
                </div>

                <div className="info-box">
                    <img src={money} alt="Icon 3" className="info-icon" />
                    <div className="info-text">
                        <p className="info-heading">Consigue puntos con cada visita que nos hagas</p>
                        <p className="info-description">Por cada 1€ consumido acumulas 10 puntos que podrás canjear por productos gratis. </p>
                    </div>
                </div>
                </div>

                <div className="button-container-login">
                    <PrincipalButton buttonText="UNIRME" className="btn-unirme" containerClass="no-margin" onClick={handleRegistroClick}/>
                    <PrincipalButton buttonText="INICIAR SESIÓN" className="btn-sesion" containerClass="no-margin" onClick={() => setShowModalInicioSesion(true)} />
                    {showModalInicioSesion && (
                    <ModalInicioSesion onClose={handleCloseModalMensaje} message="TE HEMOS EXTRAÑADO" />
            )}
                </div>
            </div>

            {/* Segundo Div - Formulario */}
            <div className="right-div">
                <h2 className="form-title">ESCRÍBENOS</h2>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                    type="text"
                    id="name"
                    className="form-input"
                    value={formData.name || ""}  // Valor inicial como cadena vacía
                    onChange={handleChange}
                    placeholder={errors.name ? errors.name : ""}
                    style={errors.name ? { borderColor: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif'} : {}}
                    />
                    

                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                    type="email"
                    id="email"
                    className="form-input"
                    value={formData.email || ""}  // Valor inicial como cadena vacía
                    onChange={handleChange}
                    placeholder={errors.email ? errors.email : ""}
                    style={errors.email ? { borderColor: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif'} : {}}
                    />
                    

                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input
                    type="text"
                    id="phone"
                    className="form-input"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    placeholder={errors.phone ? errors.phone : ""}
                    style={errors.phone ? { borderColor: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif' } : {}}
                    />
                    

                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea
                    id="message"
                    className="form-textarea"
                    value={formData.message || ""}  // Valor inicial como cadena vacía
                    onChange={handleChange}
                    placeholder={errors.message ? errors.message : ""}
                    style={errors.message ? { borderColor: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif' } : {}}
                    ></textarea>
                    

                    <div className="terms-container">
                    <input
                        type="checkbox"
                        id="terms"
                        checked={formData.terms}  // Para el checkbox, el valor siempre es booleano
                        onChange={handleChange}
                    />
                    <label className="terminos-condiciones" htmlFor="terms">
                        Aceptar los términos y condiciones
                    </label>
                    </div>
                    {errors.terms && <p className="error-message" style={{ color: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>{errors.terms}</p>}

                    <div className="d-flex justify-content-center">
                    <PrincipalButton type="submit" buttonText="ENVIAR" className="submit-button" containerClass="no-margin"/>
                    </div>
                </form>
                {showModalMensaje && (
                <ModalMensajeEnviado onClose={handleCloseModalMensaje} message="Mensaje Enviado" />
            )}
            </div>
        </div>
    </div>
    </>
  );
};
export default FormAndInfo;
