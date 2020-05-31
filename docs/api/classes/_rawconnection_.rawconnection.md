[@igloo15/mqtt-browser-lib](../README.md) › [Globals](../globals.md) › ["rawconnection"](../modules/_rawconnection_.md) › [RawConnection](_rawconnection_.rawconnection.md)

# Class: RawConnection

RawConnection for MqttBroker

## Hierarchy

* **RawConnection**

## Index

### Constructors

* [constructor](_rawconnection_.rawconnection.md#constructor)

### Properties

* [appId](_rawconnection_.rawconnection.md#appid)
* [client](_rawconnection_.rawconnection.md#private-client)
* [events](_rawconnection_.rawconnection.md#events)
* [host](_rawconnection_.rawconnection.md#host)
* [opts](_rawconnection_.rawconnection.md#opts)
* [port](_rawconnection_.rawconnection.md#port)

### Methods

* [connect](_rawconnection_.rawconnection.md#connect)
* [connectAsync](_rawconnection_.rawconnection.md#connectasync)
* [disconnect](_rawconnection_.rawconnection.md#disconnect)
* [disconnectAsync](_rawconnection_.rawconnection.md#disconnectasync)
* [getStatus](_rawconnection_.rawconnection.md#getstatus)
* [onErrorReceived](_rawconnection_.rawconnection.md#private-onerrorreceived)
* [onMessageRecieved](_rawconnection_.rawconnection.md#private-onmessagerecieved)
* [publish](_rawconnection_.rawconnection.md#publish)
* [subscribe](_rawconnection_.rawconnection.md#subscribe)
* [unsubscribe](_rawconnection_.rawconnection.md#unsubscribe)

## Constructors

###  constructor

\+ **new RawConnection**(`host`: string, `port`: number, `appId`: string, `opts?`: IClientOptions, `logger?`: undefined | function): *[RawConnection](_rawconnection_.rawconnection.md)*

*Defined in [rawconnection.ts:43](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L43)*

Constructs a Raw Mqtt Connection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`host` | string | The host of the mqtt broker |
`port` | number | The port of the mqtt broker |
`appId` | string | The appId for the client connecting |
`opts?` | IClientOptions | The options for the connection |
`logger?` | undefined &#124; function | A logger for getting log messages  |

**Returns:** *[RawConnection](_rawconnection_.rawconnection.md)*

## Properties

###  appId

• **appId**: *string*

*Defined in [rawconnection.ts:40](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L40)*

___

### `Private` client

• **client**: *MqttClient | null* = null

*Defined in [rawconnection.ts:43](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L43)*

___

###  events

• **events**: *StrictEventEmitter‹EventEmitter, [Events](../interfaces/_rawconnection_.events.md)›* = new EventEmitter()

*Defined in [rawconnection.ts:42](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L42)*

___

###  host

• **host**: *string*

*Defined in [rawconnection.ts:38](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L38)*

___

###  opts

• **opts**: *IClientOptions*

*Defined in [rawconnection.ts:41](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L41)*

___

###  port

• **port**: *number*

*Defined in [rawconnection.ts:39](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L39)*

## Methods

###  connect

▸ **connect**(): *void*

*Defined in [rawconnection.ts:117](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L117)*

Connect to a mqtt broker

**Returns:** *void*

___

###  connectAsync

▸ **connectAsync**(): *Promise‹unknown›*

*Defined in [rawconnection.ts:80](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L80)*

Connect Asyncly

**Returns:** *Promise‹unknown›*

___

###  disconnect

▸ **disconnect**(`cb?`: CloseCallback): *void*

*Defined in [rawconnection.ts:140](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L140)*

Disconnect from MQTT

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb?` | CloseCallback | Callback returned when successful  |

**Returns:** *void*

___

###  disconnectAsync

▸ **disconnectAsync**(`cb?`: CloseCallback): *Promise‹unknown›*

*Defined in [rawconnection.ts:125](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L125)*

Disconnect Asyncly

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb?` | CloseCallback | Optional callback for disconnecting  |

**Returns:** *Promise‹unknown›*

___

###  getStatus

▸ **getStatus**(): *string*

*Defined in [rawconnection.ts:190](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L190)*

The status of the connection

**Returns:** *string*

___

### `Private` onErrorReceived

▸ **onErrorReceived**(`error`: Error): *void*

*Defined in [rawconnection.ts:221](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L221)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *void*

___

### `Private` onMessageRecieved

▸ **onMessageRecieved**(`topic`: string, `payload`: Buffer, `packet`: Packet): *void*

*Defined in [rawconnection.ts:203](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L203)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`payload` | Buffer |
`packet` | Packet |

**Returns:** *void*

___

###  publish

▸ **publish**(`topic`: string, `message`: string | Buffer, `opts?`: [IPublishOptions](../interfaces/_types_.ipublishoptions.md), `callback?`: PacketCallback): *void*

*Defined in [rawconnection.ts:178](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L178)*

Publish a message

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | The topic to publish on |
`message` | string &#124; Buffer | The message to publish |
`opts?` | [IPublishOptions](../interfaces/_types_.ipublishoptions.md) | The options to publish |
`callback?` | PacketCallback | A callback to determine if publish is successful  |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`topic`: string, `opts?`: [ISubscribeOptions](../interfaces/_types_.isubscribeoptions.md), `callback?`: ClientSubscribeCallback): *void*

*Defined in [rawconnection.ts:150](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L150)*

Subscribe to a topic on mqtt

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | Topic to subscribe to |
`opts?` | [ISubscribeOptions](../interfaces/_types_.isubscribeoptions.md) | Options to subscribe with |
`callback?` | ClientSubscribeCallback | The callback of subscription call  |

**Returns:** *void*

___

###  unsubscribe

▸ **unsubscribe**(`topic`: string, `callback?`: PacketCallback): *void*

*Defined in [rawconnection.ts:166](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L166)*

Unsubscribe to a topic

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | Topic to unsubscribe |
`callback?` | PacketCallback | A callback packet  |

**Returns:** *void*
