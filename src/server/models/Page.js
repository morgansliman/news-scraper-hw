// const mongoose      = require('mongoose'),
//       autoIncrement = require('mongoose-auto-increment');
//
// const Schema = mongoose.Schema;
//
// const PageSchema = new Schema(
// 	{
// 		next:   { type: String },
// 		data:   [{ type: Number, ref: 'Article' }]
// 	}
// );
//
// PageSchema.plugin(autoIncrement.plugin, {
// 	model: 'Page',
// 	startAt: 1
// });
// const Page = mongoose.model('Page', PageSchema);
//
// module.exports = Page;