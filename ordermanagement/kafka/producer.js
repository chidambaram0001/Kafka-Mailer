import { Kafka } from 'kafkajs';

import { kafkaClient, kafkaTopic } from "./config.js";

export const sendMessageQueue = async (msg)=>{
    const producer = kafkaClient.producer();
    await producer.connect();
    console.log(await producer.send({
        topic: kafkaTopic,
        acks:1,
        messages:[{
            value: JSON.stringify(msg)
        }]
    }))

    await producer.disconnect();
}