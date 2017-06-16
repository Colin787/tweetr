/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){

  $(".new-tweet").hide();//hides form off start
  $(".nav-button").on('click', function(){
    $(".new-tweet").slideToggle();
    $(".textboxArea").focus();
  });//close for nav button onclick

  function escape(str) {

    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }//escape func close

  function createTweetElement(data){
    var tweetContent = escape(data.content.text);
    var tweetHandle = escape(data.user.handle);
    var tweetUsername = escape(data.user.name);
    var tweetAvatar = data.user.avatars.regular;
    var tweetCreatedAt = moment(data.created_at).fromNow();;
    return `
      <article class="single-tweet">
        <header class="tweets-header">
          <span class="userAt">${tweetHandle}</span>
          <img src="${tweetAvatar}" class="myimg"><h1 class="nameField">${tweetUsername}</h1>
        </header>
        <div class="tweet-content">
         <p>${tweetContent}</p>
        </div>
        <footer class="tweetFooter">
          <span class="timeSent">${tweetCreatedAt}<span class="icons">⚑ ⇆ ❤</span></span>
        </footer>
      </article>`;
  }//close for createTweetElement func

  function renderTweets(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('.allTweets').empty();
    for(var i = 0; i < tweets.length; i++) {
      var $tweet = createTweetElement(tweets[i]);
      $('.allTweets').prepend($tweet);
    }
  }//close for renderTweets func

  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets/',
    }).done(renderTweets)
  }//close for loadTweets func

  loadTweets();


  $(".tweet-form").on("submit", function(event) {
    event.preventDefault();
    if($(".textboxArea").val().length > 140) {
      alert("TOO LONG!!");
    } else if ($(".textboxArea").val() === "") {
      alert("EMPTY!!");
    } else {
      $.ajax({
        method: 'POST',
        url: '/tweets/',
        data: $(this).serialize()
      }).done(function() {
        loadTweets();
        $(".textboxArea").val("");
        $(".counter").text(140);
      });//close for .done func
    }//close for else
  });//close for .tweet-form on submit
});//close for doc.ready



