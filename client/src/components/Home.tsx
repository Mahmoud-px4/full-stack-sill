import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import styles from '../styles/home.module.css'
import Collections from './Collections'
import Slider from './Slider'
import Footer from './Footer'
import SideBar from './SideBar'
import Accessibility from './Accessibility'
import ADHD from './ADHD'
import axios from 'axios'
import { motion } from "framer-motion"
import { messageVariant } from '../variants/variants';
import {useNavigate } from "react-router-dom";
import {website_URL} from '../data/environment'


interface products{
  product_id: number,
  product_name: string,
  product_price: number,
  product_image: string,
  product_quantity: number,
  product_total: number,
}

interface prop{
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  localUser: boolean;
  setLocalUser: React.Dispatch<React.SetStateAction<boolean>>;
}


const Home:React.FC<prop> = ({localUser, setLocalUser, user, setUser}) => {

  const navigate = useNavigate()

  const [isBarOpen, setIsBarOpen] = useState<boolean>(false)

  const toggleBar = () =>{
    setIsBarOpen(prev => !prev)
  }

  const [keyboardNav, setKeyboardNav] = useState(true)
  const [screenReader, setScreenReader] = useState(true)
  const [ADHDFocus, setADHDFocus] = useState(false)
  const [magnifier, setMagnifier] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const[popUp, setPopUp] = useState('')

  const magnify = (e: any) =>{
    if(magnifier){
      const text = e.target.textContent;
      setPopUp(text)
      // const popUp = document.createElement('div')
      // popUp.textContent = text
      // popUp.className = 'popUp-text'
      // document.body.appendChild(popUp)
    }
    else return
  }

  const h1Elements = document.querySelectorAll('h1')
  const h2Elements = document.querySelectorAll('h2')
  const h3Elements = document.querySelectorAll('h3')
  const h4Elements = document.querySelectorAll('h4')
  const h5Elements = document.querySelectorAll('h5')
  const h6Elements = document.querySelectorAll('h6')
  const pElements = document.querySelectorAll('p')

  magnifier && h1Elements.forEach((element) =>{
    element.addEventListener('mouseover', (e) => magnify(e))
    element.addEventListener('mouseleave', () => setPopUp(''))
  })
  magnifier && h2Elements.forEach((element) =>{
    element.addEventListener('mouseenter', (e) => magnify(e))
    element.addEventListener('mouseleave', () => setPopUp(''))
  })
  magnifier && h3Elements.forEach((element) =>{
    element.addEventListener('mouseenter', (e) => magnify(e))
    element.addEventListener('mouseleave', () => setPopUp(''))
  })
  magnifier && h4Elements.forEach((element) =>{
    element.addEventListener('mouseenter', (e) => magnify(e))
    element.addEventListener('mouseleave', () => setPopUp(''))
  })
  magnifier && h5Elements.forEach((element) =>{
    element.addEventListener('mouseenter', (e) => magnify(e))
    element.addEventListener('mouseleave', () => setPopUp(''))
  })
  magnifier && h6Elements.forEach((element) =>{
    element.addEventListener('mouseenter', (e) => magnify(e))
    element.addEventListener('mouseleave', () => setPopUp(''))
  })
  magnifier &&  pElements.forEach((element) =>{
    element.addEventListener('mouseenter', (e) => magnify(e))
    element.addEventListener('mouseleave', () => setPopUp(''))
  })


  useEffect(()=>{

    if(darkMode){
      h1Elements.forEach((element)=>{
        element.style.backgroundColor = '#000807'
        element.style.color = 'white'
      })
      h2Elements.forEach((element)=>{
        element.style.backgroundColor = '#000807'
        element.style.color = 'white'
      })
      h3Elements.forEach((element)=>{
        element.style.backgroundColor = '#000807'
        element.style.color = 'white'
      })
      h4Elements.forEach((element)=>{
        element.style.backgroundColor = '#000807'
        element.style.color = 'white'
      })
      h5Elements.forEach((element)=>{
        element.style.backgroundColor = '#000807'
        element.style.color = 'white'
      })
      h6Elements.forEach((element)=>{
        element.style.backgroundColor = '#000807'
        element.style.color = 'white'
      })
      pElements.forEach((element)=>{
        element.style.backgroundColor = '#000807'
        element.style.color = 'white'
      })
    }
    else{
      h1Elements.forEach((element)=>{
        element.style.backgroundColor = ''
        element.style.color = ''
      })
      h2Elements.forEach((element)=>{
        element.style.backgroundColor = ''
        element.style.color = ''
      })
      h3Elements.forEach((element)=>{
        element.style.backgroundColor = ''
        element.style.color = ''
      })
      h4Elements.forEach((element)=>{
        element.style.backgroundColor = ''
        element.style.color = ''
      })
      h5Elements.forEach((element)=>{
        element.style.backgroundColor = ''
        element.style.color = ''
      })
      h6Elements.forEach((element)=>{
        element.style.backgroundColor = ''
        element.style.color = ''
      })
      pElements.forEach((element)=>{
        element.style.backgroundColor = ''
        element.style.color = ''
      })
    }
  },[darkMode])

  const resetOptions = () =>{
    setADHDFocus(false);
    setMagnifier(false);
    setDarkMode(false);
  }

  const [cartCounter, setCartCounter] = useState(0)

  const [cartProducts, setCartProducts] = useState<products[]>([])

  const checkLogin = async () =>{
    if(localUser){
      return
    }
    else{
      // fetch(`${website_URL}/auth/login/success`, {
      //   method: "GET",
      //   credentials: 'include',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      // })
      // .then((response) => response.json())
      // .then((result) =>{
      //   setUser(result.user)
      //   console.log('checkLogin, result.user:', result.user)
      // })

      axios.get(`${website_URL}/auth/login/success`, { withCredentials: true })
      .then((result) =>{
        setUser(result.data.user)
        // console.log('checkLogin, result.data.user:', result.data.user)
      })
    }
  }

  const retrieveOrder = async () =>{  
    axios.get(`${website_URL}/getOrders`, {params: {user_email: user === null ? 0 : user.user_email}})
    .then((result) => {
      const response = result.data
      setCartCounter(response.length)
      setCartProducts(response)
    })
    .catch(error => {console.log(error)})
  }

  const logout = async () =>{
    axios.post(`${website_URL}/auth/logout`, {}, {withCredentials: true})
    .catch(err => console.log(err))
    setUser(null)
    setLocalUser(false)
    localStorage.removeItem('localUser');
  }

    useEffect(()=>{
      const localStorageData = JSON.parse(localStorage.getItem('localUser') || '{}')

      if(localStorageData && ((new Date().getTime() - localStorageData.time) < (1000 * 60 * 60 * 24 ))){
        setUser(localStorageData.value)
      }else{
        localStorage.removeItem('localUser');
        checkLogin()
      }

      retrieveOrder()
    }, [])

    useEffect(()=>{
      retrieveOrder()
    }, [user])
 
  const [products_sum, setProducts_sum] = useState(0)

  useEffect(()=>{
    const sum = cartProducts.reduce((acc, product) =>  acc + product.product_total, 0)
    setProducts_sum(sum)
    if(cartProducts.length === 0){
      setIsBarOpen(false)
    }
  },[cartProducts])
  
  const [messageDisplay, setMessageDisplay] = useState(false)





  return (
    <>
      <div className={styles.container} style={darkMode ? {background: '#000807', color: 'white'} : {}}>

        <div 
          className={`${styles.home} ${isBarOpen ? styles.shadow : ''}`} 
          style={{...(isBarOpen ? {height:'100vh', overflow:'hidden'} : {height: 'auto'}),...(darkMode ? {background: '#000807', color: 'white'} : {})}}
        >

          <Navbar logout={logout} user={user} retrieveOrder={retrieveOrder} setIsBarOpen={setIsBarOpen} darkMode={darkMode} isBarOpen={isBarOpen} toggleBar={toggleBar} cartCounter={cartCounter} setCartCounter={setCartCounter} setCartProducts={setCartProducts}/>

          <div className={styles.section1}>
            <div className={styles.boxContainer1} style={darkMode ? {background: '#000807', color: 'white'} : {}}>
              <div className={styles.box} >
                <h1 className={styles.title} >Expert-Curated Plant Collections</h1> 
                {/* <h1 className={styles.title}></h1> */}
                <h6 className={styles.heading} >Carefully chosen for Plant Parents of all levels</h6>
                <div className={styles.buttons}>
                  <button className={styles.button1} aria-label='Browse our best collections' role='button' tabIndex={19}>‘Sill Selects’ Collections</button>
                  <button className={styles.button2} aria-label='Browse our Houseplants' role='button' tabIndex={20}>All Houseplants</button>
                </div>
              </div>
            </div>
            <img src='https://cdn.sanity.io/images/y346iw48/production/f8ce5a402492a69d4e2be4bc1c5def78c49197af-1216x903.png?w=1536&h=1141&auto=format' alt="img1" className={styles.boxContainer2}/>
          </div>

          <div className={styles.section2}>
            <h3 className={styles.heading} aria-label='Shop by Collection' role='list' tabIndex={21}>Shop by Collection</h3>
            <div className={styles.boxContainer}>
              <div className={styles.box} aria-label='Shop All Plants & Trees' role='link' tabIndex={22}>
                <img src='https://cdn.sanity.io/images/y346iw48/production/1dd326f722ac9e574a5c00719feed7c85470450a-1200x1553.jpg?auto=format' alt="img" className={styles.img}/>
                <h5 className={styles.title}>All Plants & Trees</h5>
              </div>
              <div className={styles.box} aria-label='Shop our Pet-Friendly Plants' role='link' tabIndex={23}>
                <img src='https://cdn.sanity.io/images/y346iw48/production/091c60ec9dcce8501445b560a7bdc279079d04b9-640x828.webp?auto=format' alt="img" className={styles.img}/>
                <h5 className={styles.title}>Pet-Friendly Plants</h5>
              </div>
              <div className={styles.box} aria-label='Shop Decor Plants' role='link' tabIndex={24}>
                <img src='https://cdn.sanity.io/images/y346iw48/production/b31557b4166ed74b56d4c8460787d2fa90c2e668-1200x1553.webp?auto=format' alt="img" className={styles.img}/>
                <h5 className={styles.title}>Decor Plants</h5>
              </div>
              <div className={styles.box} aria-label='Shop For Beginners' role='link' tabIndex={25}>
                <img src='https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format' alt="img" className={styles.img}/>
                <h5 className={styles.title}>For Beginners</h5>
              </div>
              <div className={styles.box} aria-label='Shop Flowering Plants' role='link' tabIndex={26}>
                <img src='https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format' alt="img" className={styles.img}/>
                <h5 className={styles.title}>Flowering Plants</h5>
              </div>
              <div className={styles.box} aria-label='Shop Faux & Preserved' role='link' tabIndex={27}>
                <img src='https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format' alt="img" className={styles.img}/>
                <h5 className={styles.title}>Faux & Preserved</h5>
              </div>
            </div>
          </div>

          <div className={styles.section3}>
            <div className={styles.boxContainer1}>
              <h3 className={styles.title}>Find Your Plant Match</h3>
              <h6 className={styles.text1}>Share a little bit about yourself and we’ll help find your perfect plant.</h6>
              <div className={styles.box}>
                <h6 className={styles.text2}> <i className={`bi bi-arrow-right ${styles.icon}`}></i> Answer three quick questions</h6>
                <h6 className={styles.text2}> <i className={`bi bi-arrow-right ${styles.icon}`}></i> Get matched with your perfect plant</h6>
              </div>
              <div className={styles.buttons}>
                <button className={styles.button} aria-label='take a quiz to Find Your Plant Match' role='button' tabIndex={28}>Take The Quiz</button>
              </div>
            </div>
            <img src="https://cdn.sanity.io/images/y346iw48/production/8930b752d090834855b620b40733ea3c5b929537-800x1035.jpg?w=1000&auto=format" alt="img" className={styles.boxContainer2}/>
          </div>

          <Collections retrieveOrder={retrieveOrder} setIsBarOpen={setIsBarOpen} cartCounter={cartCounter} setCartCounter={setCartCounter} messageDisplay={messageDisplay} setMessageDisplay={setMessageDisplay} user={user} setUser={setUser}/>

          <div className={styles.section5} style={darkMode ? {background: '#000807', color: 'white', borderBottom:'1px solid grey'} : {}}>
            <h2 className={styles.title}>To be human is to experience biophilia.</h2>
            <h6 className={styles.text}>[bio-feelya] — Our innate desire to connect with nature. It’s in our DNA.</h6>
          </div>


          <div className={styles.section6}>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <img src="https://cdn.sanity.io/images/y346iw48/production/84d07688abdf55602905c8913388363009426f11-60x60.svg?auto=format" alt="img" className={styles.img}/>
                <h5 className={styles.heading}>Free Standard Shipping</h5>
                <h6 className={styles.text}>Enjoy free standard shipping on all plants and planters. Orders are shipped via UPS carbon neutral shipping, keeping our carbon footprint as small as possible.</h6>
              </div>
              <div className={styles.box}>
                <img src="https://cdn.sanity.io/images/y346iw48/production/e0882a8e72689c1ef1c0898469b09ad6e4e574a6-59x54.svg?auto=format" alt="img" className={styles.img}/>
                <h5 className={styles.heading}>30-Day Customer Happiness Guarantee</h5>
                <h6 className={styles.text}>Our team preps, prunes, & carefully packs every order—meaning lots of care goes into every step. If your plant arrives damaged or unhealthy, we replace it for free.</h6>
              </div>
              <div className={styles.box}>
                <img src="https://cdn.sanity.io/images/y346iw48/production/39a25eee4d0f740bf6169d2dc6f7c8ced0387721-60x60.svg?auto=format" alt="img" className={styles.img}/>
                <h5 className={styles.heading}>Local Stores</h5>
                <h6 className={styles.text}>Want hands-on plant expertise IRL? Stop by one of our stores in NYC, Bethesda, Chicago, or San Francisco to explore more plants, planters, & care accessories.</h6>
              </div>
            </div>
          </div>

          <Slider darkMode={darkMode}/>

          <Footer darkMode={darkMode}/>

          <Accessibility resetOptions={resetOptions} keyboardNav={keyboardNav} screenReader={screenReader} ADHDFocus={ADHDFocus} magnifier={magnifier} darkMode={darkMode} setKeyboardNav={setKeyboardNav} setScreenReader={setScreenReader} setADHDFocus={setADHDFocus} setMagnifier={setMagnifier} setDarkMode={setDarkMode}/>

          {magnifier && popUp !== '' ? <div onMouseOver={(e: any) => setPopUp(e.target.textContent)} onMouseLeave={() => setPopUp('')} className={styles.popUpText}>{popUp}</div> : ''}

          <motion.h5 className={styles.productAdded} variants={messageVariant} initial='hidden' animate={messageDisplay ? 'visible' : 'hidden'}>Product Added To Cart Successfully &nbsp; <i className={`bi bi-check2-all ${styles.productAddedIcon}`}></i></motion.h5>

        </div>

        {ADHDFocus ? (<ADHD/>) : ''}
        
        <SideBar user={user} darkMode={darkMode} setIsBarOpen={setIsBarOpen} isBarOpen={isBarOpen} toggleBar={toggleBar} cartCounter={cartCounter} setCartCounter={setCartCounter} retrieveOrder={retrieveOrder} cartProducts={cartProducts} setCartProducts={setCartProducts} products_sum={products_sum}/>

      </div>

    </>
  )
}

export default Home