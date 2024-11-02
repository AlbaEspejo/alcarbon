import { forwardRef, useImperativeHandle, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendario = forwardRef(({ onDateChange, onTimeSelect }, ref) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    // Exponer una función de reinicio para `Reserva`
    useImperativeHandle(ref, () => ({
        resetSelection() {
            setSelectedDate(null);
            setSelectedTime(null);
        }
    }));

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(null); // Resetear la hora cuando se cambia el día
        onDateChange(date);
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear();
    };

    const isPastTime = (time) => {
        if (!selectedDate || !isToday(selectedDate)) return false;

        const [hour, minute] = time.split(':');
        const now = new Date();
        const selectedTime = new Date();
        selectedTime.setHours(parseInt(hour, 10), parseInt(minute, 10), 0, 0);

        return selectedTime <= now;
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        onTimeSelect(time);
    };

    const comidas = ['13:00', '13:30', '14:00', '14:30', '15:00'];
    const cenas = ['20:00', '20:30', '21:00', '21:30', '22:00'];

    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-lg-6 mb-4 d-flex flex-column">
                    <h2 className="text-center title-fecha">Selecciona una Fecha</h2>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        minDate={new Date()}
                        className="m-auto w-75"
                        tileClassName={({ date }) => 
                            isToday(date) ? 'no-color-fondo' : null
                        }
                    />
                </div>
                <div className="col-lg-6">
                    <h2 className="text-center title-horario">Selecciona Horario de Reserva</h2>
                    <div className="div-comidas-cenas">
                        <div className="mb-4 p-3 comida-reserva">
                            <h5>Comida</h5>
                            <div className="d-flex flex-wrap">
                                {comidas.map((time, index) => (
                                    <button
                                        key={index}
                                        className={`btn btn-horario m-2 ${selectedTime === time ? 'active' : ''}`}
                                        onClick={() => handleTimeSelect(time)}
                                        disabled={isPastTime(time)}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="p-3 cena-reserva">
                            <h5>Cena</h5>
                            <div className="d-flex flex-wrap">
                                {cenas.map((time, index) => (
                                    <button
                                        key={index}
                                        className={`btn btn-horario m-2 ${selectedTime === time ? 'active' : ''}`}
                                        onClick={() => handleTimeSelect(time)}
                                        disabled={isPastTime(time)}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Calendario;

