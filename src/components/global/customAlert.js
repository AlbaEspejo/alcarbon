import "./customAlert.css"

import { Modal } from 'react-bootstrap';
import PrincipalButton from '../inicio/principalButton';

const CustomAlert = ({ show, handleClose, message, customClass }) => {
    console.log("Message:", message);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body className={customClass}>{message}</Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <PrincipalButton onClick={handleClose} buttonText="Cerrar" className="btn-mensaje-alerta" containerClass="no-margin" />
      </Modal.Footer>
    </Modal>
  );
};

export default CustomAlert;
