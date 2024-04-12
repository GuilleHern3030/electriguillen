import { Link } from "react-router-dom"
import styles from "./About.module.css"

// Data
import { pagename } from "../../assets/data/data.json"

// Images
import logo from "../../assets/images/icon.webp"
import caja from "../../assets/images/caja.webp"
import tablero from "../../assets/images/tablero.webp"
import bandeja from "../../assets/images/bandeja.webp"

// Components
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

export default () => {
    
    return <>

        <Header 
            pageName={pagename}
            logo={logo}
            changeBackgroundOnScroll={true}>
            <Link to="/about"> ¿Qué hacemos? </Link>
            {/* <Link to="/gallery"> Galería </Link> */}
            <Link to="/contact"> Contacto </Link>
        </Header>

        <main className={styles.main}>
            
            <section className={styles.sectionwhite}>
                <article className={styles.whatdo}>
                    <p className={styles.whatdo__title}><span>¿QUÉ HACEMOS?</span></p>
                    <p className={styles.whatdo__text}>Nuestros servicios están diseñados para cumplir rigurosamente con las expectativas de nuestros clientes en cuanto a normativas, seguridad, calidad y confiabilidad. Contamos con la confianza y el contacto directo con nuestros clientes, y la responsabilidad es uno de nuestros valores fundamentales. Ofrecemos un amplio servicio eléctrico integral basándonos en nuestra formación contínua y actualización de las normativas permanente.</p>
                </article>
                <article className={styles.whatdo__more}>
                    <p><span>Nuestras tareas incluyen</span></p>
                    <div className={styles.whatdo__list}>
                        <ul>
                            <li>Proyectos en baja tensión</li>
                            <li>Reparación de instalaciones domiciliarias</li>
                            <li>Reparaciones en pequeños locales</li>
                            <li>Ampliaciones y modificaciones en instalaciones monofásicas y trifásicas</li>
                            <li>Trabajos en tableros eléctricos</li>
                            <li>Colocación de puesta a tierra</li>
                        </ul>
                        <ul>
                            <li>Instalación, reparación, modificación, de artefactos de iluminación, lámparas, apliques, iluminación en general, iluminación artística y comercial.</li>
                            <li>Reemplazo parcial o total de cableados de circuitos eléctricos</li>
                            <li>Detección y reparación de fugas, cortocircuitos u otras fallas de cableados</li>
                        </ul>
                    </div>
                </article>
            </section>

            <section className={`${styles.images} ${styles.sectionwhite}`}>
                <img src={caja}/>
                <img src={tablero}/>
                <img src={bandeja}/>
            </section>

        </main>

        <Footer/>

    </>
}