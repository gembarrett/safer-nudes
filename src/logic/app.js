// initialise fullPageJS
$(document).ready(function() {
    $('#wrapper').fullpage({
      onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);
        //after leaving section 2
        if((index == 1 && direction =='down') || (index == 3 && direction == 'up')){
          // check if vibrate and on small screen size
          if((Modernizr.vibrate)&&(window.width < 500)) {
            console.log('yay');
            window.navigator.vibrate([200, 100, 200]);
          } else {
            console.log('boo');
          }
        }
      }
    });
});