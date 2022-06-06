const session = require('express-session');

function formatDate(date){
  return new Date(date).toLocaleDateString();
}

function shortenArticle(article){
  return article.substring(0, 400).concat('...');
}

function isCurrentUser(user, currentUser){
  // console.log("user",user);
  // console.log("currentUser", currentUser);
  return user == currentUser;
}

module.exports = {formatDate, shortenArticle, isCurrentUser};
