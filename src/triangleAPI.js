var express = require('express');
const { calculate3thAngle } = require('../src/triangleCalculator');
var bodyParser = require('body-parser');

var PORT = 8888;

var app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/MathPortal/triangle/3thAngle/1.0.0', (req, res) => {
  let result = calculate3thAngle(req.body.alpha, req.body.beta);
  res.status(200).send({
    delta: result
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on port ${PORT}`);
});

module.exports = app;