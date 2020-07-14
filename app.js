var SocketServer = require('ws').Server;
var wss = new SocketServer({ port:process.env.PORT||3001 });
wss.on('connection', function connection(ws) {
    setInterval(function () {
        ws.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper id mauris eget mollis. Sed quam ante, interdum non velit et, blandit blandit massa. Sed congue eget ipsum id suscipit. Aliquam erat volutpat. Nunc tempor est sed sagittis vestibulum. Nullam volutpat neque ac odio ornare porttitor. Vivamus egestas ut dolor nec placerat. Vestibulum ac lacus et erat interdum facilisis ut tincidunt mi. Curabitur sollicitudin enim sit amet ipsum cursus vehicula vitae nec arcu. Pellentesque elementum, est eget gravida vehicula, urna purus maximus enim, quis dignissim lorem quam vitae purus. Donec faucibus lacus porttitor feugiat pretium. Aliquam massa nisi, ultricies ac urna in, interdum imperdiet magna. Proin in mi a sapien maximus fringilla sit amet convallis tortor. Nullam volutpat cursus justo, at condimentum sapien aliquet ac.");
    }, 500);
    ws.on('message', function (message) {
        console.log("Received: " + message);
        ws.send("From Server: " + message);
    });
    ws.on('close', function () {
        console.log("Client Lost!");
    });
    console.log("Client Connected!");
});
