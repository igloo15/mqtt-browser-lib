/**
 * A Mqtt message 
 */
export class MqttMessage {
    /**
     * The topic this message arrived on
     */
    topic: string;

    /**
     * The data/payload of the mqtt message
     */
    data: string | Buffer;

    /**
     * Construct a Mqtt Message with topic and data
     * 
     * @param topic The topic of the MqttMessage
     * @param data The data of the MqttMessage
     */
    constructor(topic: string, data: string | Buffer) {
        this.topic = topic;
        this.data = data;
    }

    /**
     * Parses the data to as Json to a object of type `T`
     */
    public getJsonObject<T>(): T {
        if (this.data instanceof Buffer) {
            return JSON.parse(this.data.toString('utf-8')) as T;
        } else {
            return JSON.parse(this.data) as T;
        }
    }
}