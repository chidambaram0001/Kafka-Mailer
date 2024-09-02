import {Kafka} from 'kafkajs'

export const kafkaBroker = 'localhost:9092'
export const kafkaTopic = 'my-topic';
export const kafkaMailerTopic = 'mailerTopic';

export const kafkaClient = new Kafka({
    brokers:[kafkaBroker]
})