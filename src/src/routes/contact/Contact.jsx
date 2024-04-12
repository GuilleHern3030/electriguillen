import { Link } from "react-router-dom"
import styles from "./Contact.module.css"

// Data
import data from "../../assets/data/data.json"

// Images
import logo from "../../assets/images/icon.webp"
import whatsapp from "../../assets/images/whatsapp-icon.webp";
import facebook from "../../assets/images/facebook-icon.webp";
import instagram from "../../assets/images/instagram-icon.webp";
import twitter from "../../assets/images/twitter-icon.webp";
import photo from "../../assets/images/perfil-photo.webp";

// Components
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

export default () => {
    
    return <>

        <Header 
            pageName={data.pagename}
            logo={logo}
            changeBackgroundOnScroll={true}>
            <Link to="/about"> ¿Qué hacemos? </Link>
            {/* <Link to="/gallery"> Galería </Link> */}
            <Link to="/contact"> Contacto </Link>
        </Header>

        <main className={styles.main}>
            <section className={styles.sectionwhite}>
                
                <article className={styles.article} style={{backgroundColor:"#e9e9e9"}}>
                    <p className={styles.title}><span>Medio de contacto</span></p>
                    <p>Podés contactarnos a través de nuestro WhatsApp</p>
                    <a href={data.whatsapp}><img className={`${styles.icon} ${styles.preferredcontact}`} src={whatsapp}/></a>
                </article>
                
                <article className={styles.article} style={{backgroundColor:"#c9c3c3"}}>
                    <p className={styles.title}><span>Nuestras redes sociales</span></p>
                    <p>También podés encontrarnos en nuestras redes sociales</p>
                    <div className={styles.social}>
                        <a href={data.facebook}><img className={styles.icon} src={facebook}/></a>
                        <a href={data.instagram}><img className={styles.icon} src={instagram}/></a>
                        <a href={data.twitter}><img className={styles.icon} src={twitter}/></a>
                    </div>
                </article>
                
                <article className={styles.article} style={{backgroundColor:"#e9e9e9"}}>
                    <p className={styles.title}><span>Correo electrónico</span></p>
                    <p>O contactarnos por email</p>
                    <a className={styles.email} aria-label="email" href={`mailto:${data.email}?subject=ElectriGuillen"`}>{data.email}</a>

                </article>

            </section>

            <section className={styles.photo}>
                <img src={photo}/>
            </section>
        </main>

        <Footer/>

    </>
}