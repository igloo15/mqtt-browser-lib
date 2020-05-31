# MQTT Browser Library

## Install

`npm i @igloo15/mqtt-browser-lib`

## Usage

```typescript
const conn = new RawConnection('mqtt.igloo15', 4503, 'testApp', { protocolVersion: 5, properties: { userProperties: { time: 30 }}});
    conn.events.on('onConnected', (pak: IConnectPacket) => { 
        console.log('connected');
    });
    const result = await conn.connectAsync();
    if (result) {
        //conn.subscribe('$SYS/#');
        conn.subscribe('test');
        conn.events.on('onMessage', (msg: MqttMessage) => {
            console.log(msg.topic);
            if (msg.userProperties) {
                console.log(msg.userProperties);
            }
        });
        
        conn.publish('test', 'whatever', { properties: { userProperties: { time: 424525245 }}});
    }
```