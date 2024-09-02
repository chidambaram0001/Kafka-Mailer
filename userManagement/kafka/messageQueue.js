import { kafkaClient, kafkaTopic } from "./config.js";

export const consumeMessage = async()=>{
    const consumer = kafkaClient.consumer({
        groupId: "my-topicGroup"
    })
    await consumer.connect();
    await consumer.subscribe({topic: kafkaTopic,fromBeginning: false});
    await consumer.run({
        autoCommit: false,
        eachMessage: async({topic,partition, message})=>{
            try{
                console.log("*********************")
                console.log(JSON.parse(message.value.toString()))
                console.log("*********************")
                console.log(message)
            }catch{

            } finally{
                const offset = +message.offset + 1;
                // Committing the message offset to Kafka
                await consumer.commitOffsets([{topic: kafkaTopic, partition, offset: offset.toString()}]);
            }
           
        }
    })

}