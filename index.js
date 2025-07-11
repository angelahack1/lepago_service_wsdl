const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const PORT_REST = 3000
const PORT_WSDL = 30000
const app = express();
app.use(bodyParser.raw({ type: () => true, limit: '5mb' }));

const wsdl = fs.readFileSync('./lepagoservice.wsdl', 'utf8');

app.get('/wsdl-rest', (req, res) => {
  res.type('application/xml');
  res.send(wsdl);
});

const server = http.createServer(app);

server.listen(PORT_REST, () => {
  console.log('WSDL Entry point v 0.27.0 (2025-06-29 at 18:13 hrs.) is accessible via REST at http://localhost:'+PORT_WSDL+'/wsdl-rest');
});
