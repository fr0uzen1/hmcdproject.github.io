$(document).ready(function(){

    var body = $("body");
   
    body.fadeIn(600);
   
    $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])", function(e) {
   
     e.preventDefault();
   
     $("body").fadeOut(600);
   
     var self = this;
   
     setTimeout(function () {
   
      window.location.href = $(self).attr("href");
   
     }, 600);
   
    });
   
});
   