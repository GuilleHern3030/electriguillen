import { Link } from "react-router-dom"
import styles from "./Index.module.css"

// Data
import { pagename } from "../../assets/data/data.json"

// Images
import logo from "../../assets/images/icon.webp"
import caja from "../../assets/images/caja.webp"
import caja2 from "../../assets/images/caja2.webp"
import tablero from "../../assets/images/tablero.webp"
import termica from "../../assets/images/termica.webp"
import bandeja from "../../assets/images/bandeja.webp"
import aparato from "../../assets/images/aparato.webp"

// Components
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import AlternantingImage from "../../components/alternanting-image/AlternantingImage"


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

            <section className={styles.transparent}>
                <article className={styles.infobox}>
                    <div>

                        <p className={styles.infobox__title}><span>NOSOTROS</span></p>
                        <p className={styles.infobox__text}><b>ELECTRI GUILLEN</b> es una iniciativa originaria de Argentina, compuesta por expertos con amplia experiencia y competencia técnica, centrados en ofrecer <b>servicios eléctricos completos y soluciones integrales</b>.</p>
                        
                        <p className={styles.infobox__title}><span>OBJETIVOS</span></p>
                        <p className={styles.infobox__text}>Los principales objetivos de <b>ELECTRI GUILLEN</b> se centran en garantizar la satisfacción del cliente, adoptar las últimas tecnologías y emplear de manera eficiente todos los recursos requeridos para el éxito de cada proyecto..</p>

                    </div>
                    <div>
                        <AlternantingImage src={[tablero, caja]} borderradius={5}/>
                    </div>
                </article>
            </section>

            <section className={styles.infosection}>
                <article className={styles.biginfobox}>
                    <div>

                        <p className={styles.infobox__title}><span>NUESTRO COMPROMISO</span></p>
                        <p className={styles.infobox__text}><b>ELECTRI GUILLEN</b> se compromete con <b>la seguridad, la excelencia y la confiabilidad</b> en todos sus servicios. Cumplimos con los más altos estándares de seguridad y nos ajustamos a todas las regulaciones locales, estatales, federales e internacionales pertinentes.</p>
                        <p className={styles.infobox__text}><b>ELECTRI GUILLEN</b> cuenta con una calificación excepcional para atender las necesidades eléctricas de pequeñas empresas comerciales y hogares de familia. Reconocemos la importancia de ofrecer soluciones eléctricas de forma segura, profesional y puntual para garantizar la satisfacción y seguridad. No dude en ponerse en contacto con nosotros para explorar cómo podemos cubrir sus requerimientos de servicio eléctrico.</p>
                        
                    </div>
                    <div className={styles.infoimages}>
                        <img className={styles.infoimg} src={bandeja}/>
                        <img className={styles.infoimg} src={aparato}/>
                        <img className={styles.infoimg} src={caja}/>
                    </div>
                </article>
            </section>

            <section>
                <p className={styles.banner}>Por su seguridad contrate personal Matriculado</p>
            </section>

            <section className={styles.infobigsection}>
                <article className={styles.infobox}>
                    <div>

                        <p className={styles.infobox__title}><span>Soluciones eficientes para problemas eléctricos generales<br/>______________</span></p>
                        <p className={styles.infobox__text}><b>ELECTRI GUILLEN</b> cuenta con un equipo altamente capacitado, dedicado a ofrecer atención de primera calidad. Nuestra amplia experiencia, profesionalismo y compromiso con cada cliente nos distinguen. No dude en contactarnos; estamos entre sus mejores opciones para satisfacer sus necesidades eléctricas.</p>
                        
                    </div>
                    <div className={styles.infoimages}>
                        {/* <img className={styles.infoimg} src={termica}/> */}
                        <AlternantingImage src={[termica, caja2]} borderradius={5}/>
                    </div>
                </article>
            </section>

        </main>

        <Footer/>
        
    </>
}