import { app, httpServer } from "./app"
import { messagesRouter } from "./router/MessagesRouter"

app.use('/messages', messagesRouter)

httpServer.listen(4444, () => console.log('Server running on port 4444'))