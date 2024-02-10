import passport from "passport";
import dotenv from 'dotenv'
dotenv.config()
import passportGoogleOauth20 from 'passport-google-oauth20'
import {pool} from './server.js'
import JWT from "jsonwebtoken"
import randomString from 'randomstring'



const website_URL = process.env.website_URL
const server_URL = process.env.server_URL

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

var GoogleStrategy = passportGoogleOauth20.Strategy;

var secret = randomString.generate(32)

// console.log(`${server_URL}/auth/google/callback`)

passport.use(new GoogleStrategy(
    {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${server_URL}/auth/google/callback`
    },
    async function(accessToken, refreshToken, profile, cb) {
        try{
            pool.query('select * from users where user_email = ?', [profile.emails[0].value], (error, results) =>{
                if(results.length > 0){
                    pool.query('update users set user_name = ?, user_pic = ?, last_login = current_timestamp where user_email = ?', [profile.displayName, profile.photos[0].value, profile.emails[0].value])
                    return cb(null, results[0])
                }
                else{
                    pool.query('insert into users (user_name, user_email, user_pic, first_login, last_login) values(?, ?, ?, current_timestamp, current_timestamp)', [profile.displayName, profile.emails[0].value, profile.photos[0].value], (error, results)=>{
                        return cb(null, results[0])
                    })
                    // return cb(null, {user_email : profile.emails[0].value})
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
    done(null, user);
    // console.log('serializeUser: ', user)
    // done(null, user.user_email);
});
  
passport.deserializeUser((user, done) => {
    done(null, user);
    // console.log('deserializeUser: ', email)
    // pool.query('select * from users where user_email = ?', [email], 
    //     (error, results) =>{
    //         console.log('deserializeUser: ', results[0])
    //         done(null, results[0])
    //     }
    // )
});
