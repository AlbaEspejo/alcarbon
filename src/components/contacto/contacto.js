
import "./contacto.css";
import PrincipalButton from "../inicio/principalButton"
import { useState } from "react";
import ModalMensajeEnviado from "../inicioSesion/modalMensajeEnviado";

const Contacto = () => {

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        terms: false,
      });    
    const [showModalMensaje, setShowModalMensaje] = useState(false);

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [id]: type === "checkbox" ? checked : value,
        });
    };

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

      const handleCloseModalMensaje = () => {
        setShowModalMensaje(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            terms: false,
        });
        setErrors({});
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className="title-contacto">VEN A VISITARNOS</h1>
            </div>


            <div className="container-contacto row d-flex">
                        {/* Primer Div */}
                        <div className="left-div-contacto col-lg-6 col-md-6 col-12">
                            <h2 className="form-title ml-5">TE ESTAMOS ESPERANDO</h2>
                            <div className="bg-datos w-75">
                                <div className="datos">
                                    <h4>NUESTRA DIRECCIÓN</h4>
                                    <p className="parrafo-contacto">Calle  Avenida de Prueba nº8</p>
                                    <p className="parrafo-contacto">28000 - Madrid</p>
                                </div>
                                <div className="datos mt-4">
                                    <h4>NUESTROS HORARIOS</h4>
                                    <p className="parrafo-contacto"><span>Lunes:</span> 13:30-16:45 | 20:00-23:00</p>
                                    <p className="parrafo-contacto"><span>Martes:</span> 13:30-16:45 | 20:00-23:00</p>
                                    <p className="parrafo-contacto"><span>Miércoles:</span> 13:30-16:45 | 20:00-23:00</p>
                                    <p className="parrafo-contacto"><span>Jueves:</span> 13:30-16:45 | 20:00-23:00</p>
                                    <p className="parrafo-contacto"><span>Viernes:</span> 13:30-16:45 | 20:00-24:00</p>
                                    <p className="parrafo-contacto"><span>Sábado:</span> 13:30-16:45 | 20:00-24:00</p>
                                    <p className="parrafo-contacto"><span>Domingo:</span> 13:30-16:45 | 20:00-23:00</p>
                                </div>
                                <div className="datos mt-4">
                                    <h4>NUESTROS TELÉFONOS</h4>
                                    <p className="parrafo-contacto">911 11 11 11 / 622 22 22 22</p>
                                </div>
                            </div>
                        </div>

                        {/* Segundo Div - Formulario */}
                        <div className="right-div-contacto col-lg-6 col-md-6 col-10 d-flex flex-column m-auto">
                            <h2 className="form-title">ESCRÍBENOS</h2>
                            <form className="form-container mt-2" onSubmit={handleSubmit}>
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-input"
                                    value={formData.name || ""}
                                    onChange={handleChange}
                                    placeholder={errors.name ? errors.name : ""}
                                    style={errors.name ? { borderColor: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif' } : {}}
                                />

                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"
                                    value={formData.email || ""}
                                    onChange={handleChange}
                                    placeholder={errors.email ? errors.email : ""}
                                    style={errors.email ? { borderColor: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif' } : {}}
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
                                    value={formData.message || ""}
                                    onChange={handleChange}
                                    placeholder={errors.message ? errors.message : ""}
                                    style={errors.message ? { borderColor: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif' } : {}}
                                ></textarea>

                                <div className="terms-container">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                    />
                                    <label className="terminos-condiciones" htmlFor="terms">
                                        Aceptar los términos y condiciones
                                    </label>
                                </div>
                                {errors.terms && <p className="error-message" style={{ color: 'red', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>{errors.terms}</p>}

                                <div className="d-flex justify-content-center">
                                    <PrincipalButton type="submit" buttonText="ENVIAR" className="submit-button btn-contacto" containerClass="no-margin"/>
                                </div>
                            </form>
                            {showModalMensaje && (
                                <ModalMensajeEnviado onClose={handleCloseModalMensaje} message="Mensaje Enviado" />
                            )}
                        </div>
            </div>

        </>

    )

}

export default Contacto;