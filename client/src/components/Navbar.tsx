import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import profilePic from '../assets/images/profilePic.png'
import {useNavigate } from "react-router-dom";


interface prop{
    isBarOpen: boolean,
    toggleBar: () => void,
    darkMode: boolean,
    setIsBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
    cartCounter: number,
    setCartCounter: React.Dispatch<React.SetStateAction<number>>;
    setCartProducts: any;
    retrieveOrder: () => void;
    user: any;
    logout: () => void
}



const Navbar:React.FC<prop> = ({logout, user, retrieveOrder, isBarOpen, toggleBar, darkMode, setIsBarOpen, cartCounter, setCartCounter, setCartProducts}) => {

    const checkBar = () =>{
        if (cartCounter === 0){
            return
        }else{
            setIsBarOpen(true)
        }
    }

    const navigate = useNavigate()

  return (
    <>
        <div className={styles.container}>
            <div className={styles.section1} style={darkMode ? {background: '#000807', color: 'white', borderBottom: '1px solid white'} : {}}>
                <h6 className={styles.heading} style={darkMode ? {background: '#000807', color: 'white'} : {}}>Free Shipping + 30-Day Guarantee</h6>
            </div>
            <div className={styles.section2}>
                <Link className={styles.link} to='/'> <img style={darkMode ? {background: 'white', padding: 5, borderRadius:'5px'} : {}} src={logo} alt='logo' className={styles.boxContainer1} aria-label='the sill logo' role='image' tabIndex={1}/> </Link>
                <div className={styles.boxContainer2}>
                    <div className={`${styles.box1} ${styles.none}`} aria-label='Find the nearest store' role='button' tabIndex={2}>
                        <div className={styles.smallbox1}>
                            <i className={`bi bi-geo-alt ${styles.icon}`}></i>
                        </div>
                        <div className={styles.smallbox2}>
                            <p className={styles.p1}>Store Locator</p>
                            <p className={styles.p2}>My Plant Shop</p>
                        </div>
                    </div>
                    <div className={`${styles.box1} ${styles.none}`} aria-label='Search our products' role='button' tabIndex={3}>
                        <div className={styles.smallbox1}>
                            <i className={`bi bi-search ${styles.icon}`}></i>
                        </div>
                        <div className={styles.smallbox2}>
                            <p className={styles.p1}>Find Product</p>
                            <p className={styles.p2}>Quick Search</p>
                        </div>
                    </div>
                    <div className={styles.box1} aria-label='Sign In' role='button' tabIndex={4}>
                        {user === null ? 
                            <div className={styles.smallbox2} onClick={() => navigate('/login')}>
                                <p className={styles.p1}>Sign In</p>
                                <p className={styles.p2}>Your Account</p>
                            </div>
                        : 
                            <>
                                <div className={styles.smallbox1}>
                                    {user.user_pic === null ? 
                                        <img src={profilePic} alt="profilePic" className={styles.profilePic}/>
                                    :
                                        <img src={user.user_pic} alt="profilePic" className={styles.profilePic}/>
                                    }
                                </div>
                                <div className={styles.smallbox2}>
                                    <p className={styles.p1}>{user.user_name}</p>
                                    <p className={styles.p2} onClick={logout}>Logout</p>
                                </div>
                            </>
                        }
                    </div>
                    <div className={styles.box2} aria-label='view Cart' role='button' tabIndex={5} onClick={checkBar}>
                        <i className={`bi bi-basket3 ${styles.icon}`}></i> &nbsp; ({cartCounter})
                    </div>
                </div>
            </div>
            <div className={styles.section3}>
                <div className={styles.menuList} aria-label='List of links' role='list' tabIndex={6}>
                    <h6 className={styles.menuItem} aria-label='browse our deals' role='link' tabIndex={7}>Deals</h6>
                    <h6 className={styles.menuItem} aria-label='browse our stores' role='link' tabIndex={8}>Stores</h6>
                    <h6 className={styles.menuItem} aria-label='browse our plants' role='link' tabIndex={9}>Plants</h6>
                    <h6 className={styles.menuItem} aria-label='browse our planters' role='link' tabIndex={10}>Planters</h6>
                    <h6 className={styles.menuItem} aria-label='learn about plant care' role='link' tabIndex={11}>Plant Care</h6>
                    <h6 className={styles.menuItem} aria-label='our Gift Ideas' role='link' tabIndex={12}>Gift Ideas</h6>
                    <h6 className={`${styles.menuItem} ${styles.none}`} aria-label='learn about Home & Decor' role='link' tabIndex={13}>Home & Decor</h6>
                    <h6 className={`${styles.menuItem} ${styles.none}`} aria-label='browse our Faux' role='link' tabIndex={14}>Faux</h6>
                    <h6 className={`${styles.menuItem} ${styles.none}`} aria-label='browse our Flowers & Bouquets' role='link' tabIndex={15}>Flowers & Bouquets</h6>
                    <h6 className={`${styles.menuItem} ${styles.none}`} aria-label='browse our Subscriptions' role='link' tabIndex={16}>Subscriptions</h6>
                    <h6 className={`${styles.menuItem} ${styles.none}`} aria-label='browse our WorkShops' role='link' tabIndex={17}>WorkShops</h6>
                </div>
            </div>
            <h6 style={darkMode ? {background: '#000807', color: 'white', borderBottom:'3px solid white', borderTop:'1px solid white'} : {}} className={styles.section4} aria-label='browse our Summer Deals' role='link' tabIndex={18}> 
                ☀️ Hot Summer Deals ☀️
            </h6>
        </div>
    </>
  )
}

export default Navbar