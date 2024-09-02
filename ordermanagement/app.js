import express  from 'express';
import { sendMessageQueue } from './kafka/producer.js';
const app = express();
app.use(express.json())
app.post("/postMsg",(req,res)=>{
    sendMessageQueue(req.body)
    res.json("posted")
})
app.listen(5000,(req,res)=>{
    console.log("server started 5000")
   // console.log(app)
})