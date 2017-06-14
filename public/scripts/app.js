/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}
$(document).ready(function(){
  function createTweetElement(newTweetData){

    var tweetContent = newTweetData.content.text;
    var tweetHandle = newTweetData.user.handle;
    var tweetUsername = newTweetData.user.name;
    var tweetAvatar = newTweetData.user.avatars.regular;
    var tweetCreatedAt = newTweetData.created_at;
  return `
    <article class="single-tweet">

      <header class="tweets-header">

        <span class="userAt">${tweetHandle}</span>
        <img ${tweetAvatar} class="myimg"><h1 class="nameField">${tweetUsername}</h1>
      </header>

      <div class="tweet-content">
       <p>${tweetContent}</p>
      </div>

      <footer class="tweetFooter">
        <span class="timeSent">${tweetCreatedAt}<span class="icons">⚑ ⇆ ❤</span></span>
      </footer>
    </article>`;


}
var $tweet = createTweetElement(tweetData);
console.log($tweet); // to see what it looks like
$('.allTweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
// Test / driver code (temporary)



