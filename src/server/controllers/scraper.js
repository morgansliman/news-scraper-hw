const request  = require('request-promise-native'),
      cheerio  = require('cheerio'),
      mongoose = require('mongoose'),
      Article  = require('../models/Article'),
      Note     = require('../models/Note'),
      Page     = require('../models/Page');

const DEFAULT_URL = "https://thebests.kotaku.com/";

function scrape(query) {

	// First, we grab the body of the html with request
	// Then, we load that into cheerio and save it to $ for a shorthand selector
	return request({
		uri:       DEFAULT_URL + query,
		transform: body => cheerio.load(body)
	})
		.then(function ($) {

			let allResults = [];

			$("article").each(function (i, element) {
				//  Filter out sponsored articles
				if (!$(this).children('div.secondary-byline').children().length) {
					// Save an empty result object
					let result = {};

					// Add the text, href, summary, and dataId of every link,
					// and save them as properties of the result object
					result.articleId = parseInt($(this).data('id'));
					result.title = $(this).find('h1.entry-title a').html();
					result.link = $(this).find('h1.entry-title a').attr('href');
					result.summary = $(this).find('div.entry-summary p').html();
					console.log(result);

					allResults.push(result);
				}
			});

			return Article.insertMany(allResults);
		})
		.catch(err => console.log(err));
}

module.exports.scrape = scrape;