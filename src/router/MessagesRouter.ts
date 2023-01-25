import express, { Router } from 'express'

export const messagesRouter: Router = express.Router()

messagesRouter.get('/', () => console.log('teste'))

