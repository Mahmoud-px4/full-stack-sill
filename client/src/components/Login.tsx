import React, { useEffect, useState } from 'react'
import {Navigate, useNavigate, } from "react-router-dom";
import styles from '../styles/login.module.css'
import axios from 'axios';
import gmail from '../assets/images/gmail.png'



interface prop{
    user: any;
    setUser: React.Dispatch<React.SetStateAction<any>>;
    localUser: boolean;
    setLocalUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login:React.FC<prop> = ({localUser, setLocalUser, user, setUser}) => {

    const navigate = useNavigate()

    const [signUp, setSignUp] = useState(false)

    const signUpMode = () =>{
        setSignUp(true)
        setInvalidMessage('')
    }

    const signInMode = () =>{
        setSignUp(false)
        setInvalidMessage('')
    }

    const google = () =>{
        window.location.href = "https://violet-harp-seal-kilt.cyclic.app/auth/google";
    }

    const [invalidMessage, setInvalidMessage] = useState('')
    const [greenMessage, setGreenMessage] = useState(false)

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const localLogin = () =>{
        axios.get('https://violet-harp-seal-kilt.cyclic.app/localLogin', {params: {email: email, password: password}})
        .then((results) =>{
            setGreenMessage(false)
            if(!results.data.email){
                setInvalidMessage('Invalid Email !')
            }
            if(results.data.email && !results.data.password){
                setInvalidMessage('Invalid Password !')
            }
            if(results.data.email && results.data.password){
                setLocalUser(true)
                setInvalidMessage('')
                navigate('/')
                setUser(results.data.user)
                localStorage.setItem('localUser', JSON.stringify({value: results.data.user, time: new Date().getTime()}))
            }
        })
    }

    const localSignUp = () =>{
        if(fullName.length > 0 && email.length > 0 && password.length > 0){
            axios.post('https://violet-harp-seal-kilt.cyclic.app/localSignUp', {email: email, password: password, fullName: fullName})
            .then((results) =>{
                if(results.data.success){
                    setGreenMessage(true)
                    setInvalidMessage('You have successfully signed up !')
                }
                if(!results.data.success){
                    setGreenMessage(false)
                    setInvalidMessage('your email already exists !')
                }
            })
        }else{
            setGreenMessage(false)
            setInvalidMessage('please fill all fields !')
        }
    }


  return (
    <>
        {user !== null ? navigate('/') :


            <div className={styles.container}>
                <div className={styles.boxContainer}>
                    <h4 className={styles.heading}>Choose a Login Method</h4>
                    <div className={styles.sections}> 
                        <div className={styles.section1}> 
                            <button className={styles.Gmail} onClick={google}> <img src={gmail} alt='gmail' className={`bi bi-google ${styles.gmailIcon}`}></img> Gmail</button>
                            {/* <button className={styles.fb}> <i className={`bi bi-facebook ${styles.facebookIcon}`}></i> FaceBook</button> */}
                        </div>
                        <div className={styles.section2}> 
                            {signUp ? <input required={true} onChange={(e) => setFullName(e.target.value)} type="text" placeholder='Enter your full name...' className={styles.input} aria-label='type your FULL Name here' role='text field'/> : ''}
                            <input required={true} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email...' className={styles.input} aria-label='type your e-mail here' role='text field'/>
                            <input required={true} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password...' className={styles.input} aria-label='type your password here' role='text field'/>
                            {signUp ? '' : <button onClick={localLogin} className={styles.logIn}>Login</button> }
                            {signUp ? <button onClick={localSignUp} className={styles.signUp}>SignUp</button> : '' }
                            {signUp ? '' : <h6 className={styles.text}>Don't have an account? <span className={styles.span1} onClick={signUpMode}>SignUp</span></h6>}
                            {signUp ? <h6 className={styles.text}>Already have an account? <span className={styles.span2} onClick={signInMode}>SignIn</span></h6> : '' }
                            <h6 className={greenMessage ? styles.successMessage : styles.invalidMessage}>{invalidMessage}</h6>
                        </div>
                        <div className={styles.section3}> 
                            OR
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default Login