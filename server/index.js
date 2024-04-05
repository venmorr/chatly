import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()

const io = new Server(httpServer, {
  cors:{
    origin: process.env.NODE_ENV === 'production' ? false : ['http://localhost:5500', 'http://127.0.0.1:5500']
  }
}) 

io.on('connection', socket => {
  console.log(`user ${socket.id} connected`)
  socket.on('message', message => {
    console.log('message: ', message)
    // emit message

  })
})

httpServer.listen(3000, () => console.log('Listening on port 3000'))