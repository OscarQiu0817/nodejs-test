const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);
    // Echo message back to client
    ws.send(message);
  });

  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});

server.listen(3000, function listening() {
  console.log('Server is running on http://localhost:3000');
});
