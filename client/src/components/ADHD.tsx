import React, { useEffect, useState } from 'react'
import styles from '../styles/adhd.module.css'

const ADHD = () => {

    const [mouseY, setMouseY] = useState(0);
    
    const handleMouseMove = (event: any) => {
        setMouseY(event.clientY - 50);
    };
    
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


  return (

    <>
        <div className={styles.container} style={{top: mouseY}}> 
            <div className={styles.overlay1} style={{height: mouseY}}></div>
            <div className={styles.overlay2} style={{top: mouseY + 150}}></div>
        </div>
    </>
  )
}

export default ADHD