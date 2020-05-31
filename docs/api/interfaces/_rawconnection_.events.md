[@igloo15/mqtt-browser-lib](../README.md) › [Globals](../globals.md) › ["rawconnection"](../modules/_rawconnection_.md) › [Events](_rawconnection_.events.md)

# Interface: Events

Available Events on RawConnection

## Hierarchy

* **Events**

## Index

### Properties

* [onConnected](_rawconnection_.events.md#onconnected)
* [onDisconnected](_rawconnection_.events.md#ondisconnected)
* [onError](_rawconnection_.events.md#onerror)
* [onLogMessage](_rawconnection_.events.md#onlogmessage)
* [onMessage](_rawconnection_.events.md#onmessage)

## Properties

###  onConnected

• **onConnected**: *function*

*Defined in [rawconnection.ts:15](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L15)*

Get Connection message

#### Type declaration:

▸ (`packet`: IConnectPacket): *void*

**Parameters:**

Name | Type |
------ | ------ |
`packet` | IConnectPacket |

___

###  onDisconnected

• **onDisconnected**: *function*

*Defined in [rawconnection.ts:19](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L19)*

Get Disconnected message

#### Type declaration:

▸ (`data`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

___

###  onError

• **onError**: *function*

*Defined in [rawconnection.ts:27](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L27)*

Get Error message

#### Type declaration:

▸ (`msg`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | Error |

___

###  onLogMessage

• **onLogMessage**: *function*

*Defined in [rawconnection.ts:31](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L31)*

Get Log Message

#### Type declaration:

▸ (`msg`: object): *void*

**Parameters:**

▪ **msg**: *object*

Name | Type |
------ | ------ |
`message` | string |
`status` | string |

___

###  onMessage

• **onMessage**: *function*

*Defined in [rawconnection.ts:23](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/rawconnection.ts#L23)*

Get a MqttMessage

#### Type declaration:

▸ (`message`: [MqttMessage](../classes/_mqttmessage_.mqttmessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [MqttMessage](../classes/_mqttmessage_.mqttmessage.md) |
