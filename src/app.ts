import express, { Express } from "express";
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

export const app: Express = express()
app.use(express.json())
app.use(cors())

const httpServer: http.Server = http.createServer(app)

const io = new Server(httpServer)

app.listen(3333, () => console.log('Server running on port 3333'))