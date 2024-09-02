// Using KafkaJs nodejs library
import { Kafka } from 'kafkajs';
// kafka broker running on localhost:9092 default port
export const kafkaBroker = 'localhost:9092';

// kafka topic used for queue messages
export const kafkaTopic = 'mailerTopic';

export const kafkaClient = new Kafka({
    brokers: [kafkaBroker]
})
