const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send('ZeroGo is running!')
})
 
function keepAlive() {
  server.listen(80, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;
