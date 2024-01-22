import express from 'express'
import passport from "passport"

// const express = require('express');
// const passport = require('passport');


const router = express.Router()

const callBackUrl = 'https://violet-harp-seal-kilt.cyclic.app'


router.get('/google',
    passport.authenticate('google', { scope: 
        [
            'profile', 
            'email', 
            // 'https://www.googleapis.com/auth/user.birthday.read', 
            // 'https://www.googleapis.com/auth/user.addresses.read', 
            // 'https://www.googleapis.com/auth/user.phonenumbers.read'
        ] 
    })
);

router.get('/google/callback',
passport.authenticate('google', {
    failureRedirect: 'https://violet-harp-seal-kilt.cyclic.app/auth/login/failed',
    // successRedirect: callBackUrl
    }),
    (req, res)=>{
        console.log('/google/callback', req.user)
        res.redirect(callBackUrl)
    },
)

router.get('/login/success', (req, res) => {
    console.log("req.user: ", req.user)
    if(req.user){
        res.status(200).json({
            user: req.user
        })
    }else{
        res.status(200).json({
            user: null
        })
    }
})

router.get('/login/failed', (req, res)=>{
    res.redirect('https://violet-harp-seal-kilt.cyclic.app/login')
    res.status(200).json({
        success: false,
        message: 'failure login',
    })
})

router.post('/logout', async (req, res, next)=>{
    
    try{
        req.logout(req.user, (err) =>{
            if(err){
                return next(err)
            }
        })
    }catch(e){
        console.log(e)
    }
    req.session.destroy((err) =>{
        if(err){
            return next(err)
        }
    })
    res.clearCookie('mysql-express-session')
    
})


export default router
// module.exports = router
