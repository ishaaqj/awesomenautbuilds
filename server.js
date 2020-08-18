var http = require('http');
var app = require ('./app');

// Just for fun cause i'll be using http traffic and using multiple ports with default 3000
const port = normalizePort(process.env.port || 3000);

app.set('port', port);
const server = http.createServer(app);

// For development
// server.listen(port, '127.0.0.1', 511, () => console.log(`listening on port ${port}`));


server.listen(port);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

  /**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    console.log('Listening on ' + bind);
  }
  