// Node Dependencies
var axios = require('axios');





// NY Times API Request Function
var searchArticle = function(topic, beginYear, endYear){
  console.log("inside search");
  const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

  const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${topic}${beginYear && endYear ? `&begin_date=${beginYear}0101&end_date=${endYear}0101` : ""}`;
  console.log(queryURL);
  return axios.get(queryURL);
}

// Gets all saved articles
var getArticles = function() {
  return axios.get("/api/articles/");
}
// Deletes the article with the given id
var deleteArticle =  function(id) {
  return axios.delete("/api/articles/" + id);
}
// Saves a article to the database
var saveArticle = function(articleData) {
  return axios.post("/api/articles", articleData);
}




// Export all helper functions
module.exports = {
  searchArticle,
  getArticles,
  deleteArticle,
  saveArticle
}
