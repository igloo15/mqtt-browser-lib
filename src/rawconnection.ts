import { MqttClient, connect, IClientOptions, PacketCallback, CloseCallback, 
    IConnectPacket, Packet, IDisconnectPacket, ClientSubscribeCallback } from 'mqtt';
import { EventEmitter } from 'events';
import StrictEventEmitter from 'strict-event-emitter-types';
import { MqttMessage } from './mqttmessage';
import { ISubscribeOptions, IPublishOptions } from './types';

/**
 * Available Events on RawConnection
 */
interface Events {
    /**
     * Get Connection message
     */
    onConnected: (packet: IConnectPacket) => void
    /**
     * Get Disconnected message
     */
    onDisconnected: (data: any) => void;
    /**
     * Get a MqttMessage
     */
    onMessage: (message: MqttMessage) => void;
    /**
     * Get Error message
     */
    onError: (msg: Error) => void;
    /**
     * Get Log Message
     */
    onLogMessage: (msg: {status: string, message: string}) => void;
}

/**
 * RawConnection for MqttBroker
 */
export class RawConnection {
    public host: string;
    public port: number;
    public appId: string;
    public opts: IClientOptions;
    public events: StrictEventEmitter<EventEmitter, Events> = new EventEmitter();
    private client: MqttClient | null = null;

    /**
     * Constructs a Raw Mqtt Connection
     * @param host The host of the mqtt broker
     * @param port The port of the mqtt broker
     * @param appId The appId for the client connecting
     * @param opts The options for the connection
     * @param logger A logger for getting log messages
     */
    constructor(host: string,
                port: number,
                appId: string,
                opts?: IClientOptions,
                logger?: (msg: {status: string, message: string}) => void) {
        if (!opts) {
            this.opts = {
                clientId: appId,
                resubscribe: true,
                connectTimeout: 30 * 1000
            };
        } else {
            this.opts = opts;
            this.opts.clientId = appId;
        }
        if(logger) {
            this.events.on('onLogMessage', logger);
        }
        
        this.host = host;
        this.port = port;
        this.appId = appId;
    }

    /**
     * Connect Asyncly
     */
    public async connectAsync() {
        const promise = new Promise((resolve, reject) => {
            const connectionListener = () => {
                removeListeners();
                resolve(true);
            };
            const disconnectListener = () => {
                removeListeners();
                reject(false);
            };

            this.events.on('onConnected', connectionListener);
            this.events.on('onDisconnected', disconnectListener);

            const removeListeners = () => {
                this.events.removeListener('onConnected', connectionListener);
                this.events.removeListener('onDisconnected', disconnectListener);
            }
        });

        this.client = connect(`ws://${this.host}:${this.port}/mqtt`, this.opts);
        this.client.on('connect', (connack: IConnectPacket) => { 
            this.events.emit('onConnected', connack); 
        });
        this.client.on('close', () => { 
            this.events.emit('onDisconnected', {}); 
        });
        this.client.on('reconnect', () => { this.events.emit('onLogMessage', {status: 'warn', message: 'reconnecting'}); });
        this.client.on('message', this.onMessageRecieved);
        this.client.on('error', this.onErrorReceived);

        return promise;
    }

    /**
     * Connect to a mqtt broker
     */
    public connect() {
        this.connectAsync();
    }

    /**
     * Disconnect Asyncly
     * @param cb Optional callback for disconnecting
     */
    public async disconnectAsync(cb?: CloseCallback) {
        return new Promise((resolve, reject) => {
            this.client?.end(false, () => {
                if (cb) {
                    cb();
                }
                resolve();
            });
        });
    }

    /**
     * Disconnect from MQTT
     * @param cb Callback returned when successful
     */
    public disconnect(cb?: CloseCallback) {
        this.disconnectAsync(cb);
    }

    /**
     * Subscribe to a topic on mqtt
     * @param topic Topic to subscribe to
     * @param opts Options to subscribe with
     * @param callback The callback of subscription call
     */
    public subscribe(topic: string,
                     opts?: ISubscribeOptions,
                     callback?: ClientSubscribeCallback) {
        this.events.emit('onLogMessage', {status: 'info', message: `Subscribing to ${topic}`});
        if (opts) {
            this.client?.subscribe(topic, opts, callback);
        } else {
            this.client?.subscribe(topic, callback);
        }
    }

    /**
     * Unsubscribe to a topic
     * @param topic Topic to unsubscribe
     * @param callback A callback packet
     */
    public unsubscribe(topic: string, callback?: PacketCallback) {
        this.events.emit('onLogMessage', {status: 'info', message: `Unsubscribing to ${topic}`});
        this.client?.unsubscribe(topic, callback);
    }

    /**
     * Publish a message
     * @param topic The topic to publish on
     * @param message The message to publish
     * @param opts The options to publish
     * @param callback A callback to determine if publish is successful
     */
    public publish(
            topic: string,
            message: string | Buffer,
            opts?: IPublishOptions,
            callback?: PacketCallback) {
        this.events.emit('onLogMessage', {status: 'info', message: `Publishing to ${topic}`});
        this.client?.publish(topic, message, opts ? opts : {qos: 0}, callback);
    }

    /**
     * The status of the connection
     */
    public getStatus(): string {
        if (this.client?.connected) {
            return 'connected';
        } else if (this.client?.disconnected) {
            return 'disconnected';
        } else if (this.client?.disconnecting) {
            return 'disconnecting';
        } else if (this.client?.reconnecting) {
            return 'reconnecting';
        }
        return 'unknown';
    }

    private onMessageRecieved = (topic: string, payload: Buffer, packet: Packet) => {
        try {
            switch (packet.cmd) {
                case 'connect': 
                    this.events.emit('onConnected', packet as IConnectPacket); 
                    break;
                case 'publish':
                    this.events.emit(
                        'onMessage', 
                        new MqttMessage(packet.topic, packet.payload, packet.properties?.userProperties));
                    break;
                case 'disconnect': this.events.emit('onDisconnected', packet as IDisconnectPacket); break;
            }
        } catch (error) {
            this.onErrorReceived(error);
        }
    }

    private onErrorReceived = (error: Error) => {
        this.events.emit('onError', error);
    }

}