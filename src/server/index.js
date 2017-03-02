const express    = require('express'),
      bodyParser = require('body-parser'),
      path       = require('path'),
      logger     = require('morgan'),
      mongoose   = require('mongoose');

const PORT = 8000,
      app  = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static(path.join(__dirname + '/../client')));

mongoose.Promise = Promise;
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/news');


app.listen(PORT, () => {
	console.log('listening on port:', PORT);
});