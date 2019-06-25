var express = require('express');
var app = express();
var PORT = 8888;

// /api/MathPortal/triangle/3thAngle/1.0.0
// /api/v1/todos
app.post('/api/MathPortal/triangle/3thAngle/1.0.0', (req, res) => {
  res.status(200).send({
    delta: 'FAKE_MOCK_TO_CHECK_THE_NEWMAN_TEST'
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on port ${PORT}`);
});

module.exports = app;