
import Menu from "../global/menu"
import "../global/global.css"
import "./registro.css"
import FormularioRegistro from "./formularioRegistro"
import Footer from "../global/footer"


const Registro = () =>{
    return(
        <>
            <Menu />
            <h1 className="title-registro">CREA TU CUENTA</h1>
            <FormularioRegistro />
            <Footer />
        </>
    )
}

export default Registro;