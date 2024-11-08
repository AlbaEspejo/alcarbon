
import { useRef, useState } from "react";
import Calendario from "./calendario";
import FormularioReserva from "./formularioReserva";
import "./reserva.css"
import PrincipalButton from "../inicio/principalButton";
import ModalMensajeEnviado from "../inicioSesion/modalMensajeEnviado";
import CustomAlert from "../global/customAlert";




const Reserva = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const calendarioRef = useRef(null);

    const [customClass, setCustomClass] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const [formValues, setFormValues] = useState({
        personas: '2',
        nombre: '',
        telefono: '',
        email: '',
        fecha: null,
        hora: null,
    });

    const handleInputChange = (field, value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    };

    const handleDateChange = (date) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            fecha: date.toLocaleDateString(),
        }));
    };

    const handleTimeSelect = (time) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            hora: time,
        }));
    };

    const handleReservarClick = () => {
        const { personas, nombre, telefono, email, fecha, hora } = formValues;

        if (personas && nombre && telefono && email && fecha && hora) {
            setIsModalOpen(true);
        } else {
            setAlertMessage("Por favor, completa todos los campos");
            setCustomClass("mensaje-alerta")
            setShowAlert(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormValues({
            personas: '2',
            nombre: '',
            telefono: '',
            email: '',
            fecha: null,
            hora: null,
        });

        // Llama a la función para reiniciar la hora en Calendario
        if (calendarioRef.current) {
            calendarioRef.current.resetSelection();
        }
    };
    const closeAlert = () => setShowAlert(false);
    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className="title-reserva">HAZ TU RESERVA</h1>
            </div>
            <FormularioReserva onInputChange={handleInputChange} formValues={formValues} />
            <div className="d-flex justify-content-center">
                <hr />
            </div>
            <Calendario 
                ref={calendarioRef} 
                onDateChange={handleDateChange} 
                onTimeSelect={handleTimeSelect} 
            />
            <PrincipalButton 
                onClick={handleReservarClick} 
                type="button"
                buttonText="RESERVAR" 
                containerClass="no-margin" 
                className="mb-5" 
            />
            {isModalOpen && (
                <ModalMensajeEnviado 
                    onClose={closeModal}
                    message="RESERVA CONFIRMADA"
                    className="mi-modal-reserva"
                    showReservationDetails={true}
                    nombre={formValues.nombre.toUpperCase()}
                    fecha={formValues.fecha}
                    hora={formValues.hora}
                    personas={formValues.personas}
                    showCloseButton={false}
                />
            )}
            {/* Modal de alerta personalizado */}
            <CustomAlert
                show={showAlert}
                handleClose={closeAlert}
                message={alertMessage}
                customClass={customClass}
            />
        </>
    );
};

export default Reserva;




