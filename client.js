const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.1.73',
    port: 50541
  });
  conn.on('data', (data) => {
    console.log(data);
  })
  conn.on("connect", () => {
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
console.log("Connecting ...");
connect();

module.exports = {
  connect 
}





// const net = require("net");
// const { IP, PORT } = require("./constants");
// let connection;
// // establishes a connection with the game server

//   conn.on('data', (data) => {
//     console.log(data);
//   })
//   conn.on("connect", () => {
//     conn.write("Name: KEH");
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;;

// module.exports = connect

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