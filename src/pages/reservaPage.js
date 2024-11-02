import Menu from "../components/global/menu"
import Reserva from "../components/reserva/reserva";
import Footer from "../components/global/footer.js";
import { useEffect } from "react";


const ReservaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Menu />
            <Reserva />
            <Footer />
        </>
    )
}

export default ReservaPage;