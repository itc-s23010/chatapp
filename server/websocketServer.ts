// server/websocketServer.ts
import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', (ws) => {
    console.log('クライアント接続')

    ws.on('message', (msg) => {
        console.log('受信:', msg.toString())
        wss.clients.forEach((client) => {
            if (client.readyState === ws.OPEN) {
                client.send(msg.toString())
            }
        })
    })

    ws.on('close', () => {
        console.log('切断')
    })
})
