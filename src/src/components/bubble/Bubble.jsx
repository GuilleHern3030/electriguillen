import styles from './Bubble.module.css'

export default ({src, img, animation=false}) => {
    return <a className={`${styles.bubbleLink} ${animation ? styles.animation : ""}`} href={src}>
        <img className={styles.bubbleImg} src={img}/>
    </a>
}