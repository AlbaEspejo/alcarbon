import { useEffect } from "react";
import Menu from "../components/global/menu";
import Footer from "../components/global/footer";
import "../css/politicaCookies.css"


const PoliticaCookiesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
            <Menu />
            <div className="cookie-policy container-fluid">
                <h2>Política de Cookies</h2>
                <p className="parrafo-principal">
                    Esta Política de Cookies explica cómo AL CARBÓN, S.L. utiliza cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web y ofrecerte servicios personalizados.
                </p>

                <h3>1. ¿Qué son las cookies?</h3>
                <p>
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o smartphone) cuando visitas un sitio web. Estas cookies permiten al sitio recordar tus acciones y preferencias durante un período de tiempo, de modo que no tengas que volver a introducirlas cada vez que regreses al sitio o navegues de una página a otra.
                </p>

                <h3>2. Tipos de cookies que utilizamos</h3>
                <div className="ml-3">
                    <h5>2.1 Cookies esenciales</h5>
                    <p>
                        Estas cookies son necesarias para el funcionamiento del sitio web. Permiten la navegación y el uso de las diferentes funcionalidades del sitio, como el acceso a áreas seguras. Sin estas cookies, el sitio no puede funcionar correctamente.
                    </p>

                    <h5>2.2 Cookies de rendimiento</h5>
                    <p>
                        Estas cookies recopilan información sobre cómo los usuarios interactúan con el sitio web, como las páginas que visitan con más frecuencia y si reciben mensajes de error. La información que recogen es anónima y se utiliza únicamente para mejorar el rendimiento del sitio.
                    </p>

                    <h5>2.3 Cookies de funcionalidad</h5>
                    <p>
                        Estas cookies permiten que el sitio web recuerde las elecciones que realizas (como tu nombre de usuario, idioma o región) y proporcionan características mejoradas y más personales. También pueden usarse para proporcionar servicios que hayas solicitado, como ver un video o comentar en un blog.
                    </p>

                    <h5>2.4 Cookies de publicidad</h5>
                    <p>
                        Estas cookies se utilizan para mostrar anuncios relevantes para ti y tus intereses. También se utilizan para limitar el número de veces que ves un anuncio y ayudar a medir la efectividad de las campañas publicitarias.
                    </p>
                </div>
                <h3>3. ¿Cómo puedes gestionar las cookies?</h3>
                <p>
                    Puedes gestionar las cookies de varias maneras. Ten en cuenta que si decides desactivar las cookies, esto puede afectar tu experiencia en nuestro sitio web. 
                </p>
                <ul>
                    <li>
                        Puedes ajustar la configuración de tu navegador para rechazar las cookies. La mayoría de los navegadores permiten configurar sus preferencias de cookies en la sección de "Configuración" o "Preferencias".
                    </li>
                    <li>
                        También puedes eliminar las cookies existentes desde la configuración de tu navegador. Sin embargo, esto puede hacer que algunas partes de nuestro sitio web no funcionen correctamente.
                    </li>
                </ul>

                <h3>4. Cambios en nuestra Política de Cookies</h3>
                <p>
                    Podemos actualizar nuestra Política de Cookies de vez en cuando para reflejar cambios en nuestras prácticas o en la legislación. Te informaremos de cualquier cambio publicando la nueva Política de Cookies en nuestro sitio web.
                </p>

                <h3>5. Contacto</h3>
                <p>
                    Si tienes alguna pregunta sobre nuestra Política de Cookies, no dudes en ponerte en contacto con nosotros a través del correo electrónico: <a href="mailto:restaurantealcarbon1990@gmail.com">restaurantealcarbon1990@gmail.com</a>.
                </p>
            </div>
            <Footer />
        </>
    )
}

export default PoliticaCookiesPage;