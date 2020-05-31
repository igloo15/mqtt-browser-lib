[@igloo15/mqtt-browser-lib](../README.md) › [Globals](../globals.md) › ["mqttmessage"](../modules/_mqttmessage_.md) › [MqttMessage](_mqttmessage_.mqttmessage.md)

# Class: MqttMessage

A Mqtt message

## Hierarchy

* **MqttMessage**

## Index

### Constructors

* [constructor](_mqttmessage_.mqttmessage.md#constructor)

### Properties

* [data](_mqttmessage_.mqttmessage.md#data)
* [topic](_mqttmessage_.mqttmessage.md#topic)
* [userProperties](_mqttmessage_.mqttmessage.md#userproperties)

### Methods

* [getJsonObject](_mqttmessage_.mqttmessage.md#getjsonobject)

## Constructors

###  constructor

\+ **new MqttMessage**(`topic`: string, `data`: string | Buffer, `properties?`: Object): *[MqttMessage](_mqttmessage_.mqttmessage.md)*

*Defined in [mqttmessage.ts:15](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/mqttmessage.ts#L15)*

Construct a Mqtt Message with topic and data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`topic` | string | The topic of the MqttMessage |
`data` | string &#124; Buffer | The data of the MqttMessage  |
`properties?` | Object | - |

**Returns:** *[MqttMessage](_mqttmessage_.mqttmessage.md)*

## Properties

###  data

• **data**: *string | Buffer*

*Defined in [mqttmessage.ts:13](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/mqttmessage.ts#L13)*

The data/payload of the mqtt message

___

###  topic

• **topic**: *string*

*Defined in [mqttmessage.ts:8](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/mqttmessage.ts#L8)*

The topic this message arrived on

___

###  userProperties

• **userProperties**: *Object | undefined*

*Defined in [mqttmessage.ts:15](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/mqttmessage.ts#L15)*

## Methods

###  getJsonObject

▸ **getJsonObject**<**T**>(): *T*

*Defined in [mqttmessage.ts:32](https://github.com/igloo15/mqtt-browser-lib/blob/2100e8c/src/mqttmessage.ts#L32)*

Parses the data to as Json to a object of type `T`

**Type parameters:**

▪ **T**

**Returns:** *T*
