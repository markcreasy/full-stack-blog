function formatDate(date){
  return new Date(date).toLocaleDateString();
}

function shortenArticle(article){
  return article.substring(0, 400).concat('...');
}

module.exports = {formatDate, shortenArticle};
