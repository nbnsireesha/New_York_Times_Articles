const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  topic: { type: String, required: true },
  url: {type:String, required: true}
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
