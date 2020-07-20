var SocketServer = require('ws').Server;
var wss = new SocketServer({ port:process.env.PORT||8001 });
wss.on('connection', function connection(ws) {
    var data = {"command" : "NEWUSER","data" : { "mood" : "tired", "apartment" : "0","username" : "tester","seat_id" : "7","room_id" : "14","gender" : "male", "face" : "", "hair" : "http://xxx.dk/framework/gfxs/avatars/male/hair/d0fc74a351b05cae75258e93422c040e.png", "shoes" : "http://xxx.dk/framework/gfxs/avatars/male/shoes/00708715be7e7c007fca457eb5573637.png", "clothes" : "http://xxx.dk/framework/gfxs/avatars/male/shirts/9401f96ed9d6ad43c5d5ad7352e50de2.png"}};
    ws.send(data);
    ws.on('message', function (message) {
        console.log("Received: " + message);
        ws.send("From Server: " + message);
    });
    ws.on('close', function () {
        console.log("Client Lost!");
    });
    console.log("Client Connected!");
});
