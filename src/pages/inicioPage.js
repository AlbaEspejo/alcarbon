import MainContent from "../components/inicio/mainContent";
import Menu from "../components/global/menu";

import "../components/inicio/inicioPage.css"
import "../components/global/global.css"
import Footer from "../components/global/footer";
import CookieConsentModal from "../components/inicio/aceptCookie.js";
import { useEffect } from "react";

const Inicio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Menu />
            <MainContent />
            <Footer />
            <CookieConsentModal />
        </>
    )
}

export default Inicio;