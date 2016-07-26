// initialise fullPageJS
$(document).ready(function() {
    $('#wrapper').fullpage({
      afterLoad: function(index) {
        var loadedSection = $(this);
        index = loadedSection.index();
        var phone = document.getElementById('phone-buzz');
        var phone2 = document.getElementById('phone-scroll');
        if (index == 1) {
          if((Modernizr.vibrate)&&(window.width < 500)) {
            window.navigator.vibrate([200, 100, 200]);
          } else {
            phone.style.webkitAnimationPlayState = "running";
            phone.style.MozAnimationPlayState = "running";
            phone2.style.webkitAnimationPlayState = "paused";
            phone2.style.MozAnimationPlayState = "paused";
          }
        } else if (index == 2) {
          phone2.style.webkitAnimationPlayState = "running";
          phone2.style.MozAnimationPlayState = "running";
          phone.style.webkitAnimationPlayState = "paused";
          phone.style.MozAnimationPlayState = "paused";
        } else {
          phone.style.webkitAnimationPlayState = "paused";
          phone.style.MozAnimationPlayState = "paused";
          phone2.style.webkitAnimationPlayState = "paused";
          phone2.style.MozAnimationPlayState = "paused";
        }
      }
    });
});