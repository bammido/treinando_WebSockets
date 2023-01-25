import express, { Express } from "express";
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

export const app: Express = express()
app.use(express.json())
app.use(cors())

export const httpServer: http.Server = http.createServer(app)

export const io = new Server(httpServer)
