import express from 'express';
import {sendMail} from './mailer.js'
import { consumeMessage } from './messageQueue/messageq.js';
const app = express();

app.use(express.json());
app.post("/welcomeMail",(req,res,next)=>{
    sendMail(req.body, "welcomeMail")
    res.json("service started")
})
app.post("/orderMail",(req,res,next)=>{
    sendMail(req.body, "orderMail")
    res.json("service started")
})
app.post("/trackMail",(req,res,next)=>{
    sendMail(req.body, "trackMail")
    res.json("service started")
})

app.listen(6001,()=>{
    console.log("mailer Started");
    consumeMessage();
})