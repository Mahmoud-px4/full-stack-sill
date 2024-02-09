import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
import passport from 'passport'
import cookieSession from 'cookie-session'
import expressSession from 'express-session'
import expressMysqlSession from 'express-mysql-session'
import randomString from 'randomstring'
import authRoute from "./routes/Auth.js"
import './passport.js'
import bcrypt from "bcrypt";
import path from 'path'


// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2');
// const dotenv = require('dotenv');
// const passport = require('passport');
// const cookieSession = require('cookie-session');
// const expressSession = require('express-session');
// const expressMysqlSession = require('express-mysql-session');
// const randomString = require('randomstring');
// const authRoute = require('./routes/Auth.js');
// require('./passport.js');
// const bcrypt = require('bcrypt');
// const path = require('path');




const website_URL = process.env.website_URL

const app = express()
app.use(express.json())

app.use(cors({
    origin: website_URL,
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
}));

// app.use(express.static('build', { index: 'index.html' }))
// app.use(express.static(path.join(process.cwd(), 'build')))
// app.use(express.static('build'))



// var key1 = randomString.generate(32)
// var key2 = randomString.generate(32)
var key3 = randomString.generate(32)

// app.use(cookieSession({
//     name: 'cookie-session',
//     keys: [key3],
//     maxAge: 60 * 60 * 24 * 100
// }))

// app.use(expressSession({
//     secret: 'keyboard cat', // a random string to encrypt the session
//     resave: false, // avoid saving the session if it was not modified
//     saveUninitialized: false, // avoid creating a session for anonymous users
//     cookie: { 
//       maxAge: 24 * 60 * 60 * 1000, // set the cookie expiration time to 24 hours
//       sameSite: 'none', // allow cross-site cookies
    //   secure: true // require https connection
//     }
// }));


const mySQLStore = expressMysqlSession(expressSession)

app.use(expressSession({
    store: new mySQLStore({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }),
    name: 'mysql-express-session',
    secret: key3,
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000,
    cookie: { 
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'lax',
        path: '/',
        domain: 'https://tough-hen-bell-bottoms.cyclic.app/',
        // secure: true
    },
}))


app.use(passport.initialize())
app.use(passport.session())


export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
})

// module.exports.pool = pool

// console.log('path is: ', path.join(process.cwd(), 'build'))
// app.get('/', (req, res) =>{
//     res.sendFile(path.join(process.cwd(), 'build/index.html'))
// })

app.use(express.static('build'))



app.get('/testServer', (req, res)=>{

    res.status(200).json({message: 'server is running'})
})


app.get('/testDB', (req, res)=>{

    pool.query(
        'select * from users where user_email = "mahmoudsalama180@gmail.com"',
        (error, results)=>{
            if(error){
                res.status(500).send({message: error.message})
            }
            else{
                res.status(200).json(results)
            }
        }
    )
})

app.use('/auth', authRoute)


app.post('/postOrders', (req, res)=>{

    try{
        pool.query('select * from orders where user_email = ? and product_name = ?', [req.body.user_email, req.body.name],
        (error, results)=>{
            if(error){
                res.status(500).send({message: error.message})
            }else{
                if(results.length === 0){
                    pool.query(
                        'insert into orders (user_email, product_name, product_price, product_quantity, product_image) values (?, ?, ?, 1, ?)',
                        [req.body.user_email, req.body.name, req.body.price, req.body.image],
                        (error, results)=>{
                            if(error){
                                res.status(500).send({message: error.message})
                            }else{
                                res.status(201).json(results)
                            }
                        }
                    )
                }else{
                    pool.query(
                        'update orders set product_quantity = product_quantity + 1 where product_name = ? and user_email = ?',
                        [req.body.name, req.body.user_email],
                        (error, result)=>{
                            if(error){
                                res.status(500).send({message: error.message})
                            }else{
                                res.status(200).json(result)
                            }
                        }
                    )
                }
            }
        })
    }catch(error){
        console.log(error)
    }
})


app.get('/getOrders', (req, res)=>{

    pool.query(
        'select * from orders where user_email = ?', 
        [req.query.user_email],
        (error, results)=>{
            if(error){
                res.status(500).send({message: error.message})
            }
            else{
                res.status(200).json(results)
            }
        }
    )
})


app.delete('/deleteOrders', (req, res)=>{
    try{
        pool.query(
            'delete from orders where product_name = ? and user_email = ?',
            [req.query.name, req.query.user_email],
            (error, result)=>{
                if(error){
                    res.status(500).send({message: error.message})
                }else{
                    res.status(200).json(result)
                }
            }
        )
    }catch(error){
        console.log(error)
    }
})

app.put('/increaseQunatity', (req, res)=>{
    pool.query(
        'update orders set product_quantity = product_quantity + 1 where product_name = ? and user_email = ?',
        [req.body.name, req.body.user_email],
        (error, result)=>{
            if(error){
                res.status(500).send({message: error.message})
            }else{
                res.status(200).json(result)
            }
        }
    )
})

app.put('/decreaseOrderQunatity', (req, res)=>{
    pool.query(
        'update orders set product_quantity = product_quantity - 1 where product_name = ? and user_email = ?',
        [req.body.name, req.body.user_email],
        (error, result)=>{
            if(error){
                res.status(500).send({message: error.message})
            }else{
                res.status(200).json(result)
            }
        }
    )
})

app.get('/localLogin' , (req, res) =>{
    try{
        pool.query('select * from users where user_email = ?', [req.query.email], (error, results) =>{
            if(results.length === 0){
                res.status(200).send({email: false})
            }else{
                try{
                    // pool.query('select * from users where user_email = ? and user_password = ?', [req.query.email, req.query.password], (error, results) =>{
                    const match = bcrypt.compareSync(req.query.password, results[0].user_password)
                        if(!match){
                            res.status(200).send({email: true, password: false})
                        }if(match){
                            try{
                                pool.query('update users set last_login = current_timestamp where user_email = ?', [req.query.email])
                                res.status(200).send({email: true, password: true, user: results[0]})
                            }catch(error){
                                res.status(500).send({message: error.message})
                            }
                        }
                    // })
                }catch(error){
                    res.status(500).send({message: error.message})
                }
            }
        })
    }catch(error){
        res.status(500).send({message: error.message})
    }
})

app.post('/localSignUp', (req, res) =>{
    try{
        const hash = bcrypt.hashSync(req.body.password, 12)
        pool.query('select * from users where user_email = ?', [req.body.email], (error, results) =>{
            if(results.length === 0){
                try{
                    pool.query('insert into users (user_name, user_email, user_password, first_login, last_login) values (?, ?, ?, current_timestamp, current_timestamp)', [req.body.fullName, req.body.email, hash], (error, results) =>{
                        if(error){
                            res.status(500).send({message: error.message})
                        }else{
                            res.status(200).send({success: true})
                        }
                    })

                }catch(error){
                    res.status(500).send({message: error.message})
                }
            }else{
                if(results[0].user_password !== 'none'){
                    res.status(200).send({success: false})
                }if(results[0].user_password === 'none'){
                    try{
                        pool.query('update users set user_password = ? where user_email = ?', [hash, req.body.email], (error, results) =>{
                            if(error){
                                res.status(500).send({message: error.message})
                            }else{
                                res.status(200).send({success: true})
                            }
                        })
                    }catch(error){
                        res.status(500).send({message: error.message})
                    }
                }
            }
        })
    }catch(error){
        res.status(500).send({message: error.message})
    }
})

const PORT = process.env.PORT

app.listen(3000, ()=>{
    console.log(`Server is running on PORT 3000`)
})
