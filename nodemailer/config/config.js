import {Kafka} from 'kafkajs'
export const SMTP_HOST='smtp.gmail.com';
export const SMTP_PORT=465;
export const SMTP_USER='';
export const SMTP_PASS='';


//kafka config

export const kafkaBroker = "localhost:9092";
export const kafkaTopic = "mailerTopic";
export const kafkaClient = new Kafka({
    brokers:[kafkaBroker]
})
