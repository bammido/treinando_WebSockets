import express, { Express } from "express";
import cors from 'cors'
import http from 'http'
import { Server, Socket } from 'socket.io'

export const app: Express = express()
app.use(express.json())
app.use(cors())

export const httpServer: http.Server = http.createServer(app)

export const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
})

io.on('connection', (socket: Socket) => {
    console.log(`[IO] A new connection has been ESTABLISHED! SOCKET: ${socket.id}`)


    socket.on('Chat.message', data => {
        console.log(`[SOCKET]  Chat.message`, data)

        io.emit('Chat.message', data)
    })

    socket.on('disconnect', () => {
        console.log(`[SOCKET]  SOCKET: ${socket.id} has been DISCONNECTED!`)
    })
})