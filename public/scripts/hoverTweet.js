$(document).ready(function() {
  $(".single-tweet").hover(function() {
    $(".tweet-content").after($("<div class=icons><span class=flag>⚑</span> <span class=retweet>⇆</span> <span class=heart>❤</span></div>"));
  }, function() {
    $(this).find("div:last").remove();
  });
});