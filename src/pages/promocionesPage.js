import Promociones from "../components/promociones/promociones"
import Menu from "../components/global/menu.js";
import Footer from "../components/global/footer.js";
import { useEffect } from "react";


const PromocionesPage = () =>{
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Menu /> 
            <Promociones />       
            <Footer /> 
        </>
    )
}

export default PromocionesPage;