import { app, httpServer } from "./app"
import { messagesRouter } from "./router/MessagesRouter"

app.use('/messages', messagesRouter)

httpServer.listen(3333, () => console.log('Server running on port 3333'))