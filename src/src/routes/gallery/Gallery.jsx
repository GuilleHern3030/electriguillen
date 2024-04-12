import { Link } from "react-router-dom"
import styles from "./Gallery.module.css"

// Data
import { pagename, whatsapp } from "../../assets/data/data.json"

// Images
import logo from "../../assets/images/icon.webp"
import whatsappicon from "../../assets/images/whatsapp-icon2.webp"

// Components
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Bubble from "../../components/bubble/Bubble"

export default () => {
    
    return <>

        <Header 
            pageName={pagename}
            logo={logo}
            changeBackgroundOnScroll={true}>
            <Link to="/about"> ¿Qué hacemos? </Link>
            <Link to="/gallery"> Galería </Link>
            <Link to="/contact"> Contacto </Link>
        </Header>

        <main>
            
        </main>

        <Footer/>

    </>
}