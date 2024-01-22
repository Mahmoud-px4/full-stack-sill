import React, { useState } from 'react'
import styles from '../styles/accessibility.module.css'
import { motion } from "framer-motion"
import { accessVariant } from '../variants/variants';
import { Switch } from 'antd';


interface props{
    keyboardNav: boolean;
    screenReader: boolean;
    ADHDFocus: boolean;
    magnifier: boolean;
    darkMode: boolean;
    setKeyboardNav: React.Dispatch<React.SetStateAction<boolean>>;
    setScreenReader: React.Dispatch<React.SetStateAction<boolean>>;
    setADHDFocus: React.Dispatch<React.SetStateAction<boolean>>;
    setMagnifier: React.Dispatch<React.SetStateAction<boolean>>;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    resetOptions: () => void;
}


const Accessibility: React.FC<props> = ({ resetOptions, keyboardNav, screenReader, ADHDFocus, magnifier, darkMode, setKeyboardNav, setScreenReader, setADHDFocus, setMagnifier, setDarkMode}) => {

    const [accessOpen, setAccessOpen] = useState(false)


    return (
    <>

        <div className={styles.iconContainer} style={accessOpen ? {display: 'none'} : {display: 'flex'}} onClick={() => setAccessOpen(true)}  aria-label='choose your accessibility settings' role='button' tabIndex={0}>
            <i className={`bi bi-universal-access ${styles.access}`}></i>
        </div>

        <motion.div variants={accessVariant} initial='hidden' animate={accessOpen ? 'visible' : 'hidden'} className={styles.accessContainer} style={darkMode ? {background: '#000807', color: 'white', border:'1px solid grey'} : {}}>
            <div className={styles.boxContainer1} style={darkMode ? {background: '#000807', color: 'white', border:'1px solid grey'} : {}}>
                <div className={styles.firstLine}>
                    <i className={`bi bi-x-lg ${styles.x}`} onClick={() => setAccessOpen(false)}></i>
                    <h6 className={styles.english} tabIndex={0} style={darkMode ? {backgroundColor: 'rgb(0 117 94)', color: 'white',} : {}}> English <i className={`bi bi-chevron-down ${styles.chevron}`}></i></h6>
                </div>
                <h5 className={styles.heading} tabIndex={0} style={darkMode ? {backgroundColor: 'rgb(0 117 94)', padding:5, borderRadius:10} : {}}>Accessibility Settings</h5>
                <button className={styles.reset} onClick={resetOptions}> <i className={`bi bi-repeat ${styles.repeat}`}></i> Reset Settings</button>
            </div>
            <div className={styles.boxContainer2} style={darkMode ? {background: '#000807', color: 'white', border:'1px solid grey'} : {}}>
                <h5 className={styles.heading2} style={darkMode ? {background: 'rgb(0 39 34)', color: 'white'} : {}}>Adjust The Accessibility Options</h5>
                <div className={styles.boxes}>

                    <div className={styles.box}>
                        <Switch
                            className={styles.switchOn}
                            checkedChildren="ON" 
                            unCheckedChildren="OFF" 
                            checked={keyboardNav}
                        />
                        <div className={styles.accessBox}>
                            <p className={styles.p1} style={darkMode ? {background: 'rgb(0 39 34)', color: 'white'} : {}}>Keyboard Navigation</p>
                            <p className={styles.p2} style={darkMode ? {background: 'rgb(0 39 34)', color: 'white'} : {}}>Use Website With Keyboard</p>
                        </div>
                        <i className={`bi bi-indent ${styles.accessIcon}`}></i>
                    </div>

                    <div className={styles.box}>
                        <Switch 
                            className={styles.switchOn}
                            checkedChildren="ON" 
                            unCheckedChildren="OFF" 
                            checked={screenReader}
                        />
                        <div className={styles.accessBox}>
                            <p className={styles.p1} style={darkMode ? {background: 'rgb(0 39 34)', color: 'white'} : {}}>Blind users (Screen Reader)</p>
                            <p className={styles.p2} style={darkMode ? {background: 'rgb(0 39 34)', color: 'white'} : {}}>Enable screen-readers</p>
                        </div>
                        <i className={`bi bi-soundwave ${styles.accessIcon}`}></i>
                    </div>

                    <div className={styles.box} onClick={() => setADHDFocus(prev => !prev)}>
                        <Switch 
                            className={ADHDFocus ? styles.switchOn : styles.switchOFF}
                            checkedChildren="ON" 
                            unCheckedChildren="OFF" 
                            checked={ADHDFocus}
                        />
                        <div className={styles.accessBox}>
                            <p className={styles.p1} style={darkMode ? {background: 'rgb(0 39 34)', color: 'white'} : {}}>ADHD Friendly Profile</p>
                            <p className={styles.p2} style={darkMode ? {background: 'rgb(0 39 34)', color: 'white'} : {}}>More focus & fewer distractions</p>
                        </div>
                        <i className={`bi bi-pc-horizontal ${styles.accessIcon}`}></i>
                    </div>

                    <div className={styles.box} onClick={() => setMagnifier(prev => !prev)}>
                        <Switch 
                            className={magnifier ? styles.switchOn : styles.switchOFF}
                            checkedChildren="ON" 
                            unCheckedChildren="OFF" 
                            checked={magnifier}
                        />
                        <div className={styles.accessBox}>
                            <p className={styles.p1} style={darkMode ? {background: 'rgb(0 39 34)', color: 'white'} : {}}>Text Magnifier</p>
                            <p className={styles.p2} style={darkMode ? {background: 'rgb(0 39 34)', color: 'white'} : {}}>Assist with reading </p>
                        </div>
                        <i className={`bi bi-zoom-in ${styles.accessIcon}`}></i>
                    </div>

                    <div className={styles.box} onClick={() => setDarkMode(prev => !prev)}>
                        <Switch 
                            className={darkMode ? styles.switchOn : styles.switchOFF}
                            checkedChildren="ON" 
                            unCheckedChildren="OFF" 
                            checked={darkMode}
                        />
                        <div className={styles.accessBox}>
                            <p className={styles.p1} style={darkMode ? {background: 'rgb(0 39 34)', color: 'white'} : {}}>Dark Mode</p>
                            <p className={styles.p2} style={darkMode ? {background: 'rgb(0 39 34)', color: 'white'} : {}}>Change Dark Contrast</p>
                        </div>
                        <i className={`bi bi-moon-stars ${styles.accessIcon}`}></i>
                    </div>

                </div>
            </div>
        </motion.div>

    </>
  )
}

export default Accessibility