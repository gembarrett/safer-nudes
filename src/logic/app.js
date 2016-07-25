// initialise fullPageJS
$(document).ready(function() {
    $('#wrapper').fullpage({
      afterLoad: function(index) {
        var loadedSection = $(this);
        index = loadedSection.index();
        var phone = document.getElementById('phone-buzz');
        if (index == 1) {
          if((Modernizr.vibrate)&&(window.width < 500)) {
            window.navigator.vibrate([200, 100, 200]);
          } else {
            phone.style.webkitAnimationPlayState = "running";
            phone.style.MozAnimationPlayState = "running";
            console.log(phone.style.MozAnimationPlayState);
          }
        } else {
          phone.style.webkitAnimationPlayState = "paused";
          phone.style.MozAnimationPlayState = "paused";
          console.log(phone.style.MozAnimationPlayState);
        }
      }
    });
});