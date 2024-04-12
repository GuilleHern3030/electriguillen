import { Link } from "react-router-dom"
import styles from './Footer.module.css'

import logo from "../../assets/images/icon.webp"
import data from "../../assets/data/data.json"

import facebook from "../../assets/images/facebook-icon.webp";
import instagram from "../../assets/images/instagram-icon.webp";
import twitter from "../../assets/images/twitter-icon.webp";

const goTop = () => window.scrollTo({top:0});

export default () => {

    return <footer className={styles.footer}>

        <div className={styles.pagename_container}>
            <Link className={styles.pagename} to="/" onClick={()=>goTop()}>
                <img className={styles.logo} src={logo}/>
                <p>{data.pagename}</p>
            </Link>
        </div>

        <div className={styles.info}>
            <a href={data.whatsapp}>{data.phone}</a>
            <a aria-label="email" href={`mailto:${data.email}?subject=ElectriGuillen"`}>{data.email}</a>
            <a href={data.address_url}>{data.address}</a>
        </div>

        <div className={styles.social}>
            <a href={data.facebook}><img className={styles.icon} src={facebook}/></a>
            <a href={data.instagram}><img className={styles.icon} src={instagram}/></a>
            <a href={data.twitter}><img className={styles.icon} src={twitter}/></a>
        </div>

        <div className={styles.privacy}>
            <Link to="/privacy" onClick={()=>goTop()}>Aviso legal</Link>
            <a href={data.credits_url}>{data.credits}</a>
        </div>

    </footer>

}