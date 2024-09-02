import express  from 'express';
import {consumeMessage} from './kafka/messageQueue.js'
import {sendMessageQueue} from './kafka/producer.js';
const app = express();
app.use(express.json())
app.post("/addUser",(req,res)=>{
    sendMessageQueue(req.body)
    res.json("user added")
})
app.listen(5001,(req,res)=>{
    console.log("server started 5001")
    //console.log(Process)
    consumeMessage()
})