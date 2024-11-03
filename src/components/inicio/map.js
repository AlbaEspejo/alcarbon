
import { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

import CustomAlert from "../global/customAlert";

const Mapa = () => {
  const [mapCenter, setMapCenter] = useState({
    lat: 40.420038,
    lng: -3.701664,
  });

  const [markerPosition, setMarkerPosition] = useState(mapCenter);
  const [address, setAddress] = useState('');
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [customClass, setCustomClass] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            setMarkerPosition(coords);
            setMapCenter(coords); // Centrar el mapa en la ubicación del usuario
            setIsLoading(false);
          },
          () => {
            setIsLoading(false);
          }
        );
      } else {
        setIsLoading(false);
      }
    };

    fetchLocation(); // Llama a la función para obtener la ubicación
  }, []);

  const mapContainerStyle = {
    height: '400px',
    width: '100%',
  };

  // Función para usar la ubicación actual del usuario
  const useMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setMapCenter(coords); // Actualiza el centro del mapa
          setMarkerPosition(coords); // Mueve el marcador a la nueva posición
        },
        () => {
          setAlertMessage("No se pudo obtener la ubicación.");
          setCustomClass("mensaje-alerta")
          setShowAlert(true);
        }
      );
    } else {
      setAlertMessage("Tu navegador no soporta la geolocalización.");
      setCustomClass("mensaje-alerta")
      setShowAlert(true);
    }
  };
  const closeAlert = () => setShowAlert(false);
  const handleGeocode = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        const coords = {
          lat: location.lat(),
          lng: location.lng(),
        };
        setMapCenter(coords);
        setMarkerPosition(coords);
      } else {
        setAlertMessage('No se pudo encontrar la dirección: ' + status);
        setCustomClass("mensaje-alerta")
        setShowAlert(true);
      }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleGeocode();
    }
  };

  return (
    <>
      <div className="map-container">
        <div className="div-search-adress d-flex">
          <input
            type="text"
            value={address}
            className="input-user-adress"
            onChange={(e) => setAddress(e.target.value)}
            placeholder={placeholderVisible ? "Introduce una dirección" : ""}
            onFocus={() => setPlaceholderVisible(false)}
            onBlur={() => setPlaceholderVisible(true)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleGeocode} className="btn btn-principal btn-search-adress">
            Buscar
          </button>
          <button onClick={useMyLocation} className="btn btn-principal btn-use-location">
            Usar mi ubicación
          </button>
        </div>
        {isLoading ? (
          <div>Loading...</div> // Mensaje de carga
        ) : (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={mapCenter}
            zoom={16}
          >
            {markerPosition && <Marker position={markerPosition} />}
          </GoogleMap>
        )}
      </div>
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

export default Mapa;