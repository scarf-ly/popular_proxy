const newrelic = require("newrelic");
//Modules
//Server - Express
const express = require('express');
//Proxy - http
const httpProxy = require('http-proxy');
//Filepath -- Path
const path = require('path');
const app = express();
const port = 3100;
//instantiate Proxy
const apiProxy = httpProxy.createProxyServer();

//ROUTES
//Static
// app.use('/:id', express.static(path.join(__dirname))); 
//Popular Dishes
app.get("/test", (req, res) => {
  console.log("TEST");
});
app.all("/popular/:n", function(req, res) {
  //API callback
  const popular = `http://localhost:3002`;
  apiProxy.web(req, res, {target: popular});
});
app.listen(port, () => console.log(`listening on port ${port}`));

// const gallery = 'http://ec2-52-53-207-161.us-west-1.compute.amazonaws.com:3000';
// const reservation = 'http://ec2-18-217-9-12.us-east-2.compute.amazonaws.com:3001';
// const header = 'http://ec2-18-223-24-238.us-east-2.compute.amazonaws.com:3003';

// app.all("/header/:id", function(req, res) {
//   console.log('redirecting to header');
//   apiProxy.web(req, res, {target: header});
// });

// app.all("/reservation/:id", function(req, res) {
//     console.log('redirecting to reservation');
//     apiProxy.web(req, res, {target: reservation});
// });
// app.all("/gallery/:id", function(req, res) {
//     console.log('redirecting to gallery');
//     apiProxy.web(req, res, {target: gallery});
// });

