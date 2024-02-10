import React, { useEffect, useState } from 'react'
import styles from '../styles/collections.module.css'
import {Groups} from '../data/Products'
import axios from 'axios'
import {useNavigate } from "react-router-dom";
import {website_URL} from '../data/environment'
import {server_URL} from '../data/environment'


interface prop{
    cartCounter: number;
    setCartCounter: React.Dispatch<React.SetStateAction<number>>;
    setIsBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setMessageDisplay: React.Dispatch<React.SetStateAction<boolean>>;
    messageDisplay: boolean;
    user: any;
    setUser: React.Dispatch<React.SetStateAction<any>>;
    retrieveOrder: () => void;
}

const Collections:React.FC<prop> = ({retrieveOrder, cartCounter, setCartCounter, setIsBarOpen, messageDisplay, setMessageDisplay, user, setUser}) => {

    const [imageIndex, setImageIndex] = useState<number[][]>(Groups.map((collection) => collection.collectionProducts.map((product) => 0)))

    const handleIncrement = (groupIndex:number, productIndex:number) =>{

        setImageIndex( prev =>{

            const newImageIndex = [...prev];
            const imgLength = Groups[groupIndex].collectionProducts[productIndex].img.length;
    
            if (newImageIndex[groupIndex][productIndex] === (imgLength - 1)) {
                newImageIndex[groupIndex][productIndex] = 0
            }else{
                newImageIndex[groupIndex][productIndex] += 1;
            }
            return newImageIndex
        } 
        )
    }

    const handleDecrement = (groupIndex:number, productIndex:number) =>{

        setImageIndex( prev =>{
            const newImageIndex = [...prev];
            newImageIndex[groupIndex][productIndex] = 
            (newImageIndex[groupIndex][productIndex] - 1 + Groups[groupIndex].collectionProducts[productIndex].img.length) %
            Groups[groupIndex].collectionProducts[productIndex].img.length;
            return newImageIndex
        } 
        )
    }

    const navigate = useNavigate()

    const checkUser = (product: any, imageUrl: any) =>{
        if(user === null){
            navigate('/Login')
        }else{
            postOrder(product, imageUrl)
            retrieveOrder()
        }
    }

    const postOrder = async (product: any, imageUrl: any) =>{
        axios.post(`${server_URL}/postOrders`, 
        {name: product.name, price: product.price, image: imageUrl, user_email: user.user_email})
        .then(() => retrieveOrder())
        .then(() => showMessage())
        .catch(error => {console.log(error)})
    }
    
    const showMessage = () =>{
        setMessageDisplay(true)
        setTimeout(() => {
            setMessageDisplay(false)
        }, 2000);
    }


  return (
    <>
        <div className={styles.section4}>

            {Groups.map((group, groupIndex) =>(

                <div className={styles.boxContainer} key={group.collectionTitle}>
                    <h3 className={styles.CollectionTitle} aria-label={`Add ${group.collectionTitle} to cart`} role='link' tabIndex={29}>{group.collectionTitle}</h3>
                    <div className={styles.boxes}>
                        {group.collectionProducts.map((product, productIndex) => (

                            <div className={styles.box} key={product.name} aria-label={`Add ${product.name} to cart`} role='link' tabIndex={30}>
                                <div className={styles.imgBox}>
                                    <img src={product.img[imageIndex[groupIndex][productIndex]]} alt="img" className={styles.img}/>
                                    <div className={styles.featureBox} style={{...product.isFeature ? {opacity: 1} : {opacity: 0}, ...{background: product.featureBackGround}}}>
                                        <i className={`bi bi-star ${styles.icon}`}></i>
                                        <p className={styles.featureText}>{product.featureText}</p>
                                    </div>
                                    <div className={styles.arrows}>
                                        <i className={`bi bi-chevron-left ${styles.arrow}`} onClick={() => handleDecrement(groupIndex, productIndex)}></i>
                                        <i className={`bi bi-chevron-right ${styles.arrow}`} onClick={() => handleIncrement(groupIndex, productIndex)}></i>
                                    </div>
                                    <button className={styles.imgButton} onClick={() => checkUser(product, product.img[imageIndex[groupIndex][productIndex]])}>Add To Cart</button>
                                </div>
                                <h5 className={styles.ProductName}>{product.name}</h5>
                                <h6 className={styles.ProductText}>choose your planter style & color</h6>
                                <div className={styles.priceBox}>
                                    <h6 className={styles.productPrice}>$ {product.price}</h6>
                                    <p className={styles.productOptions}>+ more options</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>  
            ))}
        </div>
    </>
  )
}

export default Collections