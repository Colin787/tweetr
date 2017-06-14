/*$(document).ready(function() {
  $(".single-tweet").hover(function() {
    $(".tweet-content").after($("<div class=icons><span class=flag>⚑</span> <span class=retweet>⇆</span> <span class=heart>❤</span></div>"));
  }, function() {
    $(this).find("div:last").remove();
  });
});*/
/*$(document).ready(function() {
  function createFAIcon(faID) {
    var faElement = $('<i>');
    faElement.addClass('fa ' + faID);
    faElement.attr('aria-hidden', 'true');
    return faElement;
  }
  $(".single-tweet").hover(function() {
      var iconContainer = $('<div>');
      iconContainer.addClass('icons');
      var flagIcon = createFAIcon('fa-flag');
      var retweetIcon = createFAIcon('fa-retweet');
      var heartIcon = createFAIcon('fa-heart');
      iconContainer.append(flagIcon).append(retweetIcon).append(heartIcon);
      $('.tweet-content').append(iconContainer);
    }, function() {
      $(this).find('.tweet-content').find("div:last").remove();
    });
});*/