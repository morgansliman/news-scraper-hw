const express    = require('express'),
      bodyParser = require('body-parser'),
      path       = require('path');

const PORT = 8000,
      app  = express();

app.use(express.static(path.join(__dirname + '/../client')));

app.listen(PORT, () => {
	console.log('listening on port:', PORT);
});