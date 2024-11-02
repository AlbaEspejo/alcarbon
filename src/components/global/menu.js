import logo from "../../MEDIA/IMG/IMG_LOGO.png"
import loginIcon from "../../MEDIA/ICON/ICON_LOGIN.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "../inicio/inicioPage.css"
import "./global.css"

const Menu = () => {

    const [userName, setUserName] = useState(null);
    const [scrolling, setScrolling] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Obtén los datos de usuario desde sessionStorage
        const storedUserData = sessionStorage.getItem('formData');
    
        if (storedUserData) { 
            try {
                const parsedData = JSON.parse(storedUserData);
    
                // Verifica si es un array y si tiene al menos un elemento
                if (Array.isArray(parsedData) && parsedData.length > 0) {
                    const lastUser = parsedData[parsedData.length - 1]; // Obtén el último usuario del array
                    if (lastUser && lastUser.name) {
                        setUserName(lastUser.name); // Establece el nombre del último usuario
                    }
                }
            } catch (error) {
                console.error("Error parsing user data from sessionStorage:", error);
            }
        }
    }, []);

    const handleDivClick = () => {
        if (userName) {
            setShowLogout(prev => !prev); // Muestra el mensaje de cerrar sesión al hacer clic
        }else {
            // Si no hay nombre de usuario, navegar a la página de registro
            navigate('/registro');
        }
    };
    const handleLogout = () => {
        sessionStorage.removeItem('formData'); // Elimina los datos del sessionStorage
        setUserName(null); // Restablece el nombre
        setShowLogout(false); // Oculta el mensaje de cerrar sesión
        navigate('/'); // Opcional: redirige a la página de inicio de sesión
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const offcanvasElement = document.getElementById('offcanvasNavbar');
        
        // Limpia estilos de overflow y padding en <body>
        const clearBodyStyles = () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.body.removeAttribute('data-bs-overflow');
        };

        // Limpia estilos al cerrar el offcanvas
        const handleOffcanvasClose = () => clearBodyStyles();
        offcanvasElement.addEventListener('hidden.bs.offcanvas', handleOffcanvasClose);

        // Limpia estilos al cambiar de ruta
        clearBodyStyles();

        return () => {
            offcanvasElement.removeEventListener('hidden.bs.offcanvas', handleOffcanvasClose);
        };
    }, [location]);

    
  return (
    <nav className={`navbar fixed-top menu_navegacion ${scrolling ? 'scrolled' : ''}`}>
        <div className="container-fluid">
            <div className="col-2 col-xl-5 logo-div mt-4">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="logo" alt="Logo" ></img>
                </Link>
            </div>
            <div className="enlaces_pagina col-xl-6 col-lg-9 d-none d-lg-flex d-xl-flex d-xxl-flex justify-content-lg-around mt-3 align-items-center">
                <Link to="/" className={`nav-link inicio ${location.pathname === '/' ? 'active' : ''}`}>INICIO</Link>
                <Link to="/carta" className={`nav-link carta-link ${location.pathname === '/carta' ? 'active' : ''}`}>CARTA</Link>
                <Link to="/hacer-pedido" className={`nav-link pedido ${location.pathname === '/hacer-pedido' ? 'active' : ''}`} >HACER PEDIDO</Link>
                <Link to="/reservas" className={`nav-link reserva ${location.pathname === '/reservas' ? 'active' : ''}`} >RESERVAS</Link>
                <Link to="/contacto" className={`nav-link contacto ${location.pathname === '/contacto' ? 'active' : ''}`}>CONTACTO</Link>
                <Link to="/promociones" className={`nav-link promocion ${location.pathname === '/promociones' ? 'active' : ''}`}>PROMOCIONES</Link>
            </div>


            <div
                className={`${userName ? 'div-registrado-icon' : ''} col-1 d-none d-lg-block d-xl-block d-lg-flex d-xl-flex d-xxl-flex justify-content-center flex-column align-items-center`}
                onClick={handleDivClick}
                style={{ cursor: userName ? 'pointer' : 'default' }}
            >
                <Link className="navbar-brand">
                    <img
                        src={loginIcon}
                        className={`logo_login ${userName ? 'small-icon-registrado' : ''}`}
                        alt="Regístrate"
                    />
                </Link>
                {userName && (
                    <>
                        <small className="nombre-registrado">{userName}</small>
                        {showLogout && (
                            <div className="logout-message">
                                <button onClick={handleLogout} className="btn">Cerrar Sesión</button>
                            </div>
                        )}
                    </>
                )}
            </div>

            <button className="navbar-toggler d-md-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">AL CARBÓN</h5>
                <button type="button" className="btn-close btn-close-canvas" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <Link className="nav-link link-offcanvas" aria-current="page" to="/">INICIO</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link-offcanvas" to="/carta">CARTA</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link link-offcanvas" to="/hacer-pedido">HACER PEDIDO</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link link-offcanvas" to="/reservas">RESERVAS</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link-offcanvas" to="/contacto">CONTACTO</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link link-offcanvas" to="/promociones">PROMOCIONES</Link>
                </li>
                
                {userName ? (
                    <li className="nav-item">
                        <button onClick={handleLogout} className="nav-link link-offcanvas">CERRAR SESIÓN</button>
                    </li>
                ) : (
                     <li className="nav-item">
                         <Link className="nav-link link-offcanvas" to="/registro">REGISTRARSE / INICIAR SESIÓN</Link>
                    </li>
                )}
                
                </ul>
                
            </div>
            </div>
        </div>
    </nav>
  );
}

export default Menu;