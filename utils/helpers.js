const session = require('express-session');

function formatDate(date){
  return new Date(date).toLocaleDateString();
}

function shortenArticle(article){
  if(article.length > 400) return article.substring(0, 400).concat('...');
  else return article
}

function isCurrentUser(user, currentUser){
  // console.log("user",user);
  // console.log("currentUser", currentUser);
  return user == currentUser;
}

module.exports = {formatDate, shortenArticle, isCurrentUser};
