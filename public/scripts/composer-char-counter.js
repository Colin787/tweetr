$(document).ready(function() {
 $('textarea').on('keyup', function() {
   let $counter = $(this).siblings(".counter");
   let numCharacters = $(this).val().length;

   if (numCharacters > 140) {
     $counter.addClass('over').text(`TOO MANY CHARACTERS ${140 - numCharacters}`);
   } else {
     $counter.removeClass('over').text(`Characters remaining ${140 - numCharacters}`);
   }
  });
});