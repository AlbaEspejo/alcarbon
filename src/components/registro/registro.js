
import Menu from "../global/menu"
import "../global/global.css"
import "./registro.css"
import FormularioRegistro from "./formularioRegistro"
import Footer from "../global/footer"


const Registro = () =>{
    return(
        <>
            <Menu />
            <div className="title-registro">
                <h1 className="title-friend title-registro">CREA TU CUENTA</h1>
            </div>
            <FormularioRegistro />
            <Footer />
        </>
    )
}

export default Registro;