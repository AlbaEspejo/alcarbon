import { useEffect } from "react";
import Menu from "../components/global/menu"
import Footer from "../components/global/footer";
import "../css/politicaPrivacidad.css"

const PoliticaPrivacidadPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
            <Menu />
            <div className="container-fluid div-tabla-privacidad">
                <h3>Información básica sobre Protección de Datos</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Responsable del tratamiento</th>
                            <td>AL CARBÓN, S.L.</td>
                        </tr>
                        <tr>
                            <th>Finalidad del tratamiento y Legitimación</th>
                            <td>
                                <strong><u>Finalidad 1:</u></strong> Gestionar la entrega del pedido y atender quejas o sugerencias recibidas en función del pedido realizado.<br />
                                <strong>Base legitimadora:</strong> Parte de la relación contractual con el cliente en la realización del pedido.<br /><br />

                                <strong><u>Finalidad 2:</u></strong> Envío de encuestas y el tratamiento de la satisfacción cliente.<br />
                                <strong>Base legitimadora:</strong> Interés legítimo de AL CARBÓN, S.L. para poder conocer el impacto de sus servicios y/o productos en sus clientes.<br /><br />

                                <strong><u>Finalidad 3:</u></strong> Envío de información o comunicaciones comerciales por cualquier medio sobre los productos y/o servicios ofrecidos por la entidad, así como, adecuar las ofertas comerciales a las preferencias del cliente a partir del estudio y segmentación de la información personal y comercial.<br />
                                <strong className="ml-4">Base legitimadora:</strong> Consentimiento expreso del interesado al marcar la casilla aceptando las comunicaciones comerciales personalizadas.
                            </td>
                        </tr>
                        <tr>
                            <th>Destinatarios de datos</th>
                            <td>Los datos facilitados podrán ser comunicados a cualquier entidad de AL CARBÓN, S.L., así como a cualquier tercero, cuando sea necesario para dar cumplimiento a las finalidades del tratamiento.</td>
                        </tr>
                        <tr>
                            <th>Destinatarios de transferencias internacionales de datos</th>
                            <td>Los datos facilitados podrán ser comunicados a terceros cuando sea necesario para cumplir con las finalidades del tratamiento.</td>
                        </tr>
                        <tr>
                            <th>Derechos de los interesados</th>
                            <td>Derecho a acceder, rectificar y suprimir los datos, así como otros derechos, como se explica y detalla en la información adicional.</td>
                        </tr>
                        <tr>
                            <th>Información adicional</th>
                            <td>Puede consultar la información adicional y detallada sobre Protección de Datos en: <strong>*Información adicional y detallada</strong>.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="additional-info p-5">
                <h2>Información adicional y detallada</h2>
                <p>
                    El presente documento tiene por objeto establecer la Política de Privacidad de este sitio web, portal titularidad de AL CARBÓN, S.L., con domicilio social en C/Inventada 13 (Madrid) y NIF B-987654.
                </p>
                <p>
                    En este documento te explicamos cómo recopilamos, utilizamos, compartimos y protegemos tu información de carácter personal a raíz de la contratación y uso que haces de nuestros productos, servicios y de nuestro sitio web.
                </p>
                <p>
                    Nos importa la opinión de nuestros clientes, por lo que si tienes alguna pregunta sobre nuestra Política de Privacidad, puedes contactarnos en la dirección mencionada anteriormente o hacerlo a través de un correo electrónico dirigido a la siguiente dirección de correo electrónico: <a href="mailto:restaurantealcarbon1990@gmail.com">restaurantealcarbon1990@gmail.com</a>.
                </p>
                <p>
                    Para nosotros es muy importante la transparencia, es por ello que te pedimos que dediques unos instantes a la lectura de esta Política de Privacidad, cuyo objetivo es garantizar el total cumplimiento del Reglamento General de Protección de Datos, a fin de que puedas tomar una decisión al respecto.
                </p>
                
                <h3>1) Responsable del tratamiento</h3>
                <p>¿Quién es el Responsable del tratamiento de sus datos?</p>
                <p><strong>Identidad:</strong> AL CARBÓN, S.L. – B987654</p>
                <p><strong>Dirección postal:</strong> C/ Inventada 13, Madrid</p>
                <p><strong>Teléfono:</strong> 911 11 11 11</p>
                <p><strong>Contacto DPO:</strong> <a href="mailto:restaurantealcarbon1990@gmail.com">restaurantealcarbon1990@gmail.com</a></p>
                
                <h3>2) Finalidad del tratamiento</h3>
                <h5 className="ml-4">2.1) ¿Con qué finalidad tratamos sus datos personales?</h5>
                <p>En AL CARBÓN, S.L. se trata la información facilitada por las personas interesadas con el fin de:</p>
                <ul>
                    <li>i. Gestionar la entrega del pedido y atender quejas o sugerencias recibidas en función del pedido realizado.</li>
                    <li>ii. Envío de encuestas de satisfacción relacionadas con el pedido realizado por el cliente.</li>
                    <li>iii. Envío de información o comunicaciones comerciales, por cualquier medio, sobre los productos y/o servicios de la entidad, así como, adecuar las ofertas comerciales a las preferencias del cliente a partir del estudio y segmentación de la información personal y comercial.</li>
                </ul>
                <p>
                    En caso de que AL CARBÓN, S.L. trate sus datos para unos fines distintos para los que se obtuvieron (definidos anteriormente) se le proporcionará, antes de dicho tratamiento, información sobre esta nueva finalidad.
                </p>
                <p>
                    El interesado será el único responsable en el supuesto de haber facilitado datos falsos, inexactos, incompletos o no actualizados.
                </p>

                <h5 className="ml-4">2.2) ¿Por cuánto tiempo conservaremos sus datos?</h5>
                <p>
                    Los datos personales proporcionados se conservarán mientras no solicite su supresión o cancelación y siempre que resulten adecuados, pertinentes y limitados a lo necesario para los fines para los que sean tratados.
                </p>

                <h5 className="ml-4">2.3) ¿Será necesario que nos facilite todos sus datos?</h5>
                <p>
                    Sí, será necesario que nos facilite todos los datos personales que se identifican como obligatorios en el registro del pedido.
                </p>

                <h3>3) Confidencialidad</h3>
                <p>
                    AL CARBÓN, S.L. se compromete a respetar su confidencialidad y a utilizarlos de acuerdo con las finalidades propias del tratamiento, así como a dar cumplimiento a su obligación de guardarlos y adaptar todas las medidas para evitar la alteración, pérdida, tratamiento o acceso no autorizado, de acuerdo con lo establecido en el RGPD. (Reglamento General de Protección de Datos) y en la LOPDGDD (Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales).
                </p>

                <h3>4) Norma de uso y responsabilidad del usuario</h3>
                <p>
                    El usuario declara y garantiza que es mayor de edad y dispone de capacidad legal necesaria para contratar los servicios ofertados en el Sitio.
                </p>
                <p>
                    A este respecto, AL CARBÓN, S.L. podrá adoptar todas las medidas que estime convenientes para proceder a la comprobación efectiva de la edad de los usuarios, y podrán ser requeridos por AL CARBÓN, S.L. en cualquier momento, para que acrediten su edad mediante la aportación de la fotocopia de su DNI o documento equivalente. La respuesta negativa a este requerimiento por parte del usuario, así como la ausencia de respuesta en el plazo que le sea indicado por AL CARBÓN, S.L. dará derecho a este último a suspender o cancelar el registro del usuario.
                </p>
                <p>
                    En el caso de que en algún momento AL CARBÓN, S.L lanzara alguna promoción especial referida a productos o servicios destinados al público infantil, AL CARBÓN, S.L se reservaría el derecho a articular los mecanismos legales oportunos para permitir la participación de menores de edad en dichas promociones, obteniendo el consentimiento de padres o tutores cuando así proceda, y adoptando en su caso medidas especiales de comprobación y seguridad de los datos.
                </p>
                <p>
                    El usuario se compromete a no realizar pedidos falsos o fraudulentos y a facilitar los datos necesarios de forma veraz y exacta. La falta de veracidad o la entrega incompleta de los datos facilitados será exclusivamente responsabilidad del usuario y podrá significar la no realización del pedido por parte de AL CARBÓN, S.L.
                </p>

                <h3>5) Legitimación</h3>
                <h5 className="ml-4">5.1) ¿Cuál es la legitimación para el tratamiento de sus datos?</h5>
                <p>
                    La base legal para el tratamiento de sus datos está basada en la relación contractual en la que el cliente es parte al realizar un pedido, así como el interés legítimo de AL CARBÓN, S.L para poder conocer el impacto de sus servicios y/o productos en sus clientes, y el consentimiento expreso del interesado al marcar la casilla que permite las comunicaciones comerciales personalizadas.
                </p>
                <h5 className="ml-4">5.2) ¿Tiene el interesado derecho a retirar su consentimiento?</h5>
                <p>
                    Sí, el interesado tiene derecho a retirar su consentimiento en cualquier momento, sin que esto afecte a la licitud del tratamiento basada en el consentimiento previo a su retirada.
                </p>
                <h5 className="ml-4">5.3) ¿Se realizarán decisiones individuales automatizadas y/o elaboración de perfiles, que produzcan efectos jurídicos o afecten al interesado significativamente de modo similar?</h5>
                <p>
                    No, en AL CARBÓN, S.L no se llevarán a cabo decisiones automatizadas ni elaboración de perfiles con los datos facilitados por el interesado.
                </p>

                <h3>6) Destinatarios de datos</h3>
                <h5 className="ml-4">6.1) ¿Se compartirán sus datos con otras empresas y/o terceros?</h5>
                <p>
                    Sí, los datos podrán ser comunicados a entidades de AL CARBÓN, S.L, así como a terceros, para llevar a cabo los fines descritos en el apartado ‘¿Con qué finalidad tratamos sus datos personales?’.
                </p>

                <h3>7) Destinatarios de transferencias internacionales de datos</h3>
                <h5 className="ml-4">7.1) ¿A qué destinatarios se comunicarán sus datos?</h5>
                <p>
                    AL CARBÓN, S.L podrá comunicar sus datos, para los fines descritos en el apartado ‘¿Con qué finalidad tratamos sus datos personales?’, a otras empresas del Grupo AL CARBÓN, S.L, ubicadas fuera del Espacio Económico Europeo, dentro del sector de la restauración, así como a otras empresas afines a sus actividades y promociones (ocio, viajes, alimentación, telecomunicaciones, cultura y servicios) que colaboren ahora o en el futuro en las actividades o campañas promocionales que desarrolle AL CARBÓN, S.L.
                </p>

                <h3>8) Derechos de los interesados</h3>
                <h5 className="ml-4">8.1) ¿Cuáles son sus derechos cuando nos facilita sus datos?</h5>
                <p>
                    Cualquier persona tiene derecho a obtener confirmación sobre si en AL CARBÓN, S.L se están tratando datos personales que le conciernen, o no.
                </p>
                <p>
                    Asimismo, tal y como prevé el Reglamento General de Protección de Datos, le informamos que usted tiene los siguientes derechos:
                </p>
                <ul>
                    <li>i. Acceder a sus datos: Ud. tiene derecho a acceder a sus datos para conocer qué datos personales estamos tratando que le conciernen.</li>
                    <li>ii. Solicitar la rectificación o supresión de sus datos: En determinadas circunstancias, Ud. tiene derecho a rectificar aquellos datos personales inexactos que le conciernen que sean objeto de tratamiento por nuestra parte o, incluso, a solicitarnos su supresión cuando, entre otros motivos, los datos ya no fueran necesarios para los fines que fueron recogidos.</li>
                    <li>iii. Solicitar la limitación del tratamiento de sus datos: En determinadas circunstancias, Ud. tendrá derecho a solicitarnos la limitación del tratamiento de sus datos, en cuyo caso le informamos que únicamente los conservaremos para el ejercicio o defensa de reclamaciones tal y como prevé el Reglamento General de Protección de Datos.</li>
                    <li>iv. A la portabilidad de sus datos: En determinadas circunstancias, Ud. tendrá derecho a recibir los datos personales que le incumban, y que nos haya facilitado, en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento.</li>
                    <li>v. Oponerse al tratamiento de sus datos: En determinadas circunstancias y por motivos relacionados con su situación particular, Ud. tendrá derecho a oponerse al tratamiento de sus datos en cuyo caso, dejaríamos de tratarlos salvo que por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.</li>
                </ul>

                <h5 className="ml-4">8.2) ¿Dónde debe dirigirse para el ejercicio de sus derechos?</h5>
                <p>
                    Para el ejercicio de los derechos, anteriormente mencionados, el interesado podrá ponerse en contacto con AL CARBÓN, S.L por escrito, indicando en el sobre “Protección de datos”, al DPO de TELE PIZZA S.A.U., calle Isla Graciosa, nº7, Parque Empresarial “La Marina”, C.P. 28703, San Sebastián de los Reyes, Madrid, o bien, mediante correo electrónico a la dirección: <a href="mailto:restaurantealcarbon1990@gmail.com">restaurantealcarbon1990@gmail.com</a>.
                </p>
                <h5 className="ml-4">8.3) ¿Cuándo responderemos su solicitud?</h5>
                <p>
                    Responderemos a su petición en la mayor brevedad posible y, en todo caso, en el plazo máximo de un mes desde la recepción de la solicitud. Teniendo en cuenta la complejidad y el número de solicitudes recibidas, dicho plazo podrá prorrogarse otros dos meses en caso de necesidad, en cuyo caso, AL CARBÓN, S.L informará al interesado de dichas prórrogas en el plazo de un mes a partir de la recepción de la solicitud, indicando los motivos de dicha dilación.
                </p>
                <h5 className="ml-4">8.4) ¿Tiene el interesado derecho a reclamar?</h5>
                <p>
                    Sí, el interesado, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos, tiene derecho a presentar una reclamación ante la autoridad nacional de control, siendo en el presente caso la Agencia Española de Protección de Datos.
                </p>
                <p>
                    Con carácter previo a la presentación de dicha reclamación el interesado puede dirigirse a la dirección de correo electrónico: <a href="mailto:restaurantealcarbon1990@gmail.com">restaurantealcarbon1990@gmail.com</a>.
                </p>

                <h3>9) Seguridad de los datos</h3>
                <p>
                    Con el objetivo de salvaguardar la seguridad de sus datos personales, le informamos que hemos adoptado todas las medidas de índole técnica y organizativa necesarias para garantizar la seguridad de los datos personales suministrados de su alteración, pérdida, uso indebido, divulgación, y tratamientos o accesos no autorizados, tal como exige la normativa de protección de datos de carácter personal. En este sentido, AL CARBÓN, S.L garantiza la custodia de los datos objeto de tratamiento, para lo cual adoptará las medidas pertinentes con tales fines, siempre de conformidad con el estado de la tecnología en cada momento. Nuestras medidas de seguridad son permanentemente actualizadas de acuerdo con el desarrollo tecnológico y obligaciones de la normativa en protección de datos.
                </p>
                <p>
                    En el caso de que usted facilite datos de un tercero, por ejemplo, para solicitar un pedido de un producto ofertado por AL CARBÓN, S.L, se le informa que será responsable de haber obtenido el consentimiento de la persona y de los datos de la misma que facilite a AL CARBÓN, S.L.
                </p>
                <p>
                    Además, en caso de que tenga preguntas acerca del tratamiento de sus datos personales, puede dirigirse a la entidad arriba descrita, en su calidad de Responsable, quien está a su disposición en caso de que necesite información adicional al tratamiento de sus datos personales, desee hacer sugerencias o plantear quejas.
                </p>
                <p>
                    AL CARBÓN, S.L no se responsabiliza del tratamiento de sus datos personales de las páginas web que no estén bajo el dominio de AL CARBÓN, S.L, a las que pueda acceder a través de los distintos links que contiene nuestro sitio Web, ni de las medidas de seguridad adoptadas por cualquier otra página Web que permita un vínculo con la nuestra.
                </p>
                <div className="d-flex justify-content-center">
                    <p className="final-aviso-legal">
                        ESTE AVISO LEGAL DE PROTECCIÓN DE DATOS PREVALECERÁ FRENTE A CUALQUIER OTRO AVISO LEGAL/CLÁUSULA DE PROTECCIÓN DE DATOS QUE CONTENGA CUALQUIER CONDICIÓN QUE CONTRADIGA LO AQUÍ ESTABLECIDO.
                    </p>
                </div>
                
            </div>
            <Footer />
        
        </>
    )
}

export default PoliticaPrivacidadPage;