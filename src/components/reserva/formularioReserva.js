

import React, { useState } from 'react';

const FormularioReserva = ({ onInputChange, formValues }) => {
    const [errors, setErrors] = useState({
        telefono: '',
        email: '',
    });
    const [emailFocused, setEmailFocused] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateTelefono = (telefono) => {
        const regex = /^\d{9}$/; // Ejemplo: un número de teléfono de 9 dígitos
        return regex.test(telefono);
    };

    const handleInputChange = (field, value) => {
        onInputChange(field, value);

        // Validación de email
        if (field === 'email') {
            if (!validateEmail(value)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: 'Email no válido',
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: '',
                }));
            }
        }

        // Validación de teléfono
        if (field === 'telefono') {
            if (!validateTelefono(value)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    telefono: 'Teléfono no válido. Debe tener 9 dígitos.',
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    telefono: '',
                }));
            }
        }
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center formulario-reserva">
                <div className="col-sm-6 col-md-3">
                    <label htmlFor="personasReserva" className="personasReserva">Personas</label>
                    <select 
                        value={formValues.personas} // Asegúrate de usar el valor de formValues
                        onChange={(e) => handleInputChange('personas', e.target.value)} 
                        className="form-select" 
                        id="personasReserva"
                    >
                        {[...Array(11).keys()].map((i) => (
                            <option key={i} value={i + 1}>{i + 1} Persona{(i + 1) > 1 ? 's' : ''}</option>
                        ))}
                    </select>
                </div>

                <div className="col-sm-6 col-md-3">
                    <label htmlFor="nombreReserva" className="nombreReserva">Nombre</label>
                    <input 
                        type="text" 
                        value={formValues.nombre} // Asegúrate de usar el valor de formValues
                        onChange={(e) => handleInputChange('nombre', e.target.value)} 
                        className="form-control" 
                        id="nombreReserva" 
                    />
                </div>

                <div className="col-sm-6 col-md-3">
                    <label htmlFor="telefonoReserva" className="telefonoReserva">Teléfono</label>
                    <input 
                        type="text" 
                        value={formValues.telefono} // Asegúrate de usar el valor de formValues
                        onChange={(e) => handleInputChange('telefono', e.target.value)} 
                        className="form-control" 
                        id="telefonoReserva" 
                    />
                    {errors.telefono && <small className="text-danger">{errors.telefono}</small>}
                </div>

                <div className="col-sm-6 col-md-3">
                    <label htmlFor="emailReserva" className="emailReserva">Email</label>
                    <input
                        type="email"
                        value={formValues.email} // Asegúrate de usar el valor de formValues
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="form-control"
                        id="emailReserva"
                        placeholder={!emailFocused ? "name@example.com" : ""}
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)} 
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
            </div>
        </div>
    );
};

export default FormularioReserva;

