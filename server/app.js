// import cookieParser from 'cookie-parser';
// import express from 'express';
const express = require('express');
const cors=     require('cors');
const cookieParser=require('cookie-parser');


const app=express();

app.use(express.json());

app.use(cors({
    origin :[process.env.FRONTEND_URL],
    credentials:true
}));

app.use(cookieParser());

app.use('/ping',(req,res) =>{
    res.send('Pong');
});

app.all('*',(req,res) =>{
    res.status(404).send('OOPSS! 404 page not found');
})

module.exports = app;