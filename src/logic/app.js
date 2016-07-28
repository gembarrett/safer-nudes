var phone, phone2, phone3;

// initialise fullPageJS
$(document).ready(function() {
    $('#wrapper').fullpage({
      afterLoad: function(index) {
        animatePhones(this.index());
      }
    });
});