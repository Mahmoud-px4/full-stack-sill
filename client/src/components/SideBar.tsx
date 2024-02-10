import React, { useEffect, useState } from 'react'
import styles from '../styles/sideBar.module.css'
import { motion } from "framer-motion"
import { barVariant } from '../variants/variants';
import OutsideClickHandler from "react-outside-click-handler";
import axios from 'axios';
import {website_URL} from '../data/environment'
import {server_URL} from '../data/environment'


interface prop{
    isBarOpen: boolean,
    toggleBar: () => void,
    setIsBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    darkMode: boolean;
    cartCounter: number;
    setCartCounter: React.Dispatch<React.SetStateAction<number>>;
    retrieveOrder: () => void;
    cartProducts: products[];
    setCartProducts:  any;
    products_sum: number;
    user: any
}

interface products{
    product_id: number,
    product_name: string,
    product_price: number,
    product_image: string,
    product_quantity: number,
    product_total: number,
}


const SideBar:React.FC<prop> = ({user, isBarOpen, toggleBar, setIsBarOpen, darkMode, cartCounter, setCartCounter, retrieveOrder, cartProducts, setCartProducts, products_sum}) => {

    const [isChecked, setIsChecked] = useState<boolean>(false)
    const checkHndler = ()=>{
        setIsChecked(prev => !prev)
    }

    const deleteOrder = async (product: any)=>{
        axios.delete(
            `${server_URL}/deleteOrders`, {params: {name: product.product_name, user_email: user.user_email}}
        )
        .then(() => {
            retrieveOrder()
        }).catch(error => console.log(error))
    }

    const increaseOrder = async (product: any)=>{
        axios.put(
            `${server_URL}/increaseQunatity` , {name: product.product_name, user_email: user.user_email}
        )
        .then(() => {
            retrieveOrder()
        }).catch(error => console.log(error))
    }

    const decreaseOrder = async (product: any)=>{
        if(product.product_quantity === 1){
            return
        }else{
            axios.put(
                `${server_URL}/decreaseOrderQunatity` , {name: product.product_name, user_email: user.user_email}
            )
            .then(() => {
                retrieveOrder()
            }).catch(error => console.log(error))
        }
    }

  return (
    <>
        
        <motion.div variants={barVariant} initial='hidden' animate={isBarOpen ? 'visible' : 'hidden'} className={styles.container} style={darkMode ? {background: '#000807', color: 'white'} : {}}>
            <OutsideClickHandler onOutsideClick={() => setIsBarOpen(false)}>

            <div className={styles.boxContainer1}>
                <h5 className={styles.x} onClick={toggleBar} aria-label='close side bar' role='button' tabIndex={33}>X</h5>
                <div className={styles.box1} style={darkMode ? {background: '#000807', color: 'white', borderBottom:'1px solid grey'} : {}}>
                    <h5 className={styles.heading}>Your Cart</h5> <h6 className={styles.counter}>({cartCounter})</h6> <br />
                    <p className={styles.text}>Our team preps, prunes, & packs every order—lots of care goes into every step.</p>
                </div>
                <div className={styles.box2} style={darkMode ? {background: '#000807', color: 'white', borderBottom:'1px solid grey'} : {}}>
                    <div className={styles.firstPart}>
                        <div className={styles.checkPart}>
                            <input type="checkbox" onChange={checkHndler} className={styles.checkbox}/>
                            <label style={darkMode ? {background: '#000807', color: 'white', borderBottom:'1px solid grey'} : {}} className={styles.checkLabel} aria-label='click to add a gift message' role='button' tabIndex={33}>Add a gift message?</label>
                        </div>
                        <i className={`bi bi-arrow-gift ${styles.icon}`}></i>
                    </div>
                    {isChecked ?
                        (<textarea rows={2} placeholder='Enter your message (Maximum 250 characters)' className={styles.messageInput}></textarea>)
                        : ''
                    }
                </div>
                <div className={styles.box3}>
                    {
                        cartProducts.map((product)=>(
                            <div key={product.product_id} className={styles.product} style={darkMode ? {background: '#000807', color: 'white', borderBottom:'1px solid grey'} : {}}>
                                <img src={product.product_image} alt="img" className={styles.productImg}/>
                                <div className={styles.productBox}>
                                    <h6 className={styles.line1} style={darkMode ? {background: '#000807', color: 'white'} : {}}>{product.product_name}</h6>
                                    <div className={styles.line2}>
                                        <h6 className={styles.productPrice} style={darkMode ? {background: '#000807', color: 'white'} : {}}>$ {product.product_price}</h6>
                                        <h6 className={styles.productShips} style={darkMode ? {background: '#000807', color: 'green'} : {}}>Ships Free</h6>
                                    </div>
                                    <div className={styles.line3}>
                                        <div className={styles.handleQuantity}>
                                            <p className={styles.decrement} onClick={() => decreaseOrder(product)} aria-label='decrement this product quantity' role='button' tabIndex={34}>-</p>
                                            <p className={styles.quantity} aria-label='product quantity' role='quantity' tabIndex={35}>{product.product_quantity}</p>
                                            <p className={styles.increment} onClick={() => increaseOrder(product)} aria-label='increment this product quantity' role='button' tabIndex={36}>+</p>
                                        </div>
                                        <p className={styles.delete} style={darkMode ? {background: '#000807', color: '#8f8f8f'} : {}} aria-label='remove this product from cart' role='button' tabIndex={37} onClick={()=> deleteOrder(product)}>Remove</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.boxContainer2} style={darkMode ? {background: '#000807', color: 'white', borderTop:'1px solid grey'} : {}}>
                <div className={styles.firstLine}>
                    <h5 className={styles.subTotal}>Subtotal</h5>
                    <h6 className={styles.subTotalAmount}>$ {products_sum}</h6>
                </div>
                <div className={styles.secondLine}>
                    <h5 className={styles.shipping}>Shipping</h5>
                    <h6 className={styles.shippingAmount}>Free</h6>
                </div>
                <button className={styles.button} aria-label='checkout' role='button' tabIndex={38}>Checkout</button>
                <p className={styles.taxes}>Taxes calculated at checkout.</p>
            </div>
            </OutsideClickHandler>
        </motion.div>
    </>
  )
}

export default SideBar