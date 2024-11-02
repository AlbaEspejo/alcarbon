
// index.js o App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CartaPage from './pages/cartaPage';
import InicioPage from './pages/inicioPage';
import PedidoPage from './pages/pedidoPage';
import { LoadScript } from '@react-google-maps/api';
import InicioSesionPage from './pages/inicioSesionPage';
import RegistroPage from './pages/registroPage';
import ContactoPage from './pages/contactoPage';
import ReservaPage from './pages/reservaPage';
import PromocionesPage from './pages/promocionesPage';
import PedidoConfirmadoPage from './pages/pedidoConfirmadoPage';
import AvisoLegalPage from './pages/avisoLegalPage';
import PoliticaCookiesPage from './pages/politicaCookiesPage';
import PoliticaPrivacidadPage from './pages/politicaPrivacidadPage';

const App = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCRXu7DBEM6gbMlVX8kyI4NdLFHCrDW4Mg">
      <Router>
        <Routes>
          {/* Asegúrate de que la ruta para Inicio esté correcta */}
          <Route path="/" element={<InicioPage />} />
          <Route path="/carta" element={<CartaPage />} />
          <Route path="/hacer-pedido" element={<PedidoPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/inicio-sesion" element={<InicioSesionPage />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route path="/reservas" element={<ReservaPage />} />
          <Route path="/promociones" element={<PromocionesPage />} />
          <Route path="/pedido-confirmado" element={<PedidoConfirmadoPage />} />
          <Route path="/aviso-legal" element={<AvisoLegalPage />} />
          <Route path="/politica-cookies" element={<PoliticaCookiesPage />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
        </Routes>
      </Router>
    </LoadScript>
  );
};

export default App;
