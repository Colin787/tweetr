$(document).ready(function() {
 $('textarea').on('keyup', function() {
   let $counter = $('.new-tweet .counter');
   let $character = $(this).val().length;
   if ($character < 140) {
      $counter.removeClass('over').text(`Characters remaining ${140 - $character}`);
    }
   if ($character > 140) {
      $counter.addClass('over').text(`TOO MANY CHARACTERS ${140 - $character}`);
      $counter.css('color', 'red');

    } else {
      $counter.css('color', 'black');
    }
  });
});