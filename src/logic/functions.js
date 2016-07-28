function action(start, pause, pause2, pause3) {
  // if there's an animation to start
  if (start !== false) {
    start.style.webkitAnimationPlayState = "running";
    start.style.MozAnimationPlayState = "running";
  }
  // if there's no animation to start then pause all of them
  else {
    pause3.style.webkitAnimationPlayState = "paused";
    pause3.style.MozAnimationPlayState = "paused";
  }
  // always pause 1 and 2
  pause.style.webkitAnimationPlayState = "paused";
  pause.style.MozAnimationPlayState = "paused";
  pause2.style.webkitAnimationPlayState = "paused";
  pause2.style.MozAnimationPlayState = "paused";
}

function animatePhones(index) {
  // grab the animations
  phone = document.getElementById('phone-buzz');
  phone2 = document.getElementById('phone-scroll');
  phone3 = document.getElementById('mobile-scroll');
  // if we're on 2nd section
  if (index == 1) {
    // and on small screen with vibration api accessible
    if((Modernizr.vibrate)&&(window.width < 500)) {
      // start vibration api
      window.navigator.vibrate([200, 100, 200]);
      // pause all animations
      action(false, phone, phone2, phone3);
    }
    // and on large screen
    else {
      // start first animation, pause others
      action(phone, phone2, phone3, false);
    }
  // if we're on 3rd section
  } else if (index == 2) {
    // and on large screen
    if(window.width > 500) {
      // start second animation, pause others
      action(phone2, phone, phone3, false);
    }
    // and on small screen
    else {
      // start third animation, pause others
      action(phone3, phone, phone2, false);
    }
  }
  // otherwise, pause everything
  else {
    action(false, phone, phone2, phone3);
  }
}

function animateCensor() {
  // TODO: do the following every few seconds while in view
  rand = randomIntFromInterval(-1,arr.length-1);
  el = arr[rand];
  $(el).toggleClass("censor");
}

function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
