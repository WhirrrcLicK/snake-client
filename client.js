// //client
// const net = require('net');
// // process.stdin ???
// const stdin = process.stdin;
// const name = 'Whirrr.CLicK';
// const client = net.createConnection({host: '135.23.132.20', port: 3001});

// client.setEncoding('utf8');
// // client.write(`${name}: Hello Wolrd!`);

// stdin.on('data', (data) => {
//   client.write(`${name}: ${data}`);
// })

// client.on('data', (data) => {
//   console.log(data);
// })



// //you are given a server
// //you are building the client

// //connect to the snake server
// //give the snake a name client.write('Name: NAME')
// //connect movement commands to a way to pass them to the server
// //     client.write('Move: Up')
// //     client.write('Move: Down')
// // use process.stdin figure out button