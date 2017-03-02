const Article    = require('../../models/Article'),
      Note       = require('../../models/Note'),
      controller = require('../../controllers/scraper');

module.exports = (app) => {

	app.get('/api/articles', (req, res) => {
		controller.scrape()
			.then(data => res.send(data));
	});
};