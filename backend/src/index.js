const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:4200']
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});
io.on('connection', (socket) => {
  
    let token = socket.handshake.auth.token;
    console.log(token)
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    
    socket.on('my message', (msg) => {
      console.log('message: ' + msg);
    });
  });


http.listen(3000, () => {
  console.log('listening on *:3000');
});