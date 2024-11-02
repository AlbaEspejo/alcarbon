


const ModalMensajeEnviado = ({ onClose, message, className, children, showCloseButton = true, showReservationDetails, nombre, fecha, hora, personas }) => {
    return (
        <div className={`modal fade show d-block ${className}`}  style={{ backgroundColor: "rgba(0,0,0,0.5)" }} tabIndex="1" role="dialog">
            <div className="modal-dialog modal-dialog-centered m-auto" >
                <div className="modal-content m-auto">
                    <div className="modal-header d-flex">
                        <h5 className="modal-title">{message}</h5>
                        {showCloseButton && (
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                        )}
                    </div>
                    <div className="modal-body modal-reserva">
                        {children}
                        {showReservationDetails && (
                            <>
                                <div className="d-flex flex-column justify-content-center">
                                    <p className="datos-reserva nombre-reserva">Reserva a nombre de <strong>{nombre}</strong></p>
                                    <p className="datos-reserva fecha-reserva">Fecha de reserva: <strong>{fecha}</strong></p>
                                    <p className="datos-reserva hora-reserva">Hora de reserva: <strong>{hora}</strong></p>
                                    {personas <= 10 && (
                                        <div className="col-12 mt-3">
                                            <p className="datos-reserva hora-reserva">
                                                Para: <strong>{personas} {personas === '1' ? 'Persona' : 'Personas'}</strong>
                                            </p>
                                        </div>
                                    )}
                                    {personas > 10 && (
                                    <p className="text-center reserva-grupos">Por favor, contacta con el restaurante para confirmar la reserva de más de 10 personas.</p>
                                     )}
                                </div>
                            </>
                        )}
                    </div>
                    <div className="modal-footer d-flex m-auto">
                        <button type="button" className="btn btn-cerrar-modal" onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ModalMensajeEnviado;