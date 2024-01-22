import React from 'react'
import styles from '../styles/footer.module.css'
import { Link } from 'react-router-dom'


  interface prop{
    darkMode: boolean;
  }

const Footer:React.FC<prop> = ({darkMode}) => {


  return (
    <>
        <div className={styles.footer} style={darkMode ? {background: '#000807', color: 'white', borderTop:'1px solid white'} : {}}>
          <div className={styles.section8}>
            <img src="https://cdn.sanity.io/images/y346iw48/production/439f7681c104d6d291bb26f4627a7c9326015573-338x338.png?auto=format" alt="img"  className={styles.img}/>
            <div className={styles.box}>
              <h4 className={styles.heading}>Visit Us In A Store Near You</h4> <br />
              <h6 className={styles.text1}>Our stores around the US are open for plant shopping, repotting, curbside pickup, in-person workshops, and more.</h6> <br />
              <div className={styles.text2Box}>
                <h5 className={styles.text2} aria-label='Find nearest Local Store' role='button' tabIndex={31}>Find Your Local Store</h5>
                <i className={`bi bi-arrow-right ${styles.icon}`}></i>
              </div>
            </div>
          </div>

          <div className={styles.section9}>
            <div className={styles.boxContainer1}>
              <div className={styles.box}>
                <h6 className={styles.heading}>Customer Service</h6>
                <h6 className={styles.listItem}>FAQ</h6>
                <h6 className={styles.listItem}>Shipping & Handling</h6>
                <h6 className={styles.listItem}>30-Day Guarantee</h6>
                <h6 className={styles.listItem}>Contact Us</h6>
              </div>
              <div className={styles.box}>
                <h6 className={styles.heading}>Resources</h6>
                <h6 className={styles.listItem}>Find Your Plant</h6>
                <h6 className={styles.listItem}>Plant Care Library</h6>
                <h6 className={styles.listItem}>Blog</h6>
                <h6 className={styles.listItem}>Free Online Courses</h6>
              </div>
              <div className={styles.box}>
                <h6 className={styles.heading}>My Sill</h6>
                <h6 className={styles.listItem}>My Account</h6>
                <h6 className={styles.listItem}>WorkShops</h6>
                <h6 className={styles.listItem}>Track My Order</h6>
                <h6 className={styles.listItem}>Returns Portal</h6>
              </div>
              <div className={styles.box}>
                <h6 className={styles.heading}>Explore</h6>
                <h6 className={styles.listItem}>Our Story</h6>
                <h6 className={styles.listItem}>Locations</h6>
                <h6 className={styles.listItem}>Careers</h6>
                <h6 className={styles.listItem}>Corporate Gifting</h6>
              </div>
            </div>
            <div className={styles.boxContainer2}>
              <h4 className={styles.header}>Get the Dirt.</h4>
              <h6 className={styles.text}>Get plant care tips, exclusive offers, & event invites straight to your inbox. No spam, ever.</h6>
              <input type="email" placeholder='Enter your email here...' className={styles.input} aria-label='type your e-mail here' role='text field' tabIndex={32}/>
              <button className={styles.button}>Subscribe</button>
              <div className={styles.icons}>
                <i className={`bi bi-facebook ${styles.icon}`}></i>
                <i className={`bi bi-twitter ${styles.icon}`}></i>
                <i className={`bi bi-instagram ${styles.icon}`}></i>
                <i className={`bi bi-pinterest ${styles.icon}`}></i>
                <i className={`bi bi-youtube ${styles.icon}`}></i>
                <i className={`bi bi-tiktok ${styles.icon}`}></i>
                <i className={`bi bi-linkedin ${styles.icon}`}></i>
              </div>
            </div> 
          </div>

          <div className={styles.section10}>
            <div className={styles.boxContainer1}>
              <h3 className={styles.theSill}>The</h3>
              <h3 className={styles.theSill}>Sill</h3>
            </div>
            <div className={styles.boxContainer2}>
              <div className={styles.box}>
                <h6 className={styles.copyRight1}>Copyright 2023 -- The Sill Clone-Project.</h6>
                <h6 className={styles.copyRight2}>Developed by 
                  <Link target='_blank' to='https://salama-portfolio.web.app/' className={styles.salama}> Mahmoud Salama </Link> .
                </h6>
              </div>
              <div className={styles.links}>
                <p className={styles.link}>Affiliate Program</p>
                <p className={styles.link}>Terms of Use</p>
                <p className={styles.link}>Privacy Policy</p>
                <p className={styles.link}>Accessibility </p>
                <p className={styles.link}>Do Not Sell My Info</p>
              </div>
            </div>
          </div>

        </div>
    </>
  )
}

export default Footer