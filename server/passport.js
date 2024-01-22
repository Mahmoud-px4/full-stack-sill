import passport from "passport";
import dotenv from 'dotenv'
import passportGoogleOauth20 from 'passport-google-oauth20'
dotenv.config()
import {pool} from './server.js'

// const passport = require('passport');
// const dotenv = require('dotenv');
// const passportGoogleOauth20 = require('passport-google-oauth20');
// dotenv.config();
// const { pool } = require('./server.js');



const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

var GoogleStrategy = passportGoogleOauth20.Strategy;

passport.use(new GoogleStrategy(
    {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://violet-harp-seal-kilt.cyclic.app/auth/google/callback"
    },
    async function(accessToken, refreshToken, profile, cb) {
        try{
            pool.query('select * from users where user_email = ?', [profile.emails[0].value], (error, results) =>{
                if(results.length > 0){
                    pool.query('update users set user_name = ?, user_pic = ?, last_login = current_timestamp where user_email = ?', [profile.displayName, profile.photos[0].value, profile.emails[0].value])
                    return cb(null, results[0])
                }
                else{
                    pool.query('insert into users (user_name, user_email, user_pic, first_login, last_login) values(?, ?, ?, current_timestamp, current_timestamp)', [profile.displayName, profile.emails[0].value, profile.photos[0].value])
                    return cb(null, {user_email : profile.emails[0].value})
                }
            })
        }
        catch(error){
            cb(error)
        }
        // try{
        //     pool.query('select * from users where user_email = ?', [profile.emails[0].value], (error, results) =>{
        //         return cb(null, results[0])
        //     })
        // }catch (error){
        //     cb(error)
        // }
    }
));

passport.serializeUser((user, done) => {
    // done(null, user);
    console.log('serializeUser: ', user)
    done(null, user.user_email);
});
  
passport.deserializeUser((email, done) => {
    // done(null, user);
    console.log('deserializeUser: ', email)
    pool.query('select * from users where user_email = ?', [email], 
        (error, results) =>{
            // console.log('deserializeUser: ', results[0])
            done(null, results[0])
        }
    )
});
