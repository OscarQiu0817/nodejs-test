const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

// 連接池，保存所有連接的 WebSocket
/** @type {Set<WebSocket>} */
const clients = new Set();

wss.on('connection', function connection(ws) {

  // 將新連接的 Ws 加入 連接池
  clients.add(ws);

  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);
    // Echo message back to client
    // ws.send(message);

    // for each and sent to all connect.
    clients.forEach( client => {
        if( client != ws && client.readyState === WebSocket.OPEN ){
            client.send( message );
        }
    } )

  });

  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});

server.listen(3000, function listening() {
  console.log('Server is running on http://localhost:3000');
});
