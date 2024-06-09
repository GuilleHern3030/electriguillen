import { useEffect, useState } from 'react'
import styles from './AlternantingImage.module.css'

export default ({minheight="400px", timems=5000, borderradius=0, src}) => {

    const [ i, setI ] = useState(0)
    const [ url, setUrl ] = useState()

    useEffect(() => {
        if (src.length > 1) {
            const interval = setInterval(() => {
                setI(prev => prev + 1 === src.length ? 0 : prev + 1)
            }, timems);
            console.log("Interval ", interval);
            return () => clearInterval(interval)
        } else setUrl(src);
    }, [])

    useEffect(() => { setUrl(src[i]) }, [i])

    return <div style={
        {
            backgroundImage:`url(${url})`, 
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            width:"100%",
            height:"100%",
            minHeight: minheight,
            borderRadius: `${borderradius}px`
        }
    }/>
}