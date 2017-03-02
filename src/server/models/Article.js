const mongoose      = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
	{
		articleId:  { type: Number, required: true, index: true, unique: true },
		title:      { type: String, required: true },
		link:       { type: String, required: true },
		summary:    { type: String, required: true },
		next:       { type: String, required: true },
		note:       [{ type: Schema.Types.ObjectId, ref: 'Note' }]
	}
);

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;