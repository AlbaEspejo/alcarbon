import imgPrincipal from "../../MEDIA/IMG/IMG_PORTADA.png"
import imgAboutUs from "../../MEDIA/IMG/IMG_COCINA_2.png"
import gif from "../../MEDIA/IMG/IMG_NEWSLETTER.gif"
import movil from "../../MEDIA/IMG/IMG_MOVIL.png"
import bannerRegalo from "../../MEDIA/IMG/IMG_TARJETA_REGALO.png"

import { useEffect, useState } from "react";
import { restaurantData, restaurantMenu } from './data.js';
import PrincipalButton from "./principalButton";
import Carrusel from "./carrusel.js"
import Mapa from "./map.js"
import { useNavigate } from "react-router-dom"


const MainContent = () =>{
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => {
          setScrollPosition(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    const translateValue = window.innerWidth < 768 
        ? `${scrollPosition * -0.2}px`
        : `${scrollPosition * -0.15}px`;


    const navigate = useNavigate();

    const handleRegistroClick = () => {
        navigate('/inicio-sesion');
    };

    return(
        <>
            <div className="container-fluid img_intro d-flex col-12">
                <img src={imgPrincipal} className="img_principal" alt="Imagen Hamburguesa"></img>
                <h1>¡LA CONOCES Y <span>TE ENCANTA!</span></h1>
            </div>
            <div className="about_us container-fluid mt-5 d-flex flex-column flex-md-row col-12">
                <div className="img_about_us col-12 col-lg-8">
                    <img src={imgAboutUs} className="img_about_us" alt="Sobre Nosotros"></img>
                </div>
                <div className="text_about_us col-12 col-lg-4" style={{ transform: `translate(${window.innerWidth < 768 ? '0' : translateValue}, ${window.innerWidth < 768 ? translateValue : '0'})` }}>
                    <h3>SOBRE NOSOTROS</h3>
                    <p>Desde 1990 ofreciendo una experiencia culinaria única.</p>
                    <p>Cocinando sobre brasas de carbón para obtener un sabor ahumado y una textura inigualable.</p>
                    <p>Masas y salsas artesanales, acompañado de ingredientes frescos de la mejor calidad.</p>
                </div>
            </div>

            {/* Carrusel Restaurantes*/}
            <div>
                <Carrusel data={restaurantData} title="RESTAURANTES" />
            </div>

            {/* Subscríbete */}
            <div className="subscribe d-flex container-fluid flex-column flex-md-row align-items-center">
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end div-gif">
                    <img src={gif} alt="Descripción del GIF" className="img-fluid gif-carne" />
                </div>
                <div className="col-12 col-md-2 d-flex justify-content-center div-movil">
                    <img src={movil} alt="Descripción del móvil" className="img-fluid logo-movil" />
                </div>
                <div className="col-12 col-md-4">
                    <div className="row">
                        <div className="col-12 d-flex flex-column text-center justify-content-center div-texto">
                            <h1>ÚNETE AL CLUB</h1>
                            <h3>TU FIDELIDAD SERÁ PREMIADA</h3>
                            <p>
                                Bienvenido al club de fidelización del Grupo al Carbón donde estarás acumulando euros 
                                cada vez que vengas a nuestros restaurantes. Grandes descuentos y premios te están esperando.
                            </p>
                        </div>
                        <PrincipalButton buttonText="UNIRME AL CLUB" onClick={handleRegistroClick} />
                    </div>
                </div>
            </div>

            {/* Banner Tarjeta Regalo  */}
            <div className="container-fluid banner-regalo">
                <img src={bannerRegalo} alt="Tarjeta Regalo" className="img-fluid"></img>
            </div>

            {/* Carrusel Carta Restaurante */}
            <Carrusel data={restaurantMenu} title="CARTA" />

            {/* Mapa Restaurantes */}
            <div className="d-flex justify-content-center">
                <h1 className="search-restaurant">ENCUENTRA TU RESTAURANTE MÁS CERCANO</h1>
            </div>
            <div className="mapa mb-5">
                <Mapa /> 
            </div>
        </>
    )
}

export default MainContent;