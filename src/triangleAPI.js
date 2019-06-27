var express = require('express');
const { calculate3thAngle } = require('../src/triangleCalculator');
var bodyParser = require('body-parser');
const PORT = 8888;
const HOST = '0.0.0.0';

var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/api/MathPortal/triangle/3thAngle/1.0.0', (req, res) => { calculate3thAngleAPI(req,res); });
app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on http://${HOST}:${PORT}`);
});

var calculate3thAngleAPI = (req, res) => {
  let result = calculate3thAngle(req.body.alpha, req.body.beta);
  res.status(200).send({
    delta: result
  });
};

module.exports = app;