import { IClientSubscribeOptions, QoS, IClientPublishOptions } from "mqtt";

export interface IPublishOptions extends IClientPublishOptions {
    qos?: QoS;
    retain?: boolean;
    dup?: boolean;
    properties?: {
        payloadFormatIndicator?: boolean,
        messageExpiryInterval?: number,
        topicAlias?: number,
        responseTopic?: string,
        correlationData?: Buffer,
        userProperties?: Object,
        subscriptionIdentifier?: number,
        contentType?: string
    },
    cbStorePut?: () => void
}

export interface ISubscribeOptions extends IClientSubscribeOptions {
    qos: QoS;
    nl?: boolean;
    rap?: boolean;
    rh?: number;
    properties?: {
        subscriptionIdentifier?: number,
        userProperties?: object
    }
}