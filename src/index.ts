import { app } from "./app"
import { messagesRouter } from "./router/MessagesRouter"

app.use('/messages', messagesRouter)

