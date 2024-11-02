import Menu from "../components/global/menu";
import Footer from "../components/global/footer";

import "../css/avisoLegal.css"
import { useEffect } from "react";


const AvisoLegalPage = () => {
    const fechaActual = new Date();
    const opcionesFormato = { day: 'numeric', month: 'long', year: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFormato);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
            <Menu />
            <div className="header-aviso-legal container-fluid">
                <header>
                    <h1>AVISO LEGAL</h1>
                    <p>Última actualización: {fechaFormateada} </p>
                </header>
            </div>
            
            <div className="contenido-aviso-legal container d-flex justify-content-center mb-5">
                <main >
                    <section className="section-aviso-legal">
                        <h4>1. Identificación y Titularidad</h4>
                        <p>
                            Conforme a lo establecido en la normativa vigente, se facilita la siguiente información sobre el propietario del Sitio Web:
                        </p>
                        <ul>
                            <li><strong>Titular del sitio:</strong> AL CARBÓN S.L</li>
                            <li><strong>Dirección:</strong> Avenida Inventada 13</li>
                            <li><strong>Teléfono de contacto:</strong> 911 11 11 11</li>
                            <li><strong>Correo electrónico:</strong> restaurantealcarbon1990@gmail.com</li>
                            <li><strong>CIF/NIF:</strong> B-987654</li>
                        </ul>
                    </section>

                    <section className="section-aviso-legal">
                        <h4>2. Condiciones de Uso</h4>
                        <p>El acceso al Sitio Web implica la aceptación de estas condiciones de uso, que podrán ser modificadas en cualquier momento para garantizar el buen uso del sitio. Se recomienda revisarlas periódicamente.</p>
                        <h5 className="ml-5">Uso de la Página</h5>
                        <p className="ml-5">
                            El usuario se compromete a hacer un uso adecuado del contenido y servicios que el Restaurante ofrece en el Sitio Web. Está prohibido utilizar el Sitio Web para cometer actividades ilícitas o contrarias a la buena fe, o que puedan causar daños en los sistemas físicos o lógicos del Restaurante, de sus proveedores o de terceros.
                        </p>
                    </section>

                    <section className="section-aviso-legal">
                        <h4>3. Propiedad Intelectual e Industrial</h4>
                        <p>
                            Todos los contenidos de este Sitio Web, incluyendo textos, imágenes, gráficos, logotipos, iconos y otros contenidos audiovisuales o sonoros, así como el diseño gráfico y el código fuente, son propiedad exclusiva del Restaurante o de terceros que han autorizado su uso en este Sitio Web.
                        </p>
                        <p>
                            Está prohibida la reproducción, distribución, comunicación pública o transformación de los contenidos sin la autorización expresa del Restaurante. Cualquier uso no autorizado será considerado como un incumplimiento de los derechos de propiedad intelectual o industrial.
                        </p>
                    </section>

                    <section className="section-aviso-legal">
                        <h4>4. Protección de Datos</h4>
                        <p>Para más información sobre cómo recopilamos, utilizamos y protegemos sus datos personales, consulte nuestra <a href="link-a-politica-de-privacidad">Política de Privacidad</a>.</p>
                    </section>

                    <section className="section-aviso-legal">
                        <h4>5. Exclusión de Responsabilidad</h4>
                        <p>
                            El Restaurante no se responsabiliza de los daños o perjuicios derivados del uso de los contenidos de su Sitio Web. Tampoco será responsable de los posibles errores de seguridad que puedan producirse ni de los daños que puedan causarse al sistema informático del usuario o a los archivos almacenados en el mismo.
                        </p>
                        <p>
                            En caso de enlaces o contenidos de terceros, el Restaurante no se hace responsable de la veracidad y exactitud de la información contenida en estos, ni de los perjuicios que se pudieran derivar de dichos enlaces externos.
                        </p>
                    </section>

                    <section className="section-aviso-legal">
                        <h4>6. Modificaciones</h4>
                        <p>
                            El Restaurante se reserva el derecho a realizar sin previo aviso las modificaciones que considere oportunas en su Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través del mismo como la forma en la que éstos aparecen presentados.
                        </p>
                    </section>

                    <section className="section-aviso-legal">
                        <h4>7. Legislación Aplicable y Jurisdicción</h4>
                        <p>
                            Este Aviso Legal se rige por la legislación española o la que corresponda según el país en el que se encuentre el Restaurante. Para cualquier controversia que pudiera derivarse del acceso o uso del Sitio Web, el usuario y el Restaurante acuerdan someterse a la jurisdicción de los juzgados y tribunales de la ciudad de Madrid, salvo que la legislación aplicable determine de manera imperativa otro fuero o legislación.
                        </p>
                    </section>

                    <section className="section-aviso-legal">
                        <h4>8. Contacto</h4>
                        <p>
                            Si tiene alguna duda sobre este Aviso Legal, puede ponerse en contacto con nosotros a través del correo electrónico <a href="mailto:[restaurantealcarbon1990@gmail.com]">restaurantealcarbon1990@gmail.com</a> o mediante el teléfono [Número de teléfono del Restaurante].
                        </p>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default AvisoLegalPage;