

import { useState, useEffect } from 'react';

const Contador = ({ setLineas }) => {
    const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutos en segundos
    const [endTime, setEndTime] = useState(null);

    useEffect(() => {
        // Obtiene la hora actual y añade 15 minutos
        const now = new Date();
        const newTime = new Date(now.getTime() + 15 * 60 * 1000);
        setEndTime(newTime);

        const interval = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev > 0) {
                    return prev - 1;
                }
                clearInterval(interval);
                return 0;
            });
        }, 1000);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    // Usamos otro useEffect para actualizar las líneas
    useEffect(() => {
        
        if (timeRemaining <= 5 * 60) {
            setLineas((prev) => ({
                ...prev,
                linea1Fija: true,
                linea2Activa: true,
            }));
        }
        if (timeRemaining === 0) {
            setLineas((prev) => ({
                ...prev,
                linea2Activa:true,
                linea2Fija: true,
            }));
        }
    }, [timeRemaining, setLineas]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className='d-flex justify-content-evenly'>
            <div className='d-flex align-items-center'>
                <h4 className='title-hora'>Hora de llegada estimada:</h4>
                {endTime && <p className='hora'>{endTime.toLocaleTimeString()}</p>}
            </div>
            <div className='d-flex align-items-center'>
                <h4 className='title-contador'>Tiempo restante:</h4>
                <p className='contador-numero'>{formatTime(timeRemaining)}</p>
            </div>
        </div>
    );
};

export default Contador;







