import { kafkaClient, kafkaTopic } from "../config/config.js"
import { sendMail } from "../mailer.js";
export const consumeMessage = async ()=>{
    const consumer = kafkaClient.consumer({
        groupId: "mailerGroup",
        retry:{
            maxRetryTime: 3000, 
            initialRetryTime: 1000, // defult300ms, 1st retry time 
            retry:5
        }
    });

    await consumer.connect();
    await consumer.subscribe({ topics: [kafkaTopic], fromBeginning: false }).then((data)=>{
        console.log("==============")
        console.log("connected to kafka")
        console.log("===================")
    });
    await consumer.run({
        autoCommit: false,
        eachMessage:async ({topic,partition, message})=>{
            try{
                console.log("*********************")
                console.log(JSON.parse(message.value.toString()))
                sendMail(JSON.parse(message.value.toString()))
              // console.log(message.value.toString())
                console.log("*********************")
                
            }catch{
                console.log("*********Got error************")
            } finally{
                const offset = +message.offset + 1;
                // Committing the message offset to Kafka
                await consumer.commitOffsets([{topic: kafkaTopic, partition, offset: offset.toString()}]);
            }
        }
    })
}